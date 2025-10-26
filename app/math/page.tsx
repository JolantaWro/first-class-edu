"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus, Minus, X, Divide, BookOpen } from "lucide-react"

export default function MathPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-200 via-amber-200 to-cyan-200">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-6 w-10 h-10 bg-rose-400 rounded-full animate-bounce opacity-90 shadow-lg"></div>
        <div className="absolute top-28 right-16 w-8 h-8 bg-amber-400 rounded-full animate-pulse opacity-90 shadow-md"></div>
        <div className="absolute top-56 left-1/3 w-5 h-5 bg-lime-400 rounded-full animate-bounce delay-200 opacity-90 shadow-sm"></div>
        <div className="absolute bottom-36 right-12 w-12 h-12 bg-cyan-400 rounded-full animate-pulse delay-400 opacity-90 shadow-md"></div>
        <Plus className="absolute top-40 right-1/3 w-7 h-7 text-rose-500 animate-spin" />
        <X className="absolute bottom-60 left-20 w-9 h-9 text-amber-500 animate-pulse" />
        <BookOpen className="absolute top-1/2 left-10 w-7 h-7 text-cyan-500 animate-bounce" />
      </div>

      <div className="container flex flex-col items-center justify-center min-h-screen py-8 space-y-10 relative z-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-rose-600 via-amber-500 to-cyan-600 bg-clip-text text-transparent drop-shadow-lg mb-4">
            🧮 Matematyka 🔢
          </h1>
          <p className="text-lg text-cyan-800 max-w-lg mx-auto">
            Wybierz sekcję i baw się liczbami — kolorowo i przyjemnie!
          </p>
        </div>

        {/* Fun decorative banner */}
        <div className="flex justify-center space-x-4 text-3xl mb-4">
          <span className="animate-bounce text-rose-500">➕</span>
          <span className="animate-bounce delay-100 text-amber-500">➖</span>
          <span className="animate-bounce delay-200 text-lime-500">✖️</span>
          <span className="animate-bounce delay-300 text-cyan-500">➗</span>
        </div>

        {/* Section cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Addition & Subtraction card */}
          <Link href="/math/basic" className="group">
            <Card className="bg-gradient-to-br from-amber-200 to-rose-200 border-4 border-amber-300 shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-3xl overflow-hidden hover:scale-105 h-full">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <div className="flex space-x-2">
                    <Plus className="w-10 h-10 text-white" />
                    <Minus className="w-10 h-10 text-white" />
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-amber-800">Dodawanie i Odejmowanie</h2>

                <p className="text-amber-700 max-w-xs">
                  Proste działania dla najmłodszych — ciepłe, przyjazne kolory i zabawne zadania.
                </p>

                <Button className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 border-none text-white rounded-2xl px-6 py-4 h-auto font-bold text-lg shadow-lg hover:shadow-xl transform transition-all duration-200">
                  Zacznij Ćwiczyć!
                </Button>
              </div>
            </Card>
          </Link>

          {/* Multiplication & Division card */}
          <Link href="/math/advanced" className="group">
            <Card className="bg-gradient-to-br from-fuchsia-200 to-indigo-200 border-4 border-fuchsia-300 shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-3xl overflow-hidden hover:scale-105 h-full">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-r from-fuchsia-400 to-indigo-400 rounded-full flex items-center justify-center shadow-lg">
                  <div className="flex space-x-2">
                    <X className="w-10 h-10 text-white" />
                    <Divide className="w-10 h-10 text-white" />
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-fuchsia-800">Mnożenie i Dzielenie</h2>

                <p className="text-indigo-700 max-w-xs">
                  Kolorowa, energetyczna sekcja dla chętnych na większe wyzwania.
                </p>

                <Button className="bg-gradient-to-r from-fuchsia-500 to-indigo-500 hover:from-fuchsia-600 hover:to-indigo-600 border-none text-white rounded-2xl px-6 py-4 h-auto font-bold text-lg shadow-lg hover:shadow-xl transform transition-all duration-200">
                  Zacznij Ćwiczyć!
                </Button>
              </div>
            </Card>
          </Link>
        </div>

        {/* Motivational section */}
        <div className="bg-gradient-to-r from-rose-300 via-amber-300 to-cyan-300 rounded-3xl p-6 shadow-xl border-4 border-rose-200 max-w-2xl">
          <div className="text-center">
            <div className="flex justify-center space-x-2 text-2xl mb-2">
              <span className="animate-bounce text-rose-600">🧠</span>
              <span className="animate-bounce delay-100 text-amber-600">🔢</span>
              <span className="animate-bounce delay-200 text-cyan-600">🎯</span>
            </div>
            <p className="text-cyan-800 font-bold text-lg">📐 Matematyka to zabawa! Kolory pomagają zapamiętywać i bawić się nauką 🎲</p>
          </div>
        </div>

        {/* Home button */}
        <Link href="/">
          <Button
            variant="outline"
            className="bg-gradient-to-r from-fuchsia-400 to-amber-400 border-none text-white hover:from-fuchsia-500 hover:to-amber-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Wróć do strony głównej
          </Button>
        </Link>
      </div>
    </div>
  )
}
