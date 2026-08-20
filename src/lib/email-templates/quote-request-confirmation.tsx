import React from 'react'
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

export interface QuoteRequestConfirmationProps {
  firstName?: string
}

const Email = ({ firstName }: QuoteRequestConfirmationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>We received your free quote request — Fiber Elite Pools</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>FIBER ELITE POOLS</Text>
        <Heading style={heading}>Thank you{firstName ? `, ${firstName}` : ''}!</Heading>
        <Text style={text}>
          We received your request for a free fiberglass pool quote. A Fiber Elite Pools
          representative will reach out shortly to discuss your backyard, timeline and options.
        </Text>
        <Text style={text}>
          Need to talk sooner? Call us at <strong>+1 407 779-9613</strong>.
        </Text>
        <Button style={button} href="tel:+14077799613">
          Call +1 407 779-9613
        </Button>
        <Hr style={hr} />
        <Text style={footer}>Fiber Elite Pools · Serving Central Florida · fiberelitepools.com</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'We received your quote request — Fiber Elite Pools',
  displayName: 'Quote Request Confirmation',
  previewData: { firstName: 'Jane' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, Helvetica, sans-serif' }
const container = { padding: '28px 24px', maxWidth: '600px' }
const brand = {
  fontSize: '12px',
  letterSpacing: '3px',
  color: '#17A2C4',
  fontWeight: 700 as const,
  margin: '0 0 8px',
}
const heading = { fontSize: '24px', color: '#132038', margin: '0 0 12px' }
const text = { fontSize: '15px', lineHeight: '24px', color: '#3c4553', margin: '0 0 14px' }
const button = {
  backgroundColor: '#17A2C4',
  color: '#ffffff',
  fontSize: '15px',
  fontWeight: 700 as const,
  padding: '13px 24px',
  borderRadius: '6px',
  textDecoration: 'none',
  display: 'inline-block',
  margin: '8px 0 4px',
}
const hr = { borderColor: '#e6e9ee', margin: '24px 0 16px' }
const footer = { fontSize: '12px', color: '#8a93a1', margin: '0' }
