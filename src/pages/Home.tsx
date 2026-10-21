import { Link } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Zap, Coins, Flame, Star, BookOpen, Gamepad2, Trophy, Users } from 'lucide-react'

function FloatingOrb({ className }: { className: string }) {
  return <div className={`orb absolute pointer-events-none ${className}`} />
}

function FloatingIcon({ icon: Icon, color, delay, top, left, size = 'md' }: {
  icon: React.ElementType
  color: string
  delay: string
  top: string
  left: string
  size?: 'sm' | 'md' | 'lg'
}) {
  const sizes = { sm: 'w-10 h-10', md: 'w-14 h-14', lg: 'w-18 h-18' }
  const iconSizes = { sm: 'h-5 w-5', md: 'h-7 w-7', lg: 'h-9 w-9' }
  return (
    <div
      className={`absolute ${sizes[size]} rounded-2xl glass flex items-center justify-center shadow-lg animate-float`}
      style={{ top, left, animationDelay: delay }}
    >
      <Icon className={`${iconSizes[size]} ${color}`} />
    </div>
  )
}

export default function Home() {
  const { user } = useAuth()

  return (
    <div className="min-h-screen overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen gradient-hero dot-grid flex items-center overflow-hidden">

        {/* Background orbs */}
        <FloatingOrb className="w-96 h-96 bg-violet-300/30 top-10 -left-20" />
        <FloatingOrb className="w-80 h-80 bg-indigo-300/25 -top-10 right-10" />
        <FloatingOrb className="w-64 h-64 bg-purple-200/30 bottom-20 left-1/3" />
        <FloatingOrb className="w-48 h-48 bg-sky-300/20 bottom-10 right-1/4" />

        {/* Floating icons */}
        <FloatingIcon icon={Star} color="text-amber-warm" delay="0s" top="15%" left="5%" size="md" />
        <FloatingIcon icon={BookOpen} color="text-emerald-gem" delay="0.8s" top="20%" left="88%" size="sm" />
        <FloatingIcon icon={Trophy} color="text-amber-warm" delay="1.4s" top="70%" left="8%" size="sm" />
        <FloatingIcon icon={Zap} color="text-violet-vivid" delay="0.4s" top="75%" left="85%" size="md" />
        <FloatingIcon icon={Gamepad2} color="text-sky-clear" delay="1.8s" top="45%" left="92%" size="sm" />
        <FloatingIcon icon={Flame} color="text-streak" delay="1.1s" top="10%" left="72%" size="sm" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Text */}
            <div className="space-y-8 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold animate-appear-up">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Trusted by 50,000+ young learners
              </div>

              <div className="animate-appear-up delay-100">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground leading-[0.95]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Learn.
                  <br />
                  <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                    Play.
                  </span>
                  <br />
                  Grow.
                </h1>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg animate-appear-up delay-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                Transform every lesson into an adventure. Earn XP, collect rewards, and level up your knowledge on KidSpark — the platform where learning feels like magic.
              </p>

              <div className="flex flex-wrap gap-4 animate-appear-up delay-300">
                {user ? (
                  <Link to="/dashboard">
                    <Button size="lg" className="gradient-primary text-white text-lg px-8 py-6 rounded-2xl btn-glow btn-magnetic shadow-lg border-0">
                      Continue Learning
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link to="/signup">
                      <Button size="lg" className="gradient-primary text-white text-lg px-8 py-6 rounded-2xl btn-glow btn-magnetic shadow-lg border-0">
                        Start for Free
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link to="/login">
                      <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl btn-magnetic border-2">
                        Sign In
                      </Button>
                    </Link>
                  </>
                )}
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-4 animate-appear-up delay-400">
                <div className="flex -space-x-3">
                  {['violet', 'indigo', 'emerald', 'amber'].map((c, i) => (
                    <div key={i} className={`w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold bg-${c}-500`}
                      style={{ background: ['oklch(0.55 0.26 295)', 'oklch(0.48 0.24 278)', 'oklch(0.62 0.2 160)', 'oklch(0.78 0.18 75)'][i] }}>
                      {['A', 'B', 'C', 'D'][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 star-filled fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">4.9/5 from 12,000+ reviews</p>
                </div>
              </div>
            </div>

            {/* Right: Hero illustration */}
            <div className="relative flex items-center justify-center animate-appear-right delay-200 lg:h-[600px]">
              {/* Glow ring behind image */}
              <div className="absolute w-80 h-80 rounded-full bg-primary/15 blur-3xl animate-pulse-ring" />

              {/* Floating explorer kid */}
              <img
                src="/explorer-kid.webp"
                alt="KidSpark Explorer"
                className="relative z-10 w-80 h-80 object-contain animate-float drop-shadow-2xl"
              />

              {/* Floating stat cards around the character */}
              <div className="absolute top-8 right-0 glass rounded-2xl px-4 py-3 shadow-xl animate-appear-up delay-500 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-xp/20 flex items-center justify-center">
                    <Zap className="h-4 w-4 text-xp" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">XP Earned</p>
                    <p className="font-bold text-sm text-xp">+250 XP</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 left-0 glass rounded-2xl px-4 py-3 shadow-xl animate-appear-up delay-600 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-streak/20 flex items-center justify-center">
                    <Flame className="h-4 w-4 text-streak" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Daily Streak</p>
                    <p className="font-bold text-sm text-streak">14 Days</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -left-4 glass rounded-2xl px-4 py-3 shadow-xl animate-appear-up delay-700 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-coin/20 flex items-center justify-center">
                    <Coins className="h-4 w-4 text-coin" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Coins</p>
                    <p className="font-bold text-sm text-coin">1,240</p>
                  </div>
                </div>
              </div>

              {/* Floating objects from image */}
              <img
                src="/floating-objects.webp"
                alt=""
                className="absolute inset-0 w-full h-full object-contain opacity-30 animate-spin-slow pointer-events-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-appear-up">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Why kids love
              <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent"> KidSpark</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every feature is designed to make learning feel like play
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                color: 'text-xp',
                bg: 'bg-xp/10',
                title: 'Earn XP & Level Up',
                desc: 'Complete lessons to earn experience points and unlock new levels. Watch your progress bar fill with every answer!',
                delay: 'delay-100',
                stat: '500+ Levels'
              },
              {
                icon: Trophy,
                color: 'text-amber-warm',
                bg: 'bg-coin/10',
                title: 'Win Achievements',
                desc: 'Unlock rare badges, trophies and collectibles as you master skills. Show off your collection on your profile!',
                delay: 'delay-200',
                stat: '200+ Badges'
              },
              {
                icon: Gamepad2,
                color: 'text-violet-vivid',
                bg: 'bg-violet-vivid/10',
                title: 'Play Learning Games',
                desc: 'Practice math, science, reading and more through fun interactive games that make studying addictive.',
                delay: 'delay-300',
                stat: '50+ Games'
              },
            ].map(({ icon: Icon, color, bg, title, desc, delay, stat }) => (
              <Card key={title} className={`card-lift glass border-0 shadow-lg animate-appear-up ${delay} overflow-hidden group`}>
                <CardContent className="p-8">
                  <div className={`inline-flex w-16 h-16 rounded-2xl ${bg} items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-8 w-8 ${color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{desc}</p>
                  <div className={`mt-6 inline-flex items-center gap-1 text-sm font-bold ${color}`}>
                    <Star className="h-4 w-4 fill-current" />
                    {stat}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBJECTS ────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-appear-up">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Master Every Subject
            </h2>
            <p className="text-xl text-muted-foreground">Interactive courses for every grade level</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Math', icon: '🔢', cls: 'subject-math', color: 'text-indigo-deep' },
              { name: 'English', icon: '📚', cls: 'subject-english', color: 'text-emerald-gem' },
              { name: 'Science', icon: '🔬', cls: 'subject-science', color: 'text-violet-vivid' },
              { name: 'History', icon: '🏛', cls: 'subject-history', color: 'text-amber-warm' },
              { name: 'Coding', icon: '💻', cls: 'subject-code', color: 'text-sky-clear' },
              { name: 'Art', icon: '🎨', cls: 'subject-games', color: 'text-rose-bright' },
            ].map(({ name, icon, cls, color }, i) => (
              <div
                key={name}
                className={`card-lift rounded-2xl ${cls} p-6 flex flex-col items-center gap-3 cursor-pointer animate-appear-up`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="text-4xl">{icon}</span>
                <span className={`font-bold text-sm ${color}`} style={{ fontFamily: 'Poppins, sans-serif' }}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────── */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50K+', label: 'Active Learners', icon: Users },
              { value: '200+', label: 'Interactive Lessons', icon: BookOpen },
              { value: '50+', label: 'Learning Games', icon: Gamepad2 },
              { value: '4.9★', label: 'Average Rating', icon: Star },
            ].map(({ value, label, icon: Icon }, i) => (
              <div key={label} className={`text-center animate-appear-up`} style={{ animationDelay: `${i * 100}ms` }}>
                <Icon className="h-8 w-8 mx-auto mb-3 opacity-80" />
                <p className="text-4xl font-black mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{value}</p>
                <p className="text-white/80 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section className="py-24 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-appear-up">
          <div className="relative">
            <FloatingOrb className="w-80 h-80 bg-primary/15 top-0 left-1/2 -translate-x-1/2" />
            <img
              src="/owl-mascot.webp"
              alt="KidSpark Owl"
              className="relative z-10 w-40 h-40 object-contain mx-auto mb-6 animate-float drop-shadow-xl"
            />
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Ready to spark
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">your learning journey?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands of students who are already learning, playing, and growing every day with KidSpark.
            </p>
            {!user && (
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/signup">
                  <Button size="lg" className="gradient-primary text-white text-lg px-10 py-6 rounded-2xl btn-glow btn-magnetic border-0 shadow-xl">
                    Create Free Account
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button size="lg" variant="outline" className="text-lg px-10 py-6 rounded-2xl btn-magnetic border-2">
                    I have an account
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
