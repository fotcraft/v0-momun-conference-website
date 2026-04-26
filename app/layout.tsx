import type { Metadata, Viewport } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin", "greek"] });
const _merriweather = Merriweather({ subsets: ["latin"], weight: ["300", "400", "700", "900"] });

export const viewport: Viewport = {
  themeColor: '#2b5232',
}

export const metadata: Metadata = {
  title: 'MoMUN 2026 | Moraitis Model United Nations Conference',
  description: 'Join the Moraitis Model United Nations Conference on October 31 - November 1, 2026. Hosted by Moraitis School, Athens, Greece. Diplomacy, debate, and global awareness.',
  generator: 'v0.app',
  icons: {
    icon: '/images/momun-logo.png',
    apple: '/images/momun-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
