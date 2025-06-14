import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Star Porselano',
  description: 'Star Porselano',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
