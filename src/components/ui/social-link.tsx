import { SocialIcon } from './social-icon'

interface SocialLinkProps {
  icon: string
  href: string
  label: string
}

export function SocialLink({ icon, href, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center justify-center rounded-lg glass glass-hover text-muted hover:text-fg transition-colors"
      aria-label={label}
    >
      <SocialIcon name={icon} className="w-4 h-4" />
    </a>
  )
}
