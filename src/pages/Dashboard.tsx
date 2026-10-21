import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { supabase } from '@/lib/supabase'
import { Profile } from '@/types/database'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Zap, Coins, Flame, BookOpen, Gamepad2, Trophy, Star, Target, Clock, ArrowRight, TrendingUp } from 'lucide-react'

function StatCard({
  icon: Icon,
  value,
  label,
  sublabel,
  colorClass,
  gradientClass,
  delay,
}: {
  icon: React.ElementType
  value: string | number
  label: string
  sublabel: string
  colorClass: string
  gradientClass: string
  delay: string
}) {
  return (
    <Card className={`card-lift ${gradientClass} shadow-lg animate-appear-up ${delay} overflow-hidden relative group border-0`}>
      <CardContent className="p-6">
        {/* Glow orb */}
        <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full ${colorClass.replace('text-', 'bg-')}/15 blur-xl`} />

        <div className="flex items-start justify-between relative">
          <div>
            <p className="text-sm text-muted-foreground mb-1">{label}</p>
            <p className={`text-4xl font-black ${colorClass} mb-1`} style={{ fontFamily: 'Poppins, sans-serif' }}>
              {typeof value === 'number' ? value.toLocaleString() : value}
            </p>
            <p className="text-xs text-muted-foreground">{sublabel}</p>
          </div>
          <div className={`p-3 rounded-2xl ${colorClass.replace('text-', 'bg-')}/15 group-hover:scale-110 transition-transform`}>
            <Icon className={`h-7 w-7 ${colorClass}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Dashboard() {
  const { user } = useAuth()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return
    const fetch = async () => {
      const { data } = await supabase.from('profiles').select('*').eq('id', user.id).maybeSingle()
      if (data) setProfile(data as Profile)
      setLoading(false)
    }
    fetch()
  }, [user])

  if (loading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-6 min-h-screen gradient-hero">
        <div className="relative">
          <div className="w-20 h-20 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Zap className="h-8 w-8 text-primary" />
          </div>
        </div>
        <p className="text-muted-foreground font-medium">Loading your adventure...</p>
      </div>
    )
  }

  const xp = profile?.total_xp || 0
  const coins = profile?.total_coins || 0
  const streak = profile?.streak_count || 0
  const level = Math.floor(xp / 500) + 1
  const xpProgress = (xp % 500) / 500 * 100
  const firstName = profile?.display_name?.split(' ')[0] || 'Learner'

  const quickActions = [
    {
      title: 'Continue Learning',
      desc: 'Pick up where you left off',
      icon: BookOpen,
      color: 'text-violet-vivid',
      bg: 'bg-violet-vivid/10',
      border: 'border-violet-vivid/20',
      badge: '~15 min',
      badgeIcon: Clock,
      href: '/games',
    },
    {
      title: 'Play Games',
      desc: 'Earn bonus coins & XP',
      icon: Gamepad2,
      color: 'text-sky-clear',
      bg: 'bg-sky-clear/10',
      border: 'border-sky-clear/20',
      badge: '2x XP today',
      badgeIcon: Star,
      href: '/games',
    },
    {
      title: 'Daily Challenge',
      desc: 'Special mission available',
      icon: Target,
      color: 'text-rose-bright',
      bg: 'bg-rose-bright/10',
      border: 'border-rose-bright/20',
      badge: '3x rewards',
      badgeIcon: Zap,
      href: '/games',
    },
    {
      title: 'View Achievements',
      desc: 'See your trophy collection',
      icon: Trophy,
      color: 'text-amber-warm',
      bg: 'bg-coin/10',
      border: 'border-coin/20',
      badge: '3 new badges',
      badgeIcon: Trophy,
      href: '/profile',
    },
  ]

  return (
    <div className="flex-1 min-h-screen bg-gradient-to-b from-background via-muted/20 to-muted/40">
      {/* Hero welcome banner */}
      <div className="relative overflow-hidden">
        <div className="gradient-hero dot-grid">
          <div className="orb absolute w-80 h-80 bg-primary/15 -top-20 right-20 blur-3xl" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12">
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="animate-appear-up">
                <p className="text-muted-foreground text-sm font-medium mb-1">Good to see you back!</p>
                <h1 className="text-4xl md:text-5xl font-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Hey, <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">{firstName}</span>!
                </h1>
                <p className="text-muted-foreground mt-2">Ready for today's adventure?</p>
              </div>

              <div className="animate-appear-right glass rounded-3xl p-5 shadow-lg">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl level-badge flex items-center justify-center text-white text-2xl font-black shadow-lg"
                      style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {firstName[0]?.toUpperCase()}
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-coin text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center shadow level-badge">
                      {level}
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-sm">{profile?.display_name}</p>
                    <p className="text-xs text-muted-foreground mb-2">Level {level} Explorer</p>
                    <div className="w-36">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-xp font-bold">{xp % 500} XP</span>
                        <span className="text-muted-foreground">500</span>
                      </div>
                      <Progress value={xpProgress} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

        {/* ── STAT CARDS ─────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={Zap}
            value={xp}
            label="Experience Points"
            sublabel={`Level ${level} · ${500 - (xp % 500)} to next`}
            colorClass="text-xp"
            gradientClass="gradient-card-xp"
            delay="delay-100"
          />
          <StatCard
            icon={Coins}
            value={coins}
            label="Coins"
            sublabel="Spend in the shop"
            colorClass="text-coin"
            gradientClass="gradient-card-coin"
            delay="delay-200"
          />
          <StatCard
            icon={Flame}
            value={streak}
            label="Day Streak"
            sublabel={streak > 0 ? "Keep it burning!" : "Start today!"}
            colorClass="text-streak"
            gradientClass="gradient-card-streak"
            delay="delay-300"
          />
          <StatCard
            icon={Trophy}
            value="0"
            label="Achievements"
            sublabel="Complete lessons to unlock"
            colorClass="text-violet-vivid"
            gradientClass="gradient-card-achievements"
            delay="delay-400"
          />
        </div>

        {/* ── XP PROGRESS BAR ────────────────── */}
        <Card className="glass border-0 shadow-lg animate-appear-up delay-300 overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-xp/10">
                  <TrendingUp className="h-5 w-5 text-xp" />
                </div>
                <div>
                  <h3 className="font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Level {level} Progress</h3>
                  <p className="text-sm text-muted-foreground">
                    {xp % 500} / 500 XP to reach Level {level + 1}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black text-xp" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {Math.round(xpProgress)}%
                </span>
              </div>
            </div>
            <div className="relative h-4 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-xp relative overflow-hidden transition-all duration-1000"
                style={{ width: `${xpProgress}%` }}
              >
                <div className="absolute inset-0 shimmer" />
              </div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              <span>Level {level}</span>
              <span>Level {level + 1}</span>
            </div>
          </CardContent>
        </Card>

        {/* ── QUICK ACTIONS ──────────────────── */}
        <div>
          <h2 className="text-2xl font-black mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            What would you like to do?
          </h2>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {quickActions.map(({ title, desc, icon: Icon, color, bg, border, badge, badgeIcon: BadgeIcon, href }, i) => (
              <Link to={href} key={title}>
                <Card
                  className={`card-lift h-full bg-card/80 backdrop-blur border ${border} shadow animate-appear-up group cursor-pointer`}
                  style={{ animationDelay: `${(i + 1) * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className={`inline-flex p-3 rounded-2xl ${bg} mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className={`h-7 w-7 ${color}`} />
                    </div>
                    <h3 className="font-bold mb-1 group-hover:text-primary transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{desc}</p>
                    <div className={`inline-flex items-center gap-1.5 text-xs font-bold ${color} ${bg} px-3 py-1.5 rounded-full`}>
                      <BadgeIcon className="h-3 w-3" />
                      {badge}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* ── RECENT ACTIVITY ────────────────── */}
        <Card className="glass border-0 shadow-lg animate-appear-up delay-500">
          <CardContent className="p-8 text-center">
            <div className="inline-flex p-5 rounded-full bg-muted mb-4 animate-float">
              <Target className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>No activity yet</h3>
            <p className="text-muted-foreground mb-6">Complete your first lesson to start building your adventure log!</p>
            <Link to="/games">
              <button className="gradient-primary text-white px-8 py-3 rounded-2xl font-bold btn-glow btn-magnetic text-sm flex items-center gap-2 mx-auto">
                Start First Lesson
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
