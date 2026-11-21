import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const OFF_MS = 210
const ON_MS = 300

export default function PageTransition({ children }) {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [stage, setStage] = useState('idle')
  const [originY, setOriginY] = useState(null)

  useEffect(() => {
    const next = `${location.pathname}${location.search}`
    const current = `${displayLocation.pathname}${displayLocation.search}`
    if (next === current) return

    const reducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reducedMotion) {
      setDisplayLocation(location)
      setOriginY(null)
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }

    // The wrapper spans the whole document, so the viewport's centre has to be
    // expressed in document coordinates before it collapses.
    setOriginY(window.scrollY + window.innerHeight / 2)
    setStage('off')
    const timer = window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' })
      setOriginY(window.innerHeight / 2)
      setDisplayLocation(location)
      setStage('on')
    }, OFF_MS)

    return () => window.clearTimeout(timer)
  }, [location, displayLocation])

  useEffect(() => {
    if (stage !== 'on') return
    const timer = window.setTimeout(() => setStage('idle'), ON_MS)
    return () => window.clearTimeout(timer)
  }, [stage])

  return (
    <>
      <div
        className={`screen screen--${stage}`}
        style={originY === null ? undefined : { transformOrigin: `center ${originY}px` }}
        aria-busy={stage !== 'idle'}
      >
        {children(displayLocation)}
      </div>
      <div className={`screen-fx screen-fx--${stage}`} aria-hidden="true" />
    </>
  )
}
