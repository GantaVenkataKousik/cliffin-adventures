"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { BinocularsIcon } from "@/components/svg/adventure-icons"
import DecorativePattern from "@/components/decorative-pattern"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Adventure Enthusiast",
    initials: "SJ",
    quote:
      "The lakeside camping experience was absolutely magical! Waking up to the sunrise over the water was a moment I'll never forget. The guides were knowledgeable and friendly, making the whole trip feel safe yet exciting.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Photography Hobbyist",
    initials: "MC",
    quote:
      "As a photographer, I was blown away by the stunning locations. The mountain bridge trek offered incredible vistas that were perfect for capturing once-in-a-lifetime shots. Highly recommend for anyone looking to combine adventure with photography!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Family Traveler",
    initials: "ER",
    quote:
      "We took our kids on the Forest Expedition, and it was the perfect family adventure. The guides were amazing with children, teaching them about nature while keeping everything fun and engaging. We're already planning our next trip!",
    rating: 4,
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 8000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <section className="py-20 md:py-32 bg-stone-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-stone-800/90 to-stone-800/90"></div>
      <DecorativePattern pattern="dots" color="#ffffff" className="opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BinocularsIcon className="w-6 h-6 text-amber-500" />
            <span className="text-amber-400 font-semibold uppercase tracking-wider text-sm">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Adventurers Say</h2>
          <p className="text-lg text-white">
            Hear from those who have experienced the magic of our wilderness adventures firsthand.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
                      <div className="absolute top-6 right-8 text-amber-400 opacity-30">
                        <Quote size={48} />
                      </div>
                      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-6">
                        <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center border-2 border-amber-400">
                          <span className="text-stone-900 font-bold text-xl">{testimonial.initials}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{testimonial.name}</h3>
                          <p className="text-amber-300">{testimonial.role}</p>
                          <div className="flex mt-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-5 h-5 ${
                                  i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-stone-600"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <blockquote className="text-lg md:text-xl italic text-white">"{testimonial.quote}"</blockquote>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-colors border border-white/20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-colors border border-white/20"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? "bg-amber-500" : "bg-white/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
