"use client"

import { useEffect, useState } from "react"
import { X, ExternalLink, Github } from "lucide-react"

export default function ProjectDetailPage({ project, onClose }) {
  const [activeImage, setActiveImage] = useState(null)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        if (activeImage) {
          setActiveImage(null)
        } else {
          onClose()
        }
      }
    }

    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [onClose, activeImage])

  if (typeof window === "undefined" || !project) return null

  return (
    <div className="fixed inset-0 z-[1000] bg-white overflow-y-auto animate-fadeIn">
      
      {/* Header */}
      <div className="sticky top-0 bg-white z-20 border-b border-gray-200 p-6 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">{project.title}</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        
        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {project.images?.map((img, i) => (
            <div
              key={i}
              className="w-full aspect-video bg-gray-100 rounded-xl shadow overflow-hidden cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setActiveImage(img)}
            >
              <img
                src={img}
                alt={`Project image ${i + 1}`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = "https://via.placeholder.com/600x400?text=Image+Unavailable"
                }}
              />
            </div>
          ))}
        </div>

        {/* Overview & Features */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Overview Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Store Overview</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              This e-commerce platform is designed for modern businesses that want a reliable and smooth online store experience.
              It includes a secure login system with password reset functionality, an admin panel to manage products, categories, and stock in real-time, and supports smooth cart operations across sessions.
              The platform is also integrated with Razorpay for fast and safe payments, making the checkout experience effortless for users.
              Its responsive layout ensures the site looks great and functions well on mobile, tablet, and desktop.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h4>
            <div className="flex flex-wrap gap-2 mb-10">
              {["React", "Node.js", "Express", "MySQL", "Figma", "Css", "Multer", "Razorpay"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full border border-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition duration-300 font-medium text-gray-700"
              >
                <Github size={16} />
                Source Code
              </a>
            </div>
          </div>

          {/* Features Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Core Features</h3>
            <ul className="space-y-4 text-gray-600">
              {[
                "Secure login and password reset system",
                "Product browsing with filters, categories, and search",
                "Razorpay integrated for fast and secure online payments",
                "Admin dashboard to manage products, inventory, and orders",
                "Real-time stock updates to prevent overselling",
                "Cart system that saves items even if the user refreshes or logs back in",
                "Fully responsive design for all screen sizes",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-[1100] flex items-center justify-center"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl w-full mx-4">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 bg-white text-gray-800 rounded-full p-2 hover:bg-gray-100 z-20"
            >
              <X size={24} />
            </button>
            <img
              src={activeImage}
              alt="Zoomed project image"
              className="w-full max-h-[90vh] object-contain rounded-xl shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  )
}
