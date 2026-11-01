import SectionHeading from '../../components/SectionHeading'
import { Reveal } from '../../components/Reveal'
import { teamRoles } from '../../data/pillars'

export default function TeamIntro() {
  return (
    <section className="section team-intro" aria-label="Our creative team">
      <div className="container">
        <SectionHeading
          eyebrow="The Creative Team"
          title="A dynamic team of storytellers."
          text="Filmmakers, writers, cinematographers, editors and designers — one dedicated team united by a passion for storytelling."
        />
        <ul className="team-grid">
          {teamRoles.map((t, i) => (
            <li key={t.role}>
              <Reveal delay={i * 0.07} className="team-item">
                <span className="team-index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{t.role}</h3>
                <p>{t.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
