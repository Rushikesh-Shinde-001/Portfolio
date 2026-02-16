// Home.jsx
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact  from './Contact'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    // Check if we need to scroll to a section
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo
      
      // Small delay to ensure components are rendered
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const offset = 80 // Header height
          const elementPosition = element.offsetTop - offset
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
        }
      }, 200)
      
      // Clear the state
      window.history.replaceState({}, document.title)
    }
  }, [location])

  return (
    <div>
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

        {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default Home