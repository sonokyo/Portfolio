import { AboutContent } from './about-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'Minecraft plugin developer specializing in Paper, Velocity, and server network infrastructure.',
}

export default function AboutPage() {
  return <AboutContent />
}
