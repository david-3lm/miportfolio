import { useEffect, useRef } from 'react'
import { useLanguage } from '../i18n/index.jsx'

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/\\|[]{}#$%&*+=-'
const DURATION = 340
const MAX_STAGGER = 90

function collectTextNodes(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT
      const parent = node.parentElement
      if (!parent || parent.closest('script, style, .lang-switch')) {
        return NodeFilter.FILTER_REJECT
      }
      return NodeFilter.FILTER_ACCEPT
    },
  })

  const nodes = []
  while (walker.nextNode()) nodes.push(walker.currentNode)
  return nodes
}

export default function useLanguageRewrite() {
  const { language } = useLanguage()
  const latestLanguage = useRef(language)
  const previousLanguage = useRef(language)
  const frame = useRef(null)

  latestLanguage.current = language

  useEffect(() => {
    if (previousLanguage.current === language) return
    previousLanguage.current = language

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

    const nodes = collectTextNodes(document.body)
    if (!nodes.length) return

    const originals = nodes.map((node) => node.nodeValue)
    const start = performance.now()
    document.body.classList.add('is-rewriting')
    document.body.setAttribute('aria-busy', 'true')

    const tick = (now) => {
      const elapsed = now - start

      nodes.forEach((node, index) => {
        const text = originals[index]
        const delay = Math.min(index * 2, MAX_STAGGER)
        const progress = Math.min(
          Math.max((elapsed - delay) / (DURATION - delay), 0),
          1
        )

        if (progress >= 1) {
          node.nodeValue = text
          return
        }

        const revealed = Math.floor(progress * text.length)
        let output = ''
        for (let i = 0; i < text.length; i += 1) {
          const char = text[i]
          output +=
            i < revealed || /\s/.test(char)
              ? char
              : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        }
        node.nodeValue = output
      })

      if (elapsed < DURATION) {
        frame.current = requestAnimationFrame(tick)
      } else {
        nodes.forEach((node, index) => {
          node.nodeValue = originals[index]
        })
        document.body.classList.remove('is-rewriting')
        document.body.removeAttribute('aria-busy')
      }
    }

    frame.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame.current)
      // Only restore if this effect is being torn down by unmount; on a new
      // language change React has already written the next translation in.
      if (latestLanguage.current === language) {
        nodes.forEach((node, index) => {
          node.nodeValue = originals[index]
        })
        document.body.classList.remove('is-rewriting')
        document.body.removeAttribute('aria-busy')
      }
    }
  }, [language])
}
