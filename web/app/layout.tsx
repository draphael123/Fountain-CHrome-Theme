import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fountain.net Chrome Theme',
  description: 'A beautiful Chrome theme inspired by Fountain.net\'s design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

