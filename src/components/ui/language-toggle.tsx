'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/lib/navigation'
import { motion } from 'framer-motion'
import { Languages } from 'lucide-react'

export function LanguageToggle() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const toggle = () => {
    const next = locale === 'en' ? 'it' : 'en'
    router.replace(pathname, { locale: next })
  }

  return (
    <button
      onClick={toggle}
      className="relative w-9 h-9 flex items-center justify-center rounded-lg glass glass-hover text-xs font-medium text-muted hover:text-fg transition-colors gap-1"
      aria-label={locale === 'en' ? 'Switch to Italian' : 'Switch to English'}
    >
      <Languages className="w-3.5 h-3.5" />
      <motion.span
        key={locale}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.15 }}
        className="text-[10px] font-semibold"
      >
        {locale.toUpperCase()}
      </motion.span>
    </button>
  )
}
