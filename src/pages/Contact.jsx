import { useState } from 'react'
import { Icon } from '../components/Icon.jsx'
import Prompt from '../components/Prompt.jsx'
import { profile } from '../data/profile.js'

const initialForm = { name: '', email: '', message: '', company: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

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
        throw new Error(data.error || 'Something went wrong.')
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
          <h1>Let&apos;s talk.</h1>
          <p className="page-head__lead">
            Have a project in mind or just want to say hi? Drop me a message and
            I&apos;ll get back to you within a day or two.
          </p>
        </header>

        <div className="contact-grid">
          <div className="contact-info">
            <a className="card contact-card" href={`mailto:${profile.email}`}>
              <Icon name="mail" />
              <div>
                <span>email</span>
                <strong>{profile.email}</strong>
              </div>
            </a>
            <div className="card contact-card">
              <Icon name="map-pin" />
              <div>
                <span>location</span>
                <strong>{profile.location}</strong>
              </div>
            </div>
            <div className="contact-socials">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <Icon name={social.icon} />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          <form className="card contact-form" onSubmit={handleSubmit} noValidate>
            <div className="honeypot" aria-hidden="true">
              <label htmlFor="company">Company</label>
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
              <label htmlFor="name">name</label>
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
              <label htmlFor="email">email</label>
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
              <label htmlFor="message">message</label>
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
              {status === 'sending' ? 'sending...' : 'send_message'}
              {status !== 'sending' && <Icon name="arrow-right" size={18} />}
            </button>

            <div aria-live="polite" className="form-status">
              {status === 'success' && (
                <p className="form-status__success">
                  <Icon name="check" size={16} /> message sent successfully
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
