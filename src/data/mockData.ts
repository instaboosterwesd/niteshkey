/**
 * Mock data for development and testing
 * Replace with real API calls when backend is ready
 */

import { Profile, Badge, Game, Question, Skill, Subject } from '@/types/database'

export const mockProfile: Profile = {
  id: 'user-123',
  role: 'student',
  display_name: 'Alex Student',
  grade_name: '5th Grade',
  avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
  total_xp: 2750,
  total_coins: 1240,
  streak_count: 12,
  created_at: new Date('2024-01-15').toISOString()
}

export const mockBadges: Badge[] = [
  {
    id: 'badge-1',
    name: 'First Steps',
    description: 'Earn your first 100 XP',
    icon: '👣'
  },
  {
    id: 'badge-2',
    name: 'On Fire',
    description: 'Get a 3-day streak',
    icon: '🔥'
  },
  {
    id: 'badge-3',
    name: 'Scholar',
    description: 'Earn 1000 XP',
    icon: '🎓'
  },
  {
    id: 'badge-4',
    name: 'Quick Learner',
    description: 'Complete 5 lessons',
    icon: '⚡'
  },
  {
    id: 'badge-5',
    name: 'Perfectionist',
    description: 'Get 100% on a quiz',
    icon: '💯'
  },
  {
    id: 'badge-6',
    name: 'Explorer',
    description: 'Try all 6 games',
    icon: '🗺️'
  }
]

export const mockGames: Game[] = [
  {
    id: 'game-1',
    name: 'Math Quest',
    description: 'Solve math problems to unlock new levels and earn rewards',
    icon: '🔢'
  },
  {
    id: 'game-2',
    name: 'Word Master',
    description: 'Build your vocabulary and learn new words through fun challenges',
    icon: '📖'
  },
  {
    id: 'game-3',
    name: 'Science Explorer',
    description: 'Discover the wonders of science through interactive experiments',
    icon: '🔬'
  },
  {
    id: 'game-4',
    name: 'History Hunter',
    description: 'Travel back in time and learn about important historical events',
    icon: '🏛️'
  },
  {
    id: 'game-5',
    name: 'Code Creations',
    description: 'Learn coding basics with fun and interactive challenges',
    icon: '💻'
  },
  {
    id: 'game-6',
    name: 'Art Studio',
    description: 'Express your creativity through artistic challenges and projects',
    icon: '🎨'
  }
]

export const mockQuestions: Question[] = [
  {
    id: 'q-1',
    skill_id: 'skill-1',
    text: 'What is 7 × 8?',
    type: 'multiple_choice',
    options: ['54', '56', '58', '60'],
    correct_answer: '56',
    explanation: '7 × 8 = 56. Remember: 7 times 8 equals 56!'
  },
  {
    id: 'q-2',
    skill_id: 'skill-1',
    text: 'What is 15 ÷ 3?',
    type: 'multiple_choice',
    options: ['3', '5', '7', '10'],
    correct_answer: '5',
    explanation: 'When we divide 15 by 3, we get 5. 3 × 5 = 15!'
  },
  {
    id: 'q-3',
    skill_id: 'skill-2',
    text: 'Is the Earth round?',
    type: 'true_false',
    options: ['True', 'False'],
    correct_answer: 'True',
    explanation: 'Yes, the Earth is approximately spherical in shape.'
  },
  {
    id: 'q-4',
    skill_id: 'skill-2',
    text: 'What is the largest planet in our solar system?',
    type: 'multiple_choice',
    options: ['Saturn', 'Jupiter', 'Neptune', 'Uranus'],
    correct_answer: 'Jupiter',
    explanation: 'Jupiter is the largest planet in our solar system!'
  },
  {
    id: 'q-5',
    skill_id: 'skill-3',
    text: 'What is a noun?',
    type: 'multiple_choice',
    options: [
      'A word that describes action',
      'A person, place, or thing',
      'A word that modifies a noun',
      'A word that connects words'
    ],
    correct_answer: 'A person, place, or thing',
    explanation: 'A noun is a word that represents a person, place, or thing.'
  }
]

export const mockSkills: Skill[] = [
  {
    id: 'skill-1',
    name: 'Basic Multiplication',
    description: 'Learn times tables and multiplication',
    xp_reward: 50,
    topic_id: 'topic-1'
  },
  {
    id: 'skill-2',
    name: 'Solar System',
    description: 'Explore planets and space',
    xp_reward: 75,
    topic_id: 'topic-2'
  },
  {
    id: 'skill-3',
    name: 'Parts of Speech',
    description: 'Learn nouns, verbs, adjectives',
    xp_reward: 60,
    topic_id: 'topic-3'
  }
]

export const mockSubjects: Subject[] = [
  {
    id: 'subject-1',
    name: 'Mathematics',
    icon: '🔢',
    grade_id: 'grade-5'
  },
  {
    id: 'subject-2',
    name: 'Science',
    icon: '🔬',
    grade_id: 'grade-5'
  },
  {
    id: 'subject-3',
    name: 'English',
    icon: '📖',
    grade_id: 'grade-5'
  }
]

export const mockRecentActivity = [
  {
    id: '1',
    type: 'quiz_completed',
    title: 'Completed: Basic Multiplication',
    xp_earned: 50,
    coins_earned: 25,
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '2',
    type: 'streak_milestone',
    title: '5-day streak reached!',
    xp_earned: 100,
    coins_earned: 0,
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '3',
    type: 'badge_earned',
    title: 'Earned badge: Quick Learner',
    xp_earned: 0,
    coins_earned: 50,
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
  }
]
