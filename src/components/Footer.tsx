import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'
import { company, navLinks } from '../data/company'
import { services } from '../data/services'

const socialLabels: Record<keyof typeof company.social, string> = {
  instagram: 'Instagram',
  youtube: 'YouTube',
  facebook: 'Facebook',
  linkedin: 'LinkedIn',
  x: 'X',
}

export default function Footer() {
  const socials = (Object.keys(company.social) as (keyof typeof company.social)[]).filter((k) => company.social[k])

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo shape="circle" />
          <p className="footer-tagline">{company.tagline}</p>
          <p className="footer-note">{company.positioning}</p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="footer-heading">Explore</h2>
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="footer-heading">Services</h2>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer-heading">Get in touch</h2>
          <ul className="footer-contact">
            <li>
              <Mail size={16} aria-hidden="true" />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            {company.phone && (
              <li>
                <Phone size={16} aria-hidden="true" />
                <a href={`tel:${company.phone.replace(/[^\d+]/g, '')}`}>{company.phone}</a>
              </li>
            )}
            {company.address && (
              <li>
                <MapPin size={16} aria-hidden="true" />
                <span>{company.address}</span>
              </li>
            )}
          </ul>
          {socials.length > 0 && (
            <ul className="footer-social" aria-label="Social media">
              {socials.map((k) => (
                <li key={k}>
                  <a href={company.social[k]} target="_blank" rel="noopener noreferrer">
                    {socialLabels[k]} <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </p>
        <ul>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
