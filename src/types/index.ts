// User Roles
export type UserRole = 'student' | 'parent' | 'teacher' | 'admin' | 'super_admin'

// Grade levels
export type GradeLevel = 'reception' | 'year1' | 'year2' | 'year3' | 'year4' | 'year5'

// Subjects
export type SubjectName = 'maths' | 'english' | 'science'

// Mastery levels
export type MasteryLevel = 'beginner' | 'learning' | 'good' | 'great' | 'mastered'

// Question types
export type QuestionType = 'multiple_choice' | 'fill_blank' | 'drag_drop' | 'matching' | 'counting'

// Game types
export type GameType = 'match_pair' | 'multiple_choice_quiz' | 'drag_drop' | 'fill_blanks' | 'counting' | 'word_builder'

// Badge rarity
export type BadgeRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'

// Avatar item types
export type AvatarItemType = 'hair' | 'glasses' | 'hat' | 'shirt'

// Base User
export interface User {
  id: string
  email: string
  role: UserRole
  avatar_url?: string
  created_at: string
}

// Student
export interface Student {
  id: string
  user_id: string
  name: string
  grade: GradeLevel
  coins: number
  xp: number
  streak: number
  last_active?: string
  avatar_config?: AvatarConfig
  user?: User
}

// Parent
export interface Parent {
  id: string
  user_id: string
  name: string
  children: Student[]
  user?: User
}

// Teacher
export interface Teacher {
  id: string
  user_id: string
  name: string
  class_ids: string[]
  user?: User
}

// Admin
export interface Admin {
  id: string
  user_id: string
  permission_level: 'admin' | 'super_admin'
  user?: User
}

// Grade
export interface Grade {
  id: string
  name: GradeLevel
  display_name: string
  order: number
}

// Subject
export interface Subject {
  id: string
  name: SubjectName
  display_name: string
  grade_id: string
  icon: string
  color: string
  description?: string
}

// Topic
export interface Topic {
  id: string
  name: string
  subject_id: string
  order: number
  subject?: Subject
}

// Skill
export interface Skill {
  id: string
  name: string
  topic_id: string
  xp_value: number
  coin_value: number
  instructions?: string
  order: number
  topic?: Topic
}

// Question
export interface Question {
  id: string
  skill_id: string
  question_type: QuestionType
  question_text: string
  options?: string[]
  correct_answer: string
  explanation?: string
  image_url?: string
  order: number
  skill?: Skill
}

// Student Progress
export interface StudentProgress {
  id: string
  student_id: string
  skill_id: string
  mastery_level: MasteryLevel
  attempts: number
  correct: number
  wrong: number
  time_spent: number
  last_practiced?: string
  student?: Student
  skill?: Skill
}

// Attempt
export interface Attempt {
  id: string
  student_id: string
  question_id: string
  answer: string
  correct: boolean
  time_taken: number
  created_at: string
  student?: Student
  question?: Question
}

// Game
export interface Game {
  id: string
  name: string
  type: GameType
  description: string
  config: Record<string, unknown>
  coin_reward: number
  xp_reward: number
  difficulty: number
  icon: string
}

// Game Result
export interface GameResult {
  id: string
  student_id: string
  game_id: string
  score: number
  completed: boolean
  coins_earned: number
  created_at: string
  student?: Student
  game?: Game
}

// Daily Mission
export interface DailyMission {
  id: string
  student_id: string
  date: string
  mission_type: 'questions' | 'game' | 'xp'
  target: number
  current: number
  reward_coins: number
  completed: boolean
  student?: Student
}

// Badge
export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  unlock_rule: Record<string, unknown>
  rarity: BadgeRarity
}

// Student Badge
export interface StudentBadge {
  id: string
  student_id: string
  badge_id: string
  earned_at: string
  student?: Student
  badge?: Badge
}

// Avatar Item
export interface AvatarItem {
  id: string
  type: AvatarItemType
  name: string
  price_coins: number
  icon_url: string
}

// Student Avatar (unlocked items)
export interface StudentAvatar {
  id: string
  student_id: string
  item_id: string
  equipped: boolean
  unlocked_at: string
  student?: Student
  item?: AvatarItem
}

// Avatar Config (current equipped items)
export interface AvatarConfig {
  hair?: string
  glasses?: string
  hat?: string
  shirt?: string
}

// Class
export interface Class {
  id: string
  teacher_id: string
  name: string
  grade: GradeLevel
  student_ids: string[]
  subject?: SubjectName
  teacher?: Teacher
  students?: Student[]
}

// Assignment
export interface Assignment {
  id: string
  class_id: string
  skill_ids: string[]
  due_date?: string
  created_by: string
  created_at: string
  completed: boolean
  class?: Class
  skills?: Skill[]
}

// Notification
export interface Notification {
  id: string
  user_id: string
  message: string
  type: 'info' | 'warning' | 'success' | 'alert'
  read: boolean
  created_at: string
}

// Connection code for parent-child linking
export interface ParentChildConnection {
  parent_id: string
  student_id: string
  connection_code: string
  linked_at: string
}

// Stats for dashboards
export interface DashboardStats {
  totalXP: number
  totalCoins: number
  currentStreak: number
  skillsMastered: number
  lessonsCompleted: number
  badgesEarned: number
}

// Subject progress for student
export interface SubjectProgress {
  subject: Subject
  masteredSkills: number
  totalSkills: number
  percentage: number
  weakTopics: string[]
}

// Chart data types
export interface ChartDataPoint {
  name: string
  value: number
  [key: string]: string | number
}

// Activity feed item
export interface ActivityItem {
  id: string
  type: 'question' | 'game' | 'badge' | 'skill' | 'mission'
  title: string
  description?: string
  timestamp: string
  icon?: string
  xpEarned?: number
  coinsEarned?: number
}
