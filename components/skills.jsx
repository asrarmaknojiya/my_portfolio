"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const GROUPS = [
  {
    id: 0,
    name: "Frontend",
    desc: "Pixel-sharp interfaces with React, Next.js and modern CSS.",
    skills: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    id: 1,
    name: "Backend",
    desc: "Scalable APIs and server-side logic built for production load.",
    skills: ["Node.js", "Express.js", "MySQL", "REST APIs", "JWT Auth","Prisma ORM"],
  },
  {
    id: 2,
    name: "Tools",
    desc: "A tight workflow — from local dev to production deploy.",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Vercel","Vite" ],
  },
]

const ALL_SKILLS = GROUPS.flatMap((g) => g.skills)

export default function Skills() {
  const [active, setActive] = useState(0)
  const [pillKey, setPillKey] = useState(0)

  function switchGroup(i) {
    if (i === active) return
    setActive(i)
    setPillKey((k) => k + 1)
  }

  const g = GROUPS[active]

  return (
    <section
      id="skills"
      style={{
        padding: "var(--section-padding) 0",
        background: "var(--bg-light)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle dot-grid */}
      <div
      
      
      />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 48 }}
        >
          <div className="section-subtitle" >
           
            <span className="section-subtitle"
             
            >
              Skills &amp; Stack
            </span>
          </div>
          <h2 className="section-title" style={{ margin: 0 }}>
            What I bring{" "}
            <span style={{ color: "var(--accent)" }}>to the table</span>
          </h2>
        </motion.div>

        {/* ── Split panel ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          style={{
            display: "grid",
            gridTemplateColumns: "220px 1fr",
            border: "1px solid var(--border-color)",
            borderRadius: 16,
            overflow: "hidden",
            background: "#ffffff",
            boxShadow: "var(--shadow-premium)",
          }}
        >
          {/* Left nav */}
          <div
            style={{
              borderRight: "1px solid var(--border-color)",
              padding: 8,
              background: "#f8fafc",
            }}
          >
            {GROUPS.map((group, i) => {
              const isActive = active === i
              return (
                <button
                  key={group.id}
                  onClick={() => switchGroup(i)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: 10,
                    cursor: "pointer",
                    background: isActive ? "rgba(0,194,255,.08)" : "transparent",
                    border: isActive ? "1px solid rgba(0,194,255,.25)" : "1px solid transparent",
                    marginBottom: 4,
                    transition: "all .2s",
                    textAlign: "left",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.background = "rgba(0,0,0,.03)"
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.background = "transparent"
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: 10,
                      color: isActive ? "var(--accent)" : "var(--text-muted)",
                      letterSpacing: ".1em",
                      minWidth: 20,
                    }}
                  >
                    0{i + 1}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: isActive ? "var(--accent-dark)" : "var(--text-secondary)",
                      flex: 1,
                    }}
                  >
                    {group.name}
                  </span>
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: isActive ? "var(--accent)" : "#cbd5e1",
                      boxShadow: isActive ? "0 0 8px var(--accent)" : "none",
                      transition: "all .3s",
                      flexShrink: 0,
                    }}
                  />
                </button>
              )
            })}
          </div>

          {/* Right panel */}
          <div
            style={{
              padding: "32px 28px",
              minHeight: 320,
              position: "relative",
              overflow: "hidden",
              background: "#ffffff",
            }}
          >
            {/* Top cyan accent line */}
            <div
              style={{
                position: "absolute",
                top: 0, left: 0, right: 0,
                height: 2,
                background: "linear-gradient(to right, var(--accent), transparent)",
                opacity: 0.7,
              }}
            />

            {/* Panel header */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active + "-head"}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.25 }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: 28,
                  flexWrap: "wrap",
                  gap: 12,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "var(--title-color)",
                      letterSpacing: "-.02em",
                      marginBottom: 4,
                    }}
                  >
                    {g.name}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      maxWidth: 340,
                    }}
                  >
                    {g.desc}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: 10,
                    color: "var(--accent-dark)",
                    background: "rgba(0,194,255,.08)",
                    border: "1px solid rgba(0,194,255,.25)",
                    padding: "5px 12px",
                    borderRadius: 20,
                    letterSpacing: ".08em",
                    whiteSpace: "nowrap",
                    fontWeight: 600,
                  }}
                >
                  {g.skills.length} technologies
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Skill pills */}
            <div key={pillKey} style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {g.skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.055, ease: "easeOut" }}
                  whileHover={{ y: -2, transition: { duration: 0.15 } }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 18px",
                    borderRadius: 8,
                    background: "#f8fafc",
                    border: "1px solid var(--border-color)",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "var(--text-primary)",
                    cursor: "default",
                    transition: "background .2s, border-color .2s, color .2s, box-shadow .2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0,194,255,.06)"
                    e.currentTarget.style.borderColor = "rgba(0,194,255,.35)"
                    e.currentTarget.style.color = "var(--accent-dark)"
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,194,255,.12)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#f8fafc"
                    e.currentTarget.style.borderColor = "var(--border-color)"
                    e.currentTarget.style.color = "var(--text-primary)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  <div
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      flexShrink: 0,
                    }}
                  />
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Marquee ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            marginTop: 40,
            borderTop: "1px solid var(--border-color)",
            paddingTop: 20,
            overflow: "hidden",
            maskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 28,
              animation: "skillsMarquee 26s linear infinite",
              width: "max-content",
            }}
          >
            {[...ALL_SKILLS, ...ALL_SKILLS].map((s, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: 18,
                  color: "black",
                  textTransform: "uppercase",
                  letterSpacing: ".15em",
                  whiteSpace: "nowrap",
                }}
              >
                {s}
                <span style={{ color: "var(--accent)", opacity: 0.5, marginLeft: 28 }}>/</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes skillsMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}