'use client'

import { useEffect, useRef } from 'react'
import { SkinViewer } from 'skinview3d'

export function MinecraftSkin() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const viewer = new SkinViewer({
      skin: 'https://mc-heads.net/skin/sonokyo',
      width: 360,
      height: 460,
    })

    viewer.playerObject.rotation.x = Math.PI
    viewer.playerObject.rotation.y = Math.PI
    viewer.autoRotate = true
    viewer.autoRotateSpeed = 1.5
    viewer.controls.enableZoom = false
    viewer.controls.enablePan = false
    viewer.fov = 30
    viewer.zoom = 0.75

    container.appendChild(viewer.canvas)

    return () => {
      viewer.dispose()
      if (container.contains(viewer.canvas)) {
        container.removeChild(viewer.canvas)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[360px] aspect-[3/4] cursor-grab active:cursor-grabbing"
    />
  )
}
