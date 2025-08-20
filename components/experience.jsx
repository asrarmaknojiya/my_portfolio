"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin, Building } from "lucide-react"

export default function Experience() {
  const sectionRef = useRef(null)
  const [hasMounted, setHasMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setHasMounted(true)
    // IntersectionObserver triggers animation only once
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Disconnect after first intersection
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Valuda's Technology Park",
    location: "Chhapi, Gujarat",
    duration: "December 2024 – Present",
    type: "Internship",
    description:
      "Actively contributing to the development of a full-scale e-commerce platform named ZepX. Gaining deep hands-on experience in full stack development, especially around backend integration, UI/UX consistency, and system architecture.",
    achievements: [
      "Built a feature-rich e-commerce website from scratch",
      "Developed and tested RESTful APIs using Express.js",
      "Managed product and user data with optimized MySQL queries",
      "Implemented secure user authentication and session handling",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "Git", "Postman"],
  },
]


  // Animation classes are applied only after mount (prevents SSR mismatch)
  const sectionAnimationClass = hasMounted
    ? isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10"
    : ""

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${sectionAnimationClass}`}>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              My Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Work Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A timeline of my professional growth and the amazing teams I've worked with
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-start mb-12 transition-all duration-1000
                    ${hasMounted ? (isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10") : ""}
                  `}
                  style={hasMounted ? { transitionDelay: `${index * 300}ms` } : undefined}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content */}
                  <div className="ml-20 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-blue-600 font-semibold mb-3">
                          <Building size={16} />
                          {exp.company}
                        </div>
                      </div>

                      <div className="flex flex-col lg:items-end gap-2">
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar size={14} />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                          <MapPin size={14} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-4">Key Achievements</h5>
                      <div className="grid md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
