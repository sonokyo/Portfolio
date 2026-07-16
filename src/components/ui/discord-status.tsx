'use client'

import { useEffect, useState } from 'react'

interface DiscordData {
  discord_status: 'online' | 'idle' | 'dnd' | 'offline'
  discord_user: {
    id: string
    username: string
    avatar: string
    global_name: string
  }
}

export function DiscordStatus() {
  const [data, setData] = useState<DiscordData | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    let mounted = true
    const fetchStatus = async () => {
      try {
        const res = await fetch('https://api.lanyard.rest/v1/users/1138484440817995886')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json = await res.json()
        if (mounted && json?.data) setData(json.data)
      } catch {
        if (mounted) setError(true)
      }
    }
    fetchStatus()
    const interval = setInterval(fetchStatus, 60000)
    return () => { mounted = false; clearInterval(interval) }
  }, [])

  const statusColors: Record<string, string> = {
    online: 'bg-green-500',
    idle: 'bg-yellow-500',
    dnd: 'bg-red-500',
    offline: 'bg-zinc-500',
  }

  const statusLabels: Record<string, string> = {
    online: 'Online',
    idle: 'Idle',
    dnd: 'Do Not Disturb',
    offline: 'Offline',
  }

  if (!data) {
    const pulse = 'bg-bg-subtle animate-pulse rounded'
    return (
      <div className="flex items-center justify-center gap-2.5">
        <div className={`w-6 h-6 ${pulse}`} />
        <div className="flex flex-col gap-1">
          <div className={`h-2.5 w-14 ${pulse}`} />
          <div className={`h-2 w-10 ${pulse}`} />
        </div>
      </div>
    )
  }

  const avatarUrl = `https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png?size=32`

  return (
    <div className="inline-flex items-center gap-2.5 px-3 py-2 rounded-lg bg-bg-subtle border border-border-subtle">
      <div className="relative shrink-0">
        <img
          src={avatarUrl}
          alt={`${data.discord_user.global_name} avatar`}
          className="rounded-md w-6 h-6"
          loading="lazy"
          decoding="async"
        />
        <span className={`absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full ring-[2px] ring-[var(--bg)] ${statusColors[data.discord_status] ?? 'bg-zinc-500'}`} />
      </div>
      <div className="text-left leading-none">
        <div className="text-xs font-semibold text-fg">{data.discord_user.global_name}</div>
        <div className="flex items-center gap-1 mt-0.5">
          <span className={`w-1.5 h-1.5 rounded-full ${statusColors[data.discord_status] ?? 'bg-zinc-500'}`} />
          <span className="text-[10px] text-muted">{statusLabels[data.discord_status] ?? 'Offline'}</span>
        </div>
      </div>
    </div>
  )
}
