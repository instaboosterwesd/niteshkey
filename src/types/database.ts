export type Profile = {
  id: string
  role: 'student' | 'teacher' | 'parent' | 'admin'
  display_name: string
  grade_name?: string
  avatar_url?: string
  total_xp?: number
  total_coins?: number
  streak_count?: number
  created_at: string
}

export type Subject = {
  id: string
  name: string
  icon: string
  grade_id: string
}

export type Skill = {
  id: string
  name: string
  description?: string
  xp_reward: number
  topic_id: string
}

export type Question = {
  id: string
  skill_id: string
  text: string
  type: 'multiple_choice' | 'true_false'
  options: string[]
  correct_answer: string
  explanation?: string
}

export type Badge = {
  id: string
  name: string
  description: string
  icon: string
}

export type Game = {
  id: string
  name: string
  description: string
  icon: string
}

export type AvatarItem = {
  id: string
  name: string
  type: 'hat' | 'accessory' | 'pet' | 'background'
  icon: string
  cost: number
}
