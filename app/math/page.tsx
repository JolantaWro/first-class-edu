"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Home, ArrowRight, Check, X, Star, Heart, Calculator } from "lucide-react"
import { cn } from "@/lib/utils"

type Problem = {
  question: string
  answer: number
  options?: number[]
}

export default function MathPage() {
  const [currentProblem, setCurrentProblem] = useState<Problem | null>(null)
  const [userAnswer, setUserAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [problemCount, setProblemCount] = useState(0)
  const [showOptions, setShowOptions] = useState(true)

  const generateProblem = () => {
    const operations = ["+", "-"]
    const operation = operations[Math.floor(Math.random() * operations.length)]
    let num1, num2, answer

    switch (operation) {
      case "+":
        num1 = Math.floor(Math.random() * 20) + 1
        num2 = Math.floor(Math.random() * 20) + 1
        answer = num1 + num2
        break
      case "-":
        num1 = Math.floor(Math.random() * 20) + 1
        num2 = Math.floor(Math.random() * num1) + 1
        answer = num1 - num2
        break
      case "×":
        num1 = Math.floor(Math.random() * 10) + 1
        num2 = Math.floor(Math.random() * 5) + 1
        answer = num1 * num2
        break
      default:
        num1 = 1
        num2 = 1
        answer = 2
    }

    // Generate options (including the correct answer)
    const options = [answer]
    while (options.length < 4) {
      const option = answer + Math.floor(Math.random() * 10) - 5
      if (option >= 0 && !options.includes(option)) {
        options.push(option)
      }
    }

    // Shuffle options
    const shuffledOptions = options.sort(() => Math.random() - 0.5)

    return {
      question: `${num1} ${operation} ${num2} = ?`,
      answer,
      options: shuffledOptions,
    }
  }

  const checkAnswer = (providedAnswer: string | number) => {
    if (!currentProblem) return

    const numAnswer = Number(providedAnswer)
    const correct = numAnswer === currentProblem.answer
    setIsCorrect(correct)
    if (correct) {
      setScore(score + 1)
    }
    setProblemCount(problemCount + 1)

    // Show result for a moment before moving to next problem
    setTimeout(() => {
      setUserAnswer("")
      setIsCorrect(null)
      setCurrentProblem(generateProblem())
    }, 1500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    checkAnswer(userAnswer)
  }

  const handleOptionClick = (option: number) => {
    setUserAnswer(option.toString())
    checkAnswer(option)
  }

  const toggleInputMode = () => {
    setShowOptions(!showOptions)
  }

  useEffect(() => {
    const problem = generateProblem()
    setCurrentProblem(problem)
  }, [])

  if (!currentProblem) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex justify-center items-center">
        <div className="text-3xl font-bold text-purple-800">🔄 Ładowanie zadań... ✨</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute top-60 left-1/4 w-4 h-4 bg-green-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 right-10 w-10 h-10 bg-orange-400 rounded-full animate-pulse delay-500"></div>
        <Star className="absolute top-40 right-1/3 w-6 h-6 text-yellow-500 animate-spin" />
        <Heart className="absolute bottom-60 left-20 w-8 h-8 text-red-400 animate-pulse" />
        <Calculator className="absolute top-1/2 left-10 w-6 h-6 text-blue-500 animate-bounce" />
      </div>

      <div className="container flex flex-col items-center justify-center min-h-screen py-8 space-y-6 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between w-full max-w-md">
          <Link href="/">
            <Button
              variant="outline"
              size="icon"
              className="bg-gradient-to-r from-purple-400 to-pink-400 border-none text-white hover:from-purple-500 hover:to-pink-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Home className="w-4 h-4" />
            </Button>
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
            🔢 Matematyka ✨
          </h1>
          <Button
            variant="outline"
            onClick={toggleInputMode}
            className="bg-gradient-to-r from-blue-400 to-green-400 border-none text-white hover:from-blue-500 hover:to-green-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            {showOptions ? "⌨️" : "🎯"}
          </Button>
        </div>

        {/* Fun decorative banner */}
        <div className="flex justify-center space-x-4 text-3xl mb-4">
          <span className="animate-bounce">🔢</span>
          <span className="animate-bounce delay-100">🌟</span>
          <span className="animate-bounce delay-200">🎯</span>
          <span className="animate-bounce delay-300">🧮</span>
        </div>

        {/* Main game card */}
        <Card className="w-full max-w-md bg-gradient-to-br from-blue-200 to-purple-300 border-4 border-blue-300 shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-3xl">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center space-y-6">
              {/* Score section */}
              <div className="flex items-center justify-between w-full bg-white/80 rounded-2xl p-4 shadow-lg backdrop-blur-sm">
                <div className="text-lg font-bold text-purple-700">🏆 Punkty: {score}</div>
                <div className="text-lg font-bold text-blue-700">🎯 Zadanie: {problemCount + 1}</div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-white/50 rounded-full p-2 shadow-inner">
                <Progress
                  value={(score / (problemCount || 1)) * 100}
                  className="w-full h-4 bg-gradient-to-r from-green-400 to-blue-400"
                />
              </div>

              {/* Question display - always show */}
              <div className="bg-white/90 rounded-3xl p-6 shadow-xl border-4 border-white">
                <div className="text-4xl font-bold text-center text-blue-500">
                  {currentProblem?.question || "Ładowanie..."}
                </div>
              </div>

              {currentProblem && (
                <div className="flex flex-col items-center space-y-6 w-full">
                  {/* Answer section */}
                  {isCorrect === null ? (
                    showOptions ? (
                      <div className="grid grid-cols-2 gap-4 w-full">
                        {currentProblem.options?.map((option, index) => (
                          <Button
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            className="bg-gradient-to-r from-green-400 to-blue-400 hover:from-green-500 hover:to-blue-500 border-none text-white rounded-2xl px-6 py-8 h-auto font-bold text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="w-full">
                        <div className="flex space-x-2">
                          <Input
                            type="number"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            className="text-2xl text-center bg-white/90 border-4 border-purple-300 rounded-2xl shadow-lg focus:border-purple-500 focus:ring-purple-500"
                            placeholder="Wpisz odpowiedź"
                            autoFocus
                          />
                          <Button
                            type="submit"
                            className="bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 border-none text-white rounded-2xl px-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                          >
                            <ArrowRight className="w-6 h-6" />
                          </Button>
                        </div>
                      </form>
                    )
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
                          <div className="mt-2 text-lg font-bold text-white text-center">{currentProblem.answer}</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center pb-6">
            <div className="bg-white/80 rounded-2xl p-4 shadow-lg backdrop-blur-sm">
              <div className="text-lg font-bold text-center">
                {isCorrect === true && "🌟 Świetnie! Dobra odpowiedź! 🎉"}
                {isCorrect === false && "💪 Spróbuj jeszcze raz! 🎯"}
                {isCorrect === null && "🤔 Wybierz właściwą odpowiedź! 📝"}
              </div>
            </div>
          </CardFooter>
        </Card>

        {/* Motivational section */}
        <div className="bg-gradient-to-r from-green-300 to-blue-300 rounded-3xl p-6 shadow-xl border-4 border-green-400 max-w-md">
          <div className="text-center">
            <div className="flex justify-center space-x-2 text-2xl mb-2">
              <span className="animate-bounce">🧮</span>
              <span className="animate-bounce delay-100">🎨</span>
              <span className="animate-bounce delay-200">🌟</span>
            </div>
            <p className="text-green-800 font-bold text-lg">
              🔢 Matematyka to zabawa! Każde zadanie to nowa przygoda! ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
