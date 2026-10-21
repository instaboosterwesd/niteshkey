import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Zap, Menu, X, LayoutDashboard, Gamepad2, User, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/games', label: 'Games', icon: Gamepad2 },
  { href: '/profile', label: 'Profile', icon: User },
]

export default function Navbar() {
  const { user, signOut } = useAuth()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setMenuOpen(false)}>
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center shadow-md group-hover:scale-105 transition-transform btn-glow">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Kid<span className="text-primary">Spark</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {user ? (
              <>
                {navLinks.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    to={href}
                    className={cn(
                      'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all btn-magnetic',
                      location.pathname === href
                        ? 'gradient-primary text-white shadow-md'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </Link>
                ))}
                <button
                  onClick={signOut}
                  className="ml-2 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted transition-all btn-magnetic"
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="font-semibold btn-magnetic">Sign In</Button>
                </Link>
                <Link to="/signup">
                  <Button className="gradient-primary text-white border-0 font-bold rounded-xl btn-glow btn-magnetic shadow-md">
                    Get Started Free
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-appear-up space-y-1 pb-6">
            {user ? (
              <>
                {navLinks.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    to={href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      'flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all',
                      location.pathname === href
                        ? 'gradient-primary text-white shadow'
                        : 'text-muted-foreground hover:bg-muted'
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {label}
                  </Link>
                ))}
                <button
                  onClick={() => { signOut(); setMenuOpen(false) }}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-sm font-semibold text-muted-foreground hover:bg-muted transition-all"
                >
                  <LogOut className="h-5 w-5" />
                  Sign Out
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-3 px-4">
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  <Button variant="outline" className="w-full font-bold rounded-2xl">Sign In</Button>
                </Link>
                <Link to="/signup" onClick={() => setMenuOpen(false)}>
                  <Button className="w-full gradient-primary text-white border-0 font-bold rounded-2xl btn-glow">
                    Get Started Free
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
