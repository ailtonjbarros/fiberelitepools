import * as React from 'react'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components'

interface MagicLinkEmailProps {
  siteName: string
  confirmationUrl: string
}

export const MagicLinkEmail = ({
  siteName,
  confirmationUrl,
}: MagicLinkEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Your login link for {siteName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>FIBER ELITE POOLS</Text>
        <Heading style={h1}>Your login link</Heading>
        <Text style={text}>
          Click the button below to log in to {siteName}. This link will expire
          shortly.
        </Text>
        <Button style={button} href={confirmationUrl}>
          Log In
        </Button>
        <Text style={footer}>
          If you didn't request this link, you can safely ignore this email.
        </Text>
              <Text style={footer}>
          Fiber Elite Pools · Serving Central Florida · +1 407 779-9613
        </Text>
      </Container>
    </Body>
  </Html>
)

export default MagicLinkEmail

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, Helvetica, sans-serif' }
const container = { padding: '28px 24px', maxWidth: '600px' }
const h1 = {
  fontSize: '24px',
  fontWeight: 'bold' as const,
  color: '#132038',
  fontFamily: 'Arial, Helvetica, sans-serif',
  margin: '0 0 16px',
}
const text = {
  fontSize: '15px',
  color: '#3c4553',
  lineHeight: '24px',
  margin: '0 0 18px',
}
const button = {
  backgroundColor: '#17A2C4',
  color: '#ffffff',
  fontSize: '15px',
  fontWeight: 700 as const,
  borderRadius: '6px',
  padding: '13px 24px',
  textDecoration: 'none',
  display: 'inline-block',
}
const footer = { fontSize: '12px', color: '#8a93a1', margin: '28px 0 0', lineHeight: '18px' }

const brand = {
  fontSize: '12px',
  letterSpacing: '3px',
  color: '#17A2C4',
  fontWeight: 700 as const,
  margin: '0 0 10px',
}
