'use client'

import { motion } from 'framer-motion'
import { Clock, Package, GitMerge, Server } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { AnimatedCounter } from '@/components/ui/animated-counter'

const icons = [Server, Package, GitMerge, Clock]

export function StatsSection() {
  const t = useTranslations('stats')

  const items = [
    { value: 26, suffix: '+', label: t('servers') },
    { value: 100, suffix: '+', label: t('plugins') },
    { value: 11, suffix: '+', label: t('networks') },
    { value: 3, suffix: '+', label: t('experience') },
  ]

  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {items.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 50, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass rounded-2xl p-7 text-center hover:border-primary/20 transition-all duration-300 hover:shadow-[0_0_35px_rgba(64,128,192,0.1)]"
              >
                <motion.div
                  className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Icon className="w-5 h-5 text-primary" />
                </motion.div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-fg tabular-nums tracking-tight leading-none">
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-muted mt-3 font-medium tracking-wide">{item.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
