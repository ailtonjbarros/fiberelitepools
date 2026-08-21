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

export async function saveQuoteRequest(data: QuoteRequestData) {
  const { supabaseAdmin } = await import('@/integrations/supabase/client.server')

  const { data: row, error } = await supabaseAdmin
    .from('leads')
    .insert({
      first_name: data.firstName,
      last_name: data.lastName,
      phone: data.phone,
      email: data.email,
      city: data.city ?? null,
      zip_code: data.zip ?? null,
      property_type: data.propertyType ?? null,
      desired_pool_size: data.poolSize ?? null,
      project_timeline: data.timeline ?? null,
      estimated_budget: data.budget ?? null,
      message: data.message ?? null,
      source: 'website',
      status: 'new',
    })
    .select('id')
    .single()

  if (error) {
    console.error('[quote] failed to save lead', error)
    throw new Error('Failed to save lead')
  }

  const { sendTemplateEmail } = await import('./email-templates/send-email')

  try {
    await sendTemplateEmail('quote-request-notification', 'contact@fiberelitepools.com', {
      templateData: {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        email: data.email,
        city: data.city,
        zip: data.zip,
        propertyType: data.propertyType,
        poolSize: data.poolSize,
        timeline: data.timeline,
        budget: data.budget,
        message: data.message,
      },
      idempotencyKey: `quote-request-notification-${row.id}`,
      replyTo: data.email,
    })
  } catch (e) {
    console.error('[quote] notification email failed', e)
  }

  try {
    await sendTemplateEmail('quote-request-confirmation', data.email, {
      templateData: { firstName: data.firstName },
      idempotencyKey: `quote-request-confirmation-${row.id}`,
      replyTo: 'contact@fiberelitepools.com',
    })
  } catch (e) {
    console.error('[quote] confirmation email failed', e)
  }

  return { ok: true as const, id: row.id }
}

