"use client"

import { useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("testimonials")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content:
        "Alex delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise is outstanding.",
      rating: 5,
      project: "E-Commerce Platform",
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateLab",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content:
        "Working with Alex was a game-changer for our mobile app. He brought creative solutions to complex problems and delivered on time.",
      rating: 5,
      project: "Task Management App",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, BrandCorp",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content:
        "The brand identity Alex created for us perfectly captured our vision. His design skills and professionalism are top-notch.",
      rating: 5,
      project: "Brand Identity Design",
    },
    {
      name: "David Kim",
      role: "CTO, DataFlow",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content:
        "Alex's AI dashboard transformed how we analyze data. The insights we get now have improved our decision-making significantly.",
      rating: 5,
      project: "AI Analytics Dashboard",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-dark"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              What Clients{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Say</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Don't just take my word for it - here's what my clients have to say about working with me
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Testimonials Carousel */}
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 md:p-12 border border-gray-700/50 backdrop-blur-sm">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="text-center mb-8">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Client Info */}
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full border-2 border-cyan-400"
                  />
                  <div className="text-left">
                    <h4 className="text-white font-bold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                    <p className="text-cyan-400 text-sm">{testimonials[currentIndex].project}</p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-gray-700 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500 rounded-full flex items-center justify-center text-white transition-all duration-300"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-gradient-to-r from-cyan-400 to-purple-500"
                          : "bg-gray-600 hover:bg-gray-500"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-gray-700 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500 rounded-full flex items-center justify-center text-white transition-all duration-300"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Client Logos */}
          <div className="mt-16">
            <p className="text-center text-gray-400 mb-8">Trusted by amazing companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {["TechStart", "InnovateLab", "BrandCorp", "DataFlow", "StartupXYZ"].map((company) => (
                <div key={company} className="text-2xl font-bold text-gray-600">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
