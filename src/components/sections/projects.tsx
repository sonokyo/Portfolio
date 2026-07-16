'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { SectionTitle } from '@/components/ui/section-title'
import { ProjectCard } from '@/components/ui/project-card'
import { projects } from '@/data/projects'

export function ProjectsSection() {
  const t = useTranslations('projects')
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: t('all') },
    { id: 'plugin', label: t('plugin') },
    { id: 'library', label: t('library') },
    { id: 'utility', label: t('utility') },
    { id: 'opensource', label: t('opensource') },
  ] as const

  const merged = projects.map((p) => {
    const item = t.raw('items')[p.id] as { title: string; description: string } | undefined
    return {
      ...p,
      title: item?.title ?? p.title,
      description: item?.description ?? p.description,
    }
  })

  const filtered = activeCategory === 'all'
    ? merged
    : merged.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="relative pt-32 pb-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary text-white shadow-[0_0_20px_rgba(64,128,192,0.2)]'
                  : 'glass glass-hover text-muted hover:text-fg'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted">{t('empty')}</p>
          </div>
        ) : (
          <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
