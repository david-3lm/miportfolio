import { Link } from 'react-router-dom'
import { Icon } from './Icon.jsx'
import { useLanguage, useProfile } from '../i18n/index.jsx'

export default function Footer() {
  const { t } = useLanguage()
  const profile = useProfile()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="brand">
            <span className="brand__mark" aria-hidden="true">
              &gt;_
            </span>
            <span className="brand__text">{profile.handle}@portfolio</span>
          </Link>
          <p className="footer__tagline">{profile.tagline}</p>
        </div>

        <nav className="footer__nav" aria-label={t('common.footerNav')}>
          <Link to="/about">./{t('nav.about')}</Link>
          <Link to="/projects">./{t('nav.projects')}</Link>
          <Link to="/contact">./{t('nav.contact')}</Link>
        </nav>

        <div className="footer__socials">
          {profile.socials.map((social) => {
            const label = t(`socials.${social.labelKey}`)

            return (
              <a
                key={social.labelKey}
                href={social.href}
                aria-label={label}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <Icon name={social.icon} />
              </a>
            )
          })}
        </div>
      </div>
      <div className="container footer__bottom">
        <p>
          © {new Date().getFullYear()} {profile.name} · {t('common.builtWith')}
        </p>
      </div>
    </footer>
  )
}
