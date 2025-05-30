import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Filter, Search } from "lucide-react"
import AdventureCard from "@/components/adventure-card"
import DecorativePattern from "@/components/decorative-pattern"
import { CompassIcon, MountainIcon } from "@/components/svg/adventure-icons"

const adventures = [
  {
    title: "Lakeside Serenity",
    description:
      "Experience the tranquility of camping by a pristine mountain lake. Wake up to breathtaking views and spend your days fishing, hiking, or simply relaxing in nature's embrace.",
    image: "/images/lakeside.png",
    price: 249,
    duration: "3 days",
    difficulty: "Easy" as const,
    category: "Camping",
    featured: false,
  },
  {
    title: "Forest Expedition",
    description:
      "Immerse yourself in the heart of ancient forests. Our guided expedition takes you through lush trails, teaching you survival skills and forest ecology while camping under the canopy.",
    image: "/images/campsite.png",
    price: 349,
    duration: "4 days",
    difficulty: "Moderate" as const,
    category: "Hiking",
    featured: true,
  },
  {
    title: "Mountain Thrill",
    description:
      "For the adventure seekers! Trek across suspension bridges, climb to breathtaking viewpoints, and challenge yourself in the majestic mountains with expert guidance.",
    image: "/images/bridge.png",
    price: 499,
    duration: "5 days",
    difficulty: "Challenging" as const,
    category: "Climbing",
    featured: false,
  },
  {
    title: "Desert Oasis",
    description:
      "Discover the hidden beauty of desert landscapes. Camp under star-filled skies and explore unique rock formations in this unforgettable desert adventure.",
    image: "/images/cliff.png",
    price: 399,
    duration: "4 days",
    difficulty: "Moderate" as const,
    category: "Camping",
    featured: false,
  },
  {
    title: "River Rapids",
    description:
      "Navigate exciting river rapids while enjoying scenic camping spots along the riverbank. Perfect for water sports enthusiasts and nature lovers alike.",
    image: "/images/hero.png",
    price: 449,
    duration: "3 days",
    difficulty: "Challenging" as const,
    category: "Water Sports",
    featured: false,
  },
  {
    title: "Wildlife Safari Camp",
    description:
      "Combine wildlife observation with comfortable camping. Wake up to the sounds of nature and spot diverse wildlife in their natural habitat.",
    image: "/images/tent-view.png",
    price: 549,
    duration: "6 days",
    difficulty: "Easy" as const,
    category: "Wildlife",
    featured: true,
  },
]

export default function AdventuresPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image src="/images/bridge.png" alt="Adventure awaits" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 to-stone-900/90"></div>
        <DecorativePattern pattern="mountains" color="#ffffff" className="opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <CompassIcon className="w-6 h-6 text-amber-500" />
              <span className="text-amber-400 font-semibold uppercase tracking-wider text-sm">Adventures</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Choose Your Adventure</h1>
            <p className="text-xl text-stone-300">
              From peaceful lakeside retreats to thrilling mountain expeditions, find the perfect adventure that matches
              your spirit.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-stone-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search adventures..."
                  className="pl-10 pr-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors">
                <Filter className="w-4 h-4" />
                Filters
              </button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-stone-600">Sort by:</span>
              <select className="px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Duration</option>
                <option>Difficulty</option>
                <option>Popularity</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Adventures Grid */}
      <section className="py-20 md:py-32 bg-stone-50 relative">
        <DecorativePattern pattern="dots" color="#78716c" className="opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adventures.map((adventure, index) => (
              <AdventureCard
                key={index}
                title={adventure.title}
                description={adventure.description}
                image={adventure.image}
                price={adventure.price}
                duration={adventure.duration}
                difficulty={adventure.difficulty}
                featured={adventure.featured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Adventures */}
      <section className="py-20 md:py-32 bg-white relative">
        <DecorativePattern pattern="lines" color="#78716c" className="opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mb-4">
                <MountainIcon className="w-6 h-6 text-amber-500" />
                <span className="text-amber-600 font-semibold uppercase tracking-wider text-sm">Custom</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-800">Create Your Own Adventure</h2>
              <p className="text-lg text-stone-600 mb-6">
                Don't see exactly what you're looking for? We specialize in creating custom adventures tailored to your
                group's interests, skill level, and schedule.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-amber-500 rounded-full p-1">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-stone-700">Personalized itineraries</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-amber-500 rounded-full p-1">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-stone-700">Flexible dates and duration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-amber-500 rounded-full p-1">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-stone-700">Private group options</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-amber-500 rounded-full p-1">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-stone-700">Special dietary accommodations</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-stone-900 font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Plan Custom Adventure <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/cliff.png" alt="Custom adventures" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Your Adventure, Your Way</h3>
                  <p className="text-white/80">Tailored experiences for unforgettable memories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-amber-500 relative">
        <DecorativePattern pattern="dots" color="#ffffff" className="opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-stone-900">Ready to Book Your Adventure?</h2>
            <p className="text-lg mb-8 text-stone-800">
              Have questions about our adventures? Our team is here to help you choose the perfect experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#booking"
                className="bg-stone-900 hover:bg-stone-800 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
              >
                Book Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-stone-50 text-stone-900 font-medium px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
              >
                Ask Questions <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
