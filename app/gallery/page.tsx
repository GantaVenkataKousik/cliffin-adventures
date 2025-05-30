import Image from "next/image"
import { Camera } from "lucide-react"
import DecorativePattern from "@/components/decorative-pattern"
import { BinocularsIcon } from "@/components/svg/adventure-icons"

const galleryImages = [
  {
    src: "/images/hero.png",
    alt: "Lakeside camping at sunset",
    category: "Camping",
    title: "Lakeside Serenity",
    description: "Perfect sunset views from our lakeside camp",
  },
  {
    src: "/images/bridge.png",
    alt: "Suspension bridge crossing",
    category: "Adventure",
    title: "Mountain Bridge",
    description: "Crossing the famous suspension bridge",
  },
  {
    src: "/images/tent-view.png",
    alt: "Morning view from tent",
    category: "Camping",
    title: "Morning Glory",
    description: "Waking up to breathtaking mountain views",
  },
  {
    src: "/images/campsite.png",
    alt: "Forest campsite",
    category: "Camping",
    title: "Forest Camp",
    description: "Our cozy forest expedition basecamp",
  },
  {
    src: "/images/cliff.png",
    alt: "Cliff overlook",
    category: "Adventure",
    title: "Cliff Overlook",
    description: "Spectacular views from the mountain peak",
  },
  {
    src: "/images/lakeside.png",
    alt: "Peaceful lake reflection",
    category: "Nature",
    title: "Lake Reflection",
    description: "Crystal clear waters reflecting the sky",
  },
]

export default function GalleryPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image src="/images/hero.png" alt="Adventure gallery" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 to-stone-900/90"></div>
        <DecorativePattern pattern="dots" color="#ffffff" className="opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BinocularsIcon className="w-6 h-6 text-amber-500" />
              <span className="text-amber-400 font-semibold uppercase tracking-wider text-sm">Gallery</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Adventure Gallery</h1>
            <p className="text-xl text-stone-300">
              Explore stunning moments captured during our wilderness adventures and get inspired for your next journey.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-stone-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-stone-900 rounded-lg font-medium">
                All Photos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-32 bg-stone-50 relative">
        <DecorativePattern pattern="lines" color="#78716c" className="opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg bg-white">
                <div className="relative h-80">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block bg-amber-500 text-stone-900 text-xs font-medium px-2 py-1 rounded-full mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                    <p className="text-sm text-white/80">{image.description}</p>
                  </div>
                  <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-medium px-8 py-4 rounded-full transition-colors duration-300">
              Load More Photos
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-amber-500 relative">
        <DecorativePattern pattern="dots" color="#ffffff" className="opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-stone-900">Ready to Create Your Own Memories?</h2>
            <p className="text-lg mb-8 text-stone-800">
              Join us on an adventure and capture your own stunning moments in the wilderness.
            </p>
            <button className="bg-stone-900 hover:bg-stone-800 text-white font-medium px-8 py-4 rounded-full transition-all duration-300">
              Book Your Adventure
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
