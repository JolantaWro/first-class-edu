import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Calculator, Star, Heart, Languages } from "lucide-react"

export default function HomePage() {
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
      </div>

      {/* Hero section with rainbow gradient */}
      <div className="relative overflow-hidden bg-gradient-to-r from-pink-300 via-purple-300 to-green-300 pt-16 pb-24">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-block mb-6">
            <h1 className="text-6xl font-bold tracking-tight mb-4 drop-shadow-lg text-purple-800">
              🎮 Gra Edukacyjna 🌟
            </h1>
          </div>
          <p className="text-2xl font-semibold text-purple-800 max-w-2xl mx-auto mb-12 drop-shadow-sm">
            Ucz się matematyki i czytania w zabawny sposób! 🚀✨
          </p>

          {/* Fun decorative banner */}
          <div className="flex justify-center space-x-4 text-4xl mb-8">
            <span className="animate-bounce">🎯</span>
            <span className="animate-bounce delay-100">🎨</span>
            <span className="animate-bounce delay-200">🎪</span>
            <span className="animate-bounce delay-300">🎭</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Math card */}
          <Link href="/math" className="group">
            <div className="bg-gradient-to-br from-orange-200 to-yellow-300 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden h-full transform group-hover:-translate-y-2 group-hover:scale-105 border-4 border-orange-300">
              <div className="p-8 flex flex-col items-center relative">
                {/* Decorative circles */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-red-400 rounded-full opacity-70"></div>
                <div className="absolute top-8 right-8 w-4 h-4 bg-blue-400 rounded-full opacity-70"></div>

                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-red-400 via-orange-400 to-yellow-400 flex items-center justify-center mb-6 shadow-lg border-4 border-white">
                  <Calculator className="w-14 h-14 text-white drop-shadow-lg" />
                </div>

                <h2 className="text-3xl font-bold text-orange-800 mb-3 drop-shadow-sm">🔢 Matematyka</h2>

                <p className="text-orange-700 text-center mb-6 font-medium text-lg">
                  Odkryj świat liczb! Dodawanie, odejmowanie i mnożenie 🎲✨
                </p>

                <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-none text-white rounded-full px-10 py-7 h-auto font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  🚀 Rozpocznij przygodę!
                </Button>
              </div>
            </div>
          </Link>

          {/* Reading card */}
          <Link href="/read" className="group">
            <div className="bg-gradient-to-br from-blue-200 to-purple-300 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden h-full transform group-hover:-translate-y-2 group-hover:scale-105 border-4 border-blue-300">
              <div className="p-8 flex flex-col items-center relative">
                {/* Decorative circles */}
                <div className="absolute top-4 left-4 w-6 h-6 bg-green-400 rounded-full opacity-70"></div>
                <div className="absolute top-8 left-8 w-4 h-4 bg-pink-400 rounded-full opacity-70"></div>

                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg border-4 border-white">
                  <BookOpen className="w-14 h-14 text-white drop-shadow-lg" />
                </div>

                <h2 className="text-3xl font-bold text-purple-800 mb-3 drop-shadow-sm">📚 Czytanie</h2>

                <p className="text-purple-700 text-center mb-6 font-medium text-lg">
                  Poznaj magiczny świat słów! Czytanie to klucz do niesamowitych przygód! 📖🌈
                </p>

                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-none text-white rounded-full px-10 py-7 h-auto font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  ✨ Zacznij czytać!
                </Button>
              </div>
            </div>
          </Link>

          {/* English card */}
          <Link href="/english" className="group">
            <div className="bg-gradient-to-br from-green-200 to-teal-300 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden h-full transform group-hover:-translate-y-2 group-hover:scale-105 border-4 border-green-300">
              <div className="p-8 flex flex-col items-center relative">
                {/* Decorative circles */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-yellow-400 rounded-full opacity-70"></div>
                <div className="absolute top-8 right-8 w-4 h-4 bg-red-400 rounded-full opacity-70"></div>

                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-green-500 via-teal-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg border-4 border-white">
                  <Languages className="w-14 h-14 text-white drop-shadow-lg" />
                </div>

                <h2 className="text-3xl font-bold text-green-800 mb-3 drop-shadow-sm">🇬🇧 Angielski</h2>

                <p className="text-green-700 text-center mb-6 font-medium text-lg">
                  Hello! Poznaj angielski przez zabawę! Kolory, zwierzęta i więcej! 🌍🎈
                </p>

                <Button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 border-none text-white rounded-full px-10 py-7 h-auto font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  🌟 Let's go!
                </Button>
              </div>
            </div>
          </Link>
        </div>

        {/* Fun stats section */}
        <div className="mt-16 bg-gradient-to-r from-green-300 to-blue-300 rounded-3xl p-8 shadow-xl border-4 border-green-400">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-green-800 mb-6">🏆 Twoje osiągnięcia czekają! 🏆</h3>
            <div className="flex justify-center space-x-8 text-2xl">
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-3xl mb-2">🌟</div>
                <div className="font-bold text-green-700">Zdobądź gwiazdki!</div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-3xl mb-2">🎖️</div>
                <div className="font-bold text-blue-700">Odbierz medale!</div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-3xl mb-2">🎉</div>
                <div className="font-bold text-purple-700">Świętuj sukces!</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer section */}
        <div className="text-center mt-16 mb-8">
          <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
            <p className="text-purple-700 text-lg font-medium">
              🎨 Zaprojektowane z miłością dla dzieci! Nauka może być kolorowa i radosna! 🌈
            </p>
            <div className="flex justify-center space-x-2 mt-4 text-2xl">
              <span>🎪</span>
              <span>🎨</span>
              <span>🌟</span>
              <span>🎯</span>
              <span>🚀</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
