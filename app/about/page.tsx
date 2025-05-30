import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Award, MapPin, Code, Globe } from "lucide-react"
import DecorativePattern from "@/components/decorative-pattern"
import { MountainIcon, CampfireIcon, CompassIcon } from "@/components/svg/adventure-icons"

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image src="/images/cliff.png" alt="Mountain adventure" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 to-stone-900/90"></div>
        <DecorativePattern pattern="lines" color="#ffffff" className="opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MountainIcon className="w-6 h-6 text-amber-500" />
              <span className="text-amber-400 font-semibold uppercase tracking-wider text-sm">About Us</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-stone-300">
              For over a decade, we've been creating unforgettable wilderness experiences that connect people with
              nature and each other.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 md:py-32 bg-white relative">
        <DecorativePattern pattern="mountains" color="#e5e7eb" className="opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-800">Our Mission</h2>
              <p className="text-lg text-stone-600 mb-6">
                At Cliff-Inn Adventures, we believe that the wilderness has the power to transform lives. Our mission is
                to provide safe, sustainable, and inspiring outdoor experiences that foster personal growth,
                environmental awareness, and lasting connections.
              </p>
              <p className="text-lg text-stone-600 mb-8">
                We're committed to preserving the natural beauty of our adventure locations while sharing them
                responsibly with fellow nature enthusiasts. Every adventure is designed to minimize environmental impact
                while maximizing personal impact.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-amber-50 p-3 rounded-lg">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <Award className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-stone-700 font-medium">Excellence in Service</span>
                </div>
                <div className="flex items-center gap-3 bg-amber-50 p-3 rounded-lg">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-stone-700 font-medium">Environmental Stewardship</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/tent-view.png" alt="Our mission" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 md:py-32 bg-stone-100 relative">
        <DecorativePattern pattern="dots" color="#78716c" className="opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-6 h-6 text-amber-500" />
              <span className="text-amber-600 font-semibold uppercase tracking-wider text-sm">Our Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-800">Meet Our Expert Guides</h2>
            <p className="text-lg text-stone-600">
              Our team of certified wilderness guides brings decades of combined experience and a passion for sharing
              the outdoors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-stone-200 rounded-full flex items-center justify-center">
                <span className="text-stone-500 font-medium">SM</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-stone-800">Sarah Mitchell</h3>
              <p className="text-amber-600 font-medium mb-3">Lead Adventure Guide</p>
              <p className="text-stone-600 text-sm">
                With 15 years of wilderness experience, Sarah specializes in mountain expeditions and survival training.
                She's a certified wilderness first responder and rock climbing instructor.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-stone-200 rounded-full flex items-center justify-center">
                <span className="text-stone-500 font-medium">MC</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-stone-800">Marcus Chen</h3>
              <p className="text-amber-600 font-medium mb-3">Forest Expedition Specialist</p>
              <p className="text-stone-600 text-sm">
                Marcus brings 12 years of forest ecology expertise to our team. He's passionate about wildlife
                conservation and holds certifications in wilderness medicine and environmental education.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-stone-200 rounded-full flex items-center justify-center">
                <span className="text-stone-500 font-medium">ER</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-stone-800">Emma Rodriguez</h3>
              <p className="text-amber-600 font-medium mb-3">Water Sports & Safety Coordinator</p>
              <p className="text-stone-600 text-sm">
                Emma oversees all water-based activities and safety protocols. She's a certified rescue diver and has 10
                years of experience in aquatic adventure sports and safety management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-20 md:py-32 bg-white relative">
        <DecorativePattern pattern="lines" color="#78716c" className="opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Code className="w-6 h-6 text-amber-500" />
              <span className="text-amber-600 font-semibold uppercase tracking-wider text-sm">Development</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-800">Website Developer</h2>
            <p className="text-lg text-stone-600">
              Meet the talented developer who brought this digital experience to life.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-stone-50 rounded-2xl p-8 md:p-12 text-center">
              <div className="relative w-40 h-40 mx-auto mb-6">
                <Image
                  src="/images/developer-profile.jpg"
                  alt="Ganta Venkata Kousik"
                  fill
                  className="object-cover rounded-full border-4 border-amber-500"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-stone-800">Ganta Venkata Kousik</h3>
              <p className="text-amber-600 font-medium text-lg mb-4">Software Developer | Entrepreneur</p>
              <p className="text-stone-600 mb-6 max-w-xl mx-auto">
                Passionate about creating digital experiences that connect businesses with their audiences. Specializing
                in modern web development, user experience design, and bringing innovative ideas to life through code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#"
                  className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-stone-900 font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  Profile Link
                </a>
                <div className="flex items-center gap-2 text-stone-600">
                  <span className="text-sm">venkatakousikcse01@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-32 bg-stone-100 relative">
        <DecorativePattern pattern="dots" color="#78716c" className="opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-800">Our Core Values</h2>
            <p className="text-lg text-stone-600">
              These principles guide everything we do, from planning adventures to caring for the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-4">
                <CampfireIcon className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-stone-800">Safety First</h3>
              <p className="text-stone-600">
                Every decision we make prioritizes the safety and well-being of our adventurers.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-4">
                <MountainIcon className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-stone-800">Environmental Respect</h3>
              <p className="text-stone-600">We practice and promote Leave No Trace principles in all our activities.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-stone-800">Inclusive Community</h3>
              <p className="text-stone-600">
                We welcome adventurers of all backgrounds and skill levels to join our community.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-stone-800">Continuous Excellence</h3>
              <p className="text-stone-600">
                We constantly improve our services and seek new ways to enhance your experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-amber-500 relative">
        <DecorativePattern pattern="dots" color="#ffffff" className="opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-stone-900">Ready to Start Your Adventure?</h2>
            <p className="text-lg mb-8 text-stone-800">
              Join our community of adventurers and discover what makes Cliff-Inn Adventures special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/adventures"
                className="bg-stone-900 hover:bg-stone-800 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
              >
                <CompassIcon className="w-5 h-5" /> Explore Adventures
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-stone-50 text-stone-900 font-medium px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
