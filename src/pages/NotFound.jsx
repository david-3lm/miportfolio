import { Link } from 'react-router-dom'
import Prompt from '../components/Prompt.jsx'
import { useLanguage } from '../i18n/index.jsx'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <section className="section">
      <div className="container not-found">
        <Prompt command="cd ./404" />
        <h1>{t('notFound.title')}</h1>
        <p className="page-head__lead">{t('notFound.lead')}</p>
        <Link to="/" className="button">
          cd ~
        </Link>
      </div>
    </section>
  )
}
