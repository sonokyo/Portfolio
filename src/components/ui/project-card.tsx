'use client'

import { useState, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { GitFork, ExternalLink } from 'lucide-react'
import { useTranslations } from 'next-intl'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const t = useTranslations('projects')
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    setRotateX((y - centerY) / centerY * -6)
    setRotateY((x - centerX) / centerX * 6)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setRotateX(0)
    setRotateY(0)
  }, [])

  return (
    <motion.article
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1200px' }}
      className="group relative"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="glass rounded-2xl overflow-hidden border border-border-subtle hover:border-primary/20 transition-colors duration-500"
      >
        <Link href={`/projects/${project.id}`} className="block">
          <div className="aspect-video bg-gradient-to-br from-primary/5 via-bg to-primary/5 flex items-center justify-center overflow-hidden">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Image
                src="/pfp.jpg"
                alt={project.title}
                width={48}
                height={48}
                className="w-full h-full object-cover rounded-full opacity-40"
                unoptimized
              />
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg font-semibold text-fg group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <span className="shrink-0 text-[10px] font-medium uppercase tracking-wider text-muted px-2 py-1 rounded-md border border-border">
                {project.category}
              </span>
            </div>

            <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-bg-subtle text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Link>

        <div className="px-6 pb-6 flex items-center gap-3 pt-4 border-t border-border-subtle">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted hover:text-primary transition-colors min-h-[28px]"
              aria-label={`${t('source')} — ${project.title} GitHub repository`}
            >
              <GitFork className="w-3.5 h-3.5" />
              {t('source')}
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted hover:text-primary transition-colors min-h-[28px]"
              aria-label={`${t('demo')} — ${project.title} live demo`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              {t('demo')}
            </a>
          )}
        </div>
      </motion.div>
    </motion.article>
  )
}
