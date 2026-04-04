"use client"

import { Code, Server, Terminal } from "lucide-react"
import { motion } from "framer-motion"

export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      icon: <Code size={24} />,
      color: "from-blue-400 to-cyan-400",
      skills: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"],
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      color: "from-emerald-400 to-teal-400",
      skills: ["Node.js", "Express.js", "MySQL", "RESTful APIs"],
    },
    {
      title: "Tools & Workflow",
      icon: <Terminal size={24} />,
      color: "from-violet-400 to-purple-400",
      skills: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Figma"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30 pointer-events-none -z-10" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold tracking-widest text-[hsl(var(--gradient-start))] uppercase mb-4">Skills & Stack</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-6">
            What I Bring to the Table
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            From frontend finesse to backend brains — I build end-to-end applications with clean code and highly scalable logic.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="relative p-8 rounded-3xl bg-card border border-border/50 shadow-xl overflow-hidden group"
            >
              {/* Background gradient blur on hover */}
              <div className={`absolute -right-12 -top-12 w-40 h-40 bg-gradient-to-br ${category.color} rounded-full blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity duration-500`} />
              
              <div className="flex flex-col items-center text-center relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 text-foreground border border-border group-hover:bg-background transition-all`}>
                  {category.icon}
                </div>
                
                <h4 className="text-xl font-bold text-foreground mb-8">{category.title}</h4>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm font-medium rounded-xl bg-secondary/50 text-secondary-foreground border border-border/50 hover:bg-foreground hover:text-background hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-sm cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
