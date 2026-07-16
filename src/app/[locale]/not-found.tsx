'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/lib/navigation'

export default function NotFoundPage() {
  const t = useTranslations('notFound')

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-[10rem] sm:text-[12rem] font-heading font-bold text-gradient leading-none mb-4">
          404
        </p>
        <h1 className="text-2xl sm:text-3xl font-heading font-bold text-fg mb-3">
          {t('title')}
        </h1>
        <p className="text-muted max-w-md mx-auto mb-8">
          {t('description')}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium text-sm hover:bg-primary-dark transition-colors"
        >
          {t('button')}
        </Link>
      </div>
    </section>
  )
}
