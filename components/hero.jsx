"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20"
    >
      <div className="container mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              👋 Hello, I'm
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">Asrar Maknojiya</h1>

          <h2 className="text-3xl md:text-3xl text-gray-600 mb-8 font-light">Full Stack Developer</h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Dedicated to developing full-stack applications with seamless UI, secure backend logic, and optimized performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium text-lg"
            >
              Get In Touch
            </button>
            <a
              href="/Asrar-Maknojiya -Resume.pdf"
              download
              className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-200 transition-all duration-300 font-medium text-lg"
            >
              <Download size={20} />
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            {[
              { icon: Github, href: "https://github.com/asrarmaknojiya", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/asrar-maknojiya-b03a01326/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:asrarjabir786@gmail.com", label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 hover:text-blue-600 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  )
}
