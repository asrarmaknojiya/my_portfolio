"use client"

import { Code, Coffee, Heart, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function About() {
  const highlights = [
    { icon: Code, label: "Clean Code", description: "Maintainable & scalable solutions" },
    { icon: Coffee, label: "Problem Solver", description: "Code-first approach to challenges" },
    { icon: Heart, label: "Passionate", description: "Driven by curiosity & love for dev" },
    { icon: Users, label: "Team Player", description: "Collaborates & communicates well" },
  ]

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } 
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-background/50 pointer-events-none -z-10" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={childVariants} className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-[hsl(var(--gradient-start))] uppercase mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Bringing Ideas to Life, <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))]">One Line of Code at a Time</span>
            </h3>
          </motion.div>

          <motion.div variants={childVariants} className="bg-card/50 backdrop-blur-xl border border-border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden text-center md:text-left">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--gradient-start))]/10 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-[hsl(var(--gradient-end))]/10 rounded-full blur-[80px] -z-10 -translate-x-1/2 translate-y-1/2" />
             
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Hey, I’m <strong className="text-foreground font-medium">Asrar</strong> — a passionate Full Stack Developer on a mission to build clean, scalable, and meaningful web experiences. During my time as a Tech Park Trainee at Valuda’s, I successfully built a complete e-commerce platform (ZepX) using React, Node.js, Express, and MySQL — handling everything from frontend UI to backend APIs and intricate database logic.
              </p>
              <p>
                I focus on writing efficient code, designing smooth UIs, and building APIs that just work. From frontend flair to highly-optimized backend logic — I love turning ideas into reality, learning every day, and staying in sync with the latest in web technologies.
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={childVariants} 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl transition-all duration-300 hover:shadow-xl text-center flex flex-col items-center hover:border-[hsl(var(--gradient-start))]/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--gradient-start))]/0 to-[hsl(var(--gradient-start))]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-14 h-14 rounded-full bg-secondary/80 flex items-center justify-center mb-4 text-foreground group-hover:text-[hsl(var(--gradient-start))] group-hover:bg-primary/10 transition-colors z-10">
                  <item.icon size={26} strokeWidth={1.5} />
                </div>
                <h4 className="font-semibold text-foreground text-lg mb-2 relative z-10">{item.label}</h4>
                <p className="text-sm text-muted-foreground relative z-10">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
