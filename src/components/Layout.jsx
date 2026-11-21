import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { useLanguage } from '../i18n/index.jsx'
import useLanguageRewrite from '../hooks/useLanguageRewrite.js'

export default function Layout() {
  const { t } = useLanguage()
  useLanguageRewrite()

  return (
    <>
      <a href="#main" className="skip-link">
        {t('common.skipToContent')}
      </a>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
