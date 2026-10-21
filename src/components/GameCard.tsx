import { Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Game } from '@/types/database'
import { Star, Clock } from 'lucide-react'

interface GameCardProps {
  game: Game
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link to={`/game/${game.id}`}>
      <Card className="card-hover bg-card/80 backdrop-blur border-border/50 cursor-pointer group">
        <CardContent className="p-6">
          <div className="flex flex-col items-start gap-4">
            <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <span className="text-3xl font-bold text-primary">{game.name[0]}</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{game.name}</h3>
              <p className="text-sm text-muted-foreground">{game.description}</p>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 text-xp" />
                <span>+{50} XP</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>5-10 min</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
