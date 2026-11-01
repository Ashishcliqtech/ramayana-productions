import { Play } from 'lucide-react'
import CinematicImage from './CinematicImage'
import type { Motif, Palette } from '../types'

interface Props {
  title: string
  videoUrl?: string
  motif: Motif
  palette: Palette
  poster?: string
}

const isFile = (url: string) => /\.(mp4|webm|ogg)(\?.*)?$/i.test(url)

/** Video showcase. Plays a real video when videoUrl is supplied; otherwise shows a clearly-labelled placeholder. */
export default function VideoFrame({ title, videoUrl, motif, palette, poster }: Props) {
  if (videoUrl) {
    return (
      <div className="video-frame">
        {isFile(videoUrl) ? (
          <video controls preload="metadata" poster={poster} playsInline>
            <source src={videoUrl} />
            Your browser does not support the video tag.
          </video>
        ) : (
          <iframe
            src={videoUrl}
            title={`${title} — video`}
            loading="lazy"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          />
        )}
      </div>
    )
  }

  return (
    <div className="video-frame video-placeholder">
      <CinematicImage alt={`${title} — video placeholder`} motif={motif} palette={palette} variant={1} />
      <div className="video-placeholder-label">
        <Play size={30} aria-hidden="true" />
        <p>Video showcase</p>
        <small>Add a video URL in src/data/projects.ts to play it here.</small>
      </div>
    </div>
  )
}
