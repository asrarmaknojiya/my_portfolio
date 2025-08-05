"use client"

import { useEffect, useState } from "react"
import { Code, Coffee, Heart, Users } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const highlights = [
    { icon: Code, label: "Clean Code", description: "Maintainable & scalable solutions" },
    { icon: Coffee, label: "Problem Solver", description: "Code-first approach to challenges" },
    { icon: Heart, label: "Passionate", description: "Driven by curiosity & love for dev" },
    { icon: Users, label: "Team Player", description: "Collaborates & communicates well" },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-4xl font-bold text-gray-900">Bringing Ideas to Life, One Line of Code at a Time 💡👨‍💻</h2>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
           Hey, I’m Asrar — a passionate Full Stack Developer on a mission to build clean, scalable, and meaningful web experiences. Right now,During my time at Valuda’s Tech Park, I successfully built a complete e-commerce platform (ZepX) using React, Node.js, Express, and MySQL — handling everything from frontend UI to backend APIs and database logic.
            </p>
            <p>
            I focus on writing efficient code, designing smooth UIs, and building APIs that just work.
From frontend flair to backend logic — I love turning ideas into reality, learning every day, and staying in sync with the latest in web tech.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="p-4 bg-gray-50 rounded-xl hover:bg-blue-50 hover:border-blue-200 border border-gray-100 transition-all duration-300 group text-center"
              >
                <item.icon className="w-6 h-6 text-blue-600 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-semibold text-gray-900 text-sm">{item.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
