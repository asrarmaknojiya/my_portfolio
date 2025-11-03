import { ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">Hi, I'm John</h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8">Web Developer & Designer</p>

        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          I create simple, clean websites that work great and look beautiful. Let's build something amazing together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#projects"
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
          >
            Get In Touch
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400 mx-auto" />
        </div>
      </div>
    </section>
  )
}
