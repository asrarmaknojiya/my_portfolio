"use client"

import { useEffect, useState } from "react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "📘" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" },
        { name: "JavaScript", level: 94, icon: "💛" },
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88, icon: "🟢" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "PostgreSQL", level: 82, icon: "🐘" },
        { name: "MongoDB", level: 80, icon: "🍃" },
      ],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Tools & Cloud",
      skills: [
        { name: "AWS/Vercel", level: 87, icon: "☁️" },
        { name: "Docker", level: 83, icon: "🐳" },
        { name: "Git/GitHub", level: 93, icon: "🔧" },
        { name: "Figma", level: 88, icon: "🎯" },
      ],
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              My Skills
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Technologies I Work With</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I use modern technologies to build exceptional digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <span className="text-2xl font-bold text-white">{category.title[0]}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-8">{category.title}</h3>

                <div className="space-y-6">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{skill.icon}</span>
                          <span className="font-semibold text-gray-800">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-600 font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${categoryIndex * 200 + index * 100}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
