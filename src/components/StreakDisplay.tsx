import { cn } from '@/lib/utils'
import { Flame } from 'lucide-react'

interface StreakDisplayProps {
  streak: number
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function StreakDisplay({ streak, showLabel = true, size = 'md' }: StreakDisplayProps) {
  const sizeConfig = {
    sm: { text: 'text-xs', icon: 'h-3 w-3' },
    md: { text: 'text-sm', icon: 'h-4 w-4' },
    lg: { text: 'text-2xl', icon: 'h-6 w-6' }
  }

  const config = sizeConfig[size]

  return (
    <div className="flex items-center gap-2">
      <Flame className={cn('text-streak', config.icon, streak > 0 && 'animate-pulse')} />
      <span className={cn('font-bold text-streak tabular-nums', config.text)}>
        {streak}
      </span>
      {showLabel && (
        <span className={cn('text-muted-foreground', config.text)}>days</span>
      )}
    </div>
  )
}
