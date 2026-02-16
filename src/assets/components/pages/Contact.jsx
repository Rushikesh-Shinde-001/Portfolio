import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'

const Contact = () => {

  useEffect(() => {
    emailjs.init('APm2gwqVCKpE_nd4L')
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    }

    emailjs.send(
      'service_vraf6ls',
      'template_hz02h6b',
      templateParams,
      'APm2gwqVCKpE_nd4L'
    )
    .then(() => {
      setStatus('Message sent successfully!')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    })
    .catch(() => {
      setStatus('Failed to send message')
    })
    .finally(() => {
      setLoading(false)
    })
  }

  // Same animation as Skills
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  return (
    <section  id="contact" className="relative min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black z-[100]">

      {/* Background layer (same as Skills) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black z-0"></div>

      {/* Animated Card */}
      <motion.div
        {...fadeInUp}
        className="relative z-10 w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl"
      >

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 text-white rounded-lg font-semibold transition ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

        </form>

        {status && (
          <p className={`mt-4 text-center font-medium ${
            status.includes('success')
              ? 'text-green-600'
              : 'text-red-600'
          }`}>
            {status}
          </p>
        )}

      </motion.div>
    </section>
  )
}

export default Contact
