'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useLocale } from 'next-intl'

export function HeroSection() {
  const locale = useLocale()
  const isEN = locale === 'en'

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-primary border border-primary/20 mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-wider">
                {isEN ? 'Minecraft Plugin Development' : 'Sviluppo Plugin Minecraft'}
              </span>
            </div>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-[1.05]">
            <span className="text-gradient inline-flex flex-wrap justify-center">
              {('Minecraft Developer').split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.3 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="mr-[0.3em] last:mr-0"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-base sm:text-lg text-muted max-w-xl leading-[1.7]"
          >
            {isEN
              ? 'I make plugins and manage server networks for Minecraft. Java, Paper, Velocity — from custom plugins to full server setups that actually work in production.'
              : 'Faccio plugin e gestisco server Minecraft. Java, Paper, Velocity — da plugin personalizzati a server completi che funzionano davvero in produzione.'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors duration-300 shadow-[0_0_20px_rgba(64,128,192,0.2)] hover:shadow-[0_0_30px_rgba(64,128,192,0.3)]"
            >
              {isEN ? 'View Projects' : 'Vedi Progetti'}
              <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1.5" />
            </button>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass glass-hover text-fg font-medium text-sm border border-border transition-colors duration-300"
            >
              {isEN ? 'Get in Touch' : 'Contattami'}
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-5 h-5 text-muted animate-float" />
      </motion.div>
    </section>
  )
}
