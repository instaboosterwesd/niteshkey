import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { BookOpen, Gamepad2, Trophy, Sparkles } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <nav className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-2">
            <span className="text-4xl">🦉</span>
            <span className="text-2xl font-bold text-primary">KidSpark Academy</span>
          </div>
          <div className="flex gap-3">
            <Link to="/login"><Button variant="outline">Log In</Button></Link>
            <Link to="/signup"><Button>Sign Up Free</Button></Link>
          </div>
        </nav>

        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
            Learn, Play <span className="text-primary">&</span> Grow
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The fun way for kids to master Maths, English, and Science. Earn XP, collect coins, and unlock awesome rewards!
          </p>
          <Link to="/signup"><Button size="lg" className="text-lg px-8 py-6">Start Learning Free</Button></Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 text-center">
            <CardContent className="p-0">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-bold mb-2">Smart Learning</h3>
              <p className="text-sm text-muted-foreground">Adaptive questions that match your child's level</p>
            </CardContent>
          </Card>
          <Card className="p-6 text-center">
            <CardContent className="p-0">
              <Gamepad2 className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-bold mb-2">Fun Games</h3>
              <p className="text-sm text-muted-foreground">Educational games that make learning exciting</p>
            </CardContent>
          </Card>
          <Card className="p-6 text-center">
            <CardContent className="p-0">
              <Trophy className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-bold mb-2">Earn Rewards</h3>
              <p className="text-sm text-muted-foreground">XP, coins, badges, and avatar items to unlock</p>
            </CardContent>
          </Card>
        </div>

        <Card className="p-8 bg-primary/5 border-primary/20">
          <CardContent className="p-0 flex items-center gap-6">
            <Sparkles className="h-16 w-16 text-primary shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Join thousands of young learners</h3>
              <p className="text-muted-foreground">Free for students. Parents and teachers can track progress in real-time.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
