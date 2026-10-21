# KidSpark Academy - Quick Start Guide

## File Structure Overview

All files have been created and organized as follows:

### Configuration Files
- **vite.config.ts** - Vite build configuration with Tailwind & path aliases
- **tsconfig.app.json** - TypeScript compiler options
- **components.json** - shadcn/ui configuration
- **index.html** - HTML entry point
- **.env.example** - Environment variables template

### CSS & Styling
- **src/index.css** - Global styles with Tailwind imports and CSS variables

### Core Application
- **src/main.tsx** - React app initialization with Router
- **src/App.tsx** - Main app component with routing setup

### Components (8 total)
1. **Navbar.tsx** - Navigation with auth-aware menu
2. **XPDisplay.tsx** - Experience points progress bar
3. **CoinDisplay.tsx** - Coin counter with emoji
4. **StreakDisplay.tsx** - Streak counter with fire emoji
5. **BadgeCard.tsx** - Badge display (locked/unlocked)
6. **GameCard.tsx** - Learning game card component
7. **QuestionCard.tsx** - Quiz question with radio options

### Pages (6 total)
1. **Home.tsx** - Landing page with feature highlights
2. **Login.tsx** - Authentication login form
3. **Signup.tsx** - User registration with role selection
4. **Dashboard.tsx** - Student dashboard with stats
5. **Games.tsx** - Learning games catalog (6 games)
6. **Profile.tsx** - User profile with badges & stats

### Context & State
- **AuthContext.tsx** - Authentication state management
  - Handles: signIn, signUp, signOut
  - Manages: user, profile, loading state

### Utilities & Helpers
- **lib/utils.ts** - `cn()` classname helper
- **lib/supabase.ts** - Supabase client initialization
- **lib/gamification.ts** - Game logic utilities
  - Level calculations
  - Reward calculations
  - Streak bonuses
  - Badge unlock logic
  - XP formatting

### Hooks
- **hooks/useGameState.ts** - Game progress tracking
  - Tracks questions, correct answers, XP, coins
  - Handles game completion

### Type Definitions
- **types/database.ts** - All TypeScript interfaces
  - Profile, Subject, Skill, Question
  - Badge, Game, AvatarItem types

## Quick Start Commands

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Routes Available

### Public Routes
- `/` - Home page
- `/login` - Login page
- `/signup` - Sign up page

### Protected Routes (require authentication)
- `/dashboard` - Main dashboard
- `/games` - Learning games
- `/profile` - User profile

## Component Usage Quick Reference

### Display Stats
```tsx
<XPDisplay xp={250} maxXP={1000} />
<CoinDisplay coins={500} />
<StreakDisplay streak={7} />
```

### Display Badges
```tsx
<BadgeCard badge={badgeData} unlocked={true} />
```

### Display Games
```tsx
<GameCard game={gameData} />
```

### Ask Questions
```tsx
<QuestionCard question={questionData} onAnswer={handleAnswer} />
```

## Gamification Features

### XP System
- `getLevelInfo()` - Get current level from total XP
- `calculateXPForLevel()` - Get XP needed for next level
- Linear progression: Level N requires (N²) × 100 XP

### Rewards
- `calculateQuestionReward()` - Get XP/coins for question
- Easy: 10 XP / 5 coins
- Medium: 25 XP / 15 coins
- Hard: 50 XP / 30 coins

### Streak Bonuses
- 3-6 days: 1.1x multiplier
- 7-13 days: 1.25x multiplier
- 14-29 days: 1.5x multiplier
- 30+ days: 2x multiplier

### Badges
The system supports unlocking badges based on:
- Total XP: first-steps, explorer, scholar, master
- Streaks: on-fire, unstoppable, legendary
- Completion: quick-learner, dedicated, committed
- Perfection: perfectionist, flawless

## Color Palette

```css
/* Primary Brand */
--primary: oklch(0.55 0.2 290)      /* Purple */

/* Gamification */
--xp: oklch(0.82 0.17 85)           /* Green */
--coin: oklch(0.85 0.15 90)         /* Gold */
--streak: oklch(0.7 0.18 50)        /* Orange */

/* UI Elements */
--background: oklch(0.985 0 0)      /* Off-white */
--card: oklch(1 0 0)                /* White */
--border: oklch(0.922 0 0)          /* Light gray */
```

## Authentication Features

- Email/password authentication via Supabase
- Three user roles: student, teacher, parent, admin
- Protected routes with ProtectedRoute component
- Automatic session persistence
- Profile creation on signup

## Next Steps

1. **Set up Supabase Database**
   - Create tables as defined in SETUP.md
   - Enable email authentication
   - Set up Row Level Security policies

2. **Add Database Features**
   - Implement lesson/skill data loading
   - Add quiz question fetch
   - Create leaderboard queries

3. **Expand Components**
   - Add lesson player component
   - Create quiz flow component
   - Build achievement animations
   - Add avatar customization

4. **Add Game Logic**
   - Implement game mechanics
   - Connect to database
   - Track progress & rewards
   - Update user stats on completion

5. **Polish & Deploy**
   - Add error boundaries
   - Implement loading states
   - Add toast notifications
   - Deploy to Vercel/Netlify

## File Locations Summary

```
/tmp/cc-agent/67882725/project/
├── Config: vite.config.ts, tsconfig.*.json, components.json
├── Entry: index.html, src/main.tsx
├── App: src/App.tsx
├── Styles: src/index.css
├── Components: src/components/ (8 files)
├── Pages: src/pages/ (6 files)
├── Context: src/contexts/AuthContext.tsx
├── Utils: src/lib/*.ts (3 files)
├── Hooks: src/hooks/useGameState.ts
├── Types: src/types/database.ts
└── Docs: SETUP.md, QUICKSTART.md
```

## Troubleshooting

**Build errors?**
- Clear: `npm cache clean --force`
- Reinstall: `rm -rf node_modules && npm install`

**Styling not working?**
- Check Tailwind is imported in index.css
- Verify cssVariables enabled in components.json

**Auth not working?**
- Verify Supabase URL and key in .env.local
- Check auth enabled in Supabase dashboard
- Ensure profiles table exists

## Documentation Files

- **SETUP.md** - Full setup guide, architecture, & troubleshooting
- **QUICKSTART.md** - This file, quick reference guide

Ready to start building! 🚀
