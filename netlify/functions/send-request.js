import { requestEmail, requestForms } from '../../src/data.js'

// Variables d'environnement Netlify :
// RESEND_API_KEY (obligatoire), RESEND_FROM (expéditeur sur un domaine vérifié dans Resend).
const FROM = process.env.RESEND_FROM || 'LARPILOTE <formulaires@larpilote.com>'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const json = (status, body) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } })

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

export default async (req) => {
  if (req.method !== 'POST') return json(405, { success: false })

  let data
  try {
    data = await req.json()
  } catch {
    return json(400, { success: false })
  }

  const { type, email, fields, honey } = data ?? {}
  const config = requestForms[type]

  // Champ piège rempli : robot probable, on répond OK sans rien envoyer.
  if (honey) return json(200, { success: true })

  if (
    !config ||
    typeof email !== 'string' ||
    !EMAIL_PATTERN.test(email) ||
    !Array.isArray(fields) ||
    fields.length > 20 ||
    !fields.every((f) => Array.isArray(f) && f.length === 2 && f.every((v) => typeof v === 'string' && v.length <= 5000))
  ) {
    return json(400, { success: false })
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY manquante')
    return json(500, { success: false })
  }

  const rows = fields
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #ddd;background:#f7f4ee;font-weight:600;vertical-align:top">${escapeHtml(label)}</td>` +
        `<td style="padding:8px 12px;border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`
    )
    .join('')

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM,
      to: [requestEmail],
      reply_to: email,
      subject: config.subject,
      html: `<p>Nouvelle demande reçue depuis larpilote.com :</p><table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${rows}</table>`,
      text: fields.map(([label, value]) => `${label} : ${value}`).join('\n'),
    }),
  })

  if (!res.ok) {
    console.error('Resend error', res.status, await res.text())
    return json(502, { success: false })
  }
  return json(200, { success: true })
}

export const config = { path: '/api/send-request' }
