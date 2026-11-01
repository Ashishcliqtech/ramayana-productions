/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Contact form endpoint (Formspree, Getform, Basin, custom API). Optional. */
  readonly VITE_ENQUIRY_ENDPOINT?: string
}
