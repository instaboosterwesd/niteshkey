import { Badge } from '@/types/database'
import { cn } from '@/lib/utils'

interface BadgeCardProps {
  badge: Badge
  unlocked?: boolean
}

export default function BadgeCard({ badge, unlocked = false }: BadgeCardProps) {
  return (
    <div className={cn(
      'p-4 rounded-xl border text-center transition-all',
      unlocked
        ? 'bg-primary/5 border-primary/20'
        : 'bg-muted/50 border-border opacity-50'
    )}>
      <div className={cn(
        'inline-flex p-3 rounded-full',
        unlocked ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
      )}>
        <span className="text-xl font-bold">{badge.name[0]}</span>
      </div>
      <h3 className="font-semibold text-sm mt-3">{badge.name}</h3>
      <p className="text-xs text-muted-foreground mt-1">{badge.description}</p>
      {unlocked && (
        <span className="inline-block mt-2 text-xs font-bold text-primary">Unlocked!</span>
      )}
    </div>
  )
}
