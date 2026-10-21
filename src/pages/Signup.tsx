import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { User, Mail, Lock, ArrowRight, GraduationCap, Users, Heart } from 'lucide-react'

const roles = [
  { value: 'student', label: 'Student', icon: GraduationCap, desc: 'Learn & grow', color: 'text-violet-vivid', bg: 'bg-violet-vivid/10', border: 'border-violet-vivid/30' },
  { value: 'teacher', label: 'Teacher', icon: Users, desc: 'Guide students', color: 'text-emerald-gem', bg: 'bg-emerald-gem/10', border: 'border-emerald-gem/30' },
  { value: 'parent', label: 'Parent', icon: Heart, desc: 'Track progress', color: 'text-rose-bright', bg: 'bg-rose-bright/10', border: 'border-rose-bright/30' },
] as const

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<'student' | 'teacher' | 'parent'>('student')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { signUp } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await signUp(email, password, name, role)
      navigate('/dashboard')
    } catch (err: any) {
      setError(err.message || 'Failed to sign up')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen gradient-hero dot-grid flex items-center overflow-hidden relative">
      <div className="orb absolute w-96 h-96 bg-violet-300/20 -top-20 right-10" />
      <div className="orb absolute w-80 h-80 bg-emerald-300/15 bottom-0 -left-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Character */}
          <div className="hidden lg:flex flex-col items-center justify-center animate-appear-left">
            <div className="relative w-full max-w-md h-[460px] flex items-center justify-center">
              <div className="absolute w-72 h-72 rounded-full bg-primary/15 blur-3xl animate-pulse" />
              <img
                src="/floating-objects.webp"
                alt="Learning objects"
                className="relative z-10 w-80 h-80 object-contain animate-float drop-shadow-xl"
              />
            </div>

            <div className="space-y-4 w-full max-w-sm">
              {[
                { icon: '★', text: 'Complete lessons to earn XP', color: 'text-xp' },
                { icon: '⬡', text: 'Collect coins for achievements', color: 'text-coin' },
                { icon: '◆', text: 'Build streaks to unlock rewards', color: 'text-streak' },
              ].map(({ icon, text, color }) => (
                <div key={text} className="flex items-center gap-3 glass rounded-xl px-4 py-3 shadow">
                  <span className={`text-lg font-bold ${color}`}>{icon}</span>
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Sign up form */}
          <div className="animate-appear-right">
            <div className="glass rounded-3xl p-10 shadow-2xl max-w-md mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-black mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Join KidSpark!
                </h1>
                <p className="text-muted-foreground">Start your learning adventure today — it's free</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-4 rounded-2xl bg-destructive/10 border border-destructive/20 text-destructive text-sm animate-appear-scale">
                    {error}
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="name" className="font-semibold text-sm">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="pl-12 h-12 rounded-xl border-border/60 bg-white/80"
                      placeholder="Your name"
                    />
                  </div>
                </div>

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
                      minLength={6}
                      className="pl-12 h-12 rounded-xl border-border/60 bg-white/80"
                      placeholder="Min 6 characters"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="font-semibold text-sm">I am a...</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {roles.map((r) => (
                      <button
                        key={r.value}
                        type="button"
                        onClick={() => setRole(r.value)}
                        className={`flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all btn-magnetic ${
                          role === r.value
                            ? `${r.border} ${r.bg} shadow-md`
                            : 'border-border/40 hover:border-border bg-white/50'
                        }`}
                      >
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${role === r.value ? r.bg : 'bg-muted'}`}>
                          <r.icon className={`h-5 w-5 ${role === r.value ? r.color : 'text-muted-foreground'}`} />
                        </div>
                        <span className={`text-xs font-bold ${role === r.value ? r.color : 'text-muted-foreground'}`}>
                          {r.label}
                        </span>
                      </button>
                    ))}
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
                      Creating account...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Create Free Account
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  )}
                </Button>
              </form>

              <p className="text-center text-sm text-muted-foreground mt-6">
                Already have an account?{' '}
                <Link to="/login" className="text-primary font-bold hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
