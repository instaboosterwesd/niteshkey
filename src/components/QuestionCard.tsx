import { useState } from 'react'
import { Question } from '@/types/database'

interface QuestionCardProps {
  question: Question
  onAnswer: (selectedAnswer: string) => void
}

export default function QuestionCard({ question, onAnswer }: QuestionCardProps) {
  const [selected, setSelected] = useState<string | null>(null)

  const handleSubmit = () => {
    if (selected) {
      onAnswer(selected)
      setSelected(null)
    }
  }

  return (
    <div className="p-6 rounded-lg border border-gray-200 bg-white">
      <h3 className="text-lg font-semibold mb-4">{question.text}</h3>

      <div className="space-y-2 mb-4">
        {question.options.map((option) => (
          <label
            key={option}
            className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
          >
            <input
              type="radio"
              name="answer"
              value={option}
              checked={selected === option}
              onChange={(e) => setSelected(e.target.value)}
              className="mr-3"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      {question.explanation && selected === question.correct_answer && (
        <div className="p-3 mb-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          <p className="text-sm font-semibold">Correct!</p>
          <p className="text-sm">{question.explanation}</p>
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={!selected}
        className="w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Submit Answer
      </button>
    </div>
  )
}
