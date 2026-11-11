const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContact(body) {
  const name = typeof body?.name === 'string' ? body.name.trim() : ''
  const email = typeof body?.email === 'string' ? body.email.trim() : ''
  const message = typeof body?.message === 'string' ? body.message.trim() : ''

  if (!name || !email || !message) {
    return { error: 'Please fill in every field.' }
  }

  if (name.length > 100) {
    return { error: 'Your name is too long.' }
  }

  if (email.length > 254) {
    return { error: 'Your email is too long.' }
  }

  if (!EMAIL_RE.test(email)) {
    return { error: 'Please enter a valid email address.' }
  }

  if (message.length < 10) {
    return { error: 'Your message is a little too short.' }
  }

  if (message.length > 5000) {
    return { error: 'Your message is a little too long.' }
  }

  return { data: { name, email, message } }
}

export function logSafe(value, max = 300) {
  return value.replace(/[\r\n\t]+/g, ' ').slice(0, max)
}

export function isEmailConfigured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL)
}

export async function sendContactEmail({ name, email, message }) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'

  if (!apiKey || !to) {
    return { ok: false, reason: 'not-configured' }
  }

  const subjectName = name.replace(/[\r\n]+/g, ' ').slice(0, 100)
  const text = [`Name: ${name}`, `Email: ${email}`, '', message].join('\n')

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio contact from ${subjectName}`,
        text
      })
    })

    if (!response.ok) {
      const detail = await response.text()
      console.error(`Resend error ${response.status}: ${detail.slice(0, 300)}`)
      return { ok: false, reason: 'provider' }
    }

    return { ok: true }
  } catch (error) {
    console.error('Resend request failed:', error.message)
    return { ok: false, reason: 'network' }
  }
}
