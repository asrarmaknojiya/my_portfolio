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
      description: "Successful deliveries",
    },
    {
      label: "Happy Clients",
      value: counts.clients,
      suffix: "+",
      icon: Users,
      description: "Worldwide partnerships",
    },
    {
      label: "Cups of Coffee",
      value: counts.coffee,
      suffix: "+",
      icon: Coffee,
      description: "Fuel for creativity",
    },
    {
      label: "Awards Won",
      value: counts.awards,
      suffix: "+",
      icon: Award,
      description: "Recognition received",
    },
  ]

  return (
    <section id="stats" className="section-padding bg-accent">
      <div className="container-custom">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="section-subtitle !text-white/90">
              Numbers That Matter
            </span>
            <h2 className="section-title !text-white mb-6">My Achievements</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`glass-card p-8 text-center transform hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className="w-16 h-16 bg-accent/10 text-accent border-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border"
                >
                  <stat.icon size={24} />
                </div>

                <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>

                <div className="text-lg font-semibold text-title mb-2">{stat.label}</div>
                <div className="text-sm text-textMuted">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
