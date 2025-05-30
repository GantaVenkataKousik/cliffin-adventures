import { Coffee, Users, Mountain, Camera } from "lucide-react"

export default function SpecialFeatures() {
  return (
    <section className="py-16 md:py-24 bg-[#f9f5f0]">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">WHAT MAKES US SPECIAL?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-6 rounded-full shadow-md mb-6">
              <Coffee className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Refreshments</h3>
            <p className="text-gray-700">
              We provide quality refreshments during all our adventures to keep you energized.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-6 rounded-full shadow-md mb-6">
              <Users className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Guides</h3>
            <p className="text-gray-700">
              Our experienced guides ensure your safety and enhance your adventure experience.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-6 rounded-full shadow-md mb-6">
              <Mountain className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Unique Locations</h3>
            <p className="text-gray-700">We take you to breathtaking locations that are off the beaten path.</p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-6 rounded-full shadow-md mb-6">
              <Camera className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Photo Memories</h3>
            <p className="text-gray-700">We capture your adventure moments so you can cherish them forever.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
