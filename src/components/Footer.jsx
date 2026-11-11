import { Link } from 'react-router-dom'
import { Icon } from './Icon.jsx'
import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="brand">
            <span className="brand__mark" aria-hidden="true">
              &gt;_
            </span>
            <span className="brand__text">
              {profile.handle}@portfolio
            </span>
          </Link>
          <p className="footer__tagline">{profile.tagline}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <Link to="/about">./about</Link>
          <Link to="/projects">./projects</Link>
          <Link to="/contact">./contact</Link>
        </nav>

        <div className="footer__socials">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <Icon name={social.icon} />
            </a>
          ))}
        </div>
      </div>
      <div className="container footer__bottom">
        <p>
          © {new Date().getFullYear()} {profile.name} · built with React &amp; Node
        </p>
      </div>
    </footer>
  )
}
