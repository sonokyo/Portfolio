'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { SectionTitle } from '@/components/ui/section-title'
import { skills } from '@/data/skills'

const categoryColors: Record<string, string> = {
  language: 'border-primary/20',
  framework: 'border-accent/20',
  database: 'border-primary-light/20',
  tool: 'border-zinc-500/20',
  devops: 'border-accent/20',
  other: 'border-zinc-600/20',
}

const categoryBadges: Record<string, string> = {
  language: 'text-primary',
  framework: 'text-accent',
  database: 'text-primary-light',
  tool: 'text-muted',
  devops: 'text-accent',
  other: 'text-muted',
}

export function SkillsSection() {
  const t = useTranslations('skills')

  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.035, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.03 }}
              className={`glass rounded-xl p-4 text-center border transition-all duration-300 hover:shadow-[0_0_25px_rgba(64,128,192,0.08)] ${
                categoryColors[skill.category] || 'border-zinc-600/20'
              }`}
            >
              {skill.icon ? (
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 mx-auto mb-2.5 object-contain"
                  unoptimized
                />
              ) : (
                <div className="w-8 h-8 mx-auto mb-2.5 flex items-center justify-center rounded-lg bg-bg-subtle text-xs font-bold font-heading text-muted">
                  {skill.name.slice(0, 2).toUpperCase()}
                </div>
              )}
              <div className="text-xs sm:text-sm font-semibold text-fg truncate">
                {skill.name}
              </div>
              <span className={`text-[10px] font-mono uppercase tracking-wider mt-1.5 block ${categoryBadges[skill.category] || 'text-muted'}`}>
                {skill.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
