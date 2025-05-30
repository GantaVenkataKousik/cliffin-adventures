import Image from "next/image"
import Link from "next/link"
import { Clock, ArrowRight, Award } from "lucide-react"

interface AdventureCardProps {
  title: string
  description: string
  image: string
  price: number
  duration: string
  difficulty: "Easy" | "Moderate" | "Challenging"
  featured?: boolean
}

export default function AdventureCard({
  title,
  description,
  image,
  price,
  duration,
  difficulty,
  featured = false,
}: AdventureCardProps) {
  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl bg-white ${
        featured ? "ring-2 ring-amber-500" : ""
      }`}
    >
      <div className="relative">
        <div className="relative h-64 w-full">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        {featured && (
          <div className="absolute top-4 right-4 bg-amber-500 text-white text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1">
            <Award className="w-4 h-4" />
            Popular
          </div>
        )}
        <div className="absolute bottom-4 left-4">
          <span
            className={`text-sm px-3 py-1 rounded-full bg-white/90 font-medium ${
              difficulty === "Easy" ? "text-green-700" : difficulty === "Moderate" ? "text-amber-700" : "text-red-700"
            }`}
          >
            {difficulty}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-stone-800">{title}</h3>
        <p className="text-stone-600 mb-4 line-clamp-3">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 bg-amber-50 px-3 py-1 rounded-full">
            <Clock className="w-4 h-4 text-amber-500" />
            <span className="text-sm text-stone-700 font-medium">{duration}</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-stone-100">
          <div>
            <span className="text-2xl font-bold text-stone-800">${price}</span>
            <span className="text-stone-500 text-sm">/person</span>
          </div>
          <Link
            href={`/adventures/${title.toLowerCase().replace(/\s+/g, "-")}`}
            className="inline-flex items-center gap-1 text-amber-600 font-medium hover:text-amber-700 transition-colors bg-amber-50 px-3 py-2 rounded-lg"
          >
            View Details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
