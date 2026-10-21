import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { supabase } from '@/lib/supabase'
import { Profile } from '@/types/database'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Zap, Coins, Flame, Mail, Calendar, User, Trophy, Star, Award, Medal, Crown, Target, TrendingUp, Shield, Swords } from 'lucide-react'

const achievementData = [
  { name: 'Champion', icon: Trophy, color: 'text-amber-warm', bg: 'bg-amber-warm/15', unlocked: true },
  { name: 'Star Player', icon: Star, color: 'text-yellow-500', bg: 'bg-yellow-500/15', unlocked: true },
  { name: 'Goal Getter', icon: Target, color: 'text-emerald-gem', bg: 'bg-emerald-gem/15', unlocked: true },
  { name: 'Warrior', icon: Swords, color: 'text-rose-bright', bg: 'bg-rose-bright/15', unlocked: false },
  { name: 'Achiever', icon: Award, color: 'text-indigo-deep', bg: 'bg-indigo-deep/15', unlocked: false },
  { name: 'Guardian', icon: Shield, color: 'text-sky-clear', bg: 'bg-sky-clear/15', unlocked: false },
  { name: 'Legend', icon: Crown, color: 'text-violet-vivid', bg: 'bg-violet-vivid/15', unlocked: false },
  { name: 'Master', icon: Medal, color: 'text-streak', bg: 'bg-streak/15', unlocked: false },
]

export default function ProfilePage() {
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
            <User className="h-8 w-8 text-primary" />
          </div>
        </div>
        <p className="text-muted-foreground font-medium">Loading profile...</p>
      </div>
    )
  }

  const xp = profile?.total_xp || 0
  const coins = profile?.total_coins || 0
  const streak = profile?.streak_count || 0
  const level = Math.floor(xp / 500) + 1
  const xpProgress = (xp % 500) / 500 * 100

  return (
    <div className="flex-1 min-h-screen bg-gradient-to-b from-background to-muted/30">

      {/* ── PROFILE HEADER ──────────────────── */}
      <div className="relative overflow-hidden gradient-hero dot-grid pb-20 pt-10">
        <div className="orb absolute w-72 h-72 bg-primary/15 -top-10 right-20 blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-8 animate-appear-up">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 rounded-3xl level-badge flex items-center justify-center text-white text-5xl font-black shadow-2xl animate-appear-scale"
                style={{ fontFamily: 'Poppins, sans-serif' }}>
                {profile?.display_name?.[0]?.toUpperCase() || 'U'}
              </div>
              {/* Level badge */}
              <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-2xl level-badge flex items-center justify-center text-white font-black shadow-lg text-sm"
                style={{ fontFamily: 'Poppins, sans-serif' }}>
                {level}
              </div>
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-4xl font-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {profile?.display_name}
              </h1>
              <div className="flex items-center gap-2 mt-2 flex-wrap justify-center md:justify-start">
                <Badge className="capitalize rounded-full gradient-primary text-white border-0">
                  {profile?.role}
                </Badge>
                <span className="text-muted-foreground text-sm">Level {level} Explorer</span>
              </div>

              {/* XP Progress */}
              <div className="mt-4 w-56">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-xp font-bold">Level {level}</span>
                  <span className="text-muted-foreground">{xp % 500} / 500 XP</span>
                </div>
                <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-xp relative overflow-hidden transition-all duration-1000"
                    style={{ width: `${xpProgress}%` }}
                  >
                    <div className="absolute inset-0 shimmer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-16 space-y-8">

        {/* ── STAT CARDS ────────────────────── */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: Zap, value: xp.toLocaleString(), label: 'Total XP', color: 'text-xp', bg: 'gradient-card-xp', delay: 'delay-100' },
            { icon: Coins, value: coins.toLocaleString(), label: 'Total Coins', color: 'text-coin', bg: 'gradient-card-coin', delay: 'delay-200' },
            { icon: Flame, value: streak, label: 'Day Streak', color: 'text-streak', bg: 'gradient-card-streak', delay: 'delay-300' },
          ].map(({ icon: Icon, value, label, color, bg, delay }) => (
            <Card key={label} className={`${bg} border-0 shadow-lg animate-appear-up ${delay} text-center`}>
              <CardContent className="p-5">
                <div className={`inline-flex p-2.5 rounded-xl ${color.replace('text-', 'bg-')}/10 mb-3`}>
                  <Icon className={`h-6 w-6 ${color}`} />
                </div>
                <p className={`text-3xl font-black ${color}`} style={{ fontFamily: 'Poppins, sans-serif' }}>{value}</p>
                <p className="text-xs text-muted-foreground mt-1">{label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ── ACHIEVEMENTS ──────────────────── */}
        <Card className="glass border-0 shadow-lg animate-appear-up delay-400">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Achievements
              <span className="ml-3 text-sm font-medium text-muted-foreground">3 / 8 unlocked</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {achievementData.map(({ name, icon: Icon, color, bg, unlocked }) => (
                <div
                  key={name}
                  className={`relative p-4 rounded-2xl text-center transition-all ${
                    unlocked
                      ? `${bg} shadow-sm card-lift`
                      : 'bg-muted/40 opacity-50'
                  }`}
                >
                  <div className={`inline-flex p-3 rounded-xl ${unlocked ? bg : 'bg-muted'} mb-3`}>
                    <Icon className={`h-7 w-7 ${unlocked ? color : 'text-muted-foreground'}`} />
                  </div>
                  <p className={`font-bold text-xs ${unlocked ? 'text-foreground' : 'text-muted-foreground'}`}
                    style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {name}
                  </p>
                  {unlocked && (
                    <div className="absolute top-2 right-2">
                      <Star className="h-3 w-3 star-filled fill-current animate-star-pop" />
                    </div>
                  )}
                  {!unlocked && (
                    <p className="text-xs text-muted-foreground mt-1">Locked</p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ── ACCOUNT INFO ──────────────────── */}
        <Card className="glass border-0 shadow-lg animate-appear-up delay-500">
          <CardHeader>
            <CardTitle className="text-xl font-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Account Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { icon: Mail, label: 'Email', value: user?.email || '—' },
              { icon: User, label: 'Role', value: profile?.role ? profile.role.charAt(0).toUpperCase() + profile.role.slice(1) : '—' },
              {
                icon: Calendar,
                label: 'Member Since',
                value: profile?.created_at
                  ? new Date(profile.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
                  : '—'
              },
              { icon: TrendingUp, label: 'Level', value: `Level ${level} (${xp} total XP)` },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 p-4 rounded-2xl bg-muted/40 hover:bg-muted/60 transition-colors">
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="font-semibold text-sm">{value}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
