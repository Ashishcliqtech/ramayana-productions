import CinematicImage from '../../components/CinematicImage'
import SectionHeading from '../../components/SectionHeading'
import { Reveal } from '../../components/Reveal'

const stages = [
  {
    number: '01',
    title: 'Shape the story',
    text: 'Thoughtful development gives every production a clear point of view.',
    image: '/images/j.jpeg',
    alt: 'A strip of film held up to warm light',
  },
  {
    number: '02',
    title: 'Prepare the frame',
    text: 'The right crew, equipment and location bring the visual plan together.',
    image: '/images/k.jpeg',
    alt: 'A camera operator preparing a shot on location',
  },
  {
    number: '03',
    title: 'Capture the moment',
    text: 'Careful cinematography turns each scene into an intentional image.',
    image: '/images/l.jpeg',
    alt: 'A camera monitor showing a dramatic scene in progress',
  },
  {
    number: '04',
    title: 'Finish with care',
    text: 'Editing and finishing shape the rhythm, tone and final details.',
    image: '/images/o.jpeg',
    alt: 'A video editor working on a production timeline',
  },
]

export default function ProductionGallery() {
  return (
    <section className="section production-gallery" aria-labelledby="production-gallery-title">
      <div className="container">
        <SectionHeading
          eyebrow="The Craft Behind the Frame"
          title="A thoughtful process. A story brought to life."
          text="From the first idea to the final edit, every stage is an opportunity to make the story stronger."
        />
        <div className="production-gallery-grid">
          {stages.map((stage, index) => (
            <Reveal key={stage.number} delay={index * 0.06} className={`production-gallery-item production-gallery-item-${index + 1}`}>
              <article className="production-gallery-card">
                <CinematicImage
                  src={stage.image}
                  alt={stage.alt}
                  motif="film"
                  palette={['#0f0f12', '#262228', '#C6A36B']}
                />
                <div className="production-gallery-copy">
                  <span>{stage.number} / PRODUCTION</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="production-gallery-note">
          Production images illustrate the creative process; they are not a reel of completed client projects.
        </p>
      </div>
    </section>
  )
}
