import { Link } from 'react-router-dom'
import { company } from '../data/company'

export function Monogram({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <circle cx="32" cy="32" r="29" fill="none" stroke="#C6A36B" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="24" fill="none" stroke="#C6A36B" strokeOpacity="0.35" strokeWidth="1" />
      <text x="32" y="43" textAnchor="middle" fontFamily="'Playfair Display', Georgia, serif" fontSize="30" fontWeight="700" fill="#C6A36B">
        R
      </text>
    </svg>
  )
}

export default function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link to="/" className="logo" aria-label={`${company.name} — Home`} onClick={onClick}>
      <img className="logo-image" src="/images/logorec.jpeg" alt="" />
    </Link>
  )
}
