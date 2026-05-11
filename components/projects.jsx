"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Monitor,
} from "lucide-react";

export default function Projects({ onProjectClick }) {
  const projects = [
    {
      id: 0,
      title: "Sheetal Sweets & Bakery",
      category: "Full Stack Web App",
      year: "Featured Case Study",
      image: "/sheetal-main.png",
      images: [
        "/sheetal-1.png",
        "/sheetal-3.png",
        "/sheetal-4.png",
        "/sheetal-5.png",
      ],
      githubUrl: null,
      liveUrl: "https://sheetalsweets.in/",
      description:
        "A fully responsive business website for a sweets & bakery brand with locations across Gujarat and Mumbai — built for real customers, real traffic, and a seamless browsing experience across all devices.",
      technologies: ["React", "Node.js", "Express.js", "MySQL"],
      features: [
        "Fully Responsive Design",
        "Multi-location Support",
        "Product Showcase",
        "SEO Optimized",
      ],
    },

    {
  id: 1,
  title: "Student Management System",
  category: "Backend REST API",
  year: "Featured Case Study",
  image: "/sms-main.png",
  images: ["/sms-main.png"],
  githubUrl: "https://github.com/asrarmaknojiya/Students-Management-System-In-Java-Spring-Boot",
  liveUrl: null,
  description:
    "A production-grade REST API built with Java and Spring Boot — covering student records, course enrollment, role-based access control, file uploads, and paginated responses. Every layer architected cleanly from entity to controller.",
  technologies: ["Java", "Spring Boot", "MySQL", "JWT", "REST API"],
  features: [
    "JWT Auth & Role-Based Access",
    "Student & Course Management",
    "Enrollment System",
    "UUID-Based Image Uploads",
    "Pagination & Filtering",
    "Layered Architecture",
  ],
},
    {
      id: 2,
      title: "ZepX Commerce Platform",
      category: "Full Stack Case Study",
      year: "Featured Case Study",
      image: "/products.png",
      images: [
        "/category.png",
        "/products.png",
        "/productdetail.png",
        "/order.png",
        "/dash.png",
        "/add.png",
      ],
      githubUrl: "https://github.com/asrarmaknojiya/zepx",
      liveUrl: null,
      description:
        "A scalable e-commerce ecosystem with secure auth, admin controls, inventory flow, and seamless checkout.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MySQL",
        "Tailwind",
        "Razorpay",
      ],
      features: [
        "JWT Authentication",
        "Inventory Management",
        "Payment Gateway",
        "Admin Dashboard",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="section-padding bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <span className="section-subtitle">Selected Work</span>

          <h2 className="section-title mb-5">Featured Case Studies</h2>

          <p className="section-description text-center">
            Real products built with performance, logic, and clean user
            experience in mind.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group glass-card overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">

                {/* Image */}
                <div className="relative overflow-hidden min-h-[320px] lg:min-h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

                  <div className="absolute top-5 left-5">
                    <span className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-md text-white text-xs tracking-[0.2em] uppercase">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <p className="text-sm text-accent font-medium mb-3">
                    {project.year}
                  </p>

                  <h3 className="text-3xl md:text-4xl font-bold text-title leading-tight mb-4">
                    {project.title}
                  </h3>

                  <p className="text-textMuted text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mt-7">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 rounded-full text-sm border border-border bg-secondary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 mt-8">
                    <button
                      onClick={() => onProjectClick(project)}
                      className="primary-btn !py-3 !px-6 !rounded-xl text-sm"
                    >
                      View Case Study
                      <ArrowUpRight size={18} />
                    </button>

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-btn !py-3 !px-5 !rounded-xl flex items-center gap-2 text-sm"
                      >
                        <Monitor size={18} />
                        Live Site
                      </a>
                    ) : project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-btn !py-3 !px-5 !rounded-xl flex items-center gap-2"
                      >
                        <Github size={18} />
                      </a>
                    ) : null}
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