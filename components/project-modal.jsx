"use client"

import { useEffect, useState } from "react"
import { X, ExternalLink, Github, CheckCircle2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ProjectDetailPage({ project, onClose }) {
  const [activeImage, setActiveImage] = useState(null)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        if (activeImage) setActiveImage(null)
        else onClose()
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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-md overflow-y-auto"
    >
      <motion.div 
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="min-h-screen bg-card"
      >
        {/* Header */}
        <div className="sticky top-0 bg-background/80 backdrop-blur-xl z-20 border-b border-border/50 p-6 flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 bg-secondary/50 hover:bg-secondary rounded-full transition-colors duration-200 text-muted-foreground hover:text-foreground"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Image Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {project.images?.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="w-full aspect-video bg-secondary/30 rounded-2xl border border-border/50 overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all"
                onClick={() => setActiveImage(img)}
              >
                <img
                  src={img}
                  alt={`Project image ${i + 1}`}
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = "https://via.placeholder.com/600x400?text=Image+Unavailable"
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Overview & Features */}
          <div className="grid md:grid-cols-2 gap-16">
            {/* Overview Section */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[hsl(var(--gradient-start))]/20 flex items-center justify-center text-[hsl(var(--gradient-start))]">1</span>
                Overview
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                This e-commerce platform is designed for modern businesses that want a reliable and smooth online store experience.
                It includes a secure login system with password reset functionality, an admin panel to manage products, categories, and stock in real-time, and supports smooth cart operations across sessions.
                The platform is also integrated with Razorpay for fast and secure payments, ensuring an effortless checkout experience.
              </p>

              <h4 className="text-lg font-semibold text-foreground mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-2 mb-10">
                {["React", "Node.js", "Express", "MySQL", "Figma", "Tailwind CSS", "Razorpay"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-full border border-border"
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
                  className="flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full hover:bg-foreground/90 transition duration-300 font-medium hover:scale-105 active:scale-95"
                >
                  <Github size={18} />
                  View Source Code
                </a>
              </div>
            </div>

            {/* Features Section */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[hsl(var(--gradient-end))]/20 flex items-center justify-center text-[hsl(var(--gradient-end))]">2</span>
                Core Features
              </h3>
              <ul className="space-y-4">
                {[
                  "Secure login and password reset system",
                  "Product browsing with filters, categories, and search",
                  "Razorpay integrated for fast and secure online payments",
                  "Admin dashboard to manage products, inventory, and orders",
                  "Real-time stock updates to prevent overselling",
                  "Persistent cart system tracking items across sessions",
                  "Fully responsive design optimized for all screen sizes",
                ].map((feature, idx) => (
                  <motion.li 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    key={idx} 
                    className="flex items-start gap-3 p-4 rounded-2xl bg-secondary/30 border border-border/50 hover:bg-secondary/50 transition-colors"
                  >
                    <CheckCircle2 className="text-[hsl(var(--gradient-end))] mt-0.5 shrink-0" size={20} />
                    <span className="text-muted-foreground font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/90 backdrop-blur-xl z-[200] flex items-center justify-center p-4 md:p-12"
              onClick={() => setActiveImage(null)}
            >
              <div className="relative max-w-6xl w-full h-[90vh] flex items-center justify-center">
                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute top-0 right-0 md:-top-6 md:-right-6 bg-secondary text-foreground rounded-full p-3 hover:bg-foreground hover:text-background transition-colors z-20 shadow-xl border border-border"
                >
                  <X size={24} />
                </button>
                <motion.img
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", damping: 25 }}
                  src={activeImage}
                  alt="Zoomed project view"
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-border/30"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
