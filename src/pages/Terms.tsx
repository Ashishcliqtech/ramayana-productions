import LegalLayout from '../components/LegalLayout'
import { useSEO } from '../hooks/useSEO'
import { company } from '../data/company'

/*
 * Editable business details live in src/data/company.ts (company.legal).
 * This is a structured starting template, not legal advice — have it reviewed by qualified counsel.
 */
export default function Terms() {
  useSEO({
    title: 'Terms & Conditions',
    description: 'The terms and conditions for using the Ramayana Productions website and sending a project enquiry.',
    path: '/terms-and-conditions',
  })

  const { legalName, governingLaw, privacyContact } = company.legal

  return (
    <LegalLayout
      title="Terms & Conditions"
      intro={`The terms that apply when you use the ${company.name} website.`}
      sections={[
        {
          title: 'Acceptance of terms',
          body: (
            <p>
              By accessing or using this website, operated by {legalName}, you agree to these terms. If you do not agree, please do not use the website.
            </p>
          ),
        },
        {
          title: 'Enquiries and services',
          body: (
            <p>
              Sending an enquiry through this website does not create a contract. Any production work is governed by a separate written agreement between you and {company.name} that sets out scope, timelines, fees and deliverables.
            </p>
          ),
        },
        {
          title: 'Intellectual property',
          body: (
            <p>
              All text, design, graphics, logos and other content on this website belong to {legalName} or its licensors and are protected by applicable intellectual property laws. You may not copy, reproduce or distribute them without our prior written permission.
            </p>
          ),
        },
        {
          title: 'Acceptable use',
          body: (
            <p>
              You agree not to misuse the website — including attempting to gain unauthorised access, introducing harmful code, or submitting false, misleading or unlawful content through the enquiry form.
            </p>
          ),
        },
        {
          title: 'Third-party links',
          body: <p>This website may link to third-party websites. We are not responsible for their content or practices.</p>,
        },
        {
          title: 'Disclaimer',
          body: (
            <p>
              The website is provided “as is”. We make reasonable efforts to keep the information accurate and up to date but do not guarantee that it is complete or error-free.
            </p>
          ),
        },
        {
          title: 'Limitation of liability',
          body: (
            <p>
              To the fullest extent permitted by law, {legalName} is not liable for any indirect or consequential loss arising from the use of this website.
            </p>
          ),
        },
        {
          title: 'Governing law',
          body: <p>These terms are governed by the laws of {governingLaw}.</p>,
        },
        {
          title: 'Changes to these terms',
          body: <p>We may update these terms from time to time. Continued use of the website after changes means you accept the updated terms.</p>,
        },
        {
          title: 'Contact us',
          body: (
            <p>
              Questions about these terms? Email <a href={`mailto:${privacyContact}`}>{privacyContact}</a>.
            </p>
          ),
        },
      ]}
    />
  )
}
