import LegalLayout from '../components/LegalLayout'
import { useSEO } from '../hooks/useSEO'
import { company } from '../data/company'

/*
 * Editable business details live in src/data/company.ts (company.legal).
 * This is a structured starting template, not legal advice — have it reviewed by qualified counsel
 * and adjust it to your jurisdiction and to the tools you actually use (analytics, form providers, hosting).
 */
export default function Privacy() {
  useSEO({
    title: 'Privacy Policy',
    description: 'How Ramayana Productions collects, uses and protects personal information shared through this website.',
    path: '/privacy-policy',
  })

  const { legalName, registeredAddress, privacyContact } = company.legal

  return (
    <LegalLayout
      title="Privacy Policy"
      intro={`How ${company.name} handles the information you share with us through this website.`}
      sections={[
        {
          title: 'Who we are',
          body: (
            <p>
              This website is operated by {legalName} (“{company.name}”, “we”, “us”), registered at {registeredAddress}. This policy explains what personal information we collect through the website and how we use it.
            </p>
          ),
        },
        {
          title: 'Information we collect',
          body: (
            <>
              <p>When you submit a project enquiry, we collect the information you choose to provide:</p>
              <ul>
                <li>Your name and email address</li>
                <li>Your phone number (optional)</li>
                <li>The service you are interested in</li>
                <li>The description of your project</li>
              </ul>
              <p>We do not ask for payment information or sensitive personal data through this website.</p>
            </>
          ),
        },
        {
          title: 'How we use your information',
          body: (
            <p>
              We use your enquiry details only to respond to you, to discuss your project and to manage our business relationship with you. We do not sell your personal information.
            </p>
          ),
        },
        {
          title: 'Sharing your information',
          body: (
            <p>
              We may share information with trusted service providers that help us operate the website and handle enquiries (for example, website hosting and form-processing providers), and where we are required to do so by law. These providers may only use the information to provide their services to us.
            </p>
          ),
        },
        {
          title: 'Cookies and analytics',
          body: (
            <p>
              This website does not set advertising cookies. If analytics or other tracking tools are added in future, this section will be updated to describe them.
            </p>
          ),
        },
        {
          title: 'Data retention',
          body: (
            <p>
              We keep enquiry information only for as long as needed to respond to you and to keep reasonable business records, after which it is deleted or anonymised.
            </p>
          ),
        },
        {
          title: 'Your rights',
          body: (
            <p>
              Subject to applicable law, you may ask to access, correct or delete the personal information we hold about you, or object to how we use it. To do so, contact us at <a href={`mailto:${privacyContact}`}>{privacyContact}</a>.
            </p>
          ),
        },
        {
          title: 'Security',
          body: (
            <p>
              We take reasonable steps to protect personal information. No method of transmission over the internet is completely secure, so we cannot guarantee absolute security.
            </p>
          ),
        },
        {
          title: 'Children',
          body: <p>This website is not directed at children, and we do not knowingly collect personal information from them.</p>,
        },
        {
          title: 'Changes to this policy',
          body: <p>We may update this policy from time to time. The “last updated” date at the top of this page shows when it last changed.</p>,
        },
        {
          title: 'Contact us',
          body: (
            <p>
              Questions about this policy? Email <a href={`mailto:${privacyContact}`}>{privacyContact}</a>.
            </p>
          ),
        },
      ]}
    />
  )
}
