import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Baby, UserCircle, Globe, Star, Heart } from "lucide-react"

export default function EnglishPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-teal-200 to-cyan-200">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute top-60 left-1/4 w-4 h-4 bg-red-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 right-10 w-10 h-10 bg-blue-400 rounded-full animate-pulse delay-500"></div>
        <Star className="absolute top-40 right-1/3 w-6 h-6 text-yellow-500 animate-spin" />
        <Heart className="absolute bottom-60 left-20 w-8 h-8 text-green-400 animate-pulse" />
      </div>

      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 pt-8 pb-16">
        <div className="container mx-auto px-6">
          <Link href="/">
            <Button variant="ghost" className="mb-6 bg-white/80 hover:bg-white rounded-full px-6 py-3 shadow-lg">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Powrót do strony głównej
            </Button>
          </Link>

          <div className="text-center relative z-10">
            <div className="inline-block mb-6">
              <Globe className="w-20 h-20 text-green-700 mx-auto mb-4 drop-shadow-lg" />
              <h1 className="text-6xl font-bold tracking-tight mb-4 drop-shadow-lg text-green-800">
                🇬🇧 Angielski 🌍
              </h1>
            </div>
            <p className="text-2xl font-semibold text-green-800 max-w-2xl mx-auto mb-8 drop-shadow-sm">
              Hello! Wybierz poziom trudności! 🎈✨
            </p>

            {/* Fun decorative banner */}
            <div className="flex justify-center space-x-4 text-4xl">
              <span className="animate-bounce">🐻</span>
              <span className="animate-bounce delay-100">🎨</span>
              <span className="animate-bounce delay-200">🌈</span>
              <span className="animate-bounce delay-300">🎪</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Preschooler card */}
          <Link href="/english/preschool" className="group">
            <div className="bg-gradient-to-br from-yellow-200 to-green-300 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden h-full transform group-hover:-translate-y-2 group-hover:scale-105 border-4 border-yellow-300">
              <div className="p-8 flex flex-col items-center relative">
                {/* Decorative circles */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-pink-400 rounded-full opacity-70"></div>
                <div className="absolute top-8 right-8 w-4 h-4 bg-blue-400 rounded-full opacity-70"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-red-400 rounded-full opacity-50"></div>

                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 via-green-400 to-teal-400 flex items-center justify-center mb-6 shadow-lg border-4 border-white">
                  <Baby className="w-16 h-16 text-white drop-shadow-lg" />
                </div>

                <h2 className="text-4xl font-bold text-yellow-800 mb-3 drop-shadow-sm">👶 Przedszkolak</h2>

                <p className="text-green-700 text-center mb-6 font-medium text-lg">
                  Pierwsze słówka po angielsku! Kolory, zwierzęta, liczby! 🎨🐾
                </p>

                <div className="bg-white/80 rounded-2xl p-4 mb-6 w-full">
                  <p className="text-green-600 font-semibold text-center text-sm">
                    ✨ Łatwe słówka<br/>
                    🎵 Piosenki i rymowanki<br/>
                    🖼️ Kolorowe obrazki
                  </p>
                </div>

                <Button className="bg-gradient-to-r from-yellow-500 to-green-500 hover:from-yellow-600 hover:to-green-600 border-none text-white rounded-full px-12 py-7 h-auto font-bold text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  🌟 Let's start!
                </Button>
              </div>
            </div>
          </Link>

          {/* Older child card */}
          <Link href="/english/older" className="group">
            <div className="bg-gradient-to-br from-teal-200 to-blue-300 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden h-full transform group-hover:-translate-y-2 group-hover:scale-105 border-4 border-teal-300">
              <div className="p-8 flex flex-col items-center relative">
                {/* Decorative circles */}
                <div className="absolute top-4 left-4 w-6 h-6 bg-yellow-400 rounded-full opacity-70"></div>
                <div className="absolute top-8 left-8 w-4 h-4 bg-pink-400 rounded-full opacity-70"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-green-400 rounded-full opacity-50"></div>

                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-500 via-blue-500 to-indigo-500 flex items-center justify-center mb-6 shadow-lg border-4 border-white">
                  <UserCircle className="w-16 h-16 text-white drop-shadow-lg" />
                </div>

                <h2 className="text-4xl font-bold text-teal-800 mb-3 drop-shadow-sm">🧒 Starsze dziecko</h2>

                <p className="text-blue-700 text-center mb-6 font-medium text-lg">
                  Czas na więcej! Zdania, gramatyka, konwersacje! 🗣️📚
                </p>

                <div className="bg-white/80 rounded-2xl p-4 mb-6 w-full">
                  <p className="text-teal-600 font-semibold text-center text-sm">
                    🎯 Trudniejsze słówka<br/>
                    💬 Proste zdania<br/>
                    🌍 Praktyczne wyrażenia
                  </p>
                </div>

                <Button className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 border-none text-white rounded-full px-12 py-7 h-auto font-bold text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  🚀 Let's go!
                </Button>
              </div>
            </div>
          </Link>
        </div>

        {/* Info section */}
        <div className="mt-16 bg-gradient-to-r from-yellow-300 to-green-300 rounded-3xl p-8 shadow-xl border-4 border-yellow-400 max-w-5xl mx-auto">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-green-800 mb-6">🏆 Nauka angielskiego to przygoda! 🏆</h3>
            <div className="flex justify-center space-x-8 text-xl flex-wrap gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-3xl mb-2">🎮</div>
                <div className="font-bold text-green-700">Gry językowe</div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-3xl mb-2">🎧</div>
                <div className="font-bold text-blue-700">Słuchanie</div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-3xl mb-2">✨</div>
                <div className="font-bold text-teal-700">Nagrody</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 mb-8">
          <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm max-w-3xl mx-auto">
            <p className="text-green-700 text-lg font-medium">
              🌈 English is fun! Angielski może być fajny i łatwy! 🎉
            </p>
            <div className="flex justify-center space-x-2 mt-4 text-2xl">
              <span>🇬🇧</span>
              <span>🌟</span>
              <span>🎨</span>
              <span>🚀</span>
              <span>🎈</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
