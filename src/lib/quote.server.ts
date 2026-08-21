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

  return { ok: true as const, id: row.id }
}
