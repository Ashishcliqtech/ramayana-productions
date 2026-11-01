import type { ReactNode } from 'react'
import { Reveal, WordReveal } from './Reveal'

interface Props {
  eyebrow?: string
  title: string
  text?: ReactNode
  align?: 'left' | 'center'
  as?: 'h1' | 'h2'
  className?: string
}

export default function SectionHeading({ eyebrow, title, text, align = 'left', as = 'h2', className = '' }: Props) {
  return (
    <header className={`section-heading align-${align} ${className}`.trim()}>
      {eyebrow && (
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
      )}
      <WordReveal as={as} text={title} className="display" />
      {text && (
        <Reveal delay={0.15}>
          <p className="lede">{text}</p>
        </Reveal>
      )}
    </header>
  )
}

export function Divider() {
  return (
    <div className="divider" role="presentation">
      <span />
      <i />
      <span />
    </div>
  )
}
