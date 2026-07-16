'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Heart } from 'lucide-react'
import { Link } from '@/lib/navigation'
import { siteConfig } from '@/data/site'
import { SocialLink } from '@/components/ui/social-link'

const socialLinks = [
  { icon: 'github', href: `https://github.com/${siteConfig.github}`, label: 'GitHub' },
  { icon: 'discord', href: siteConfig.discordServer, label: 'Discord' },
]

export function Footer() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <footer className="relative border-t border-border-subtle" role="contentinfo">
      <div ref={ref} className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-2 text-sm text-muted">
            <Globe className="w-4 h-4 text-primary/60" aria-hidden="true" />
            <span>&copy; {new Date().getFullYear()} {siteConfig.name}.</span>
            <span className="hidden sm:inline text-muted">Built with</span>
            <Heart className="w-3.5 h-3.5 text-accent hidden sm:block" aria-hidden="true" />
          </div>
          <div className="flex items-center gap-5">
            <Link href="/about" className="text-xs text-muted hover:text-primary transition-colors font-medium">
              About
            </Link>
            <span className="w-px h-3 bg-border" />
            {socialLinks.map((link) => (
              <SocialLink key={link.label} {...link} />
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
