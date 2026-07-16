'use client'

import { useEffect, useRef } from 'react'

export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    let frameId: number

    const onMove = (e: MouseEvent) => {
      if (frameId) cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(() => {
        const isDark = document.documentElement.getAttribute('data-theme') !== 'light'
        const opacity = isDark ? '0.03' : '0.06'
        glow.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(64,128,192,${opacity}), transparent 40%)`
      })
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}
