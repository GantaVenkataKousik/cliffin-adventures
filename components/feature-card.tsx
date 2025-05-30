import { Map, Tent, Star, Compass, Shield, Coffee } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: "map" | "tent" | "star" | "compass" | "shield" | "coffee"
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "map":
        return <Map className="w-6 h-6" />
      case "tent":
        return <Tent className="w-6 h-6" />
      case "star":
        return <Star className="w-6 h-6" />
      case "compass":
        return <Compass className="w-6 h-6" />
      case "shield":
        return <Shield className="w-6 h-6" />
      case "coffee":
        return <Coffee className="w-6 h-6" />
    }
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors border border-white/20">
      <div className="bg-amber-500 p-3 rounded-full w-fit mb-4">{getIcon()}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  )
}
