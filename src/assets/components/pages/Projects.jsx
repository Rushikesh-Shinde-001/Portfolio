import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaVoteYea, FaGithub, FaLinkedin } from 'react-icons/fa'

const Projects = () => {
  const project = {
    title: "Online Voting System",
    description:
      "A secure and transparent online voting platform with authentication, admin dashboard, election management and real-time result system.",

    image:
      "https://static.vecteezy.com/system/resources/previews/010/942/363/non_2x/vote-voting-and-election-concept-on-virtual-screen-polling-ballot-online-elections-electronic-voting-technology-e-ballot-check-mark-closeup-finger-about-to-press-a-button-illustration-vector.jpg",

    technologies: [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "MySQL",
      "Pillow",
    ],

    live: "https://online-voting-system-demo.netlify.app",
    github: "https://github.com/yourusername/online-voting-system",
    linkedin: "https://www.linkedin.com/in/rushikesh-shinde-4b350131b",

    highlights: [
      "User Authentication",
      "Admin Dashboard",
      "One Person – One Vote",
      "Duplicate Vote Prevention",
      "Real-time Results",
      "Responsive Design",
      "Voter List Management",
      "Secure Vote Storage in Database",
    ],
  }

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            My Project
          </h1>
          <p className="text-gray-400">
            Featured Work & Development
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
          className="relative group z-10"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-2xl rounded-2xl transition duration-500"></div>

          <div className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl shadow-xl overflow-hidden">

            {/* Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-300 text-sm">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">

              {/* Features */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-blue-400 font-semibold text-lg mb-3">
                  <FaVoteYea />
                  <span>Key Features</span>
                </div>

                <ul className="grid md:grid-cols-2 gap-2">
                  {project.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-300 text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-gray-300 font-semibold mb-3">
                  Technologies
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-1 text-sm rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">

                <button
                  onClick={() => window.open(project.live, "_blank")}
                  className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:scale-105 transition"
                >
                  <FaExternalLinkAlt className="inline mr-2" />
                  Live Demo
                </button>

                <button
                  onClick={() => window.open(project.github, "_blank")}
                  className="flex-1 px-6 py-3 rounded-xl border border-white/20 text-gray-300 hover:bg-white/10 transition"
                >
                  <FaGithub className="inline mr-2" />
                  GitHub
                </button>

                <button
                  onClick={() => window.open(project.linkedin, "_https://www.linkedin.com/in/rushikesh-shinde-4b350131b")}
                  className="flex-1 px-6 py-3 rounded-xl border border-blue-500/40 text-blue-300 hover:bg-blue-500/10 transition"
                >
                  <FaLinkedin className="inline mr-2" />
                  LinkedIn
                </button>

              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Projects
