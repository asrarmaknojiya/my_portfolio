"use client";

import {
  CalendarDays,
  MapPin,
  Building2,
  BriefcaseBusiness,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
const experiences = [

  {
    title: "Full Stack Developer Trainee",
    company: "Valuda's Technology Park",
    location: "Chhapi, Gujarat",
    duration: "Jun 2024 – Jan 2026",
    employmentType: "Full-time · Trainee",
    description:
      "Completed an intensive full-stack training program — went from fundamentals to shipping real products. Built an e-commerce platform, a real estate web app, and several other client-facing projects. Gained deep hands-on experience integrating third-party services like Google Auth and Razorpay into production-ready applications.",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
      "Google Auth",
      "Razorpay",
    ],
  },
    {
    title: "Full Stack Developer Intern",
    company: "Quba Infotech",
    location: "Chhapi, Gujarat",
    duration: "Feb 2026 – Present",
    employmentType: "Internship",
    description:
      "Currently working on real-world client projects in a professional Agile environment. Deepening expertise in Java and Spring Boot for backend architecture while building modern frontends with Next.js. Collaborating with a team using Jira and Slack — shipping features that go into actual production systems.",
    skills: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Express.js",
      "Next.js",
      "MySQL",
      "REST APIs",
      "Tailwind CSS",
      "Slack",
    ],
  },
];

  return (
    <section
      id="experience"
      className="section-padding bg-background relative overflow-hidden"
    >
      <div className="container-custom max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="section-subtitle">
            Career Journey
          </span>

          <h2 className="section-title">
            Experience
          </h2>
        </motion.div>

        {/* LinkedIn Style Container */}
        <div className="glass-card overflow-hidden !p-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`p-8 ${
                index !== experiences.length - 1
                  ? "border-b border-border"
                  : ""
              }`}
            >
              <div className="flex gap-5">
                {/* Logo */}
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <Building2 size={24} className="text-accent" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    {exp.title}
                  </h3>

                  <p className="text-foreground/80 font-medium mt-1">
                    {exp.company}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={15} />
                      {exp.duration}
                    </div>

                    <div className="flex items-center gap-2">
                      <BriefcaseBusiness size={15} />
                      {exp.employmentType}
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={15} />
                      {exp.location}
                    </div>
                  </div>

                  <p className="mt-5 text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full text-sm border border-border bg-secondary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}