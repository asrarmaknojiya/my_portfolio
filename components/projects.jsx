"use client"

import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Projects({ onProjectClick }) {
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
      image: "/products.png", // Main poster image fallback
      technologies: ["React", "Node.js", "Express.js", "MySQL", "Tailwind"],
      githubUrl: "https://github.com/asrarmaknojiya/zepx",
      category: "Full Stack App",
      fullDescription: "A comprehensive e-commerce platform built with modern web technologies handling everything from dynamic product category management to secure user authentication. It features a fully-fledged admin dashboard for inventory management.",
      features: ["User authentication", "Admin dashboard", "Dynamic inventory management", "Secure order processing"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-background/50 pointer-events-none -z-10" />
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold tracking-widest text-[hsl(var(--gradient-start))] uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my best work, showcasing full-stack capabilities, performance optimization, and premium UI design.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-card/50 backdrop-blur-xl rounded-3xl border border-border/50 overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={project.image || "/frontend.png"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-secondary/80 backdrop-blur-md text-foreground text-xs font-semibold rounded-full border border-border">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-[hsl(var(--gradient-start))] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-2 min-h-[3rem]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-md border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-md border border-border/50">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => onProjectClick(project)}
                    className="flex-1 bg-foreground text-background px-6 py-3 rounded-xl hover:bg-primary transition-all duration-300 font-medium flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-lg"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-xl bg-card hover:bg-secondary transition-colors duration-300 text-muted-foreground hover:text-foreground"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
