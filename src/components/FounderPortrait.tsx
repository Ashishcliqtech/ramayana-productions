import { useState } from 'react'
import { founder } from '../data/founder'
import { Monogram } from './Logo'

/** Elegant portrait frame. Shows the real photograph when founder.photo is set; otherwise a refined placeholder. */
export default function FounderPortrait({ className = '' }: { className?: string }) {
  const [failed, setFailed] = useState(false)
  const hasPhoto = Boolean(founder.photo) && !failed

  return (
    <figure className={`portrait ${className}`.trim()}>
      <div className="portrait-frame">
        <span className="portrait-corner tl" aria-hidden="true" />
        <span className="portrait-corner br" aria-hidden="true" />
        {hasPhoto ? (
          <img src={founder.photo} alt={founder.photoAlt} loading="lazy" decoding="async" onError={() => setFailed(true)} />
        ) : (
          <div className="portrait-placeholder" role="img" aria-label="Founder photograph placeholder">
            <Monogram size={96} />
            <p>Founder portrait</p>
            <small>Add the approved photograph in src/data/founder.ts</small>
          </div>
        )}
      </div>
      <figcaption>
        <strong>{founder.name}</strong>
        <span>{founder.designation}</span>
      </figcaption>
    </figure>
  )
}
