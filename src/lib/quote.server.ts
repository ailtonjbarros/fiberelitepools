import { sendTemplateEmail } from '@/lib/email-templates/send-email'

export interface QuoteRequestData {
  firstName: string
  lastName: string
  phone: string
  email: string
  city?: string
  zip?: string
  propertyType?: string
  poolSize?: string
  timeline?: string
  budget?: string
  message?: string
}

export async function sendQuoteRequestEmails(data: QuoteRequestData) {
  const submissionId = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`

  // Internal lead notification — recipient is fixed by the template ("to").
  await sendTemplateEmail('quote-request-notification', 'contact@fiberelitepools.com', {
    templateData: { ...data },
    idempotencyKey: `quote-notification-${submissionId}`,
    replyTo: data.email,
  })

  // Confirmation to the homeowner. A suppressed recipient is a normal outcome.
  try {
    await sendTemplateEmail('quote-request-confirmation', data.email, {
      templateData: { firstName: data.firstName },
      idempotencyKey: `quote-confirmation-${submissionId}`,
    })
  } catch (error) {
    console.error('[quote] confirmation email failed', error)
  }

  return { ok: true as const }
}
