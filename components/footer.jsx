"use client"

import { Github, Linkedin, Heart, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/asrarmaknojiya",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/asrar-maknojiya-b03a01326/",
      label: "LinkedIn",
    },
  ]

  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
  ]

  return (
    <footer className="bg-card border-t border-border/50 text-foreground py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="text-3xl font-heading font-black tracking-tighter cursor-pointer" onClick={scrollToTop}>
                ASRAR<span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))]">.</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">
              Building high-performance, aesthetically pleasing, and robust web applications for the modern web.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-background border border-border hover:border-foreground transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-foreground">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-foreground">Contact</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Email</p>
                <a
                  href="mailto:asrarjabir786@gmail.com"
                  className="font-medium text-foreground hover:text-[hsl(var(--gradient-start))] transition-colors duration-300"
                >
                  asrarjabir786@gmail.com
                </a>
              </div>
              <div className="pt-2">
                <p className="text-muted-foreground mb-1">Status</p>
                <p className="font-medium text-foreground flex items-center gap-2">
                   <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Available for new projects
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center border-t border-border/50">
          <div className="flex items-center gap-2 text-muted-foreground font-medium text-sm mb-6 md:mb-0">
            <span>&copy; {new Date().getFullYear()} Asrar Maknojiya. Crafted with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>and precision.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-6 py-3 bg-secondary rounded-full text-foreground hover:bg-foreground hover:text-background transition-colors duration-300 group font-medium text-sm border border-border"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  )
}
