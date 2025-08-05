"use client"

import { useEffect, useState } from "react"
import { Mail, Phone } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById("contact")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "asrarjabir786.com",
      href: "mailto:asrarjabir786.com",
      description: "Feel free to email anytime",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 (862) 582-9857",
      // href: "tel:+15551234567",
      description: "Call or message me",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Have any questions or want to discuss a project? You can reach me through email or phone. I’m always happy to connect!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="flex items-center gap-6 p-8 bg-gray-50 rounded-xl border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors duration-300 shadow-sm"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <info.icon size={28} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{info.label}</h3>
                  <p className="text-gray-700 text-lg font-medium mb-1">{info.value}</p>
                  <p className="text-gray-500 text-sm">{info.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
