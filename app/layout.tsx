import './globals.css'
import type { Metadata } from 'next'
import { Special_Elite } from 'next/font/google'
import Head from 'next/head';


const specialElite = Special_Elite({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: 'Kobby | Portfolio',
  description: 'Personal Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={specialElite.className}>{children}</body>
    </html>
  )
}
