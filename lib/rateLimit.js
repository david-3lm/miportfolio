const buckets = new Map()
const WINDOW_MS = 10 * 60 * 1000
const LIMIT = 10

export function rateLimit(key, limit = LIMIT, windowMs = WINDOW_MS) {
  const now = Date.now()

  if (buckets.size > 1000) {
    for (const [bucketKey, bucket] of buckets) {
      if (now - bucket.start >= windowMs) {
        buckets.delete(bucketKey)
      }
    }
  }

  const bucket = buckets.get(key)

  if (!bucket || now - bucket.start >= windowMs) {
    buckets.set(key, { start: now, count: 1 })
    return { ok: true }
  }

  bucket.count += 1

  if (bucket.count > limit) {
    return {
      ok: false,
      retryAfter: Math.ceil((bucket.start + windowMs - now) / 1000)
    }
  }

  return { ok: true }
}
