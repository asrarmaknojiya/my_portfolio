"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion } from "framer-motion"

const TERMINALS = [
  {
    id: "frontend",
    title: "frontend",
    command: "generate frontend skills",
    skillColorVar: "--accent",
    skills: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    id: "backend",
    title: "backend",
    command: "generate backend skills",
    skillColorVar: "--accent-light",
    skills: ["Java", "Spring Boot", "Node.js", "Express.js", "MySQL", "REST APIs", "JWT Authentication"],
  },
  {
    id: "tools",
    title: "tools & workflow",
    command: "generate tools & workflow",
    skillColorVar: "--accent-dark",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Intellij IDEA" , "Maven"],
  },
]

function useTypewriter(text, speed = 42) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)
  const started = useRef(false)

  const start = useCallback(() => {
    if (started.current) return
    started.current = true
    setDisplayed("")
    setDone(false)
    let i = 0
    const iv = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(iv)
        setDone(true)
      }
    }, speed)
  }, [text, speed])

  return { displayed, done, start }
}

function TypeLine({ text, colorVar, speed = 18, delay = 0, onDone }) {
  const [displayed, setDisplayed] = useState("")
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStarted(true)
      let i = 0
      const iv = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(iv)
          onDone?.()
        }
      }, speed)
      return () => clearInterval(iv)
    }, delay)
    return () => clearTimeout(timeout)
  }, [])

  if (!started && !displayed) return null

  return (
    <div
      style={{
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: 12,
        color: `var(${colorVar})`,
        lineHeight: 1.8,
        whiteSpace: "pre",
      }}
    >
      {displayed}
    </div>
  )
}

function Cursor() {
  return (
    <span
      style={{
        display: "inline-block",
        width: 7,
        height: 13,
        background: "var(--dark-text)",
        verticalAlign: "text-bottom",
        marginLeft: 2,
        animation: "cmdBlink 0.9s step-end infinite",
      }}
    />
  )
}

function TerminalCard({ terminal, triggerRun }) {
  const [phase, setPhase] = useState("idle") // idle | typing | outputting | done
  const { displayed: cmdTyped, done: cmdDone, start: startCmd } = useTypewriter(terminal.command, 42)

  const BASE_DELAY = 600
  const SKILL_BASE = BASE_DELAY + 900
  const skillCount = terminal.skills.length
  const doneDelay = SKILL_BASE + (skillCount - 1) * 150 + 400

  function run() {
    if (phase !== "idle") return
    setPhase("typing")
    startCmd()
  }

  useEffect(() => {
    if (cmdDone) setTimeout(() => setPhase("outputting"), 120)
  }, [cmdDone])

  useEffect(() => {
    if (triggerRun) run()
  }, [triggerRun])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: phase === "idle" ? -4 : 0, transition: { duration: 0.2 } }}
      onClick={run}
      style={{
        background: "var(--dark-bg)",
        borderRadius: "var(--radius)",
        border: "1px solid var(--dark-border)",
        overflow: "hidden",
        cursor: phase === "idle" ? "pointer" : "default",
        fontFamily: "'Courier New', Courier, monospace",
        boxShadow: "var(--shadow-glass)",
      }}
      onMouseEnter={(e) => {
        if (phase === "idle") e.currentTarget.style.borderColor = "var(--border-color)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--dark-border)"
      }}
    >
      {/* Title bar */}
      <div
        style={{
          background: "var(--dark-surface)",
          padding: "9px 12px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          borderBottom: "1px solid var(--dark-border)",
        }}
      >
        <div style={{ display: "flex", gap: 5 }}>
          {["#EF4444", "#F59E0B", "#10B981"].map((c, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <span style={{ fontSize: 11, color: "var(--dark-muted)", marginLeft: 4, letterSpacing: "0.06em" }}>
          command prompt — {terminal.title}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: "14px 14px 18px", minHeight: 270 }}>
        {/* Prompt line */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 4,
            marginBottom: 4,
            fontSize: 12,
          }}
        >
          <span style={{ color: "var(--accent)" }}>user</span>
          <span style={{ color: "var(--dark-muted)" }}>@</span>
          <span style={{ color: "var(--accent-light)" }}>portfolio</span>
          <span style={{ color: "var(--dark-muted)" }}>:~$</span>
          {phase === "idle" ? (
            <>
              <span style={{ color: "var(--dark-muted)" }}>&nbsp;{terminal.command}</span>
              <Cursor />
            </>
          ) : (
            <>
              <span style={{ color: "var(--dark-text)" }}>&nbsp;{cmdTyped}</span>
              {!cmdDone && <Cursor />}
            </>
          )}
        </div>

        {/* Idle hint */}
        {phase === "idle" && (
          <p style={{ fontSize: 11, color: "var(--dark-muted)", marginTop: 6 }}>
            click to run
          </p>
        )}

        {/* Output */}
        {(phase === "outputting" || phase === "done") && (
          <div style={{ marginTop: 4 }}>
            <TypeLine text="> Scanning modules..." colorVar="--dark-muted" delay={60} speed={18} />
            <TypeLine
              text={`> Loading ${terminal.title} stack...`}
              colorVar="--dark-muted"
              delay={BASE_DELAY}
              speed={18}
            />
            <div style={{ height: 6 }} />
            {terminal.skills.map((skill, i) => (
              <TypeLine
                key={skill}
                text={`[LOADED] ${skill}`}
              colorVar={terminal.skillColorVar.replace('var(', '').replace(')', '')} // Strip if needed or use directly
                delay={SKILL_BASE + i * 150}
                speed={18}
              />
            ))}
            <div style={{ height: 6 }} />
            <TypeLine
              text={`> ${skillCount} modules loaded. Done.`}
              colorVar="--accent"
              delay={doneDelay}
              speed={18}
              onDone={() => setPhase("done")}
            />
            {phase === "done" && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  marginTop: 10,
                  fontSize: 12,
                }}
              >
                <span style={{ color: "var(--accent)" }}>user</span>
                <span style={{ color: "var(--dark-muted)" }}>@</span>
                <span style={{ color: "var(--accent-light)" }}>portfolio</span>
                <span style={{ color: "var(--dark-muted)" }}>:~$</span>
                <Cursor />
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [enterFired, setEnterFired] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Enter") setEnterFired(true)
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  return (
    <section id="skills" className="section-padding bg-background relative">
      <div className="container-custom flex flex-col items-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="section-subtitle">
            Skills & Stack
          </span>
          <h2 className="section-title mb-5">
            What I Bring to the Table
          </h2>
          <p className="section-description mx-auto mt-5 text-center">
      Click each terminal to load my stack — 
from React interfaces to Spring Boot APIs, 
every tool I use has a reason to be there.
          </p>
        </motion.div>

        {/* Terminal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {TERMINALS.map((terminal) => (
            <TerminalCard key={terminal.id} terminal={terminal} triggerRun={enterFired} />
          ))}
        </div>
      </div>
    </section>
  )
}