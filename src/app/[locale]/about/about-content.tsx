'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import type { LucideIcon } from 'lucide-react'
import { SectionTitle } from '@/components/ui/section-title'
import { AnimatedContent } from '@/components/ui/animated-content'
import { Clock, Package, GitMerge, Target, Shield, Code2 } from 'lucide-react'

const valueIcons: LucideIcon[] = [Target, Package, GitMerge, Code2, Shield, Clock]

export function AboutContent() {
  const t = useTranslations('about')

  const quickFacts = [
    { label: t('experienceLabel'), value: t('experienceValue') },
    { label: t('projectsLabel'), value: t('projectsValue') },
    { label: t('networksLabel'), value: t('networksValue') },
    { label: t('focusLabel'), value: t('focusValue') },
  ]

  const valueKeys = [
    { title: t('value1Title'), desc: t('value1Desc') },
    { title: t('value2Title'), desc: t('value2Desc') },
    { title: t('value3Title'), desc: t('value3Desc') },
    { title: t('value4Title'), desc: t('value4Desc') },
    { title: t('value5Title'), desc: t('value5Desc') },
    { title: t('value6Title'), desc: t('value6Desc') },
  ]

  const timeline = t.raw('timeline') as { year: string; title: string; description: string }[]

  return (
    <section className="relative pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          title={t('title')}
          subtitle={t('subtitle')}
          align="left"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-5 gap-12 mb-20"
        >
          <div className="lg:col-span-3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-fg mb-6 leading-tight">
              {t('heading')}
            </h1>
            <div className="space-y-5 text-muted leading-relaxed text-base sm:text-lg">
              <p>{t('p1')}</p>
              <p>{t('p2')}</p>
              <p>{t('p3')}</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-2xl p-6 border border-border-subtle sticky top-28"
            >
              <h3 className="text-sm font-semibold text-fg mb-5 tracking-wide uppercase">{t('quickFacts')}</h3>
              <div className="space-y-1">
                {quickFacts.map((fact) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + quickFacts.indexOf(fact) * 0.08 }}
                    className="flex items-center justify-between py-3 px-3 -mx-3 rounded-lg border-b border-border-subtle last:border-0 hover:bg-bg-subtle transition-colors"
                  >
                    <span className="text-sm text-muted">{fact.label}</span>
                    <span className="text-sm font-semibold text-fg">{fact.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="mb-20">
          <SectionTitle
            title={t('valuesTitle')}
            subtitle={t('valuesSubtitle')}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {valueKeys.map((value, i) => {
              const Icon = valueIcons[i]!
              return (
                <AnimatedContent key={value.title} delay={i * 0.08}>
                  <div className="glass rounded-2xl p-7 border border-border-subtle h-full hover:border-primary/20 transition-all duration-300 group">
                    <div className="w-11 h-11 rounded-xl bg-bg-subtle flex items-center justify-center text-primary mb-5 group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold text-fg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{value.desc}</p>
                  </div>
                </AnimatedContent>
              )
            })}
          </div>
        </div>

        <div>
          <SectionTitle
            title={t('timelineTitle')}
            subtitle={t('timelineSubtitle')}
          />

          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/30 to-transparent hidden md:block" />

            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-0 md:pl-14"
                >
                  <div className="hidden md:flex absolute left-[10px] top-1 w-[19px] h-[19px] rounded-full bg-primary border-4 border-[var(--bg)] shadow-[0_0_0_1px_rgba(64,128,192,0.3)]" />
                  <div className="glass rounded-2xl p-7 border border-border-subtle hover:border-primary/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[11px] font-mono font-semibold text-primary uppercase tracking-wider">{item.year}</span>
                      <span className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-fg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
