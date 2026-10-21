import { cn } from '@/lib/utils'
import { Coins } from 'lucide-react'

interface CoinDisplayProps {
  coins: number
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function CoinDisplay({ coins, showLabel = true, size = 'md' }: CoinDisplayProps) {
  const sizeConfig = {
    sm: { text: 'text-xs', icon: 'h-3 w-3' },
    md: { text: 'text-sm', icon: 'h-4 w-4' },
    lg: { text: 'text-2xl', icon: 'h-6 w-6' }
  }

  const config = sizeConfig[size]

  return (
    <div className="flex items-center gap-2">
      <Coins className={cn('text-coin', config.icon)} />
      <span className={cn('font-bold text-coin tabular-nums', config.text)}>
        {coins.toLocaleString()}
      </span>
      {showLabel && (
        <span className={cn('text-muted-foreground', config.text)}>coins</span>
      )}
    </div>
  )
}
