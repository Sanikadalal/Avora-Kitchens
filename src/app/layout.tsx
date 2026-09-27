import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FORMA Kitchens — Premium Modular Kitchens in Bengaluru',
  description: 'Thoughtfully designed modular kitchens crafted for modern Indian homes. Custom designs, premium materials, professional installation. Book a free consultation.',
  keywords: ['modular kitchen Bangalore', 'modular kitchen design Bangalore', 'custom modular kitchens Bangalore', 'luxury modular kitchens Bangalore'],
  openGraph: {
    title: 'FORMA Kitchens — Premium Modular Kitchens in Bengaluru',
    description: 'Thoughtfully designed modular kitchens crafted for modern Indian homes. Custom designs, premium materials, professional installation.',
    url: 'https://formakitchens.in',
    siteName: 'FORMA Kitchens',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-cream text-primary antialiased">
        {children}
      </body>
    </html>
  )
}
