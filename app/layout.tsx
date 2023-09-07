import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head';


const inter = Inter({ subsets: ['latin'] })

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
      <Head>
        {/* Specify the path to your custom favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Add other meta tags or links here if needed */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
