"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Briefcase,
  Code2,
  Layers,
  ArrowUpRight,
} from "lucide-react";

export default function About() {
  const stats = [
    { number: "1+", label: "Years Experience", icon: Briefcase },
    { number: "4+", label: "Projects Delivered", icon: Layers },
    { number: "10+", label: "Tech Stack", icon: Code2 },
    { number: "IN", label: "Based in Gujarat", icon: MapPin },
  ];

  const stack = [
    "Java",
    "Spring Boot",
    "Node.js",
    "React.js",
    "Next.js",
    "MySQL",
    "Express.js",
  ];

  return (
    <section
      id="about"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px] glow-gradient-1 opacity-20" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full blur-[120px] glow-gradient-2 opacity-20" />
      </div>

      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="section-subtitle">
            Developer Profile
          </span>

          <h2 className="section-title">
             My Background
          </h2>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Story Card */}
            <div className="glass-card p-8 md:p-10">
              <p className="text-lg md:text-xl text-textMuted leading-relaxed">
               Hey, I'm{" "}
<span className="font-semibold text-foreground">Asrar Maknojiya</span>.
I build full-stack systems where the frontend feels effortless 
and the backend never breaks under pressure.
              </p>

              <div className="mt-8 h-px w-full bg-border/60" />

              <p className="mt-8 text-base md:text-lg text-textMuted leading-relaxed">
               I've shipped production-grade platforms — e-commerce engines, 
 and auth systems with{" "}
<span className="text-foreground font-semibold">JWT & role-based access</span> — 
handling everything from database schema to API design to the final UI.
              </p>

              <p className="mt-5 text-base md:text-lg text-textMuted leading-relaxed">
         Today I build scalable systems using{" "}
<span className="text-accent font-semibold">Java + Spring Boot</span>{" "}
and{" "}
<span className="text-accent font-semibold">Node.js + Express</span>{" "}
on the backend, paired with React & Next.js on the frontend — 
built for real users, real load, and real business needs.
              </p>
            </div>

            {/* Stack Pills */}
           {/* Replace Core Stack section with this */}

<div className="glass-card p-7 bg-gradient-to-br from-accent/10 to-accent-light/10 border-accent/20 relative overflow-hidden">
  
  <div className="absolute top-0 left-0 w-24 h-[2px] rounded-full bg-accent" />

  <p className="text-lg font-medium text-foreground leading-relaxed">
    Clean code. Fast systems. Interfaces that feel alive.
  </p>

  <p className="mt-3 text-sm text-textMuted leading-relaxed">
    I don’t just build features — I shape experiences.
  </p>

</div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            {stats.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group glass-card p-6 flex items-center gap-5 hover:border-accent/40"
              >
                <div className="w-14 h-14 rounded-2xl bg-background border border-border/60 flex items-center justify-center">
                  <item.icon
                    size={20}
                    className="text-textMuted group-hover:text-accent transition-colors"
                  />
                </div>

                <div>
                  <h4 className="text-3xl font-black text-foreground">
                    {item.number}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}

           
          </motion.div>
        </div>
      </div>
    </section>
  );
}