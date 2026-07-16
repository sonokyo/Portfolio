import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { projects } from '@/data/projects'
import { ProjectDetailContent } from './project-detail-content'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ id: string; locale: string }> }): Promise<Metadata> {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  if (!project) return { description: 'Project not found' }

  return {
    description: project.description,
    openGraph: {
      title: `${project.title} | Kyo`,
      description: project.description,
    },
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string; locale: string }> }) {
  const { id, locale } = await params
  setRequestLocale(locale)

  const project = projects.find((p) => p.id === id)
  if (!project) notFound()

  return <ProjectDetailContent id={id} />
}
