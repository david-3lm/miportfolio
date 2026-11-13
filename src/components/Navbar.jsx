import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Icon } from './Icon.jsx'
import LanguageToggle from './LanguageToggle.jsx'
import { useLanguage, useProfile } from '../i18n/index.jsx'

const links = [
  { to: '/', key: 'nav.home' },
  { to: '/about', key: 'nav.about' },
  { to: '/projects', key: 'nav.projects' },
  { to: '/contact', key: 'nav.contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { t } = useLanguage()
  const profile = useProfile()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link
          to="/"
          className="brand"
          aria-label={`${profile.name} - ${t('nav.home')}`}
        >
          <span className="brand__mark" aria-hidden="true">
            &gt;_
          </span>
          <span className="brand__text">{profile.handle}@portfolio</span>
        </Link>

        <button
          className="nav-toggle"
          aria-label={open ? t('common.closeMenu') : t('common.openMenu')}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>

        <nav
          id="primary-navigation"
          className={`nav ${open ? 'nav--open' : ''}`}
          aria-label={t('common.primaryNav')}
        >
          <ul className="nav__list">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `nav__link${isActive ? ' nav__link--active' : ''}`
                  }
                >
                  {t(link.key)}
                </NavLink>
              </li>
            ))}
          </ul>
          <LanguageToggle />
          <a
            className="button button--sm nav__cta"
            href={`mailto:${profile.email}`}
          >
            {t('nav.email')}
          </a>
        </nav>
      </div>
    </header>
  )
}
