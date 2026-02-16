// Skills.jsx
import React from 'react'
import { motion } from 'framer-motion'

// Icons
import { 
  FaPython, FaReact, FaJs, FaHtml5, FaBootstrap, FaGithub, FaDatabase, FaNpm
} from 'react-icons/fa'

import { 
  SiTypescript, SiTailwindcss, SiDjango, SiPostgresql,
  SiMongodb, SiVite, SiPandas, SiNumpy
} from 'react-icons/si'

import { TbChartHistogram } from "react-icons/tb"

const Skills = () => {

  const skills = [
    { name: 'Python', level: 95, icon: <FaPython />, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 85, icon: <FaJs />, color: 'from-yellow-400 to-orange-500' },
    { name: 'React', level: 70, icon: <FaReact />, color: 'from-cyan-400 to-blue-500' },
    { name: 'Django', level: 90, icon: <SiDjango />, color: 'from-green-600 to-green-800' },
    { name: 'Tailwind', level: 85, icon: <SiTailwindcss />, color: 'from-teal-400 to-cyan-500' },
    { name: 'PostgreSQL', level: 70, icon: <SiPostgresql />, color: 'from-blue-600 to-indigo-600' },
    { name: 'MongoDB', level: 65, icon: <SiMongodb />, color: 'from-green-600 to-green-800' },
    { name: 'NumPy', level: 60, icon: <SiNumpy />, color: 'from-blue-400 to-blue-600' },
    { name: 'Pandas', level: 50, icon: <SiPandas />, color: 'from-purple-500 to-indigo-600' },
    { name: 'Matplotlib', level: 60, icon: <TbChartHistogram />, color: 'from-orange-400 to-red-500' },
  ]

  return (
    <section  id="skills" className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            My Skills
          </h1>
          <p className="text-gray-400">
            Unique & Interactive Skill Showcase
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.08 }}
              className="relative group"
            >

              {/* Glow Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 blur-md transition duration-500`} />

              {/* Glass Card */}
              <div className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 text-center shadow-xl">

                {/* Icon with Pulse */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center text-white text-3xl shadow-lg`}
                >
                  {skill.icon}
                </motion.div>

                {/* Name */}
                <h3 className="text-white font-semibold text-lg mb-3">
                  {skill.name}
                </h3>

                {/* Progress */}
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2 }}
                    className={`h-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>

                <p className="text-sm mt-2 text-gray-300">
                  {skill.level}%
                </p>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
