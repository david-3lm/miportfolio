import { Icon } from './Icon.jsx'
import { useLanguage } from '../i18n/index.jsx'

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' }
]

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div
      className="lang-switch"
      role="group"
      aria-label={t('common.language')}
      title={t('common.switchTo')}
    >
      <Icon name="globe" size={15} className="lang-switch__icon" />
      {languages.map((item) => (
        <button
          key={item.code}
          type="button"
          className={`lang-switch__button${
            language === item.code ? ' lang-switch__button--active' : ''
          }`}
          aria-pressed={language === item.code}
          onClick={() => setLanguage(item.code)}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
