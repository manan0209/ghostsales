"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"

export default function TermsOfServicePage() {
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
          Terms of Service
        </motion.h1>
        <motion.div
          className="max-w-3xl mx-auto space-y-6 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>Welcome to GhostSales. By using our services, you agree to these terms. Please read them carefully.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Services</h2>
          <p>
            You must follow any policies made available to you within the Services. You may use our Services only as
            permitted by law. We may suspend or stop providing our Services to you if you do not comply with our terms
            or policies or if we are investigating suspected misconduct.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Your GhostSales Account</h2>
          <p>
            You may need a GhostSales Account in order to use some of our Services. You may create your own GhostSales
            Account, or your GhostSales Account may be assigned to you by an administrator, such as your employer or
            educational institution.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Privacy and Copyright Protection</h2>
          <p>
            GhostSales&apos;s privacy policies explain how we treat your personal data and protect your privacy when you use
            our Services. By using our Services, you agree that GhostSales can use such data in accordance with our
            privacy policies.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Modifying and Terminating our Services</h2>
          <p>
            We are constantly changing and improving our Services. We may add or remove functionalities or features, and
            we may suspend or stop a Service altogether.
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

