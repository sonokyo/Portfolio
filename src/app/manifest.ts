import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kio\'s Portfolio',
    short_name: 'Kio',
    description: 'Enterprise-grade software engineering for Minecraft networks.',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#09090b',
    icons: [
      { src: '/kyo.jpg', sizes: 'any', type: 'image/jpeg' },
    ],
  }
}
