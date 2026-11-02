import type { ReactNode } from 'react'
import PageHero from './PageHero'
import { Reveal } from './Reveal'
import { company } from '../data/company'

export interface LegalSection {
  title: string
  body: ReactNode
}

export default function LegalLayout({
  title,
  intro,
  sections,
  image,
  imageAlt,
}: {
  title: string
  intro: string
  sections: LegalSection[]
  image: string
  imageAlt: string
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} text={intro} image={image} imageAlt={imageAlt} />
      <section className="section legal">
        <div className="container legal-grid">
          <aside className="legal-toc" aria-label="On this page">
            <p className="eyebrow">On this page</p>
            <ol>
              {sections.map((s, i) => (
                <li key={s.title}>
                  <a href={`#legal-${i + 1}`}>{s.title}</a>
                </li>
              ))}
            </ol>
          </aside>
          <div className="legal-body">
            <p className="legal-updated">Last updated: {company.legal.lastUpdated}</p>
            {sections.map((s, i) => (
              <Reveal key={s.title} y={16}>
                <section id={`legal-${i + 1}`} className="legal-section">
                  <h2>
                    <span>{String(i + 1).padStart(2, '0')}</span> {s.title}
                  </h2>
                  {s.body}
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
