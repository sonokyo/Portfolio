'use client'

import { motion } from 'framer-motion'

const orbs = [
  { size: 500, x: '5%', y: '10%', blur: 120, color: 'rgba(64,128,192,0.1)' },
  { size: 400, x: '75%', y: '50%', blur: 100, color: 'rgba(56,221,248,0.08)' },
  { size: 350, x: '60%', y: '80%', blur: 90, color: 'rgba(64,128,192,0.06)' },
  { size: 300, x: '20%', y: '70%', blur: 80, color: 'rgba(56,221,248,0.05)' },
]

export function AmbientGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: `blur(${orb.blur}px)`,
          }}
          animate={{
            x: [0, 40, -30, 20, 0],
            y: [0, -30, 40, -20, 0],
            scale: [1, 1.08, 0.92, 1.04, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * -2.5,
          }}
        />
      ))}
    </div>
  )
}
