import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Calculator } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Hero section with gradient */}
      <div className="relative overflow-hidden bg-gradient-to-b from-white to-[#f5f5f7] pt-16 pb-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-darkblue-dark mb-4">Gra Edukacyjna</h1>
          <p className="text-xl text-darkblue-light max-w-2xl mx-auto mb-12">
            Ucz się matematyki i czytania w zabawny sposób, zaprojektowany specjalnie dla dzieci.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Math card */}
          <Link href="/math" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full transform group-hover:-translate-y-1">
              <div className="p-8 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-dark to-yellow flex items-center justify-center mb-6">
                  <Calculator className="w-12 h-12 text-darkblue-dark" />
                </div>
                <h2 className="text-2xl font-semibold text-darkblue-dark mb-3">Matematyka</h2>
                <p className="text-darkblue-light text-center mb-6">
                  Odkryj świat liczb poprzez zabawne ćwiczenia z dodawania, odejmowania i mnożenia.
                </p>
                <Button className="bg-gradient-to-r from-yellow to-yellow-dark border-none text-darkblue-dark rounded-full px-8 py-6 h-auto font-medium hover:opacity-90">
                  Rozpocznij naukę
                </Button>
              </div>
            </div>
          </Link>

          {/* Reading card */}
          <Link href="/read" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full transform group-hover:-translate-y-1">
              <div className="p-8 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-darkblue to-darkblue-light flex items-center justify-center mb-6">
                  <BookOpen className="w-12 h-12 text-yellow" />
                </div>
                <h2 className="text-2xl font-semibold text-darkblue-dark mb-3">Czytanie</h2>
                <p className="text-darkblue-light text-center mb-6">
                  Poznaj nowe słowa i rozwijaj umiejętności czytania poprzez interaktywne ćwiczenia.
                </p>
                <Button className="bg-gradient-to-r from-darkblue to-darkblue-light border-none text-yellow rounded-full px-8 py-6 h-auto font-medium hover:opacity-90">
                  Rozpocznij naukę
                </Button>
              </div>
            </div>
          </Link>
        </div>

        {/* Footer section */}
        <div className="text-center mt-16 mb-8">
          <p className="text-darkblue-light text-sm">
            Zaprojektowane z myślą o dzieciach, aby nauka była przyjemna i efektywna.
          </p>
        </div>
      </div>
    </div>
  )
}
