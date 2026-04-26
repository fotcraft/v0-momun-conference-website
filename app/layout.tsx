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
  title: {
    default: 'Moraitis MUN 2026 | Moraitis Model United Nations',
    template: '%s | Moraitis MUN 2026',
  },
  description: 'Moraitis MUN (MoMUN) 2026 — the inaugural Model United Nations conference hosted by Moraitis School, Athens. October 31 – November 1, 2026. Register now for MoMUN 2026.',
  keywords: [
    'Moraitis MUN',
    'MoMUN',
    'MoMUN 2026',
    'Moraitis Model United Nations',
    'Moraitis School MUN',
    'Model United Nations Athens',
    'MUN Greece',
    'Moraitis School conference',
    'MUN conference Athens 2026',
  ],
  authors: [{ name: 'Moraitis School' }],
  creator: 'Moraitis School',
  publisher: 'Moraitis School',
  metadataBase: new URL('https://momun.moraitis.edu.gr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GR',
    url: 'https://momun.moraitis.edu.gr',
    siteName: 'Moraitis MUN 2026',
    title: 'Moraitis MUN 2026 | Moraitis Model United Nations',
    description: 'The inaugural Moraitis MUN conference — October 31 – November 1, 2026 at Moraitis School, Athens, Greece.',
    images: [
      {
        url: '/images/momun-logo.png',
        width: 1200,
        height: 630,
        alt: 'Moraitis MUN 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moraitis MUN 2026 | Moraitis Model United Nations',
    description: 'The inaugural Moraitis MUN conference — October 31 – November 1, 2026 at Moraitis School, Athens.',
    images: ['/images/momun-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/momun-logo.png', type: 'image/png' },
    ],
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
