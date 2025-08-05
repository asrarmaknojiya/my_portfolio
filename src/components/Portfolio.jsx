"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Github, Eye } from "lucide-react"

export default function Portfolio({ onProjectClick }) {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("portfolio")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      description: "Modern e-commerce platform with advanced features",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      fullDescription:
        "A comprehensive e-commerce platform built with modern web technologies. Features include user authentication, product catalog, shopping cart, payment processing, and admin dashboard.",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filters",
        "Shopping cart and wishlist",
        "Secure payment processing",
        "Admin dashboard",
        "Real-time inventory management",
        "Email notifications",
        "Mobile responsive design",
      ],
      challenges: [
        "Implementing secure payment processing",
        "Real-time inventory updates",
        "Optimizing for mobile performance",
        "Creating intuitive admin interface",
      ],
      results: [
        "40% increase in conversion rate",
        "99.9% uptime achieved",
        "50% reduction in load times",
        "Positive user feedback",
      ],
    },
    {
      id: 2,
      title: "Task Management App",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      description: "Collaborative task management with real-time sync",
      technologies: ["React Native", "Firebase", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
      fullDescription:
        "A collaborative task management application designed for teams. Built with React Native for cross-platform compatibility.",
      features: [
        "Real-time collaboration",
        "Task assignment and tracking",
        "Project timelines",
        "Team notifications",
        "File attachments",
        "Progress analytics",
        "Offline support",
        "Cross-platform sync",
      ],
      challenges: [
        "Real-time synchronization",
        "Offline functionality",
        "Cross-platform consistency",
        "Performance optimization",
      ],
      results: [
        "30% improvement in team productivity",
        "25% faster project completion",
        "High user satisfaction",
        "100+ active teams",
      ],
    },
    {
      id: 3,
      title: "Brand Identity Design",
      category: "design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      description: "Complete brand identity and design system",
      technologies: ["Figma", "Adobe Creative Suite", "Principle"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      fullDescription:
        "Complete brand identity design including logo, color palette, typography, and design system for a tech startup.",
      features: [
        "Logo design and variations",
        "Color palette and guidelines",
        "Typography system",
        "Brand guidelines document",
        "Marketing materials",
        "Web design mockups",
        "Social media templates",
        "Print design assets",
      ],
      challenges: [
        "Creating memorable brand identity",
        "Ensuring scalability across mediums",
        "Balancing modern and timeless design",
        "Maintaining consistency",
      ],
      results: [
        "200% increase in brand recognition",
        "Successful product launch",
        "Award-winning design",
        "Client satisfaction: 5/5",
      ],
    },
    {
      id: 4,
      title: "AI Dashboard",
      category: "web",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      description: "Analytics dashboard with AI-powered insights",
      technologies: ["Next.js", "Python", "TensorFlow", "D3.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
      fullDescription: "An advanced analytics dashboard that uses AI to provide business insights and predictions.",
      features: [
        "Real-time data visualization",
        "AI-powered predictions",
        "Custom report generation",
        "Interactive charts",
        "Data export functionality",
        "User role management",
        "API integrations",
        "Mobile responsive",
      ],
      challenges: [
        "Processing large datasets",
        "Real-time data updates",
        "Complex visualizations",
        "AI model integration",
      ],
      results: [
        "60% faster decision making",
        "95% prediction accuracy",
        "Reduced analysis time by 70%",
        "Enterprise adoption",
      ],
    },
    {
      id: 5,
      title: "Fitness Mobile App",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      description: "Personal fitness tracking and workout planning",
      technologies: ["Flutter", "Firebase", "HealthKit"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      fullDescription:
        "A comprehensive fitness app that helps users track workouts, plan meals, and achieve their fitness goals.",
      features: [
        "Workout tracking and planning",
        "Nutrition logging",
        "Progress analytics",
        "Social features",
        "Wearable device integration",
        "Custom workout plans",
        "Video exercise library",
        "Achievement system",
      ],
      challenges: [
        "Health data integration",
        "Real-time sync across devices",
        "Complex workout algorithms",
        "User engagement features",
      ],
      results: [
        "50K+ downloads in first month",
        "4.8/5 app store rating",
        "80% user retention rate",
        "Featured by Apple",
      ],
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "design",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      description: "Creative portfolio with interactive animations",
      technologies: ["React", "Three.js", "GSAP", "Tailwind"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
      fullDescription: "A creative portfolio website featuring interactive 3D animations and smooth transitions.",
      features: [
        "3D interactive elements",
        "Smooth scroll animations",
        "Dynamic content loading",
        "Contact form integration",
        "SEO optimization",
        "Performance optimization",
        "Cross-browser compatibility",
        "Mobile responsive design",
      ],
      challenges: [
        "3D performance optimization",
        "Complex animations",
        "Cross-browser compatibility",
        "Mobile performance",
      ],
      results: [
        "300% increase in inquiries",
        "Award-winning design",
        "Featured in design galleries",
        "100% client satisfaction",
      ],
    },
  ]

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Apps" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "design", name: "Design" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-gray-900"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Explore my latest projects and see how I bring ideas to life
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-lg"
                    : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl overflow-hidden border border-gray-700/50 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-400/10 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-dark px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                )}

                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => onProjectClick(project)}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                    >
                      <Eye size={20} />
                    </button>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border border-cyan-400/20 rounded-full text-cyan-400 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-700/50 rounded-full text-gray-400 text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
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
