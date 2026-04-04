"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "asrarjabir786@gmail.com",
      href: "mailto:asrarjabir786@gmail.com",
      description: "Feel free to email anytime",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 (862) 582-9857",
      href: "tel:+918625829857",
      description: "Call or message me",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gujarat, India",
      description: "Coding from the heart of Gujarat",
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-background pointer-events-none -z-10" />
      
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] rounded-full blur-[150px] opacity-10 pointer-events-none -z-10 translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <span className="text-sm font-bold tracking-widest text-[hsl(var(--gradient-start))] uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have any questions or want to discuss a project? I'm currently open for new opportunities. Let's build something amazing together!
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {contactInfo.map((info) => (
            <motion.a
              variants={itemVariants}
              key={info.label}
              href={info.href}
              className="group relative p-8 bg-card/40 backdrop-blur-sm rounded-3xl border border-border/50 hover:bg-secondary/50 hover:border-[hsl(var(--gradient-start))]/40 transition-all duration-300 shadow-sm flex flex-col items-center text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--gradient-start))]/0 to-[hsl(var(--gradient-start))]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border group-hover:shadow-[0_0_15px_hsl(var(--gradient-start))] group-hover:border-transparent transition-all z-10 relative">
                <info.icon size={28} className="text-foreground group-hover:text-[hsl(var(--gradient-start))] transition-colors" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-foreground mb-2">{info.label}</h3>
                <p className="text-foreground font-medium mb-2">{info.value}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
