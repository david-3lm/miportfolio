import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { en } from './en.js'
import { es } from './es.js'
import { profileMeta } from '../data/profile.js'
import { projectMeta } from '../data/projects.js'

const dictionaries = { en, es }
const DEFAULT_LANGUAGE = 'en'
const STORAGE_KEY = 'portfolio-language'

const LanguageContext = createContext(null)

function getBrowserLanguages() {
  return window.navigator.languages?.length
    ? window.navigator.languages
    : [window.navigator.language]
}

function detectLanguage() {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved && dictionaries[saved]) return saved
  } catch {}

  const preferred = getBrowserLanguages()[0]?.toLowerCase()
  return preferred?.startsWith('es') ? 'es' : DEFAULT_LANGUAGE
}

function resolve(messages, key) {
  return key
    .split('.')
    .reduce((value, part) => (value == null ? value : value[part]), messages)
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(detectLanguage)

  useEffect(() => {
    const { meta } = dictionaries[language]

    document.documentElement.lang = language === 'es' ? 'es-ES' : 'en'
    document.title = meta.title

    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', meta.description)

    try {
      window.localStorage.setItem(STORAGE_KEY, language)
    } catch {}
  }, [language])

  const value = useMemo(() => {
    const messages = dictionaries[language]

    return {
      language,
      setLanguage,
      messages,
      t: (key) => resolve(messages, key)
    }
  }, [language])

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export function useProfile() {
  const { messages } = useLanguage()
  return useMemo(
    () => ({ ...profileMeta, ...messages.profile }),
    [messages]
  )
}

export function useProjects() {
  const { messages } = useLanguage()
  return useMemo(
    () =>
      projectMeta.map((project) => ({
        ...project,
        ...messages.projects.items[project.slug]
      })),
    [messages]
  )
}
