import { HeroSection } from '@/components/sections/hero'
import { StatsSection } from '@/components/sections/stats'
import { SkillsSection } from '@/components/sections/skills'
import { ProjectsSection } from '@/components/sections/projects'
import { ContactSection } from '@/components/sections/contact'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}
