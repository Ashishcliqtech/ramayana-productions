export function retryImageUrl(src: string): string {
  const hashIndex = src.indexOf('#')
  const path = hashIndex === -1 ? src : src.slice(0, hashIndex)
  const hash = hashIndex === -1 ? '' : src.slice(hashIndex)
  const separator = path.includes('?') ? '&' : '?'

  return `${path}${separator}image-retry=1${hash}`
}
