/**
 * Gamification utilities for KidSpark Academy
 * Handles XP calculations, level calculations, and reward logic
 */

export interface LevelInfo {
  level: number
  currentXP: number
  xpForNextLevel: number
  progressToNextLevel: number
  totalXPRequired: number
}

/**
 * Calculate XP required for a specific level
 * Uses quadratic formula: XP = level^2 * 100
 */
export function calculateXPForLevel(level: number): number {
  return level * level * 100
}

/**
 * Get current level information from total XP
 */
export function getLevelInfo(totalXP: number): LevelInfo {
  let level = 1
  let xpSpent = 0

  while (true) {
    const xpForNextLevel = calculateXPForLevel(level + 1)
    if (xpSpent + xpForNextLevel > totalXP) break
    xpSpent += xpForNextLevel
    level++
  }

  const currentLevelXP = calculateXPForLevel(level)
  const xpInCurrentLevel = totalXP - xpSpent
  const progressToNextLevel = xpInCurrentLevel / currentLevelXP

  return {
    level,
    currentXP: xpInCurrentLevel,
    xpForNextLevel: currentLevelXP,
    progressToNextLevel: Math.min(progressToNextLevel, 1),
    totalXPRequired: totalXP
  }
}

/**
 * Calculate reward for completing a question
 */
export function calculateQuestionReward(
  difficulty: 'easy' | 'medium' | 'hard',
  correct: boolean
): { xp: number; coins: number } {
  const baseXP = {
    easy: 10,
    medium: 25,
    hard: 50
  }

  const baseCoins = {
    easy: 5,
    medium: 15,
    hard: 30
  }

  const xp = correct ? baseXP[difficulty] : Math.ceil(baseXP[difficulty] / 2)
  const coins = correct ? baseCoins[difficulty] : 0

  return { xp, coins }
}

/**
 * Calculate streak bonus multiplier
 */
export function getStreakBonus(streak: number): number {
  if (streak < 3) return 1
  if (streak < 7) return 1.1
  if (streak < 14) return 1.25
  if (streak < 30) return 1.5
  return 2
}

/**
 * Apply streak bonus to rewards
 */
export function applyStreakBonus(
  reward: { xp: number; coins: number },
  streak: number
): { xp: number; coins: number } {
  const bonus = getStreakBonus(streak)
  return {
    xp: Math.ceil(reward.xp * bonus),
    coins: Math.ceil(reward.coins * bonus)
  }
}

/**
 * Check if user unlocked a badge
 */
export function checkBadgeUnlock(
  userStats: {
    totalXP: number
    totalCoins: number
    streakCount: number
    completedLessons: number
    perfectGames: number
  }
): string[] {
  const unlockedBadges: string[] = []

  // XP Badges
  if (userStats.totalXP >= 100) unlockedBadges.push('first-steps')
  if (userStats.totalXP >= 1000) unlockedBadges.push('explorer')
  if (userStats.totalXP >= 5000) unlockedBadges.push('scholar')
  if (userStats.totalXP >= 10000) unlockedBadges.push('master')

  // Streak Badges
  if (userStats.streakCount >= 3) unlockedBadges.push('on-fire')
  if (userStats.streakCount >= 7) unlockedBadges.push('unstoppable')
  if (userStats.streakCount >= 30) unlockedBadges.push('legendary')

  // Completion Badges
  if (userStats.completedLessons >= 5) unlockedBadges.push('quick-learner')
  if (userStats.completedLessons >= 20) unlockedBadges.push('dedicated')
  if (userStats.completedLessons >= 50) unlockedBadges.push('committed')

  // Perfection Badges
  if (userStats.perfectGames >= 1) unlockedBadges.push('perfectionist')
  if (userStats.perfectGames >= 10) unlockedBadges.push('flawless')

  return unlockedBadges
}

/**
 * Format XP for display
 */
export function formatXP(xp: number): string {
  if (xp >= 1000000) return (xp / 1000000).toFixed(1) + 'M'
  if (xp >= 1000) return (xp / 1000).toFixed(1) + 'K'
  return xp.toString()
}

/**
 * Calculate daily login bonus
 */
export function getDailyLoginBonus(consecutiveDays: number): { xp: number; coins: number } {
  const xp = 50 + (consecutiveDays * 5)
  const coins = 25 + (consecutiveDays * 2)
  return { xp, coins }
}
