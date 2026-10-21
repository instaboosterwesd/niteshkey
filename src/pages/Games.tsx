import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, Clock, Zap, TrendingUp, Calculator, BookOpen, FlaskConical, Swords, Code, Palette, Coins, Target } from 'lucide-react'

interface Game {
  id: string
  name: string
  description: string
  icon: React.ElementType
  subjectClass: string
  iconColor: string
  iconBg: string
  xpReward: number
  coinReward: number
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  rating: number
}

const games: Game[] = [
  {
    id: '1', name: 'Math Quest', description: 'Solve equations, unlock new worlds',
    icon: Calculator, subjectClass: 'subject-math', iconColor: 'text-indigo-deep', iconBg: 'bg-indigo-deep/10',
    xpReward: 75, coinReward: 30, difficulty: 'Beginner', duration: '5-10 min', rating: 5,
  },
  {
    id: '2', name: 'Word Master', description: 'Build vocabulary, spell to win',
    icon: BookOpen, subjectClass: 'subject-english', iconColor: 'text-emerald-gem', iconBg: 'bg-emerald-gem/10',
    xpReward: 100, coinReward: 40, difficulty: 'Intermediate', duration: '8-12 min', rating: 5,
  },
  {
    id: '3', name: 'Science Explorer', description: 'Discover secrets of the universe',
    icon: FlaskConical, subjectClass: 'subject-science', iconColor: 'text-violet-vivid', iconBg: 'bg-violet-vivid/10',
    xpReward: 125, coinReward: 50, difficulty: 'Intermediate', duration: '10-15 min', rating: 4,
  },
  {
    id: '4', name: 'Coin Collector', description: 'Count, add, multiply your way to gold',
    icon: Coins, subjectClass: 'subject-games', iconColor: 'text-coin', iconBg: 'bg-coin/10',
    xpReward: 50, coinReward: 60, difficulty: 'Beginner', duration: '5-8 min', rating: 5,
  },
  {
    id: '5', name: 'History Adventure', description: 'Travel time, unlock ancient secrets',
    icon: Swords, subjectClass: 'subject-history', iconColor: 'text-amber-warm', iconBg: 'bg-amber-warm/10',
    xpReward: 150, coinReward: 60, difficulty: 'Advanced', duration: '12-18 min', rating: 4,
  },
  {
    id: '6', name: 'Code Academy', description: 'Build apps, think like a programmer',
    icon: Code, subjectClass: 'subject-code', iconColor: 'text-sky-clear', iconBg: 'bg-sky-clear/10',
    xpReward: 200, coinReward: 80, difficulty: 'Advanced', duration: '15-20 min', rating: 5,
  },
  {
    id: '7', name: 'Art Studio', description: 'Create masterpieces, earn creativity XP',
    icon: Palette, subjectClass: 'subject-games', iconColor: 'text-rose-bright', iconBg: 'bg-rose-bright/10',
    xpReward: 75, coinReward: 30, difficulty: 'Beginner', duration: '10-15 min', rating: 4,
  },
  {
    id: '8', name: 'Logic Master', description: 'Crack puzzles, train your brain',
    icon: Target, subjectClass: 'subject-math', iconColor: 'text-primary', iconBg: 'bg-primary/10',
    xpReward: 100, coinReward: 45, difficulty: 'Intermediate', duration: '8-12 min', rating: 5,
  },
]

const difficultyConfig = {
  Beginner: { color: 'text-emerald-gem', bg: 'bg-emerald-gem/10', label: 'Beginner' },
  Intermediate: { color: 'text-amber-warm', bg: 'bg-amber-warm/10', label: 'Intermediate' },
  Advanced: { color: 'text-rose-bright', bg: 'bg-rose-bright/10', label: 'Advanced' },
}

export default function Games() {
  return (
    <div className="flex-1 min-h-screen bg-gradient-to-b from-background to-muted/30">

      {/* ── HEADER ──────────────────────────── */}
      <div className="relative overflow-hidden gradient-hero dot-grid pb-12 pt-10">
        <div className="orb absolute w-72 h-72 bg-primary/15 -top-10 right-10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-appear-up">
            <h1 className="text-4xl md:text-5xl font-black mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Learning{' '}
              <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
                Games
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">Master skills while having a blast</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* ── DAILY CHALLENGE BANNER ─────────── */}
        <div className="relative overflow-hidden rounded-3xl gradient-primary p-8 shadow-xl animate-appear-up">
          <div className="shimmer absolute inset-0" />
          <div className="relative flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center shadow-inner">
                <Star className="h-8 w-8 text-white fill-white" />
              </div>
              <div className="text-white">
                <p className="text-sm font-semibold opacity-90 mb-0.5">Special Event</p>
                <h3 className="text-2xl font-black" style={{ fontFamily: 'Poppins, sans-serif' }}>Daily Challenge</h3>
                <p className="text-white/80 text-sm mt-1">Complete today's mission for triple XP rewards!</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-3">
              <div className="flex items-center gap-4 text-white/90 text-sm">
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4" />
                  <span className="font-bold">3x XP</span>
                </div>
                <div className="flex items-center gap-1">
                  <Coins className="h-4 w-4" />
                  <span className="font-bold">+200 coins</span>
                </div>
              </div>
              <Button className="bg-white text-primary hover:bg-white/90 font-bold px-6 rounded-2xl btn-magnetic">
                Start Challenge
                <TrendingUp className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* ── SUBJECT FILTERS ─────────────────── */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 animate-appear-up delay-100">
          {['All Subjects', 'Math', 'English', 'Science', 'History', 'Coding', 'Art'].map((f, i) => (
            <button
              key={f}
              className={`flex-shrink-0 px-5 py-2 rounded-2xl text-sm font-bold transition-all btn-magnetic ${
                i === 0
                  ? 'gradient-primary text-white shadow-md'
                  : 'bg-card border border-border hover:border-primary/40'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* ── GAMES GRID ──────────────────────── */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {games.map((game, i) => {
            const diff = difficultyConfig[game.difficulty]
            return (
              <Card
                key={game.id}
                className={`card-lift ${game.subjectClass} shadow-md cursor-pointer group animate-appear-up border-0`}
                style={{ animationDelay: `${i * 75}ms` }}
              >
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`p-3.5 rounded-2xl ${game.iconBg} group-hover:scale-110 transition-transform shadow-sm`}>
                      <game.icon className={`h-7 w-7 ${game.iconColor}`} />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${diff.bg} ${diff.color}`}>
                      {diff.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-black text-base mb-1.5 group-hover:text-primary transition-colors leading-tight"
                    style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {game.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{game.description}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className={`h-3.5 w-3.5 ${j < game.rating ? 'star-filled fill-current' : 'star-empty'}`} />
                    ))}
                  </div>

                  {/* Stats row */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-xp font-bold">
                        <Zap className="h-3.5 w-3.5" />
                        <span>+{game.xpReward}</span>
                      </div>
                      <div className="flex items-center gap-1 text-coin font-bold">
                        <Coins className="h-3.5 w-3.5" />
                        <span>+{game.coinReward}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{game.duration}</span>
                    </div>
                  </div>

                  {/* Play button */}
                  <button className={`mt-5 w-full py-3 rounded-2xl text-sm font-bold ${game.iconBg} ${game.iconColor} hover:shadow-md transition-all btn-magnetic`}>
                    Play Now
                  </button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
