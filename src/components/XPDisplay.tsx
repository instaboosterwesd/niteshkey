import { cn } from '@/lib/utils'
import { Zap } from 'lucide-react'

interface XPDisplayProps {
  xp: number
  maxXP?: number
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function XPDisplay({ xp, maxXP = 1000, showLabel = true, size = 'md' }: XPDisplayProps) {
  const percentage = Math.min((xp / maxXP) * 100, 100)

  const sizeConfig = {
    sm: { text: 'text-xs', icon: 'h-3 w-3', bar: 'h-1.5' },
    md: { text: 'text-sm', icon: 'h-4 w-4', bar: 'h-2' },
    lg: { text: 'text-lg', icon: 'h-6 w-6', bar: 'h-3' }
  }

  const config = sizeConfig[size]

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Zap className={cn('text-xp', config.icon)} />
        {showLabel && (
          <span className={cn('font-semibold text-xp tabular-nums', config.text)}>
            {xp.toLocaleString()} / {maxXP.toLocaleString()}
          </span>
        )}
      </div>
      <div className={cn('w-full bg-muted rounded-full overflow-hidden', config.bar)}>
        <div
          className="h-full bg-gradient-to-r from-xp to-xp/80 rounded-full transition-all duration-500 ease-out relative"
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-shimmer" />
        </div>
      </div>
    </div>
  )
}
