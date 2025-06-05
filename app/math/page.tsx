"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Home, ArrowRight, Check, X } from "lucide-react"
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
    // const operations = ["+", "-", "×"]
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
    setCurrentProblem(generateProblem())
  }, [])

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen py-8 space-y-6">
      <div className="flex items-center justify-between w-full max-w-md">
        <Link href="/">
          <Button variant="outline" size="icon">
            <Home className="w-4 h-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-blue-600">Matematyka</h1>
        <Button variant="outline" onClick={toggleInputMode}>
          {showOptions ? "Klawiatura" : "Opcje"}
        </Button>
      </div>

      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center justify-between w-full">
              <div className="text-sm font-medium">Punkty: {score}</div>
              <div className="text-sm font-medium">Zadanie: {problemCount + 1}</div>
            </div>

            <Progress value={(score / (problemCount || 1)) * 100} className="w-full h-2" />

            {currentProblem && (
              <div className="flex flex-col items-center space-y-6 w-full">
                <div className="text-4xl font-bold">{currentProblem.question}</div>

                {isCorrect === null ? (
                  showOptions ? (
                    <div className="grid grid-cols-2 gap-3 w-full">
                      {currentProblem.options?.map((option, index) => (
                        <Button key={index} onClick={() => handleOptionClick(option)} className="text-xl py-6">
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
                          className="text-xl text-center"
                          placeholder="Wpisz odpowiedź"
                          autoFocus
                        />
                        <Button type="submit">
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </form>
                  )
                ) : (
                  <div
                    className={cn(
                      "flex items-center justify-center w-24 h-24 rounded-full",
                      isCorrect ? "bg-green-100" : "bg-red-100",
                    )}
                  >
                    {isCorrect ? (
                      <Check className="w-12 h-12 text-green-600" />
                    ) : (
                      <div className="flex flex-col items-center">
                        <X className="w-12 h-12 text-red-600" />
                        <div className="mt-2 text-lg font-medium">{currentProblem.answer}</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center pb-6">
          <div className="text-sm text-center text-muted-foreground">
            {isCorrect === true && "Świetnie! Dobra odpowiedź!"}
            {isCorrect === false && "Spróbuj jeszcze raz!"}
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}