import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Icon } from './Icon.jsx'
import { profile } from '../data/profile.js'

const links = [
  { to: '/', label: 'home' },
  { to: '/about', label: 'about' },
  { to: '/projects', label: 'projects' },
  { to: '/contact', label: 'contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="brand" aria-label={`${profile.name} home`}>
          <span className="brand__mark" aria-hidden="true">
            &gt;_
          </span>
          <span className="brand__text">
            {profile.handle}@portfolio
          </span>
        </Link>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>

        <nav
          id="primary-navigation"
          className={`nav ${open ? 'nav--open' : ''}`}
          aria-label="Primary"
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
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a className="button button--sm nav__cta" href={`mailto:${profile.email}`}>
            email
          </a>
        </nav>
      </div>
    </header>
  )
}
