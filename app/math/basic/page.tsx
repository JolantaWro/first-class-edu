"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Home, Check, X, Plus, Minus, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

type MathExercise = {
  question: string
  options: number[]
  correctIndex: number
  operation: '+' | '-'
}

export default function BasicMathPage() {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [exerciseCount, setExerciseCount] = useState(0)
  const [exercises, setExercises] = useState<MathExercise[]>([])

  useEffect(() => {
    // Generate random addition and subtraction exercises
    const generatedExercises = generateMathExercises(10, 20)
    setExercises(generatedExercises)
  }, [])

  const currentExercise = exercises[currentExerciseIndex]

  const checkAnswer = (selectedIndex: number) => {
    if (!currentExercise) return

    const correct = selectedIndex === currentExercise.correctIndex
    setIsCorrect(correct)

    if (correct) {
      setScore(score + 1)
    }

    setExerciseCount(exerciseCount + 1)

    // Show result for a moment before moving to next exercise
    setTimeout(() => {
      setIsCorrect(null)
      if (currentExerciseIndex < exercises.length - 1) {
        setCurrentExerciseIndex(currentExerciseIndex + 1)
      } else {
        // Generate new exercises
        const newExercises = generateMathExercises(10, 20)
        setExercises(newExercises)
        setCurrentExerciseIndex(0)
      }
    }, 1500)
  }

  // Function to generate math exercises
  const generateMathExercises = (count: number, maxNumber: number): MathExercise[] => {
    const exercises: MathExercise[] = []
    
    for (let i = 0; i < count; i++) {
      const operation = Math.random() > 0.5 ? '+' : '-'
      let num1, num2, answer
      
      if (operation === '+') {
        num1 = Math.floor(Math.random() * maxNumber) + 1
        num2 = Math.floor(Math.random() * maxNumber) + 1
        answer = num1 + num2
      } else {
        num1 = Math.floor(Math.random() * maxNumber) + 1
        num2 = Math.floor(Math.random() * num1) + 1 // Ensure positive result
        answer = num1 - num2
      }
      
      // Generate 4 options with one correct answer
      const options = [answer]
      
      while (options.length < 4) {
        const offset = Math.floor(Math.random() * 10) - 5
        const option = answer + offset
        
        if (option >= 0 && !options.includes(option)) {
          options.push(option)
        }
      }
      
      // Shuffle options
      const shuffledOptions = [...options].sort(() => Math.random() - 0.5)
      const correctIndex = shuffledOptions.indexOf(answer)
      
      exercises.push({
        question: `${num1} ${operation} ${num2} = ?`,
        options: shuffledOptions,
        correctIndex,
        operation
      })
    }
    
    return exercises
  }

  if (!currentExercise) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-200 via-blue-200 to-teal-200 flex justify-center items-center">
        <div className="text-3xl font-bold text-green-800">🔄 Generowanie zadań... ✨</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-300 via-amber-300 to-cyan-300">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-6 w-10 h-10 bg-rose-500 rounded-full animate-bounce opacity-70 shadow-md"></div>
        <div className="absolute top-28 right-16 w-8 h-8 bg-amber-500 rounded-full animate-pulse opacity-65 shadow-sm"></div>
        <div className="absolute top-56 left-1/3 w-5 h-5 bg-lime-500 rounded-full animate-bounce delay-200 opacity-65 shadow-sm"></div>
        <div className="absolute bottom-36 right-12 w-12 h-12 bg-cyan-500 rounded-full animate-pulse delay-400 opacity-65 shadow-sm"></div>
        <Plus className="absolute top-40 right-1/3 w-7 h-7 text-rose-200 opacity-80 animate-spin" />
        <Minus className="absolute bottom-60 left-20 w-9 h-9 text-lime-200 opacity-80 animate-pulse" />
        <BookOpen className="absolute top-1/2 left-10 w-7 h-7 text-cyan-200 opacity-80 animate-bounce" />
        <X className="absolute top-24 left-1/2 w-6 h-6 text-violet-300 opacity-75 animate-pulse" />
      </div>

      <div className="container flex flex-col items-center justify-center min-h-screen py-8 space-y-6 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between w-full max-w-md">
          <Link href="/math">
            <Button
              variant="outline"
              size="icon"
              className="bg-gradient-to-r from-rose-600 to-cyan-600 border-none text-white hover:from-rose-700 hover:to-cyan-700 shadow-sm transform transition-all duration-200"
            >
              <Home className="w-4 h-4" />
            </Button>
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-900 via-lime-900 to-cyan-900 bg-clip-text text-transparent drop-shadow-md">
            🧮 Dodawanie i Odejmowanie ✨
          </h1>
          <div className="w-10"></div> {/* Spacer for alignment */}
        </div>

        {/* Fun decorative banner */}
        <div className="flex justify-center space-x-4 text-3xl mb-4">
          <span className="animate-bounce">➕</span>
          <span className="animate-bounce delay-100">➖</span>
          <span className="animate-bounce delay-200">🔢</span>
          <span className="animate-bounce delay-300">🎯</span>
        </div>

        {/* Main game card */}
        <Card className="w-full max-w-md bg-gradient-to-br from-yellow-200 to-orange-300 border-4 border-amber-300 shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-3xl">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center space-y-6">
              {/* Score section */}
              <div className="flex items-center justify-between w-full bg-white/80 rounded-2xl p-4 shadow-lg backdrop-blur-sm">
                <div className="text-lg font-bold text-amber-700">🏆 Punkty: {score}</div>
                <div className="text-lg font-bold text-orange-700">🎯 Zadanie: {exerciseCount + 1}</div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-white/50 rounded-full p-2 shadow-inner">
                <Progress
                  value={(score / (exerciseCount || 1)) * 100}
                  className="w-full h-4 bg-gradient-to-r from-amber-400 to-orange-400"
                />
              </div>

              <div className="flex flex-col items-center space-y-6 w-full">
                {/* Question container */}
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 via-orange-400 to-red-300 rounded-3xl blur opacity-75"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-xl border-4 border-white flex items-center justify-center">
                    <span className="text-4xl font-bold text-amber-800">{currentExercise.question}</span>
                    {currentExercise.operation === '+' ? 
                      <Plus className="ml-2 w-8 h-8 text-amber-500" /> : 
                      <Minus className="ml-2 w-8 h-8 text-orange-500" />
                    }
                  </div>
                </div>

                {/* Answer section */}
                {isCorrect === null ? (
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {currentExercise.options.map((option, index) => (
                      <Button
                        key={index}
                        onClick={() => checkAnswer(index)}
                        className="bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 border-none text-white rounded-2xl px-6 py-8 h-auto font-bold text-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <div
                    className={cn(
                      "flex flex-col items-center justify-center w-32 h-32 rounded-full shadow-2xl border-4 border-white",
                      isCorrect
                        ? "bg-gradient-to-br from-green-300 to-green-500"
                        : "bg-gradient-to-br from-red-300 to-red-500",
                    )}
                  >
                    {isCorrect ? (
                      <>
                        <Check className="w-12 h-12 text-white drop-shadow-lg" />
                        <div className="text-white font-bold mt-2">🎉</div>
                      </>
                    ) : (
                      <div className="flex flex-col items-center">
                        <X className="w-12 h-12 text-white drop-shadow-lg" />
                        <div className="mt-2 text-2xl font-bold text-white text-center">
                          {currentExercise.options[currentExercise.correctIndex]}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-center pb-6">
            <div className="bg-white/80 rounded-2xl p-4 shadow-lg backdrop-blur-sm">
              <div className="text-lg font-bold text-center">
                {isCorrect === true && "🌟 Świetnie! Dobra odpowiedź! 🎉"}
                {isCorrect === false && "💪 Spróbuj jeszcze raz! 🎯"}
                {isCorrect === null && "🤔 Wybierz poprawną odpowiedź! 📝"}
              </div>
            </div>
          </CardFooter>
        </Card>

        {/* Motivational section */}
        <div className="bg-gradient-to-r from-amber-300 to-orange-300 rounded-3xl p-6 shadow-xl border-4 border-amber-400 max-w-md">
          <div className="text-center">
            <div className="flex justify-center space-x-2 text-2xl mb-2">
              <span className="animate-bounce">🧠</span>
              <span className="animate-bounce delay-100">🔢</span>
              <span className="animate-bounce delay-200">🌟</span>
            </div>
            <p className="text-amber-800 font-bold text-lg">📐 Matematyka to przygoda! Każde działanie to nowe odkrycie! ✨</p>
          </div>
        </div>
      </div>
    </div>
  )
}