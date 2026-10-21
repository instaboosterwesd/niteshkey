# KidSpark Academy - Setup & Architecture Guide

## Project Overview

KidSpark Academy is a comprehensive kids learning platform built with React, TypeScript, and Tailwind CSS. It features gamification elements including XP (experience points), coins, streaks, and badges to keep students engaged.

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + CSS variables
- **Routing**: React Router v6
- **Backend**: Supabase (PostgreSQL + Auth)
- **UI Components**: shadcn/ui compatible
- **State Management**: React Context API

## Project Structure

```
src/
├── App.tsx                 # Main application with routing
├── main.tsx               # Application entry point
├── index.css              # Global styles with Tailwind
├── components/
│   ├── Navbar.tsx         # Navigation bar
│   ├── XPDisplay.tsx      # XP progress bar component
│   ├── CoinDisplay.tsx    # Coin counter component
│   ├── StreakDisplay.tsx  # Streak counter component
│   ├── BadgeCard.tsx      # Badge display component
│   ├── GameCard.tsx       # Game card component
│   └── QuestionCard.tsx   # Question/quiz component
├── pages/
│   ├── Home.tsx           # Landing page
│   ├── Login.tsx          # Login page
│   ├── Signup.tsx         # Registration page
│   ├── Dashboard.tsx      # Student dashboard
│   ├── Games.tsx          # Games/learning modules page
│   └── Profile.tsx        # User profile page
├── contexts/
│   └── AuthContext.tsx    # Authentication context
├── lib/
│   ├── utils.ts           # Utility functions (cn helper)
│   └── supabase.ts        # Supabase client initialization
└── types/
    └── database.ts        # TypeScript type definitions
```

## Key Features Implemented

### 1. Authentication
- Email/password authentication via Supabase
- Sign up with role selection (Student, Teacher, Parent)
- Protected routes using ProtectedRoute component
- Session persistence with Supabase auth state

### 2. Gamification Components
- **XP Display**: Progress bar showing experience points
- **Coins**: Reward currency system
- **Streaks**: Daily activity tracking with fire emoji indicator
- **Badges**: Achievement system with locked/unlocked states

### 3. Pages & Routing
- Public pages: Home, Login, Signup
- Protected pages: Dashboard, Games, Profile
- Navigation bar with conditional rendering based on auth state

### 4. Styling
- Tailwind CSS for utility-first styling
- CSS variables for theme colors
- oklch color space for better color accuracy
- Custom colors: --xp (green), --coin (gold), --streak (orange)

## Environment Setup

### Prerequisites
- Node.js 16+ and npm
- Supabase account

### Installation Steps

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file (copy from `.env.example`):
```bash
cp .env.example .env.local
```

3. Add your Supabase credentials to `.env.local`:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

4. Start development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## Database Schema (Supabase)

### Profiles Table
```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  role TEXT NOT NULL ('student', 'teacher', 'parent', 'admin'),
  display_name TEXT NOT NULL,
  grade_name TEXT,
  avatar_url TEXT,
  total_xp INTEGER DEFAULT 0,
  total_coins INTEGER DEFAULT 0,
  streak_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
)
```

### Additional Tables (Optional)
- subjects: Learning subjects/courses
- skills: Individual skills within subjects
- questions: Quiz questions
- badges: Achievement badges
- games: Learning games/modules
- avatar_items: Customization items for avatars

## Color Scheme

| Element | Color Variable | Value |
|---------|---|---|
| Background | --background | oklch(0.985 0 0) |
| Foreground | --foreground | oklch(0.145 0 0) |
| Primary | --primary | oklch(0.55 0.2 290) |
| XP | --xp | oklch(0.82 0.17 85) |
| Coins | --coin | oklch(0.85 0.15 90) |
| Streaks | --streak | oklch(0.7 0.18 50) |

## Component Usage Examples

### XP Display
```tsx
<XPDisplay xp={250} maxXP={1000} showLabel={true} size="md" />
```

### Coin Display
```tsx
<CoinDisplay coins={500} showLabel={true} size="md" />
```

### Streak Display
```tsx
<StreakDisplay streak={7} showLabel={true} size="md" />
```

### Badge Card
```tsx
<BadgeCard 
  badge={{
    id: '1',
    name: 'Scholar',
    description: 'Complete 10 lessons',
    icon: '🎓'
  }}
  unlocked={true}
/>
```

## Authentication Flow

1. User signs up/logs in on Login/Signup pages
2. Supabase authentication creates session
3. AuthContext manages user state
4. Protected routes check for authenticated user
5. Dashboard and other pages access user data via useAuth hook

## Getting Started Development

1. Review the existing component structure
2. Add new pages to `src/pages/` directory
3. Create new components in `src/components/`
4. Update routing in `App.tsx`
5. Use `useAuth()` hook to access authentication context

## Next Steps

- Set up Supabase database tables
- Implement API endpoints for quiz functionality
- Add more game modules
- Implement XP/coin earning logic
- Create admin dashboard for teachers
- Add avatar customization system
- Implement leaderboards

## Deployment

1. Build the application:
```bash
npm run build
```

2. Deploy to Vercel, Netlify, or any static host:
```bash
npm run preview  # Test production build locally
```

## Troubleshooting

- **Supabase connection issues**: Check env variables are set correctly
- **Styling issues**: Ensure Tailwind CSS is properly configured
- **Auth errors**: Verify Supabase authentication is enabled in dashboard
- **Build errors**: Clear node_modules and reinstall: `rm -rf node_modules && npm install`

## Support

For issues or questions, refer to:
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Supabase Documentation](https://supabase.com/docs)
