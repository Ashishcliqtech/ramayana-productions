import { company } from '../data/company'

export interface EnquiryData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export type EnquiryErrors = Partial<Record<keyof EnquiryData, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^[+()\-.\s\d]{7,20}$/

export function validateEnquiry(data: EnquiryData): EnquiryErrors {
  const errors: EnquiryErrors = {}
  if (data.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!EMAIL_RE.test(data.email.trim())) errors.email = 'Please enter a valid email address.'
  if (data.phone.trim() && !PHONE_RE.test(data.phone.trim())) errors.phone = 'Please enter a valid phone number.'
  if (!data.service) errors.service = 'Please choose a service.'
  if (data.message.trim().length < 20) errors.message = 'Please describe your project in at least 20 characters.'
  return errors
}

export type SubmitResult =
  | { status: 'sent' }
  | { status: 'mailto' }
  | { status: 'error'; message: string }

/**
 * Submission integration.
 * - If VITE_ENQUIRY_ENDPOINT is set (Formspree, Getform, Basin, custom API...), the enquiry is POSTed as JSON.
 *   "sent" is returned ONLY when the server answers with a success status.
 * - If no endpoint is configured, we never pretend delivery: we open the visitor's email app with a
 *   pre-filled message and return "mailto" so the UI can say that nothing was sent automatically.
 */
export async function submitEnquiry(data: EnquiryData): Promise<SubmitResult> {
  const endpoint = import.meta.env.VITE_ENQUIRY_ENDPOINT?.trim()

  if (!endpoint) {
    const subject = encodeURIComponent(`Project enquiry — ${data.service}`)
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || '—'}\nService: ${data.service}\n\nProject description:\n${data.message}`,
    )
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
    return { status: 'mailto' }
  }

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    })
    if (res.ok) return { status: 'sent' }
    return { status: 'error', message: 'The enquiry could not be sent. Please try again or email us directly.' }
  } catch {
    return { status: 'error', message: 'Network error. Please check your connection or email us directly.' }
  }
}
