import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

const quoteSchema = z.object({
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().min(1).max(80),
  phone: z.string().trim().min(7).max(40),
  email: z.string().trim().email().max(160),
  city: z.string().trim().max(80).optional().default(''),
  zip: z.string().trim().max(20).optional().default(''),
  propertyType: z.string().trim().max(80).optional().default(''),
  poolSize: z.string().trim().max(120).optional().default(''),
  timeline: z.string().trim().max(80).optional().default(''),
  budget: z.string().trim().max(80).optional().default(''),
  message: z.string().trim().max(2000).optional().default(''),
})

export const submitQuoteRequest = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => quoteSchema.parse(data))
  .handler(async ({ data }) => {
    const { saveQuoteRequest } = await import('./quote.server')
    return saveQuoteRequest(data)
  })
