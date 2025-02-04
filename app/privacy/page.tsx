"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </motion.h1>
        <motion.div
          className="max-w-3xl mx-auto space-y-6 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            At GhostSales, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect
            your personal information.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, use our services, or
            contact us for support.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p>
            We use your information to provide, maintain, and improve our services, as well as to communicate with you
            about your account and our products.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
          <p>
            We implement a variety of security measures to protect your personal information. However, no method of
            transmission over the Internet is 100% secure.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page.
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

