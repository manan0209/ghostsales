"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function DemoScheduler() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      console.log("Calendly script loaded")
    }

    script.onerror = () => {
      console.error("Failed to load Calendly script")
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const openCalendly = () => {
    window.open("https://calendly.com/curiousmanan/ghostsales", "_blank")
  }

  return (
    <section id="demo" className="py-20 bg-black/30">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          See GhostSales in Action
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Experience the power of AI-driven sales automation firsthand. Schedule a personalized demo with our product
          experts and discover how GhostSales can transform your sales process.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            onClick={openCalendly}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-lg py-6 px-8 rounded-md"
          >
            Schedule Your Demo
          </Button>
        </motion.div>
      </div>
    </section>
  )
}