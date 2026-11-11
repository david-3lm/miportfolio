import {
  validateContact,
  isEmailConfigured,
  sendContactEmail
} from '../lib/contact.js'
import { rateLimit } from '../lib/rateLimit.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const contentType = req.headers?.['content-type'] || ''
  if (!contentType.includes('application/json')) {
    return res.status(415).json({ error: 'Unsupported media type.' })
  }

  const contentLength = Number(req.headers?.['content-length'] || 0)
  if (contentLength > 16 * 1024) {
    return res.status(413).json({ error: 'Payload too large.' })
  }

  const ip =
    (req.headers?.['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown'
  const limited = rateLimit(`contact:${ip}`)

  if (!limited.ok) {
    res.setHeader('Retry-After', String(limited.retryAfter))
    return res.status(429).json({
      error: 'Too many requests. Please try again later.'
    })
  }

  let body = req.body
  if (Buffer.isBuffer(body)) {
    body = body.toString('utf8')
  }
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body)
    } catch {
      body = null
    }
  }

  if (typeof body?.company === 'string' && body.company.trim() !== '') {
    return res.status(201).json({ ok: true })
  }

  const result = validateContact(body)
  if (result.error) {
    return res.status(400).json({ error: result.error })
  }

  if (!isEmailConfigured()) {
    console.error(
      'Contact form is not configured: set RESEND_API_KEY and CONTACT_TO_EMAIL.'
    )
    return res.status(503).json({
      error: 'The contact form is not configured yet. Please email me directly.'
    })
  }

  const sent = await sendContactEmail(result.data)

  if (!sent.ok) {
    return res.status(502).json({
      error: 'Could not send your message. Please try again later.'
    })
  }

  return res.status(201).json({ ok: true })
}
