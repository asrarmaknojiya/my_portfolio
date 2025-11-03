"use client"

import { useEffect, useState } from "react"
import { TrendingUp, Users, Coffee, Award } from "lucide-react"

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    coffee: 0,
    awards: 0,
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("stats")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const targets = { projects: 50, clients: 25, coffee: 1000, awards: 8 }
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      Object.keys(targets).forEach((key) => {
        const target = targets[key]
        const increment = target / steps
        let current = 0

        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }))
        }, stepDuration)
      })
    }
  }, [isVisible])

  const stats = [
    {
      label: "Projects Completed",
      value: counts.projects,
      suffix: "+",
      icon: TrendingUp,
      color: "blue",
      description: "Successful deliveries",
    },
    {
      label: "Happy Clients",
      value: counts.clients,
      suffix: "+",
      icon: Users,
      color: "green",
      description: "Worldwide partnerships",
    },
    {
      label: "Cups of Coffee",
      value: counts.coffee,
      suffix: "+",
      icon: Coffee,
      color: "yellow",
      description: "Fuel for creativity",
    },
    {
      label: "Awards Won",
      value: counts.awards,
      suffix: "+",
      icon: Award,
      color: "purple",
      description: "Recognition received",
    },
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 text-blue-600 border-blue-200",
      green: "bg-green-50 text-green-600 border-green-200",
      yellow: "bg-yellow-50 text-yellow-600 border-yellow-200",
      purple: "bg-purple-50 text-purple-600 border-purple-200",
    }
    return colors[color]
  }

  return (
    <section id="stats" className="py-20 bg-blue-600">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
              Numbers That Matter
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">My Achievements</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className={`w-16 h-16 ${getColorClasses(stat.color)} rounded-2xl flex items-center justify-center mx-auto mb-6 border`}
                >
                  <stat.icon size={24} />
                </div>

                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>

                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
