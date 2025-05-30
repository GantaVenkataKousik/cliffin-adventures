import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import DecorativePattern from "@/components/decorative-pattern"
import { CampfireIcon } from "@/components/svg/adventure-icons"

export default function ContactPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image src="/images/lakeside.png" alt="Contact us" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 to-stone-900/90"></div>
        <DecorativePattern pattern="dots" color="#ffffff" className="opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <CampfireIcon className="w-6 h-6 text-amber-500" />
              <span className="text-amber-400 font-semibold uppercase tracking-wider text-sm">Contact</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-stone-300">
              Ready to plan your next adventure? We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 md:py-32 bg-white relative">
        <DecorativePattern pattern="mountains" color="#e5e7eb" className="opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-stone-800">Let's Start Planning</h2>
              <p className="text-lg text-stone-600 mb-8">
                Whether you have questions about our adventures, need help choosing the right package, or want to plan a
                custom experience, our team is ready to assist you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Phone</h3>
                    <p className="text-stone-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-stone-500">Available 9 AM - 6 PM PST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Email</h3>
                    <p className="text-stone-600">venkatakousikcse01@gmail.com</p>
                    <p className="text-sm text-stone-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Office</h3>
                    <p className="text-stone-600">
                      123 Adventure Way
                      <br />
                      Wilderness Park, WP 98765
                    </p>
                    <p className="text-sm text-stone-500">Visit by appointment</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Business Hours</h3>
                    <p className="text-stone-600">
                      Monday - Friday: 9 AM - 6 PM
                      <br />
                      Saturday: 10 AM - 4 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-stone-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-stone-800">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-stone-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-stone-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="custom">Custom Adventure</option>
                    <option value="corporate">Corporate Events</option>
                    <option value="general">General Question</option>
                    <option value="support">Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Tell us about your adventure plans or ask any questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-stone-900 font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-stone-800">Find Our Office</h2>
            <p className="text-lg text-stone-600">
              Visit us in person to discuss your adventure plans and see our equipment.
            </p>
          </div>
          <div className="bg-stone-300 rounded-2xl h-96 flex items-center justify-center">
            <p className="text-stone-600">Interactive Map Placeholder</p>
          </div>
        </div>
      </section>
    </main>
  )
}
