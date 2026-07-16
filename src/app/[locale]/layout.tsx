import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { MouseGlow } from '@/components/layout/mouse-glow'
import { AmbientGlow } from '@/components/layout/ambient-glow'

import { BackToTop } from '@/components/layout/back-to-top'

import { SkipLink } from '@/components/ui/skip-link'
import { PageTransition } from '@/components/ui/page-transition'
import { ThemeProvider } from '@/components/providers/theme-provider'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  return {
    alternates: {
      languages: {
        en: '/en',
        it: '/it',
      },
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider>
        <SkipLink />
        <div
          className="fixed inset-0 pointer-events-none z-[1]"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(64,128,192,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(56,221,248,0.07) 0%, transparent 50%), radial-gradient(ellipse 50% 40% at 0% 60%, rgba(64,128,192,0.05) 0%, transparent 50%)',
          }}
        />
        <AmbientGlow />
        <MouseGlow />
        <Navbar />
        <main id="main-content" className="flex-1 relative z-10" role="main">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <BackToTop />
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
