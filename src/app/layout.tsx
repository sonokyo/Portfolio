import type { Metadata } from 'next'
import '@fontsource-variable/sora'
import '@fontsource-variable/space-grotesk'
import '@fontsource/jetbrains-mono'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sonokyo.vercel.app'

export const metadata: Metadata = {
    title: 'Kio\'s Portfolio',
    description:
      'Enterprise-grade software engineering for Minecraft networks. Distributed systems, microservices, and high-performance infrastructure by Kio.',
    metadataBase: new URL(siteUrl),
    keywords: ['Kio', 'sonokyo', 'Minecraft', 'software engineer', 'plugin development', 'distributed systems', 'Minecraft server', 'enterprise Minecraft'],
    openGraph: {
      title: 'Kio\'s Portfolio',
      description:
        'Enterprise-grade software engineering for Minecraft networks. Distributed systems, microservices, and high-performance infrastructure.',
      url: siteUrl,
      siteName: 'Kio\'s Portfolio',
      locale: 'en_US',
      alternateLocale: 'it_IT',
      type: 'website',
      images: '/kyo.jpg',
    },
    twitter: {
      card: 'summary_large_image',
      images: '/kyo.jpg',
      title: 'Kio\'s Portfolio',
      description:
        'Enterprise-grade software engineering for Minecraft networks.',
    },

  robots: { index: true, follow: true },
  verification: { google: '01TWmS6WTfwPqURlBWkFpqWqvHKO-Fib9JRdbvVy5f8' },
  icons: {
    icon: [{ url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><clipPath id="c"><circle cx="50" cy="50" r="50"/></clipPath></defs><image href="/kyo.jpg" width="100" height="100" clip-path="url(#c)" preserveAspectRatio="xMidYMid slice"/></svg>', type: 'image/svg+xml' }],
    apple: '/kyo.jpg',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#09090b',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Kio\'s Portfolio',
      description: 'Enterprise-grade software engineering for Minecraft networks.',
      inLanguage: ['en', 'it'],
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      url: siteUrl,
      name: 'Kio',
      alternateName: 'sonokyo',
      description: 'Software Engineer specializing in enterprise Minecraft development.',
      sameAs: [
        'https://github.com/sonoKyo',
        'https://dsc.gg/sonokyo',
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      data-scroll-behavior="smooth"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-fg">
        {children}
      </body>
    </html>
  )
}
