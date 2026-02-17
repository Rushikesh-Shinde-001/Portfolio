import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaTimes, FaDownload, FaCrown } from 'react-icons/fa'
import { FiSun, FiMoon } from 'react-icons/fi'
import { toggleTheme } from '../../utils/theme'

const Header = () => {
  const [isDark, setIsDark] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleToggleTheme = () => {
    toggleTheme()
    setIsDark(!isDark)
  }

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false)
    
    // जर आपण Home page वर नसू तर प्रथम Home वर जाऊ
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } })
      return
    }
    
    // Home page वर असल्यास direct scroll करू
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        const offset = 80 // Header ची height
        const elementPosition = element.offsetTop - offset
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  const handleNavClick = (e, item) => {
    e.preventDefault()
    
    if (item.sectionId) {
      scrollToSection(item.sectionId)
    } else {
      navigate(item.href)
    }
  }
const navItems = [
  { label: 'Home', href: '/', sectionId: 'home', index: 0 },
  { label: 'Skills', href: '/', sectionId: 'skills', index: 1 },
  { label: 'Projects', href: '/', sectionId: 'projects', index: 2 },
  { label: 'Contact', href: '/', sectionId: 'contact', index: 3 }
]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <>
      {/* Animated Background Blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0.1 : 0 }}
        className="fixed inset-0 z-40 bg-gradient-to-r from-neo-primary/20 via-neo-secondary/20 to-neo-primary/20 blur-3xl"
      />
      
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(10px)',
          backgroundColor: scrolled 
            ? isDark 
              ? 'rgba(0, 0, 0, 0.8)' 
              : 'rgba(255, 255, 255, 0.8)'
            : isDark 
              ? 'rgba(0, 0, 0, 0.6)' 
              : 'rgba(255, 255, 255, 0.6)'
        }}
        transition={{
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1]
        }}
        className="fixed w-full z-50 border-b border-white/10 dark:border-gray-800/30 shadow-2xl"
        id="header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between h-14">
            
            {/* Logo with ATTRACTIVE CIRCLE IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              {/* Attractive Circle with Image and Decorative Elements */}
              <div className="relative">
                {/* Outer Glow Ring */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                  className="absolute -inset-2 rounded-full bg-gradient-to-r from-neo-primary via-neo-secondary to-neo-primary opacity-30 blur-sm"
                />
                
                {/* Middle Ring */}
                <motion.div
                  animate={{ 
                    rotate: [0, -360],
                  }}
                  transition={{ 
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent border border-white/20"
                />
                
                {/* Main Image Circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-14 h-14 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl group cursor-pointer"
                >
                  {/* Image */}
                  <img 
                    src="rs-monogram-wing-shape-style-logo-geometric-initial-design-template-isolated-black-background-240995305 (1).jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  {/* Crown Badge */}
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg"
                  >
                    <FaCrown className="w-3 h-3 text-white" />
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Logo Text */}
              <Link to="/" className="relative group">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex flex-col"
                >
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-neo-primary via-neo-secondary to-neo-primary bg-clip-text text-transparent tracking-wider">
                    C-<span className="text-neo-primary">O-</span>D-<span className="text-neo-secondary">E-</span>R
                  </h1>
                </motion.div>
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-neo-primary to-neo-secondary"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hidden lg:flex items-center space-x-8"
            >
              {navItems.map((item) => {
                const isActive = location.pathname === item.href && !item.sectionId
                
                return (
                  <motion.div
                    key={item.label}
                    variants={itemVariants}
                    whileHover={{ y: -2 }}
                    className="relative"
                  >
                    <a
                      href={item.sectionId ? `/#${item.sectionId}` : item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`px-4 py-2 text-sm font-semibold transition-all duration-300 relative group cursor-pointer ${
                        isActive
                          ? 'text-neo-primary'
                          : 'text-gray-600 dark:text-gray-300 hover:text-neo-secondary dark:hover:text-neo-secondary'
                      }`}
                    >
                      {/* Background glow on hover */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-neo-primary/0 via-neo-secondary/0 to-neo-primary/0 group-hover:from-neo-primary/5 group-hover:via-neo-secondary/5 group-hover:to-neo-primary/5 transition-all duration-300" />
                      
                      <span className="relative z-10">{item.label}</span>
                      
                      {/* Hover underline effect */}
                      <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-neo-primary to-neo-secondary transform -translate-x-1/2 group-hover:w-4/5 transition-all duration-300" />
                    </a>
                  </motion.div>
                )
              })}

              {/* Action Buttons Group */}
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-4"
              >
                {/* Resume Button */}
                <motion.a
                  href="Rushikesh shinde CV.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-7 py-3 rounded-xl overflow-hidden bg-gradient-to-r from-neo-primary via-neo-secondary to-neo-primary"
                >
                  <div className="relative flex items-center space-x-2">
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaDownload className="w-4 h-4 text-white" />
                    </motion.div>
                    <span className="font-bold text-white tracking-wide">RESUME</span>
                  </div>
                </motion.a>

                {/* Theme Toggle */}
                <motion.button
                  onClick={handleToggleTheme}
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative w-14 h-14 rounded-full shadow-2xl group"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900" />
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isDark ? "sun" : "moon"}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      className="flex items-center justify-center w-full h-full"
                    >
                      {isDark ? (
                        <FiSun className="w-7 h-7 text-yellow-500" />
                      ) : (
                        <FiMoon className="w-7 h-7 text-indigo-400" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden w-14 h-14 rounded-full shadow-2xl group relative flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900" />
              
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <FaTimes className="text-gray-700 dark:text-gray-300 w-6 h-6 relative z-10" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    className="flex flex-col items-center justify-center space-y-1.5 w-6 h-6"
                  >
                    <span className="block h-0.5 w-full bg-gray-700 dark:bg-gray-300 rounded-full" />
                    <span className="block h-0.5 w-4/5 bg-gray-700 dark:bg-gray-300 rounded-full" />
                    <span className="block h-0.5 w-full bg-gray-700 dark:bg-gray-300 rounded-full" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-lg z-40 lg:hidden"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed top-0 right-0 h-full w-80 z-50 lg:hidden"
            >
              <div className="h-full bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 shadow-2xl">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                          <img 
                             src="rs-monogram-wing-shape-style-logo-geometric-initial-design-template-isolated-black-background-240995305 (1).jpg" 
                            alt="Profile" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <h2 className="text-xl font-bold bg-gradient-to-r from-neo-primary to-neo-secondary bg-clip-text text-transparent">
                          C-O-D-E-R
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={item.sectionId ? `/#${item.sectionId}` : item.href}
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick(e, item)
                          setIsMenuOpen(false)
                        }}
                        className="flex items-center space-x-3 p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 cursor-pointer"
                      >
                        <div className="w-2 h-2 rounded-full bg-gray-400" />
                        <span className="font-medium">{item.label}</span>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header