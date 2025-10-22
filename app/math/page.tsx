"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus, Minus, X, Divide, BookOpen } from "lucide-react"

export default function MathPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-green-200 to-teal-200">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-60 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 right-10 w-10 h-10 bg-teal-400 rounded-full animate-pulse delay-500"></div>
        <Plus className="absolute top-40 right-1/3 w-6 h-6 text-green-500 animate-spin" />
        <X className="absolute bottom-60 left-20 w-8 h-8 text-blue-400 animate-pulse" />
        <BookOpen className="absolute top-1/2 left-10 w-6 h-6 text-teal-500 animate-bounce" />
      </div>

      <div className="container flex flex-col items-center justify-center min-h-screen py-8 space-y-10 relative z-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-teal-600 bg-clip-text text-transparent drop-shadow-lg mb-4">
            🧮 Matematyka 🔢
          </h1>
          <p className="text-xl text-teal-700 max-w-md mx-auto">
            Wybierz poziom trudności i ćwicz matematykę w zabawny sposób!
          </p>
        </div>

        {/* Fun decorative banner */}
        <div className="flex justify-center space-x-4 text-3xl mb-4">
          <span className="animate-bounce">➕</span>
          <span className="animate-bounce delay-100">➖</span>
          <span className="animate-bounce delay-200">✖️</span>
          <span className="animate-bounce delay-300">➗</span>
        </div>

        {/* Section cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Addition & Subtraction card */}
          <Link href="/math/basic" className="group">
            <Card className="bg-gradient-to-br from-green-200 to-blue-200 border-4 border-green-300 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden hover:scale-105 h-full">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center shadow-lg">
                  <div className="flex">
                    <Plus className="w-10 h-10 text-white" />
                    <Minus className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-green-800">Dodawanie i Odejmowanie</h2>
                
                <p className="text-blue-700">
                  Proste działania matematyczne dla początkujących. Naucz się dodawać i odejmować liczby w atrakcyjny sposób!
                </p>
                
                <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 border-none text-white rounded-2xl px-6 py-6 h-auto font-bold text-lg shadow-lg hover:shadow-xl transform transition-all duration-200">
                  Zacznij Ćwiczyć!
                </Button>
              </div>
            </Card>
          </Link>

          {/* Multiplication & Division card */}
          <Link href="/math/advanced" className="group">
            <Card className="bg-gradient-to-br from-blue-200 to-teal-200 border-4 border-blue-300 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden hover:scale-105 h-full">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg">
                  <div className="flex">
                    <X className="w-10 h-10 text-white" />
                    <Divide className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-blue-800">Mnożenie i Dzielenie</h2>
                
                <p className="text-teal-700">
                  Bardziej zaawansowane działania dla starszych uczniów. Sprawdź swoją wiedzę z mnożenia i dzielenia!
                </p>
                
                <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 border-none text-white rounded-2xl px-6 py-6 h-auto font-bold text-lg shadow-lg hover:shadow-xl transform transition-all duration-200">
                  Zacznij Ćwiczyć!
                </Button>
              </div>
            </Card>
          </Link>
        </div>

        {/* Motivational section */}
        <div className="bg-gradient-to-r from-green-300 to-blue-300 rounded-3xl p-6 shadow-xl border-4 border-teal-400 max-w-2xl">
          <div className="text-center">
            <div className="flex justify-center space-x-2 text-2xl mb-2">
              <span className="animate-bounce">🧠</span>
              <span className="animate-bounce delay-100">🔢</span>
              <span className="animate-bounce delay-200">🎯</span>
            </div>
            <p className="text-teal-800 font-bold text-lg">📐 Matematyka to zabawa! Każde działanie to nowa przygoda! 🎲</p>
          </div>
        </div>

        {/* Home button */}
        <Link href="/">
          <Button
            variant="outline"
            className="bg-gradient-to-r from-blue-400 to-teal-400 border-none text-white hover:from-blue-500 hover:to-teal-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Wróć do strony głównej
          </Button>
        </Link>
      </div>
    </div>
  )
}
