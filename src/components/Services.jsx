"use client"

import { useState, useEffect } from "react"
import { Code, Smartphone, Palette, Server, Globe, Zap } from "lucide-react"

export default function Services() {
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

    const element = document.getElementById("services")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      features: ["React/Next.js", "Node.js", "Database Design", "API Integration"],
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile apps that deliver native performance and user experience.",
      features: ["React Native", "Flutter", "iOS/Android", "App Store Deploy"],
      color: "from-green-400 to-emerald-400",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user engagement and satisfaction.",
      features: ["Figma/Adobe XD", "Prototyping", "User Research", "Design Systems"],
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Scalable server-side solutions with robust architecture and security.",
      features: ["Node.js/Python", "Database Design", "API Development", "Cloud Deploy"],
      color: "from-orange-400 to-red-400",
    },
    {
      icon: Globe,
      title: "DevOps & Cloud",
      description: "Efficient deployment pipelines and cloud infrastructure management.",
      features: ["AWS/Azure", "Docker", "CI/CD", "Monitoring"],
      color: "from-cyan-400 to-blue-400",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your applications and improve user experience significantly.",
      features: ["Code Optimization", "Caching", "CDN Setup", "Monitoring"],
      color: "from-yellow-400 to-orange-400",
    },
  ]

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-dark"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I offer comprehensive digital solutions to help bring your ideas to life
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border border-gray-700/50 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-400/10 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
