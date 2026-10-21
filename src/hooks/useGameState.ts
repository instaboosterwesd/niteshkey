import { useState, useCallback } from 'react'

export interface GameProgress {
  currentQuestion: number
  correctAnswers: number
  totalQuestions: number
  earnedXP: number
  earnedCoins: number
  completed: boolean
}

export function useGameState(totalQuestions: number) {
  const [progress, setProgress] = useState<GameProgress>({
    currentQuestion: 0,
    correctAnswers: 0,
    totalQuestions,
    earnedXP: 0,
    earnedCoins: 0,
    completed: false
  })

  const handleCorrectAnswer = useCallback((xpReward: number, coinReward: number) => {
    setProgress(prev => ({
      ...prev,
      currentQuestion: prev.currentQuestion + 1,
      correctAnswers: prev.correctAnswers + 1,
      earnedXP: prev.earnedXP + xpReward,
      earnedCoins: prev.earnedCoins + coinReward,
      completed: prev.currentQuestion + 1 >= prev.totalQuestions
    }))
  }, [])

  const handleWrongAnswer = useCallback((xpReward: number = 5) => {
    setProgress(prev => ({
      ...prev,
      currentQuestion: prev.currentQuestion + 1,
      earnedXP: prev.earnedXP + xpReward,
      completed: prev.currentQuestion + 1 >= prev.totalQuestions
    }))
  }, [])

  const reset = useCallback(() => {
    setProgress({
      currentQuestion: 0,
      correctAnswers: 0,
      totalQuestions,
      earnedXP: 0,
      earnedCoins: 0,
      completed: false
    })
  }, [totalQuestions])

  return {
    progress,
    handleCorrectAnswer,
    handleWrongAnswer,
    reset
  }
}
