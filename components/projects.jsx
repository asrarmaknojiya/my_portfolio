"use client"

import { useEffect, useState } from "react"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

export default function Projects({ onProjectClick }) {
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

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
       "An online store that blends simplicity with powerful product control and a smooth admin journey.",
       images: [
    "/category.png",
    "/products.png",
    "/productdetail.png",
    "/order.png",
    "/dash.png",
    "/add.png"
  ],
      technologies: ["React", "Node.js", "Express.js", "+more"],
      // liveUrl: "https://example.com",
      githubUrl: "https://github.com/asrarmaknojiya/zepx",
      category: "Web App",
      fullDescription: "A comprehensive e-commerce platform built with modern web technologies...",
      features: ["User authentication", "Payment processing", "Admin dashboard", "Inventory management"],
    },
    // {
    //   id: 2,
    //   title: "Task Management App",
    //   description:
    //     "A collaborative task management application with real-time updates, team features, and project tracking.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com",
    //   category: "Web App",
    //   fullDescription: "A collaborative task management application...",
    //   features: ["Real-time collaboration", "Task tracking", "Team management", "Progress analytics"],
    // },
    // {
    //   id: 3,
    //   title: "Weather Dashboard",
    //   description:
    //     "A beautiful weather application with location-based forecasts, interactive maps, and detailed analytics.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   technologies: ["React", "API Integration", "Chart.js", "CSS3"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com",
    //   category: "Web App",
    //   fullDescription: "A comprehensive weather dashboard...",
    //   features: ["Weather forecasts", "Interactive maps", "Location tracking", "Historical data"],
    // },
    // {
    //   id: 4,
    //   title: "Social Media Dashboard",
    //   description:
    //     "A comprehensive dashboard for managing multiple social media accounts with analytics and scheduling.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   technologies: ["Next.js", "PostgreSQL", "Chart.js", "OAuth"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com",
    //   category: "Dashboard",
    //   fullDescription: "A powerful social media management dashboard...",
    //   features: ["Multi-platform integration", "Post scheduling", "Analytics", "Team collaboration"],
    // },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              My Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of the projects I've worked on recently
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/frontend.png"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => onProjectClick(project)}
                      className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium flex items-center justify-center gap-2 group/btn"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                    {/* <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-gray-600 hover:text-blue-600"
                    >
                      <ExternalLink size={20} />
                    </a> */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-gray-600 hover:text-blue-600"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
