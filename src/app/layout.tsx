import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Avora Kitchens — Premium Modular Kitchens in Bengaluru',
  description: 'Thoughtfully designed modular kitchens crafted for modern Indian homes. Custom designs, premium materials, professional installation. Book a free consultation.',
  keywords: ['modular kitchen Bangalore', 'modular kitchen design Bangalore', 'custom modular kitchens Bangalore', 'luxury modular kitchens Bangalore'],
  openGraph: {
    title: 'Avora Kitchens — Premium Modular Kitchens in Bengaluru',
    description: 'Thoughtfully designed modular kitchens crafted for modern Indian homes. Custom designs, premium materials, professional installation.',
    url: 'https://avorakitchens.in',
    siteName: 'Avora Kitchens',
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-cream text-primary antialiased">
        {children}
      </body>
    </html>
  )
}
