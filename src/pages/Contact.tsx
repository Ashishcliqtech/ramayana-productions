import { useState } from 'react'
import type { ChangeEvent, FocusEvent, FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CheckCircle2, AlertCircle, Mail, MailOpen, MapPin, Phone, ArrowUpRight, Loader2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import Button from '../components/Button'
import { Reveal } from '../components/Reveal'
import { useSEO } from '../hooks/useSEO'
import { company } from '../data/company'
import { services } from '../data/services'
import { submitEnquiry, validateEnquiry } from '../utils/enquiry'
import type { EnquiryData, EnquiryErrors } from '../utils/enquiry'

type Status = 'idle' | 'submitting' | 'sent' | 'mailto' | 'error'

const socialLabels = { instagram: 'Instagram', youtube: 'YouTube', facebook: 'Facebook', linkedin: 'LinkedIn', x: 'X' } as const

export default function Contact() {
  const [params] = useSearchParams()
  const preselected = services.find((s) => s.slug === params.get('service'))?.title ?? ''

  const [data, setData] = useState<EnquiryData>({ name: '', email: '', phone: '', service: preselected, message: '' })
  const [honeypot, setHoneypot] = useState('')
  const [errors, setErrors] = useState<EnquiryErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof EnquiryData, boolean>>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  useSEO({
    title: 'Contact Us',
    description: 'Start a project with Ramayana Productions. Send an enquiry about web series, commercials, music videos, micro dramas, documentaries or films.',
    path: '/contact',
  })

  const socials = (Object.keys(company.social) as (keyof typeof company.social)[]).filter((k) => company.social[k])

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const next = { ...data, [name]: value } as EnquiryData
    setData(next)
    if (touched[name as keyof EnquiryData]) setErrors(validateEnquiry(next))
  }

  const onBlur = (e: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }))
    setErrors(validateEnquiry(data))
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const found = validateEnquiry(data)
    setErrors(found)
    setTouched({ name: true, email: true, phone: true, message: true })
    if (Object.keys(found).length > 0) {
      const first = (['name', 'phone', 'email', 'message'] as const).find((k) => found[k])
      if (first) document.getElementById(`field-${first}`)?.focus()
      return
    }
    if (honeypot) return // bots fill hidden fields; humans never see this one

    setStatus('submitting')
    const result = await submitEnquiry(data)
    if (result.status === 'error') {
      setErrorMessage(result.message)
      setStatus('error')
    } else {
      setStatus(result.status)
    }
  }

  const err = (k: keyof EnquiryData) => (touched[k] ? errors[k] : undefined)
  const describe = (k: keyof EnquiryData) => (err(k) ? `error-${k}` : undefined)

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let’s start your project."
        text="Tell us about your idea. From short-form digital content to grand cinematic storytelling, we’d love to hear your story."
        motif="studio"
        palette={['#16120d', '#2c2418', '#C6A36B']}
        imageAlt="Warm light in a dark studio"
      />

      <section className="section contact">
        <div className="container contact-grid">
          <Reveal className="contact-form-wrap">
            {status === 'sent' ? (
              <div className="form-status is-success" role="status">
                <CheckCircle2 size={32} aria-hidden="true" />
                <h2>Thank you — your enquiry has been sent.</h2>
                <p>We have received your message and will get back to you at {data.email}.</p>
              </div>
            ) : status === 'mailto' ? (
              <div className="form-status is-info" role="status">
                <MailOpen size={32} aria-hidden="true" />
                <h2>Almost there — please send the email.</h2>
                <p>
                  Your email app should now open with your enquiry pre-filled. <strong>Nothing has been sent from this page yet</strong> — please press Send in your email app.
                </p>
                <p>
                  If nothing opened, email us directly at <a href={`mailto:${company.email}`}>{company.email}</a>.
                </p>
                <Button variant="ghost" onClick={() => setStatus('idle')} arrow={false}>
                  Edit my enquiry
                </Button>
              </div>
            ) : (
              <form className="form" onSubmit={onSubmit} noValidate aria-label="Project enquiry form">
                <div className="field">
                  <label htmlFor="field-name">Full name</label>
                  <input
                    id="field-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={data.name}
                    onChange={onChange}
                    onBlur={onBlur}
                    aria-invalid={Boolean(err('name'))}
                    aria-describedby={describe('name')}
                    required
                  />
                  {err('name') && (
                    <p className="field-error" id="error-name">
                      {err('name')}
                    </p>
                  )}
                </div>

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="field-phone">Phone number</label>
                    <input
                      id="field-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={data.phone}
                      onChange={onChange}
                      onBlur={onBlur}
                      aria-invalid={Boolean(err('phone'))}
                      aria-describedby={describe('phone')}
                      required
                    />
                    {err('phone') && (
                      <p className="field-error" id="error-phone">
                        {err('phone')}
                      </p>
                    )}
                  </div>
                  <div className="field">
                    <label htmlFor="field-email">Email</label>
                    <input
                      id="field-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={data.email}
                      onChange={onChange}
                      onBlur={onBlur}
                      aria-invalid={Boolean(err('email'))}
                      aria-describedby={describe('email')}
                      required
                    />
                    {err('email') && (
                      <p className="field-error" id="error-email">
                        {err('email')}
                      </p>
                    )}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="field-message">Project detail / message</label>
                  <textarea
                    id="field-message"
                    name="message"
                    rows={5}
                    value={data.message}
                    onChange={onChange}
                    onBlur={onBlur}
                    aria-invalid={Boolean(err('message'))}
                    aria-describedby={describe('message')}
                    required
                  />
                  {err('message') && (
                    <p className="field-error" id="error-message">
                      {err('message')}
                    </p>
                  )}
                </div>

                {/* Honeypot: hidden from people, visible to simple bots */}
                <div className="hp" aria-hidden="true">
                  <label htmlFor="field-website">Leave this field empty</label>
                  <input id="field-website" type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
                </div>

                {status === 'error' && (
                  <p className="form-error" role="alert">
                    <AlertCircle size={18} aria-hidden="true" /> {errorMessage}
                  </p>
                )}

                <Button type="submit" disabled={status === 'submitting'} arrow={status !== 'submitting'}>
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="spin" size={18} aria-hidden="true" /> Sending…
                    </>
                  ) : (
                    'Send Enquiry'
                  )}
                </Button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.15} className="contact-side">
            <h2 className="side-title">Direct contact</h2>
            <ul className="contact-list">
              <li>
                <Mail size={20} aria-hidden="true" />
                <div>
                  <small>Email</small>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </div>
              </li>
              {company.phone && (
                <li>
                  <Phone size={20} aria-hidden="true" />
                  <div>
                    <small>Phone</small>
                    <a href={`tel:${company.phone.replace(/[^\d+]/g, '')}`}>{company.phone}</a>
                  </div>
                </li>
              )}
              {company.address && (
                <li>
                  <MapPin size={20} aria-hidden="true" />
                  <div>
                    <small>Location</small>
                    <span>{company.address}</span>
                  </div>
                </li>
              )}
            </ul>
            {socials.length > 0 && (
              <>
                <h2 className="side-title">Follow us</h2>
                <ul className="social-list">
                  {socials.map((k) => (
                    <li key={k}>
                      <a href={company.social[k]} target="_blank" rel="noopener noreferrer">
                        {socialLabels[k]} <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <p className="side-note">
              By sending an enquiry you agree to our <Link to="/privacy-policy">Privacy Policy</Link>.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
