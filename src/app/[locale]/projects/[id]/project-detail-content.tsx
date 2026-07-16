'use client'

import Image from 'next/image'
import { Link } from '@/lib/navigation'
import { ArrowLeft, GitFork, ExternalLink, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'

export function ProjectDetailContent({ id }: { id: string }) {
  const t = useTranslations('projects')
  const project = projects.find((p) => p.id === id)
  if (!project) notFound()

  const item = t.raw('items')[id] as { title: string; description: string } | undefined
  const title = item?.title ?? project.title
  const description = item?.description ?? project.description

  return (
    <section className="relative pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-fg transition-colors mb-10 min-h-[28px]"
        >
          <ArrowLeft className="w-3 h-3" />
          {t('backToProjects')}
        </Link>

        <div className="glass rounded-2xl p-8 md:p-10 border border-border-subtle mb-10">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 p-[2px] shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden bg-[var(--bg)]">
                <Image
                  src="/pfp.jpg"
                  alt={title}
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-2xl md:text-4xl font-heading font-bold text-fg">{title}</h1>
                <Badge variant={project.category === 'opensource' ? 'accent' : 'default'}>
                  {project.category}
                </Badge>
              </div>
              <p className="text-base text-muted leading-relaxed mb-4">
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-lg bg-bg-subtle text-muted border border-border-subtle"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <div className="glass rounded-xl p-5 border border-border-subtle text-center">
            <div className="text-2xl font-heading font-bold text-fg mb-1">{project.technologies.length}</div>
            <div className="text-xs text-muted">{t('technologies')}</div>
          </div>
          <div className="glass rounded-xl p-5 border border-border-subtle text-center">
            <div className="text-2xl font-heading font-bold text-fg mb-1">{project.details?.length ?? 0}</div>
            <div className="text-xs text-muted">{t('features')}</div>
          </div>
          <div className="glass rounded-xl p-5 border border-border-subtle text-center">
            <div className="text-2xl font-heading font-bold text-fg mb-1">
              {project.github ? 'Public' : 'Private'}
            </div>
            <div className="text-xs text-muted">{t('opensource')}</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch gap-4 mb-12">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass glass-hover text-sm text-fg transition-colors border border-border-subtle"
            >
              <GitFork className="w-4 h-4" />
              {t('viewOnGitHub')}
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              {t('liveDemo')}
            </a>
          )}
        </div>

        {project.details && (
          <div className="glass rounded-2xl p-8 md:p-10 border border-border-subtle">
            <h2 className="text-xl font-heading font-semibold text-fg mb-6">{t('features')}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.details.map((detail, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-bg-subtle border border-border-subtle">
                  <span className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <ArrowRight className="w-3 h-3 text-primary" />
                  </span>
                  <span className="text-sm text-fg leading-relaxed">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
