import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Font configurations
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sanctuary Austin - Community Resources Hub',
  description: 'Find help with food, shelter, healthcare, legal aid, and pet services in Austin, TX. A centralized hub connecting people and animals to essential community resources.',
  keywords: 'Austin resources, emergency help, food banks, shelters, legal aid, pet services, community support',
  authors: [{ name: 'Sanctuary Austin Team' }],
  openGraph: {
    title: 'Sanctuary Austin - Community Resources Hub',
    description: 'Find help with food, shelter, healthcare, legal aid, and pet services in Austin, TX.',
    url: 'https://sanctuaryaustin.org',
    siteName: 'Sanctuary Austin',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanctuary Austin - Community Resources Hub',
    description: 'Find help with food, shelter, healthcare, legal aid, and pet services in Austin, TX.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when ready
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Google Fonts for Jacques Francois and Prata */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Jacques+Francois&family=Prata&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#2F4156" />
        
        {/* Viewport meta tag for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} antialiased bg-sanctuary-off-white`}>
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-sanctuary-navy text-white px-4 py-2 rounded-md z-50 font-poppins"
        >
          Skip to main content
        </a>
        
        <div className="min-h-screen flex flex-col">
          <Navbar />
          
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          
          <Footer />
        </div>

        {/* Emergency floating action button for mobile */}
        <div className="fixed bottom-6 right-6 z-40 md:hidden">
          <a
            href="/emergency"
            className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
            aria-label="Emergency resources - immediate help"
          >
            <span className="text-2xl">🚨</span>
          </a>
        </div>
      </body>
    </html>
  )
}