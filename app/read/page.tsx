"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Home, Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

type WordExercise = {
  word: string
  options: string[]
  correctIndex: number
  image: string
}

const wordExercises: WordExercise[] = [
  {
    word: "kot",
    options: ["kot", "pies", "ryba", "ptak"],
    correctIndex: 0,
    image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1749320083/kot_rxflxu.jpg",
  },
  {
    word: "dom",
    options: ["szkoła", "dom", "sklep", "park"],
    correctIndex: 1,
    image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1749320084/home_egan7x.jpg",
  },
  {
    word: "słońce",
    options: ["księżyc", "gwiazda", "słońce", "chmura"],
    correctIndex: 2,
    image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1749320084/sun_furv0v.jpg",
  },
  {
    word: "jabłko",
    options: ["jabłko", "gruszka", "banan", "truskawka"],
    correctIndex: 0,
    image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1749320083/apple_up1dos.jpg",
  },
  {
    word: "piłka",
    options: ["zabawka", "książka", "piłka", "lalka"],
    correctIndex: 2,
    image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1749675890/pexels-oandremoura-2471259_cmw63g.jpg",
  },
  {
    word: "kwiat",
    options: ["drzewo", "kwiat", "trawa", "krzew"],
    correctIndex: 1,
    image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1749933850/flower_imayfk.jpg",
  },
  {
    word: "auto",
    options: ["auto", "rower", "samolot", "pociąg"],
    correctIndex: 0,
    image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1750075914/pexels-alexgtacar-745150-1592384_aubtof.jpg",
  },
  {
    word: "mama",
    options: ["tata", "brat", "siostra", "mama"],
    correctIndex: 3,
    image: "https://res.cloudinary.com/dadi3oed4/image/upload/v1750075914/pexels-alexgtacar-745150-1592384_aubtof.jpg",
  },
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
    return <div className="flex justify-center items-center min-h-screen">Ładowanie...</div>
  }

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen py-8 space-y-6">
      <div className="flex items-center justify-between w-full max-w-md">
        <Link href="/">
          <Button variant="outline" size="icon">
            <Home className="w-4 h-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-green-600">Czytanie</h1>
        <div className="w-10"></div> {/* Spacer for alignment */}
      </div>

      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center justify-between w-full">
              <div className="text-sm font-medium">Punkty: {score}</div>
              <div className="text-sm font-medium">Zadanie: {exerciseCount + 1}</div>
            </div>

            <Progress value={(score / (exerciseCount || 1)) * 100} className="w-full h-2" />

            <div className="flex flex-col items-center space-y-6 w-full">
              <img
                src={currentExercise.image || "/placeholder.svg"}
                alt={currentExercise.word}
                className=" object-contain"
              />

              {/* <div className="text-3xl font-bold">{currentExercise.word}</div> */}

              {isCorrect === null ? (
                <div className="grid grid-cols-2 gap-3 w-full">
                  {currentExercise.options.map((option, index) => (
                    <Button key={index} onClick={() => checkAnswer(index)} className="text-lg py-6">
                      {option}
                    </Button>
                  ))}
                </div>
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
                      <div className="mt-2 text-lg font-medium">
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
          <div className="text-sm text-center text-muted-foreground">
            {isCorrect === true && "Świetnie! Dobra odpowiedź!"}
            {isCorrect === false && "Spróbuj jeszcze raz!"}
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}