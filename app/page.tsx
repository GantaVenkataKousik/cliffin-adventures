import Image from "next/image"
import Link from "next/link"
import {
  ChevronRight,
  MapPin,
  Calendar,
  Users,
  ArrowRight,
  BinaryIcon as BinocularsIcon,
  Code,
  Globe,
} from "lucide-react"
import AdventureCard from "@/components/adventure-card"
import TestimonialSlider from "@/components/testimonial-slider"
import BookingForm from "@/components/booking-form"
import DecorativePattern from "@/components/decorative-pattern"
import {
  MountainIcon,
  CampfireIcon,
  CompassIcon,
  BackpackIcon,
  WavyDivider,
  MountainDivider,
} from "@/components/svg/adventure-icons"

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.png"
            alt="Camping in the forest by the lake"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4 max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <div className="bg-white/90 p-4 rounded-xl mb-6">
              <Image
                src="https://i.postimg.cc/PqbWFcZF/image-removebg-preview.png"
                alt="Cliff-Inn Adventures Logo"
                width={300}
                height={100}
                className="h-24 w-auto"
              />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg">
              Discover the Magic of <span className="text-amber-400">Wilderness</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-white drop-shadow-lg">
            Immerse yourself in nature with our premium camping experiences and thrilling adventures in the most
            breathtaking locations
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#booking"
              className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-medium px-8 py-4 rounded-full transition-all duration-300 text-lg flex items-center gap-2"
            >
              <CampfireIcon className="w-5 h-5" /> Book Your Adventure
            </Link>
            <Link
              href="#adventures"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 text-lg border border-white/30 flex items-center gap-2"
            >
              <CompassIcon className="w-5 h-5" /> Explore Packages
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <Link
            href="#about"
            className="animate-bounce bg-white/20 backdrop-blur-sm p-3 rounded-full border border-white/30"
          >
            <ChevronRight className="w-6 h-6 text-white rotate-90" />
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-white">
          <WavyDivider />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-white relative scroll-mt-20">
        <DecorativePattern pattern="mountains" color="#e5e7eb" className="opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center gap-2 mb-4">
                <MountainIcon className="w-6 h-6 text-amber-500" />
                <span className="text-amber-600 font-semibold uppercase tracking-wider text-sm">Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-800">
                Experience Nature Like Never Before
              </h2>
              <p className="text-lg text-stone-600 mb-6">
                At Cliff-Inn Adventures, we believe that connecting with nature is essential for the soul. Our carefully
                curated camping experiences combine comfort with adventure, allowing you to disconnect from the daily
                grind and reconnect with what truly matters.
              </p>
              <p className="text-lg text-stone-600 mb-8">
                Whether you're seeking a peaceful retreat by a serene lake or an adrenaline-pumping mountain expedition,
                our expert guides ensure your journey is both safe and unforgettable.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 bg-amber-50 p-3 rounded-lg">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-stone-700 font-medium">Premium Locations</span>
                </div>
                <div className="flex items-center gap-3 bg-amber-50 p-3 rounded-lg">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <Calendar className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-stone-700 font-medium">Year-round Adventures</span>
                </div>
                <div className="flex items-center gap-3 bg-amber-50 p-3 rounded-lg">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <Users className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-stone-700 font-medium">Expert Guides</span>
                </div>
                <div className="flex items-center gap-3 bg-amber-50 p-3 rounded-lg">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <BackpackIcon className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-stone-700 font-medium">All Equipment Provided</span>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-700 transition-colors"
              >
                Learn more about us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/tent-view.png" alt="View from inside a tent" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-xl overflow-hidden shadow-xl hidden md:block">
                <Image src="/images/campsite.png" alt="Campsite with multiple tents" fill className="object-cover" />
              </div>
              <div className="absolute -top-6 -right-6 bg-amber-500 rounded-full p-4 shadow-lg hidden md:block">
                <CampfireIcon className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-amber-500 relative">
        <DecorativePattern pattern="dots" color="#ffffff" className="opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold text-stone-900 mb-2">500+</span>
              <span className="text-stone-800 font-medium">Adventures Completed</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold text-stone-900 mb-2">15K+</span>
              <span className="text-stone-800 font-medium">Happy Adventurers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold text-stone-900 mb-2">50+</span>
              <span className="text-stone-800 font-medium">Unique Locations</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold text-stone-900 mb-2">10</span>
              <span className="text-stone-800 font-medium">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section id="developer" className="py-20 md:py-32 bg-white relative scroll-mt-20">
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

      {/* Featured Adventures */}
      <section id="adventures" className="py-20 md:py-32 bg-stone-100 relative scroll-mt-20">
        <DecorativePattern pattern="dots" color="#78716c" className="opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <CompassIcon className="w-6 h-6 text-amber-500" />
              <span className="text-amber-600 font-semibold uppercase tracking-wider text-sm">Explore</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-800">Our Featured Adventures</h2>
            <p className="text-lg text-stone-600">
              From serene camping experiences to adrenaline-pumping expeditions, we offer adventures for every type of
              nature enthusiast. Each package is thoughtfully designed to create memories that last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AdventureCard
              title="Lakeside Serenity"
              description="Experience the tranquility of camping by a pristine mountain lake. Wake up to breathtaking views and spend your days fishing, hiking, or simply relaxing."
              image="/images/lakeside.png"
              price={249}
              duration="3 days"
              difficulty="Easy"
            />
            <AdventureCard
              title="Forest Expedition"
              description="Immerse yourself in the heart of ancient forests. Our guided expedition takes you through lush trails, teaching you survival skills and forest ecology."
              image="/images/campsite.png"
              price={349}
              duration="4 days"
              difficulty="Moderate"
              featured={true}
            />
            <AdventureCard
              title="Mountain Thrill"
              description="For the adventure seekers! Trek across suspension bridges, climb to breathtaking viewpoints, and challenge yourself in the majestic mountains."
              image="/images/bridge.png"
              price={499}
              duration="5 days"
              difficulty="Challenging"
            />
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/adventures"
              className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-900 text-white font-medium px-8 py-4 rounded-full transition-all duration-300"
            >
              View All Adventures <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-white">
          <MountainDivider />
        </div>
      </section>

      {/* Safety & Certifications */}
      <section className="py-20 md:py-32 bg-white relative scroll-mt-20">
        <DecorativePattern pattern="lines" color="#78716c" className="opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BackpackIcon className="w-6 h-6 text-amber-500" />
              <span className="text-amber-600 font-semibold uppercase tracking-wider text-sm">Safety First</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-800">Your Safety is Our Priority</h2>
            <p className="text-lg text-stone-600">
              We maintain the highest safety standards with certified guides, quality equipment, and comprehensive
              safety protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-4">
                <BackpackIcon className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-stone-800">Certified Guides</h3>
              <p className="text-stone-600">
                All our guides are wilderness first aid certified and have years of experience.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-4">
                <CompassIcon className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-stone-800">Quality Equipment</h3>
              <p className="text-stone-600">We use only top-grade, regularly inspected equipment for all activities.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-stone-800">Small Groups</h3>
              <p className="text-stone-600">
                We maintain small group sizes to ensure personalized attention and safety.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-4">
                <CampfireIcon className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-stone-800">24/7 Support</h3>
              <p className="text-stone-600">Emergency communication and support available throughout your adventure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-32 bg-stone-100 relative scroll-mt-20">
        <DecorativePattern pattern="dots" color="#78716c" className="opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BinocularsIcon className="w-6 h-6 text-amber-500" />
              <span className="text-amber-600 font-semibold uppercase tracking-wider text-sm">Gallery</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-800">Capture the Adventure</h2>
            <p className="text-lg text-stone-600">
              A glimpse into the breathtaking experiences that await you on our wilderness adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="/images/lakeside.png"
                alt="Lakeside camping"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-medium">Lakeside Serenity</span>
              </div>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden lg:col-span-2">
              <Image
                src="/images/bridge.png"
                alt="Suspension bridge"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-medium">Mountain Crossing</span>
              </div>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="/images/tent-view.png"
                alt="View from tent"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-medium">Morning View</span>
              </div>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="/images/campsite.png"
                alt="Campsite"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-medium">Forest Camp</span>
              </div>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="/images/cliff.png"
                alt="Cliff view"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-medium">Cliff Overlook</span>
              </div>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden lg:col-span-2">
              <Image
                src="/images/hero.png"
                alt="Forest camping"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-medium">Lakeside Camp</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-900 text-white font-medium px-8 py-4 rounded-full transition-all duration-300"
            >
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Booking Section */}
      <section id="booking" className="py-20 md:py-32 bg-stone-100 relative scroll-mt-20">
        <DecorativePattern pattern="mountains" color="#78716c" className="opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mb-4">
                <CampfireIcon className="w-6 h-6 text-amber-500" />
                <span className="text-amber-600 font-semibold uppercase tracking-wider text-sm">Book Now</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-800">Book Your Wilderness Escape</h2>
              <p className="text-lg text-stone-600 mb-8">
                Ready to embark on an unforgettable adventure? Fill out the form to start planning your perfect
                wilderness escape. Our team will contact you within 24 hours to customize your experience.
              </p>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <BookingForm />
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="sticky top-20">
                <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/images/hero.png" alt="Camping by the lake" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Start Your Journey Today</h3>
                    <p className="text-white/80 mb-4">
                      Join thousands of adventurers who have discovered the magic of the wilderness with us.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-white">200+ Locations</span>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-white">5000+ Happy Campers</span>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-white">100% Satisfaction</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-amber-500 relative">
        <DecorativePattern pattern="dots" color="#ffffff" className="opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full w-fit mx-auto mb-4">
              <CompassIcon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-stone-900">Stay Updated on New Adventures</h2>
            <p className="text-lg mb-8 text-stone-800">
              Subscribe to our newsletter to receive exclusive offers and updates on new wilderness experiences.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-stone-800"
              />
              <button
                type="submit"
                className="bg-stone-900 hover:bg-stone-800 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ArrowRight className="w-4 h-4" /> Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
