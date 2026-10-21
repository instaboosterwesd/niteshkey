import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Mail, Lock, ArrowRight, Star, Zap } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { signIn } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await signIn(email, password)
      navigate('/dashboard')
    } catch (err: any) {
      setError(err.message || 'Failed to sign in')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen gradient-hero dot-grid flex items-center overflow-hidden relative">
      {/* Background orbs */}
      <div className="orb absolute w-96 h-96 bg-violet-300/20 -top-20 -left-20" />
      <div className="orb absolute w-80 h-80 bg-indigo-300/20 -bottom-20 right-0" />
      <div className="orb absolute w-60 h-60 bg-purple-200/25 top-1/2 left-1/3" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Character scene */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-8 animate-appear-left">
            {/* Floating stats */}
            <div className="relative w-full max-w-md h-[500px] flex items-center justify-center">
              {/* Glow behind character */}
              <div className="absolute w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-pulse" />

              {/* Owl mascot */}
              <img
                src="/owl-mascot.webp"
                alt="KidSpark Owl"
                className="relative z-10 w-72 h-72 object-contain animate-float drop-shadow-2xl"
              />

              {/* Floating achievement card top-right */}
              <div className="absolute top-10 right-0 glass rounded-2xl px-5 py-4 shadow-xl animate-appear-up delay-400 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-warm/20 flex items-center justify-center">
                    <Star className="h-5 w-5 text-amber-warm fill-current" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Achievement</p>
                    <p className="font-bold text-sm">Math Wizard</p>
                  </div>
                </div>
              </div>

              {/* XP card bottom-left */}
              <div className="absolute bottom-16 -left-4 glass rounded-2xl px-5 py-4 shadow-xl animate-appear-up delay-500 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-xp/20 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-xp" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Today's XP</p>
                    <p className="font-bold text-sm text-xp">+320 XP</p>
                  </div>
                </div>
              </div>

              {/* Stars scattered */}
              {[
                { top: '8%', left: '15%', size: 'h-5 w-5', delay: '0s' },
                { top: '80%', left: '70%', size: 'h-4 w-4', delay: '0.5s' },
                { top: '55%', left: '5%', size: 'h-3 w-3', delay: '1s' },
              ].map((s, i) => (
                <Star
                  key={i}
                  className={`absolute ${s.size} text-amber-warm fill-current animate-float opacity-60`}
                  style={{ top: s.top, left: s.left, animationDelay: s.delay }}
                />
              ))}
            </div>

            <div className="text-center">
              <p className="text-2xl font-black text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
                "Learning is the greatest adventure!"
              </p>
              <p className="text-muted-foreground mt-2">— Professor Spark, your guide</p>
            </div>
          </div>

          {/* Right: Login form */}
          <div className="animate-appear-right">
            <div className="glass rounded-3xl p-10 shadow-2xl max-w-md mx-auto">
              {/* Logo on mobile only */}
              <div className="lg:hidden flex justify-center mb-8">
                <img src="/owl-mascot.webp" alt="KidSpark" className="w-24 h-24 object-contain animate-float" />
              </div>

              <div className="mb-8">
                <h1 className="text-3xl font-black mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Welcome back!
                </h1>
                <p className="text-muted-foreground">Sign in to continue your adventure</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-4 rounded-2xl bg-destructive/10 border border-destructive/20 text-destructive text-sm animate-appear-scale">
                    {error}
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-semibold text-sm">Email address</Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-12 h-12 rounded-xl border-border/60 bg-white/80"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="font-semibold text-sm">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="pl-12 h-12 rounded-xl border-border/60 bg-white/80"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  className="w-full gradient-primary text-white h-14 rounded-2xl text-base font-bold btn-glow btn-magnetic border-0 shadow-lg"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Signing in...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Sign In
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  )}
                </Button>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border/50" />
                </div>
                <div className="relative flex justify-center text-xs text-muted-foreground">
                  <span className="bg-white/80 px-3">New to KidSpark?</span>
                </div>
              </div>

              <Link to="/signup">
                <Button variant="outline" size="lg" className="w-full h-12 rounded-2xl btn-magnetic border-2 font-semibold">
                  Create a Free Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
