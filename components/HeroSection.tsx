"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const dynamicTexts = [
  "Your Sales Process",
  "Lead Generation",
  "Customer Engagement",
  "Sales Automation",
  "Revenue Growth",
]

export default function HeroSection() {
  const [dynamicText, setDynamicText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < dynamicTexts[textIndex].length) {
        setDynamicText((prev) => prev + dynamicTexts[textIndex][charIndex])
        setCharIndex((prev) => prev + 1)
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          setDynamicText("")
          setCharIndex(0)
          setTextIndex((prev) => (prev + 1) % dynamicTexts.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [charIndex, textIndex])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-deep-blue to-purple animate-gradient"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block w-full animate-hue-rotate">Transform</span>
          <span className="min-w-[200px] sm:min-w-[300px] text-left">
            {dynamicText}
            <span className="animate-pulse">|</span>
          </span>
          <br />
          <span className="animate-hue-rotate">with AI-Powered Automation</span>
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          GhostSales revolutionizes your sales strategy with cutting-edge AI, automating lead generation, personalizing campaigns, and optimizing customer retention for unprecedented growth.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 rounded-md">
            Start Your Free Trial
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 rounded-md"
          >
            Watch Demo
          </Button>
        </motion.div>
      </div>
    </section>
  )
}