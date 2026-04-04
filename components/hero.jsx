"use client"

import { ChevronDown, Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] rounded-full blur-[120px] opacity-20 dark:opacity-10 pointer-events-none -z-10 animate-[pulse_8s_ease-in-out_infinite]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 text-secondary-foreground text-sm font-medium backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new projects
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-foreground mb-6 tracking-tight leading-tight">
            Hi, I'm <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))]">
              Asrar Maknojiya
            </span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-light text-muted-foreground mb-8">
            Building Digital Experiences that <span className="font-medium text-foreground">Inspire</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Full Stack Developer specializing in highly performant, visually stunning, and rigorously secure web applications.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <a
              href="/Asrar-Maknojiya-Resume.pdf"
              download
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-medium rounded-full hover:bg-secondary/80 transition-all hover:scale-105 active:scale-95 border border-border"
            >
              <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center items-center gap-6">
            {[
              { icon: Github, href: "https://github.com/asrarmaknojiya", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/asrar-maknojiya-b03a01326/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:asrarjabir786@gmail.com", label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-muted-foreground hover:text-foreground bg-secondary/50 hover:bg-secondary rounded-full border border-border hover:border-transparent transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 backdrop-blur-sm"
                aria-label={social.label}
              >
                <social.icon size={22} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          onClick={() => scrollToSection("about")}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
