"use client"

import { Github, Linkedin, Mail, Download, ArrowRight, Terminal } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 border-b border-border/20">
      
      {/* Sophisticated Background Layer */}
      <div className="absolute inset-0 bg-darkBg">
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
        
        {/* Radial Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" />
        
        {/* Original Accent Glow - Positioned Top Right */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] glow-gradient-1 opacity-[0.15] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] glow-gradient-2 opacity-[0.12] rounded-full blur-[120px]" />
      </div>

      {/* Grid Pattern - Refined */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column - Content */}
          <div className="flex flex-col items-start text-left space-y-8">
            
            {/* Status Badge - Refined */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent shadow-[0_0_8px_var(--accent)]"></span>
              </span>
              <span className="text-accent text-[13px] font-mono tracking-tight">
                Available for new opportunities
              </span>
            </motion.div>

            {/* Main Heading - Editorial Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-3"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
               <span className="text-white">Backend-first.</span>
<br />
<span className="text-white">Full-stack by</span>
<br />
<span className="relative inline-block">
  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
    nature.
  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                    <path d="M0 4C50 4 50 2 100 2C150 2 150 6 200 6" stroke="var(--accent)" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-textMuted text-lg md:text-xl leading-relaxed max-w-xl"
            >
              <span className="text-white font-medium">Asrar Maknojiya</span> — full-stack developer 
who turns ideas into{" "}
<span className="text-accent font-medium">production-ready systems</span>. 
From Java & Spring Boot to Node.js on the backend, MySQL databases to REST APIs — 
and React interfaces on the front that are as solid as the code behind them.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full sm:w-auto pt-4"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative px-8 py-3.5 bg-accent text-darkBg rounded-lg font-medium transition-all duration-300 hover:bg-accent-light hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.3)] overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <a
                href="/Asrar-Maknojiya-Resume.pdf"
                download
                className="group px-8 py-3.5 bg-cardBg/50 text-white border border-border/40 rounded-lg font-medium transition-all duration-300 hover:bg-cardBg hover:border-accent/30 backdrop-blur-sm flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Download size={18} className="text-accent" />
                Resume
              </a>
            </motion.div>

            {/* Social Links - Refined */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-6 pt-8"
            >
              <div className="h-px w-12 bg-gradient-to-r from-border to-transparent" />
              <div className="flex gap-5">
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
                    className="text-textMuted hover:text-accent transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={20} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex relative justify-center items-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              
              {/* Geometric Background Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                
                {/* Rotating Rings - Minimal */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-accent/5"
                />
                
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-12 rounded-full border border-white/5"
                />

                {/* Center Card with Code Element */}
                <motion.div
                  animate={{ 
                    y: [0, -12, 0],
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="relative z-20"
                >
                  <div className="relative group">
                    {/* Glow Effect on Hover */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-light rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                    
                    {/* Main Card */}
                    <div className="relative w-40 h-40 flex items-center justify-center rounded-2xl bg-cardBg/90 border border-border/40 backdrop-blur-xl overflow-hidden">
                      {/* Code Icon */}
                      <Terminal className="w-16 h-16 text-accent" strokeWidth={1.5} />
                      
                      {/* Subtle Inner Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                    </div>
                  </div>
                </motion.div>

                {/* Tech Stack Badges - Sophisticated Placement */}
                <TechBadge 
                  label="React" 
                  className="absolute top-[8%] right-[10%]" 
                  delay={0.4}
                />
                <TechBadge 
                  label="Next.js" 
                  className="absolute top-[35%] left-[2%]" 
                  delay={0.5}
                />
                <TechBadge 
                  label="Node.js" 
                  className="absolute bottom-[25%] right-[5%]" 
                  delay={0.6}
                />
                <TechBadge 
                  label="Java" 
                  className="absolute bottom-[12%] left-[12%]" 
                  delay={0.7}
                />

              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator - Minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
         
        </motion.div>
      </div>
    </section>
  )
}

function TechBadge({ label, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: 0
      }}
      transition={{ 
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`px-4 py-2 rounded-lg bg-cardBg/80 border border-border/40 backdrop-blur-sm group hover:border-accent/40 transition-all duration-300 ${className}`}
    >
      <span className="text-accent group-hover:text-accent-light font-mono text-xs font-medium tracking-wide transition-colors duration-300">
        {label}
      </span>
      
      {/* Subtle Glow on Hover */}
      <div className="absolute inset-0 bg-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </motion.div>
  )
}