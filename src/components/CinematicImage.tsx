import { useId, useState } from 'react'
import type { Motif, Palette } from '../types'

interface Props {
  /** Real photograph. If missing or fails to load, a generated cinematic scene is shown instead. */
  src?: string
  alt: string
  motif: Motif
  palette: Palette
  className?: string
  eager?: boolean
  /** Varies the generated scene so repeated frames look distinct */
  variant?: number
}

const glowPosition: Record<Motif, [number, number]> = {
  hero: [0.5, 0.32],
  studio: [0.4, 0.4],
  series: [0.55, 0.5],
  commercial: [0.5, 0.45],
  music: [0.5, 0.6],
  micro: [0.5, 0.5],
  documentary: [0.7, 0.4],
  film: [0.5, 0.5],
}

function Scene({ motif, palette, variant, uid }: { motif: Motif; palette: Palette; variant: number; uid: string }) {
  const [c1, c2, c3] = palette
  const [gx, gy] = glowPosition[motif]
  const shift = ((variant % 3) - 1) * 0.12
  const bg = `${uid}bg`
  const glow = `${uid}glow`
  const vig = `${uid}vig`
  const beam = `${uid}beam`

  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={bg} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={c1} />
          <stop offset="1" stopColor={c2} />
        </linearGradient>
        <radialGradient id={glow} cx={gx + shift} cy={gy} r="0.62">
          <stop offset="0" stopColor={c3} stopOpacity="0.55" />
          <stop offset="1" stopColor={c3} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={vig} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.45" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id={beam} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={c3} stopOpacity="0" />
          <stop offset="0.5" stopColor={c3} stopOpacity="0.9" />
          <stop offset="1" stopColor={c3} stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="1600" height="900" fill={`url(#${bg})`} />
      <rect width="1600" height="900" fill={`url(#${glow})`} />

      {motif === 'hero' && (
        <g>
          <polygon points="760,0 840,0 1180,900 420,900" fill={c3} opacity="0.07" />
          <polygon points="360,0 420,0 700,900 60,900" fill={c3} opacity="0.05" />
          <polygon points="1180,0 1240,0 1560,900 960,900" fill={c3} opacity="0.05" />
          <path d="M0 700 L220 600 L420 660 L640 560 L900 650 L1160 540 L1400 640 L1600 580 L1600 900 L0 900Z" fill="#000" opacity="0.35" />
          <path d="M0 780 L300 700 L560 770 L880 690 L1200 780 L1600 700 L1600 900 L0 900Z" fill="#000" opacity="0.55" />
          {Array.from({ length: 26 }).map((_, i) => (
            <circle
              key={i}
              cx={60 + ((i * 197) % 1480)}
              cy={80 + ((i * 131) % 520)}
              r={1 + (i % 3)}
              fill={c3}
              opacity={0.2 + (i % 4) * 0.12}
            />
          ))}
        </g>
      )}

      {motif === 'studio' && (
        <g>
          <circle cx="640" cy="360" r="300" fill="none" stroke={c3} strokeOpacity="0.25" strokeWidth="2" />
          <circle cx="640" cy="360" r="200" fill="none" stroke={c3} strokeOpacity="0.35" strokeWidth="2" />
          <circle cx="640" cy="360" r="90" fill={c3} opacity="0.3" />
          <polygon points="1000,0 1100,0 1600,900 1180,900" fill={c3} opacity="0.08" />
          <rect x="0" y="720" width="1600" height="4" fill={c3} opacity="0.35" />
        </g>
      )}

      {motif === 'series' && (
        <g>
          {[0, 1, 2].map((i) => (
            <rect
              key={i}
              x={420 + i * 90}
              y={170 + i * 50}
              width="620"
              height="350"
              rx="10"
              fill={c2}
              stroke={c3}
              strokeOpacity={0.25 + i * 0.25}
              strokeWidth="2"
              opacity={0.55 + i * 0.22}
            />
          ))}
          <polygon points="880,405 880,485 950,445" fill={c3} opacity="0.9" />
          {Array.from({ length: 8 }).map((_, i) => (
            <rect key={i} x={430 + i * 96} y="700" width={i === 2 ? 70 : 44} height="6" rx="3" fill={c3} opacity={i === 2 ? 0.9 : 0.3} />
          ))}
        </g>
      )}

      {motif === 'commercial' && (
        <g>
          <polygon points="760,0 840,0 1180,900 420,900" fill={c3} opacity="0.12" />
          <circle cx="800" cy="440" r="200" fill="none" stroke={c3} strokeOpacity="0.5" strokeWidth="2" />
          <circle cx="800" cy="440" r="130" fill="none" stroke={c3} strokeOpacity="0.4" strokeWidth="2" />
          <circle cx="800" cy="440" r="64" fill={c3} opacity="0.3" />
          <ellipse cx="800" cy="700" rx="320" ry="42" fill="#000" opacity="0.5" />
          <ellipse cx="800" cy="690" rx="320" ry="42" fill="none" stroke={c3} strokeOpacity="0.45" strokeWidth="2" />
        </g>
      )}

      {motif === 'music' && (
        <g>
          {Array.from({ length: 64 }).map((_, i) => {
            const h = 70 + Math.abs(Math.sin(i * 1.7 + variant) * Math.cos(i * 0.6)) * 430
            return <rect key={i} x={40 + i * 24.4} y={460 - h / 2} width="10" height={h} rx="5" fill={c3} opacity={0.25 + (h / 500) * 0.6} />
          })}
          <rect x="0" y="458" width="1600" height="3" fill={c3} opacity="0.35" />
        </g>
      )}

      {motif === 'micro' && (
        <g>
          <rect x="640" y="80" width="320" height="740" rx="48" fill="#0a0a0a" stroke={c3} strokeOpacity="0.7" strokeWidth="2" />
          <rect x="660" y="124" width="280" height="652" rx="30" fill={c2} />
          <rect x="660" y="124" width="280" height="652" rx="30" fill={c3} opacity="0.16" />
          <rect x="770" y="100" width="60" height="10" rx="5" fill={c2} />
          <circle cx="800" cy="450" r="46" fill="none" stroke={c3} strokeWidth="3" />
          <polygon points="788,426 788,474 828,450" fill={c3} />
          <rect x="690" y="730" width="220" height="5" rx="2.5" fill={c3} opacity="0.3" />
          <rect x="690" y="730" width="120" height="5" rx="2.5" fill={c3} />
        </g>
      )}

      {motif === 'documentary' && (
        <g>
          <circle cx={1090 + variant * 20} cy="360" r="86" fill={c3} opacity="0.75" />
          <path d="M0 650 L260 430 L440 560 L700 360 L980 600 L1200 470 L1600 660 L1600 900 L0 900Z" fill={c1} opacity="0.85" />
          <path d="M0 750 L320 600 L620 730 L900 570 L1250 730 L1600 630 L1600 900 L0 900Z" fill="#000" opacity="0.5" />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={200 + i * 60} y={800 + i * 22} width={1200 - i * 120} height="2" fill={c3} opacity={0.25 - i * 0.04} />
          ))}
        </g>
      )}

      {motif === 'film' && (
        <g>
          <rect x="0" y="0" width="1600" height="76" fill="#000" opacity="0.6" />
          <rect x="0" y="824" width="1600" height="76" fill="#000" opacity="0.6" />
          {Array.from({ length: 36 }).map((_, i) => (
            <g key={i}>
              <rect x={20 + i * 44.4} y="26" width="22" height="24" rx="4" fill={c3} opacity="0.35" />
              <rect x={20 + i * 44.4} y="850" width="22" height="24" rx="4" fill={c3} opacity="0.35" />
            </g>
          ))}
          <rect x="0" y="446" width="1600" height="5" fill={`url(#${beam})`} />
          <circle cx="1110" cy="440" r="230" fill="none" stroke={c3} strokeOpacity="0.3" strokeWidth="2" />
          <circle cx="1110" cy="440" r="26" fill={c3} opacity="0.5" />
          {Array.from({ length: 6 }).map((_, i) => {
            const a = (i / 6) * Math.PI * 2
            return <circle key={i} cx={1110 + Math.cos(a) * 130} cy={440 + Math.sin(a) * 130} r="36" fill="none" stroke={c3} strokeOpacity="0.45" strokeWidth="2" />
          })}
        </g>
      )}

      <rect width="1600" height="900" fill={`url(#${vig})`} />
    </svg>
  )
}

export default function CinematicImage({ src, alt, motif, palette, className = '', eager = false, variant = 0 }: Props) {
  const [failed, setFailed] = useState(false)
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '')

  if (src && !failed) {
    return (
      <div className={`cine ${className}`}>
        <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setFailed(true)} />
      </div>
    )
  }

  return (
    <div className={`cine ${className}`} role="img" aria-label={alt}>
      <Scene motif={motif} palette={palette} variant={variant} uid={uid} />
    </div>
  )
}
