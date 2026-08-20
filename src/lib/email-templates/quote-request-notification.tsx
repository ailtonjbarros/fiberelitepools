import React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

export interface QuoteRequestNotificationProps {
  firstName?: string
  lastName?: string
  phone?: string
  email?: string
  city?: string
  zip?: string
  propertyType?: string
  poolSize?: string
  timeline?: string
  budget?: string
  message?: string
}

const rows = (p: QuoteRequestNotificationProps): [string, string][] => [
  ['Name', [p.firstName, p.lastName].filter(Boolean).join(' ') || '—'],
  ['Phone', p.phone || '—'],
  ['Email', p.email || '—'],
  ['City', p.city || '—'],
  ['ZIP', p.zip || '—'],
  ['Property Type', p.propertyType || '—'],
  ['Desired Pool Size', p.poolSize || '—'],
  ['Timeline', p.timeline || '—'],
  ['Estimated Budget', p.budget || '—'],
  ['Message', p.message || '—'],
]

const Email = (props: QuoteRequestNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>
      New quote request from {[props.firstName, props.lastName].filter(Boolean).join(' ') || 'a website visitor'}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>FIBER ELITE POOLS</Text>
        <Heading style={heading}>New Free Quote Request</Heading>
        <Text style={intro}>A new lead was submitted through fiberelitepools.com.</Text>
        <Hr style={hr} />
        <Section>
          {rows(props).map(([label, value]) => (
            <Text key={label} style={row}>
              <span style={rowLabel}>{label}: </span>
              <span style={rowValue}>{value}</span>
            </Text>
          ))}
        </Section>
        <Hr style={hr} />
        <Text style={footer}>Follow up quickly — response speed drives conversion.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'New Quote Request — Fiber Elite Pools',
  displayName: 'Quote Request (internal notification)',
  to: 'contact@fiberelitepools.com',
  previewData: {
    firstName: 'Jane',
    lastName: 'Miller',
    phone: '+1 407 555-0134',
    email: 'jane.miller@example.com',
    city: 'Winter Park',
    zip: '32789',
    propertyType: 'Single-Family Home',
    poolSize: 'Medium',
    timeline: '1–3 Months',
    budget: '$75,000–$100,000',
    message: 'Backyard is about 40x30, looking for a modern rectangular pool.',
  },
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
const heading = { fontSize: '22px', color: '#132038', margin: '0 0 8px' }
const intro = { fontSize: '14px', color: '#5b6472', margin: '0' }
const hr = { borderColor: '#e6e9ee', margin: '20px 0' }
const row = { fontSize: '14px', color: '#132038', margin: '0 0 10px', lineHeight: '20px' }
const rowLabel = { color: '#5b6472', fontWeight: 700 as const }
const rowValue = { color: '#132038' }
const footer = { fontSize: '12px', color: '#8a93a1', margin: '0' }
