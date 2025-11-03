import { Calendar, MapPin, Building } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Web Developer",
      company: "Tech Solutions Inc.",
      location: "New York, NY",
      duration: "2022 - Present",
      type: "Full-time",
      description:
        "Lead developer for client projects, managing a team of 3 developers. Built 15+ websites and web applications using React, Node.js, and modern web technologies.",
      achievements: [
        "Increased website performance by 40%",
        "Led team of 3 junior developers",
        "Delivered 15+ successful projects",
        "Improved client satisfaction to 98%",
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
    },
    {
      title: "Web Developer",
      company: "Digital Agency Pro",
      location: "San Francisco, CA",
      duration: "2021 - 2022",
      type: "Full-time",
      description:
        "Developed responsive websites and web applications for various clients. Worked closely with designers to create pixel-perfect implementations.",
      achievements: [
        "Built 20+ responsive websites",
        "Reduced page load times by 50%",
        "Collaborated with design team",
        "Maintained 99% uptime for all projects",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Junior Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      duration: "2020 - 2021",
      type: "Full-time",
      description:
        "Started my career as a junior developer, learning modern web technologies and contributing to various projects. Gained experience in full-stack development.",
      achievements: [
        "Completed 10+ small projects",
        "Learned React and Node.js",
        "Contributed to main product features",
        "Received 'Best New Developer' award",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Work Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                    <Building size={16} />
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-col md:items-end gap-2">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar size={14} />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin size={14} />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

              {/* Achievements */}
              <div className="mb-6">
                <h5 className="font-semibold text-gray-800 mb-3">Key Achievements:</h5>
                <div className="grid md:grid-cols-2 gap-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
