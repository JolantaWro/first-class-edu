"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Home, Star, Heart, BookOpen, Baby, GraduationCap, Sparkles, Palette } from "lucide-react"

export default function ChildSelectionPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute top-60 left-1/4 w-4 h-4 bg-green-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 right-10 w-10 h-10 bg-orange-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-red-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-indigo-400 rounded-full animate-pulse delay-1000"></div>
        <Star className="absolute top-40 right-1/3 w-6 h-6 text-yellow-500 animate-spin" />
        <Heart className="absolute bottom-60 left-20 w-8 h-8 text-red-400 animate-pulse" />
        <BookOpen className="absolute top-1/2 left-10 w-6 h-6 text-blue-500 animate-bounce" />
        <Sparkles className="absolute top-1/4 left-1/2 w-7 h-7 text-purple-500 animate-pulse delay-200" />
        <Palette className="absolute bottom-1/4 right-1/4 w-6 h-6 text-green-500 animate-bounce delay-400" />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen py-8 space-y-8 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between w-full max-w-5xl">
          <Link href="/">
            <Button
              variant="outline"
              className="ml-8 bg-gradient-to-r from-purple-400 to-pink-400 border-none text-white hover:from-purple-500 hover:to-pink-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-14 h-14"
            >
              <Home className="w-6 h-6" />
            </Button>
          </Link>
          <h1 className="text-5xl font-bold text-purple-400 text-center">
            🌟 Wybierz swoją przygodę! ✨
          </h1>
          <div className="w-14"></div> {/* Spacer for alignment */}
        </div>

        {/* Fun decorative banner */}
        <div className="flex justify-center space-x-6 text-4xl mb-6">
          <span className="animate-bounce">🎪</span>
          <span className="animate-bounce delay-100">🎨</span>
          <span className="animate-bounce delay-200">🌈</span>
          <span className="animate-bounce delay-300">🎯</span>
          <span className="animate-bounce delay-400">🚀</span>
        </div>

        {/* Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Preschool Option */}
          <Link href="/read/preschooler">
            <Card
              className="h-full bg-gradient-to-br from-green-200 to-blue-300 border-4 border-green-300 shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-3xl cursor-pointer transform hover:scale-105"
              onMouseEnter={() => setHoveredCard("preschool")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="pt-8 pb-6">
                <div className="flex flex-col items-center space-y-6">
                  {/* Icon container */}
                  <div className="relative">
                    <div className="absolute -inset-3 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 rounded-full blur opacity-75 animate-pulse"></div>
                    <div className="relative w-32 h-32 bg-gradient-to-br from-green-300 to-blue-400 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                      <Baby className="w-16 h-16 text-white drop-shadow-lg" />
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl font-bold text-center text-green-800">
                    🍼 Przedszkolak 🎈
                  </h2>

                  {/* Description */}
                  <div className="bg-white/80 rounded-2xl p-4 shadow-lg backdrop-blur-sm">
                    <p className="text-green-800 font-bold text-lg text-center">🌟 Zabawy dla najmłodszych! 🎨</p>
                    <p className="text-green-700 text-center mt-2">Kolory, kształty i pierwsze słówka! ✨</p>
                  </div>

                  {/* Fun elements */}
                  <div className="flex justify-center space-x-4 text-2xl">
                    <span className={hoveredCard === "preschool" ? "animate-bounce" : ""}>🧸</span>
                    <span className={hoveredCard === "preschool" ? "animate-bounce delay-100" : ""}>🎪</span>
                    <span className={hoveredCard === "preschool" ? "animate-bounce delay-200" : ""}>🌈</span>
                    <span className={hoveredCard === "preschool" ? "animate-bounce delay-300" : ""}>🎨</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center pb-6">
                <Button className="bg-gradient-to-r from-green-400 to-blue-400 hover:from-green-500 hover:to-blue-500 border-none text-white rounded-2xl px-8 py-4 font-bold text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  🚀 Zaczynamy zabawę! 🎉
                </Button>
              </CardFooter>
            </Card>
          </Link>

          {/* School Age Option */}
          <Link href="/read/child">
            <Card
              className="h-full bg-gradient-to-br from-purple-200 to-pink-300 border-4 border-purple-300 shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-3xl cursor-pointer transform hover:scale-105"
              onMouseEnter={() => setHoveredCard("school")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="pt-8 pb-6">
                <div className="flex flex-col items-center space-y-6">
                  {/* Icon container */}
                  <div className="relative">
                    <div className="absolute -inset-3 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-full blur opacity-75 animate-pulse"></div>
                    <div className="relative w-32 h-32 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                      <GraduationCap className="w-16 h-16 text-white drop-shadow-lg" />
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl font-bold text-center text-purple-800">
                    🎓 Uczeń 📚
                  </h2>

                  {/* Description */}
                  <div className="bg-white/80 rounded-2xl p-4 shadow-lg backdrop-blur-sm">
                    <p className="text-purple-800 font-bold text-lg text-center">🧠 Wyzwania dla starszych! 🎯</p>
                    <p className="text-purple-700 text-center mt-2">Czytanie, matematyka i logika! 🔬</p>
                  </div>

                  {/* Fun elements */}
                  <div className="flex justify-center space-x-4 text-2xl">
                    <span className={hoveredCard === "school" ? "animate-bounce" : ""}>📖</span>
                    <span className={hoveredCard === "school" ? "animate-bounce delay-100" : ""}>🔢</span>
                    <span className={hoveredCard === "school" ? "animate-bounce delay-200" : ""}>🧪</span>
                    <span className={hoveredCard === "school" ? "animate-bounce delay-300" : ""}>🏆</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center pb-6">
                <Button className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 border-none text-white rounded-2xl px-8 py-4 font-bold text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  🎯 Podejmij wyzwanie! 💪
                </Button>
              </CardFooter>
            </Card>
          </Link>
        </div>

        {/* Motivational section */}
        <div className="bg-gradient-to-r from-yellow-300 to-orange-300 rounded-3xl p-6 shadow-xl border-4 border-yellow-400 max-w-2xl">
          <div className="text-center">
            <div className="flex justify-center space-x-2 text-3xl mb-3">
              <span className="animate-bounce">🌟</span>
              <span className="animate-bounce delay-100">🎪</span>
              <span className="animate-bounce delay-200">🎨</span>
              <span className="animate-bounce delay-300">🚀</span>
              <span className="animate-bounce delay-400">🌈</span>
            </div>
            <p className="text-orange-800 font-bold text-xl">🎉 Każda przygoda zaczyna się od pierwszego kroku! ✨</p>
            <p className="text-orange-700 text-lg mt-2">
              Wybierz swoją ścieżkę i odkrywaj świat nauki przez zabawę! 🌍
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
