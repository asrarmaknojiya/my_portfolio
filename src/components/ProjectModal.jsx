"use client"

import { useEffect } from "react"
import { X, ExternalLink, Github, Target, TrendingUp, CheckCircle } from "lucide-react"

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-700">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700 p-6 flex justify-between items-center rounded-t-3xl">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="px-3 py-1 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 font-medium">
                {project.category.toUpperCase()}
              </span>
              {project.featured && (
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-dark rounded-full font-bold text-xs">
                  FEATURED
                </span>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-3 hover:bg-gray-700 rounded-xl transition-colors duration-200 text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-8">
          {/* Hero Image */}
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-80 object-cover rounded-2xl mb-8 shadow-lg"
          />

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-medium"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-gray-600 text-gray-300 px-6 py-3 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              <Github size={18} />
              Source Code
            </a>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Overview */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  Project Overview
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">{project.fullDescription}</p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  Key Features
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Challenges & Solutions</h3>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 border-l-4 border-orange-400 rounded-r-xl"
                    >
                      <p className="text-gray-300 font-medium">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results & Impact */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  Results & Impact
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.results.map((result, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300 font-medium">{result}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technologies Used */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50">
                <h4 className="text-lg font-bold text-white mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border border-cyan-400/20 text-cyan-400 text-sm rounded-xl font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Stats */}
              <div className="bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-2xl p-6 border border-cyan-400/20">
                <h4 className="text-lg font-bold text-white mb-4">Project Details</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Category</span>
                    <span className="font-semibold text-white capitalize">{project.category}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Status</span>
                    <span className="font-semibold text-green-400">Completed</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Featured</span>
                    <span className="font-semibold text-white">{project.featured ? "Yes" : "No"}</span>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl p-6 text-white text-center">
                <h4 className="text-lg font-bold mb-2">Interested in similar work?</h4>
                <p className="text-cyan-100 mb-4 text-sm">Let's discuss your project requirements</p>
                <button
                  onClick={() => {
                    onClose()
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="w-full bg-white text-cyan-600 px-4 py-2 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-300"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
