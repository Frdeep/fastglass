import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Fastglass75 - Remplacement & Réparation Pare-brise Paris | 0€ à Payer + Cadeau 300€',
  description: 'Service n°1 de remplacement et réparation de pare-brise à Paris. Intervention rapide 24h, 0€ à payer, cadeau jusqu\'à 300€. Prise en charge assurance 100%.',
  keywords: 'pare-brise Paris, remplacement pare-brise, réparation vitrage, Fastglass75, vitrage auto Paris, pare-brise gratuit',
  authors: [{ name: 'Fastglass75' }],
  openGraph: {
    title: 'Fastglass75 - Remplacement & Réparation Pare-brise Paris',
    description: '0€ à payer + Cadeau jusqu\'à 300€. Intervention rapide 24h à Paris et IDF.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Fastglass75',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fastglass75 - Remplacement & Réparation Pare-brise Paris',
    description: '0€ à payer + Cadeau jusqu\'à 300€. Intervention rapide 24h à Paris et IDF.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <Script
          src="https://tally.so/widgets/embed.js"
          strategy="lazyOnload"
        />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
