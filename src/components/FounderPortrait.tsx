import { useState } from 'react'
import { founder } from '../data/founder'
import { retryImageUrl } from '../utils/media'
import { Monogram } from './Logo'

/** Displays the supplied founder photograph with a branded fallback. */
export default function FounderPortrait({ className = '' }: { className?: string }) {
  const [retried, setRetried] = useState(false)
  const [failed, setFailed] = useState(false)
  const hasPhoto = Boolean(founder.photo) && !failed
  const hasApprovedIdentity = !founder.name.startsWith('[') && !founder.designation.startsWith('[')

  return (
    <figure className={`portrait ${hasPhoto ? '' : 'portrait-placeholder-frame'} ${className}`.trim()}>
      <div className="portrait-frame">
        <span className="portrait-corner tl" aria-hidden="true" />
        <span className="portrait-corner br" aria-hidden="true" />
        {hasPhoto ? (
          <img
            src={retried ? retryImageUrl(founder.photo) : founder.photo}
            alt={founder.photoAlt}
            loading="lazy"
            decoding="async"
            onError={() => {
              if (!retried) setRetried(true)
              else setFailed(true)
            }}
          />
        ) : (
          <div className="portrait-placeholder" role="img" aria-label="Founder photograph placeholder">
            <Monogram size={96} />
            <p>Founder portrait</p>
            <small>Add the approved photograph in src/data/founder.ts</small>
          </div>
        )}
      </div>
      {hasApprovedIdentity && (
        <figcaption>
          <strong>{founder.name}</strong>
          <span>{founder.designation}</span>
        </figcaption>
      )}
    </figure>
  )
}
