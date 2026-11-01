import SectionHeading from '../../components/SectionHeading'
import { Reveal } from '../../components/Reveal'
import { whyChoose } from '../../data/pillars'

export default function WhyChoose() {
  return (
    <section className="section why-choose" aria-label="Why choose Ramayana Productions">
      <div className="container why-grid">
        <SectionHeading
          eyebrow="Why Choose Ramayana Productions"
          title="Creativity with technical precision."
          text="Excellence in storytelling, visual aesthetics and emotional impact — delivered with a commitment to quality, innovation and authenticity."
          className="why-heading"
        />
        <ul className="why-list">
          {whyChoose.map((w, i) => (
            <li key={w.title}>
              <Reveal delay={i * 0.06} className="why-item">
                <span className="why-n">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
