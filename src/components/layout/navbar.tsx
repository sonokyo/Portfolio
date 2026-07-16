'use client'

import { useState, useCallback, useEffect } from 'react'
import { usePathname } from '@/lib/navigation'
import { Link } from '@/lib/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { siteConfig } from '@/data/site'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { LanguageToggle } from '@/components/ui/language-toggle'

const isHashLink = (href: string) => href.includes('#')
const sectionIds = ['hero', 'projects', 'contact']

export function Navbar() {
  const t = useTranslations('nav')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const pathname = usePathname()
  const closeMobile = useCallback(() => setMobileOpen(false), [])

  const navLinks = [
    { label: t('home'), href: '/' },
    { label: t('projects'), href: '/#projects' },
    { label: t('about'), href: '/about' },
    { label: t('contact'), href: '/#contact' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { threshold: 0.2 }
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [pathname])

  const isActive = useCallback(
    (href: string) => {
      if (href === '/') return pathname === '/' && activeSection === 'hero'
      if (!isHashLink(href)) return pathname === href
      if (pathname !== '/') return false
      const hash = href.split('#')[1]
      return activeSection === hash
    },
    [pathname, activeSection]
  )

  const scrollTo = useCallback((id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
    setActiveSection(id)
  }, [])

  const handleNav = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      closeMobile()
      if (href === '/' && pathname === '/') {
        e.preventDefault()
        scrollTo('hero')
        return
      }
      if (!isHashLink(href)) return
      if (pathname === '/') {
        e.preventDefault()
        const id = href.split('#')[1]
        scrollTo(id)
      }
    },
    [closeMobile, pathname, scrollTo]
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50" role="banner">
      <div className="absolute inset-0 bg-[var(--nav-bg)] backdrop-blur-xl border-b border-border-subtle" />
      <nav className="relative max-w-6xl mx-auto px-4 h-16 flex items-center justify-between" role="navigation">
        <Link
          href="/"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            if (pathname === '/') {
              e.preventDefault()
              scrollTo('hero')
              closeMobile()
            }
          }}
          className="flex items-center gap-2 text-lg font-heading font-semibold tracking-tight"
        >
          <Code2 className="w-5 h-5 text-primary" />
          <span className="text-gradient">{siteConfig.name}</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNav(e, item.href)}
              className={`relative px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                isActive(item.href)
                  ? 'text-primary bg-primary/10 border border-primary/20'
                  : 'text-muted hover:text-fg hover:bg-bg-subtle border border-transparent'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-2 pl-2 border-l border-border flex items-center gap-1.5">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-lg glass glass-hover"
          aria-label={mobileOpen ? t('closeMenu') : t('openMenu')}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 glass border-b border-border"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNav(e, item.href)}
                  className={`block px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/10 border border-primary/20'
                      : 'text-muted hover:text-fg hover:bg-bg-subtle border border-transparent'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 px-4 flex items-center gap-2">
                <ThemeToggle />
                <LanguageToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
