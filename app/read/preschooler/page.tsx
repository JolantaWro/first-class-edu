"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Home, Check, X, Star, Heart, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

type WordExercise = {
  word: string
  options: string[]
  correctIndex: number
  image: string
}

const wordExercises: WordExercise[] = [
  { word: "a", options: ["a", "o", "e", "u"], correctIndex: 0, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1753906050/pexels-pixabay-51383_sgoefm.jpg" },
  { word: "b", options: ["d", "p", "b", "h"], correctIndex: 2, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1754068359/pexels-padli-772478_wmnvfs.jpg" },
  { word: "c", options: ["c", "s", "o", "a"], correctIndex: 0, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1754253691/pexels-pixabay-533342_cdhc5l.jpg" },
  { word: "d", options: ["r", "d", "s", "p"], correctIndex: 1, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1749320084/home_egan7x.jpg" },
  { word: "e", options: ["a", "e", "i", "o"], correctIndex: 1, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1753486543/elephant_letter_e.jpg" },
  { word: "f", options: ["g", "f", "t", "b"], correctIndex: 1, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1753486544/fish_letter_f.jpg" },
  { word: "g", options: ["g", "q", "p", "b"], correctIndex: 0, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1753486544/giraffe_letter_g.jpg" },
  { word: "h", options: ["m", "n", "h", "t"], correctIndex: 2, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1753486544/hat_letter_h.jpg" },
  { word: "i", options: ["i", "l", "j", "e"], correctIndex: 0, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1753486544/icecream_letter_i.jpg" },
  { word: "j", options: ["j", "g", "b", "k"], correctIndex: 0, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1749320083/apple_up1dos.jpg" },
  { word: "k", options: ["k", "p", "o", "t"], correctIndex: 0, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1749320083/kot_rxflxu.jpg" },
  { word: "l", options: ["l", "i", "t", "e"], correctIndex: 0, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1753486543/lion_letter_l.jpg" },
  { word: "m", options: ["n", "b", "r", "m"], correctIndex: 3, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1750624028/pexels-polina-tankilevitch-3875205_rmutr1.jpg" },
  { word: "n", options: ["n", "m", "u", "v"], correctIndex: 0, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1753486544/nest_letter_n.jpg" },
  { word: "o", options: ["u", "o", "a", "e"], correctIndex: 1, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1753486544/orange_letter_o.jpg" },
  { word: "p", options: ["a", "k", "p", "l"], correctIndex: 2, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1749675890/pexels-oandremoura-2471259_cmw63g.jpg" },
  { word: "q", options: ["g", "o", "q", "p"], correctIndex: 2, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1753486543/queen_letter_q.jpg" },
  { word: "r", options: ["d", "p", "r", "f"], correctIndex: 2, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1753486543/rabbit_letter_r.jpg" },
  { word: "s", options: ["p", "d", "s", "c"], correctIndex: 2, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1749320084/sun_furv0v.jpg" },
  { word: "t", options: ["r", "t", "k", "i"], correctIndex: 1, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1751975557/strawberries_hz2xvp.jpg" },
  { word: "u", options: ["o", "u", "a", "e"], correctIndex: 1, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1753486544/umbrella_letter_u.jpg" },
  { word: "v", options: ["w", "v", "u", "y"], correctIndex: 1, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1753486544/violin_letter_v.jpg" },
  { word: "w", options: ["m", "n", "w", "v"], correctIndex: 2, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1753486544/whale_letter_w.jpg" },
  { word: "x", options: ["x", "k", "z", "t"], correctIndex: 0, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1753486544/xylophone_letter_x.jpg" },
  { word: "y", options: ["i", "u", "y", "e"], correctIndex: 2, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1753486544/yarn_letter_y.jpg" },
  { word: "z", options: ["z", "s", "x", "t"], correctIndex: 0, image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1753486543/zebra_letter_z.jpg" },
]


export default function ReadingPage() {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [exerciseCount, setExerciseCount] = useState(0)
  const [exercises, setExercises] = useState<WordExercise[]>([])

  useEffect(() => {
    // Shuffle the exercises
    setExercises([...wordExercises].sort(() => Math.random() - 0.5))
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
        // Restart with shuffled exercises
        setExercises([...wordExercises].sort(() => Math.random() - 0.5))
        setCurrentExerciseIndex(0)
      }
    }, 1500)
  }

  if (!currentExercise) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex justify-center items-center">
        <div className="text-3xl font-bold text-purple-800">🔄 Ładowanie magii... ✨</div>
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
        <BookOpen className="absolute top-1/2 left-10 w-6 h-6 text-blue-500 animate-bounce" />
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
            📚 Czytanie ✨
          </h1>
          <div className="w-10"></div> {/* Spacer for alignment */}
        </div>

        {/* Fun decorative banner */}
        <div className="flex justify-center space-x-4 text-3xl mb-4">
          <span className="animate-bounce">📖</span>
          <span className="animate-bounce delay-100">🌟</span>
          <span className="animate-bounce delay-200">🎯</span>
          <span className="animate-bounce delay-300">🎨</span>
        </div>

        {/* Main game card */}
        <Card className="w-full max-w-md bg-gradient-to-br from-blue-200 to-purple-300 border-4 border-blue-300 shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-3xl">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center space-y-6">
              {/* Score section */}
              <div className="flex items-center justify-between w-full bg-white/80 rounded-2xl p-4 shadow-lg backdrop-blur-sm">
                <div className="text-lg font-bold text-purple-700">🏆 Punkty: {score}</div>
                <div className="text-lg font-bold text-blue-700">🎯 Zadanie: {exerciseCount + 1}</div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-white/50 rounded-full p-2 shadow-inner">
                <Progress
                  value={(score / (exerciseCount || 1)) * 100}
                  className="w-full h-4 bg-gradient-to-r from-green-400 to-blue-400"
                />
              </div>

              <div className="flex flex-col items-center space-y-6 w-full">
                {/* Image container */}
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-3xl blur opacity-75"></div>
                  <img
                    src={currentExercise.image || "/placeholder.svg"}
                    alt={currentExercise.word}
                    className="relative w-48 h-48 object-cover rounded-2xl shadow-xl border-4 border-white"
                  />
                </div>

                {/* Answer section */}
                {isCorrect === null ? (
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {currentExercise.options.map((option, index) => (
                      <Button
                        key={index}
                        onClick={() => checkAnswer(index)}
                        className="bg-gradient-to-r from-green-400 to-blue-400 hover:from-green-500 hover:to-blue-500 border-none text-white rounded-2xl px-6 py-8 h-auto font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
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
                        <div className="mt-2 text-lg font-bold text-white text-center">
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
                {isCorrect === null && "🤔 Wybierz właściwe słowo! 📝"}
              </div>
            </div>
          </CardFooter>
        </Card>

        {/* Motivational section */}
        <div className="bg-gradient-to-r from-green-300 to-blue-300 rounded-3xl p-6 shadow-xl border-4 border-green-400 max-w-md">
          <div className="text-center">
            <div className="flex justify-center space-x-2 text-2xl mb-2">
              <span className="animate-bounce">🎪</span>
              <span className="animate-bounce delay-100">🎨</span>
              <span className="animate-bounce delay-200">🌟</span>
            </div>
            <p className="text-green-800 font-bold text-lg">📚 Czytanie to przygoda! Każde słowo to nowa magia! ✨</p>
          </div>
        </div>
      </div>
    </div>
  )
}
