"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-deep-blue to-purple text-white">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8 text-center animate-hue-rotate"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About GhostSales
        </motion.h1>
        <motion.div
          className="max-w-3xl mx-auto space-y-6 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            GhostSales is at the forefront of AI-powered sales automation. Our mission is to revolutionize the way
            businesses approach sales, making the process more efficient, effective, and data-driven.
          </p>
          <p>
            Founded in 2023 by a team of AI experts and sales professionals, GhostSales combines cutting-edge artificial
            intelligence with deep industry knowledge to create a platform that truly understands and enhances the sales
            process.
          </p>
          <p>
            Our AI-driven approach allows businesses of all sizes to automate lead generation, personalize campaigns,
            and gain actionable insights from advanced analytics. We're not just a tool; we're your AI-powered sales
            partner.
          </p>
          <div className="mt-12 text-center">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-lg py-6 px-8 rounded-md">
              Join the AI Sales Revolution
            </Button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

