"use client";

import { useEffect, useState } from "react";
import { X, Github, Monitor, CheckCircle2, Zap, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────
   Per-project detail content
───────────────────────────────────────── */
const PROJECT_DETAILS = {
  0: {
    // Sheetal Sweets & Bakery
    fullDescription:
      "A production-ready business website for Sheetal Sweets & Bakery — a brand serving customers across Chhapi (Gujarat) and two Mumbai locations. Built with a dynamic backend, JWT-protected admin panel, and fully responsive UI that works on every device.",
    extraDescription:
      "Deployed on a live Hostinger VPS with Nginx reverse proxy and PM2 process manager — no shared hosting shortcuts. Real infrastructure, real traffic, real responsibility.",
    techStack: ["React", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
    systemDetails: [
      {
        title: "Dynamic Content & JWT Admin",
        body: "The site is not static — an admin panel protected by JWT authentication allows the owner to manage menu items, gallery images, and business details without touching code.",
      },
      {
        title: "Backend Architecture",
        body: "Node.js + Express handles all API routes with a clean controller structure. MySQL stores product data, location info, and media references in a normalized schema.",
      },
      {
        title: "VPS Deployment",
        body: "Deployed on Hostinger VPS running Linux. Nginx is configured as a reverse proxy sitting in front of the Node.js server, with SSL certificates for HTTPS and PM2 keeping the process alive across reboots.",
      },
      {
        title: "Responsive Frontend",
        body: "Built with React and Tailwind CSS — every layout, card, and section is tested across mobile, tablet, and desktop. Performance was a priority given the real customer base.",
      },
    ],
    challenges: [
      {
        title: "VPS & Nginx Configuration",
        body: "Setting up Nginx as a reverse proxy, pointing it to the right Node.js port, and wiring SSL on a raw Linux server — no GUI, no hand-holding. Every config file was written manually.",
      },
      {
        title: "PM2 Process Management",
        body: "Making sure the server survives reboots and crashes meant configuring PM2 startup scripts — a real production concern that localhost development never prepares you for.",
      },
      {
        title: "Mobile Performance",
        body: "First load on low-end mobile devices was noticeably slow. Solved it through image optimization, lazy loading, and reducing bundle size — real-world constraints, real solutions.",
      },
    ],
    learning:
      "Deploying a live client project on a VPS taught me how production infrastructure actually works. Managing Nginx, SSL, PM2, and a Linux environment with no abstractions gave me a level of backend confidence that no tutorial can replicate.",
  },
  1: {
  fullDescription:
    "A production-grade REST API built with Java and Spring Boot that handles the full lifecycle of student and course management — from enrollment logic to secure authentication and file storage.",
  extraDescription:
    "No frontend, no shortcuts. Pure backend — every endpoint designed, every layer separated, every edge case handled. Built in March 2026 as a deep dive into enterprise-level Java architecture.",
  techStack: ["Java", "Spring Boot", "Hibernate", "MySQL", "JWT", "REST API", "Postman", "Maven"],
  systemDetails: [
    {
      title: "Layered Architecture",
      body: "Strict separation across Controller, Service, DAO, and Entity layers — each layer has one job and doesn't bleed into the next. Makes the codebase maintainable and testable at scale.",
    },
    {
      title: "JWT Authentication",
      body: "Access and refresh token flow with role-based route protection. Admin and student roles are enforced at the API level — not just the frontend.",
    },
    {
      title: "Enrollment & Course Logic",
      body: "ManyToMany relationships between students and courses managed through Hibernate — with careful DTO mapping to avoid circular references and over-fetching.",
    },
    {
      title: "File Upload System",
      body: "Custom FileStorageService saves profile images with UUID-based filenames directly to server disk — with logic to detect and remove old images on update so no orphaned files pile up.",
    },
  ],
  challenges: [
    {
      title: "Image Update Workflow",
      body: "Every update needed to find the old image path, delete it from disk, then store the new one — without breaking the reference in the database. Required careful service-layer coordination.",
    },
    {
      title: "ManyToMany Mapping",
      body: "Bidirectional relationships between students and courses created circular serialization issues. Solved with targeted DTO design and controlled fetch strategies.",
    },
    {
      title: "Role-Based Middleware",
      body: "Wiring Spring Security filters to enforce role checks at the route level — not the business logic level — required understanding how the filter chain actually executes.",
    },
  ],
  learning:
    "Building file storage manually — without S3 or any cloud abstraction — taught me how local paths, memory blocks, and file I/O actually work at the OS level. This project also gave me a real understanding of Spring Boot's architecture: not just how to use it, but why each layer exists.",
},
  2: {
    // ZepX Commerce Platform
    fullDescription:
      "A full-scale e-commerce platform built from the ground up — covering everything from user authentication and product management to cart flows, order tracking, and an admin dashboard with full inventory control.",
    extraDescription:
      "Every layer was built by hand — database schema design, REST API architecture, frontend component structure, and payment gateway integration.",
    techStack: ["React", "Node.js", "Express", "MySQL", "Tailwind", "Razorpay"],
    systemDetails: [
      {
        title: "JWT Authentication",
        body: "Users log in with credentials, the backend verifies identity and issues a JWT token. All private routes and admin operations are protected behind token validation middleware.",
      },
      {
        title: "Backend Workflow",
        body: "APIs follow a route-controller architecture covering products, orders, categories, users, and payments — clean separation of concerns throughout.",
      },
      {
        title: "Database Layer",
        body: "MySQL manages all relational data — users, products, stock levels, cart items, and order history — with normalized tables and foreign key relationships.",
      },
      {
        title: "Frontend Experience",
        body: "React handles all UI with reusable components, responsive layouts, and smooth user interactions. State is managed cleanly across cart, auth, and product flows.",
      },
    ],
    challenges: [
      {
        title: "Payment Gateway Integration",
        body: "Wiring Razorpay into the order flow — handling webhook verification, payment state, and order confirmation — required careful coordination between frontend events and backend logic.",
      },
      {
        title: "Role-Based Access Control",
        body: "Separating customer and admin permissions across both frontend routes and backend middleware without leaking access was a design challenge that required clean architecture from day one.",
      },
      {
        title: "Inventory Sync",
        body: "Keeping stock levels accurate across concurrent add-to-cart and checkout actions required careful database transaction handling to avoid overselling.",
      },
    ],
    learning:
      "Building a complete e-commerce system end-to-end showed me how every layer depends on the others. A poorly designed database schema creates API pain, which creates frontend workarounds. Getting the foundation right matters more than anything.",
  },
};

export default function ProjectDetailPage({ project, onClose }) {
  const [activeImage, setActiveImage] = useState(null);

  const detail = PROJECT_DETAILS[project?.id] || {};

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        if (activeImage) closeImage();
        else onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeImage, onClose]);

  if (!project) return null;

  const openImage = (img) => {
    setActiveImage(img);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setActiveImage(null);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      {/* MAIN MODAL */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-background overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-accent font-semibold mb-2">
                Project Case Study
              </p>
              <h2 className="text-2xl md:text-4xl font-black text-foreground">
                {project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-card transition"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="max-w-7xl mx-auto px-6 py-10">

          {/* ── Intro ── */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">

            {/* Left — description */}
            <div className="rounded-[32px] border border-border bg-card/30 p-8">
              <p className="text-sm text-accent font-medium mb-3">
                {project.category}
              </p>
              <h3 className="text-3xl md:text-5xl font-black text-foreground">
                {project.title}
              </h3>
              <div className="w-16 h-[2px] bg-accent rounded-full mt-5" />

              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                {detail.fullDescription || project.description}
              </p>

              <p className="mt-5 text-muted-foreground leading-relaxed">
                {detail.extraDescription}
              </p>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2 mt-7">
                {(detail.techStack || project.technologies)?.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full text-sm border border-border bg-secondary/30 text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA button */}
              <div className="mt-8">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex px-6 py-4 rounded-2xl bg-foreground text-background font-semibold items-center gap-2"
                  >
                    <Monitor size={18} />
                    Live Site
                  </a>
                ) : project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex px-6 py-4 rounded-2xl bg-foreground text-background font-semibold items-center gap-2"
                  >
                    <Github size={18} />
                    Source Code
                  </a>
                ) : null}
              </div>
            </div>

            {/* Right — system details */}
            <div className="rounded-[32px] border border-border bg-card/30 p-8 space-y-6">
              {detail.systemDetails?.map((item, i) => (
                <div key={i}>
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                  {i < detail.systemDetails.length - 1 && (
                    <div className="mt-6 h-px w-full bg-border/40" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Gallery ── */}
          {project?.images?.length > 0 && (
            <div className="mb-20">
              <p className="text-xs uppercase tracking-[0.35em] text-accent font-semibold mb-4">
                Project Gallery
              </p>
              <h3 className="text-3xl md:text-5xl font-black text-foreground mb-10">
                Interface Showcase
              </h3>
       <div className="grid md:grid-cols-2 gap-5">
  {project.images.map((img, i) => (
    <button
      key={i}
      onClick={() => openImage(img)}
      className="group rounded-[28px] overflow-hidden"
    >
      <img
        src={img}
        alt={`Gallery ${i + 1}`}
        className="w-full h-auto group-hover:scale-[1.02] transition duration-500"
      />
    </button>
  ))}
</div>
            </div>
          )}

          {/* ── Features ── */}
          <div className="mb-20">
            <p className="text-xs uppercase tracking-[0.35em] text-accent font-semibold mb-4">
              Features
            </p>
            <h3 className="text-3xl md:text-5xl font-black text-foreground mb-10">
              What This Project Delivers
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              {project?.features?.map((item, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-border bg-card/30 p-6 flex gap-4"
                >
                  <CheckCircle2 size={20} className="text-accent shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Challenges ── */}
          {detail.challenges?.length > 0 && (
            <div className="mb-20">
              <p className="text-xs uppercase tracking-[0.35em] text-accent font-semibold mb-4">
                Challenges Overcome
              </p>
              <h3 className="text-3xl md:text-5xl font-black text-foreground mb-10">
                What Made This Hard
              </h3>
              <div className="grid md:grid-cols-3 gap-5">
                {detail.challenges.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-3xl border border-border bg-card/30 p-6 space-y-3"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Zap size={16} className="text-accent" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Key Learning ── */}
          {detail.learning && (
            <div className="pb-10">
              <p className="text-xs uppercase tracking-[0.35em] text-accent font-semibold mb-4">
                Key Learning
              </p>
              <div className="rounded-[32px] border border-accent/20 bg-accent/5 p-8 md:p-10 flex gap-6">
                <BookOpen size={24} className="text-accent shrink-0 mt-1" />
                <p className="text-foreground text-lg leading-relaxed">
                  {detail.learning}
                </p>
              </div>
            </div>
          )}

        </div>
      </motion.div>

      {/* IMAGE POPUP */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={closeImage}
          >
            <button
              onClick={closeImage}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white"
            >
              <X size={20} />
            </button>

            <motion.img
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.18 }}
              src={activeImage}
              alt="Preview"
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[94vh] object-contain rounded-3xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}