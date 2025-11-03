export default function About() {
  const skills = ["HTML & CSS", "JavaScript", "React", "Node.js", "Python", "MongoDB"]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="John Doe"
              className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Hello! I'm John 👋</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a web developer with 3 years of experience. I love creating websites that are simple, fast, and easy
              to use. I work with modern technologies to build great digital experiences.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              When I'm not coding, I enjoy reading, playing guitar, and exploring new places. I'm always excited to work
              on new projects and meet new people.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mb-4">Skills I Use:</h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
