'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedContentProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
  duration?: number
}

export function AnimatedContent({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 30,
  duration = 0.5,
}: AnimatedContentProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  }

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, ...directionMap[direction] }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}
