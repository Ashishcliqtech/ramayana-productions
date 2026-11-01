import type { ReactNode, MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'light'
  /** Internal route */
  to?: string
  /** External URL or mailto: */
  href?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit'
  disabled?: boolean
  arrow?: boolean
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  type = 'button',
  disabled,
  arrow = true,
  className = '',
}: ButtonProps) {
  const cls = `btn btn-${variant} ${className}`.trim()
  const inner = (
    <>
      <span className="btn-label">{children}</span>
      {arrow && <ArrowRight className="btn-arrow" size={18} aria-hidden="true" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    )
  }
  if (href) {
    const external = /^https?:/.test(href)
    return (
      <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {inner}
      </a>
    )
  }
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {inner}
    </button>
  )
}
