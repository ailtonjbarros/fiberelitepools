import type { ComponentType } from 'react'

export interface TemplateEntry {
  component: ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  displayName?: string
  previewData?: Record<string, any>
  /** Fixed recipient — overrides caller-provided recipientEmail when set. */
  to?: string
}

/**
 * Template registry — maps template names to their React Email components.
 * Import and register new templates here after creating them in this directory.
 *
 * Example:
 *   import { template as welcomeTemplate } from './welcome'
 *   // then add to TEMPLATES: 'welcome': welcomeTemplate
 */
import { template as quoteRequestNotification } from './quote-request-notification'
import { template as quoteRequestConfirmation } from './quote-request-confirmation'

export const TEMPLATES: Record<string, TemplateEntry> = {
  'quote-request-notification': quoteRequestNotification,
  'quote-request-confirmation': quoteRequestConfirmation,
}
