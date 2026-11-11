import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  validateContact,
  isEmailConfigured,
  sendContactEmail,
  logSafe
} from './lib/contact.js'
import { rateLimit } from './lib/rateLimit.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const port = process.env.PORT || 3000

app.disable('x-powered-by')
app.use(express.json({ limit: '16kb' }))
app.use((_req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('X-Frame-Options', 'DENY')
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
  next()
})

app.get('/api/hello', (_req, res) => {
  res.json({ message: 'Hello, World!' })
})

app.post('/api/contact', async (req, res) => {
  if (!req.is('application/json')) {
    return res.status(415).json({ error: 'Unsupported media type.' })
  }

  const limited = rateLimit(`contact:${req.ip}`)

  if (!limited.ok) {
    res.setHeader('Retry-After', String(limited.retryAfter))
    return res.status(429).json({
      error: 'Too many requests. Please try again later.'
    })
  }

  if (typeof req.body?.company === 'string' && req.body.company.trim() !== '') {
    return res.status(201).json({ ok: true })
  }

  const result = validateContact(req.body)

  if (result.error) {
    return res.status(400).json({ error: result.error })
  }

  const { name, email, message } = result.data

  if (!isEmailConfigured()) {
    console.log(
      `New message from ${logSafe(name, 100)} <${logSafe(email, 254)}>: ${logSafe(message)} (email not configured, logging only)`
    )
    return res.status(201).json({ ok: true })
  }

  const sent = await sendContactEmail(result.data)

  if (!sent.ok) {
    return res.status(502).json({
      error: 'Could not send your message. Please try again later.'
    })
  }

  console.log('Contact message sent')
  res.status(201).json({ ok: true })
})

const dist = path.join(__dirname, 'dist')
app.use(express.static(dist))
app.get('*', (_req, res) => {
  res.sendFile(path.join(dist, 'index.html'))
})

app.use((err, _req, res, _next) => {
  if (err.type === 'entity.too.large') {
    return res.status(413).json({ error: 'Payload too large.' })
  }
  return res.status(500).json({ error: 'Unexpected server error.' })
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
