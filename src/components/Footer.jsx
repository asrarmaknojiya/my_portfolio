import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:john@example.com", label: "Email" },
  ]

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">John Doe</h3>
          <p className="text-gray-400">Web Developer & Designer</p>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
              aria-label={link.label}
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400">© 2024 John Doe. Made with ❤️</p>
        </div>
      </div>
    </footer>
  )
}
