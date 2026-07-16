'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { MapPin, MessageCircle, Ticket } from 'lucide-react'
import { SectionTitle } from '@/components/ui/section-title'
import { SocialIcon } from '@/components/ui/social-icon'
import { DiscordStatus } from '@/components/ui/discord-status'
import { siteConfig } from '@/data/site'

const cards = [
  {
    icon: 'discord',
    label: 'discord',
    value: `@${siteConfig.discord}`,
    href: siteConfig.discordServer,
    iconColor: 'text-[#5865F2]',
    class: 'border-[#5865F2]/20 hover:border-[#5865F2]/40 bg-[#5865F2]/5',
  },
  {
    icon: 'github',
    label: 'github',
    value: `@${siteConfig.github}`,
    href: `https://github.com/${siteConfig.github}`,
    iconColor: 'text-fg',
    class: 'border-zinc-500/20 hover:border-zinc-500/40 bg-zinc-500/5',
  },
  {
    icon: 'telegram',
    label: 'telegram',
    value: '@sonoKyo',
    href: 'https://t.me/sonoKyo',
    iconColor: 'text-[#0088cc]',
    class: 'border-[#0088cc]/20 hover:border-[#0088cc]/40 bg-[#0088cc]/5',
  },
]

const labelOverrides: Record<string, string> = { github: 'GitHub' }

export function ContactSection() {
  const t = useTranslations('contact')

  return (
    <section id="contact" className="relative pt-32 pb-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-5 gap-8"
        >
          <div className="lg:col-span-2 space-y-4">
            {cards.map((card, i) => (
              <motion.a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ x: 6 }}
                className={`flex items-center gap-4 glass rounded-2xl p-5 border ${card.class} transition-all duration-300`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${card.class} ${card.iconColor}`}>
                  <SocialIcon name={card.icon} className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs sm:text-sm text-muted mb-0.5">
                    {labelOverrides[card.label] || t(card.label as 'discord' | 'github' | 'telegram')}
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-fg truncate">{card.value}</div>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xs text-muted pt-2"
            >
              <MapPin className="w-3 h-3" />
              <span>{t('location')}</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 glass rounded-2xl p-8 sm:p-10 border border-border-subtle flex flex-col items-center justify-center text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5865F2]/20 to-[#5865F2]/5 flex items-center justify-center text-[#5865F2] mb-6 ring-1 ring-[#5865F2]/20">
              <MessageCircle className="w-8 h-8" />
            </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-fg mb-3">
              {t('discordTitle')}
            </h3>
            <p className="text-sm sm:text-base text-muted leading-relaxed max-w-md mb-8">
              {t('discordDesc')}
            </p>
            <motion.a
              href={siteConfig.discordServer}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#5865F2] text-white font-semibold text-sm hover:bg-[#4752C4] transition-all duration-300 shadow-lg shadow-[#5865F2]/20 hover:shadow-[#5865F2]/30"
            >
              <Ticket className="w-4 h-4" />
              {t('discordButton')}
            </motion.a>
            <div className="mt-6 w-full">
              <DiscordStatus />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
