"use client"

import { useEffect, useState } from "react"
import { Code, Server, Settings } from "lucide-react"

export default function Skills() {
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

    const section = document.getElementById("skills")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const skills = [
    {
      title: "Frontend",
      icon: <Code className="text-pink-500 w-6 h-6" />,
      items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind"],
    },
    {
      title: "Backend",
      icon: <Server className="text-green-500 w-6 h-6" />,
      items: ["Node.js", "Express.js", "MySQL"],
    },
    {
      title: "Tools & Workflow",
      icon: <Settings className="text-yellow-500 w-6 h-6" />,
      items: ["Git", "GitHub", "Postman", "VS Code", "Vercel"],
    },
  ]

  return (
    <section id="skills" className="relative py-24 bg-gradient-to-br from-[#f9fafb] to-[#e0f2fe] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold uppercase text-blue-600 tracking-widest">Skills & Stack</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
            What I Bring to the Table
          </h3>
          <p className="text-gray-600 text-base max-w-xl mx-auto mt-4">
            From frontend finesse to backend brains — I build end-to-end magic with clean code and scalable logic.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((block, index) => (
            <div
              key={block.title}
              className={`rounded-2xl p-6 bg-white/40 shadow-xl backdrop-blur-xl border border-white/30 transition-all duration-700 ease-out transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                {block.icon}
                <h4 className="text-xl font-semibold text-gray-800">{block.title}</h4>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {block.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-white text-gray-700 border border-gray-200 hover:bg-blue-100 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Blur Balls 😎 */}
      {/* <div className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div> */}
      {/* <div className="absolute bottom-[-60px] right-[-60px] w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div> */}
    </section>
  )
}
