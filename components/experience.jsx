"use client"

import { Calendar, MapPin, Building } from "lucide-react"
import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer Trainee",
      company: "Valuda's Technology Park",
      location: "Chhapi, Gujarat",
      duration: "June 2025 – Present",
      type: "Trainee",
      description:
        "Actively contributing to the development of a full-scale e-commerce platform named ZepX. Gaining deep hands-on experience in full stack development, especially around backend integration, UI/UX consistency, and system architecture.",
      achievements: [
        "Built a feature-rich e-commerce website from scratch",
        "Developed and tested RESTful APIs using Express.js",
        "Managed product and user data with optimized MySQL queries",
        "Implemented secure user authentication and session handling",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "Git", "Postman"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  }

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
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
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-6">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional growth, technical learnings, and the amazing teams I've worked with.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-[hsl(var(--gradient-start))]/80 to-[hsl(var(--gradient-end))]/20 rounded-full hidden sm:block"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex flex-col sm:flex-row items-start mb-12 sm:items-stretch"
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-4 md:left-6 w-5 h-5 bg-[hsl(var(--gradient-start))] rounded-full shadow-[0_0_15px_hsl(var(--gradient-start))] z-10 transform translate-x-[2px] mt-8 border border-background"></div>

                {/* Content */}
                <div className="sm:ml-20 w-full">
                  <div className="bg-card/40 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-xl border border-border/50 hover:border-[hsl(var(--gradient-start))]/40 transition-colors duration-500 group relative overflow-hidden">
                    
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[hsl(var(--gradient-start))]/5 rounded-full blur-[40px] transition-opacity opacity-0 group-hover:opacity-100" />

                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-6 relative z-10">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-[hsl(var(--gradient-start))] transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground font-medium mb-3">
                          <Building size={18} className="text-[hsl(var(--gradient-start))]" />
                          {exp.company}
                        </div>
                      </div>

                      <div className="flex flex-col lg:items-end gap-2 bg-secondary/50 p-4 rounded-xl border border-border/50 shrink-0">
                        <div className="flex items-center gap-2 text-foreground font-medium">
                          <Calendar size={16} className="text-[hsl(var(--gradient-end))]" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin size={16} className="text-muted-foreground" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                        <span className="px-3 py-1 bg-background text-foreground rounded-lg text-xs font-semibold border border-border mt-1">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-8 leading-relaxed text-lg relative z-10">{exp.description}</p>

                    <div className="mb-8 relative z-10">
                      <h5 className="text-lg font-bold text-foreground mb-4">Key Achievements</h5>
                      <div className="grid md:grid-cols-2 gap-4">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-secondary/30 border border-border/30 hover:bg-secondary/60 transition-colors">
                            <div className="w-2 h-2 bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] rounded-full mt-2 flex-shrink-0 shadow-[0_0_8px_hsl(var(--gradient-start))]"></div>
                            <span className="text-muted-foreground font-medium leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h5 className="font-bold text-foreground mb-4">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-background text-muted-foreground font-medium text-sm rounded-xl border border-border shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
