import { useState } from 'react'
import { Icon } from '../components/Icon.jsx'
import Prompt from '../components/Prompt.jsx'
import { useLanguage, useProfile } from '../i18n/index.jsx'

const initialForm = { name: '', email: '', message: '', company: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const { t } = useLanguage()
  const profile = useProfile()

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || t('contact.error'))
      }

      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setError(err.message)
    }
  }

  return (
    <section className="section">
      <div className="container">
        <header className="page-head">
          <Prompt command="cat ./contact.md" />
          <h1>{t('contact.title')}</h1>
          <p className="page-head__lead">{t('contact.lead')}</p>
        </header>

        <div className="contact-grid">
          <div className="contact-info">
            <a className="card contact-card" href={`mailto:${profile.email}`}>
              <Icon name="mail" />
              <div>
                <span>{t('contact.labels.email')}</span>
                <strong>{profile.email}</strong>
              </div>
            </a>
            <div className="card contact-card">
              <Icon name="map-pin" />
              <div>
                <span>{t('contact.labels.location')}</span>
                <strong>{profile.location}</strong>
              </div>
            </div>
            <div className="contact-socials">
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
                    <span>{label}</span>
                  </a>
                )
              })}
            </div>
          </div>

          <form className="card contact-form" onSubmit={handleSubmit} noValidate>
            <div className="honeypot" aria-hidden="true">
              <label htmlFor="company">{t('contact.labels.company')}</label>
              <input
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.company}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="name">{t('contact.labels.name')}</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email">{t('contact.labels.email')}</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="message">{t('contact.labels.message')}</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button className="button" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? t('contact.sending') : t('contact.send')}
              {status !== 'sending' && <Icon name="arrow-right" size={18} />}
            </button>

            <div aria-live="polite" className="form-status">
              {status === 'success' && (
                <p className="form-status__success">
                  <Icon name="check" size={16} /> {t('contact.success')}
                </p>
              )}
              {status === 'error' && <p className="form-status__error">{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
