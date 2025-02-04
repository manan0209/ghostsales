"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
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
          The AI-Powered Future of Sales
        </motion.h1>
        <motion.div
          className="max-w-3xl mx-auto space-y-6 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            GhostSales is not just another CRM—it&apos;s a next-gen AI-powered sales automation platform designed to help businesses acquire, manage, and convert leads effortlessly.
          </p>
            <p>
                Our platform is built on three core pillars:
            </p>
          <p>
            🚀 <strong>An Intelligent Sales Engine</strong> – Instead of just tracking leads like traditional CRMs, GhostSales actively finds, nurtures, and converts potential customers using AI.
          </p>
          <p>
            🤖 <strong>AI-Powered Customer Acquisition</strong> – It scrapes platforms like LinkedIn, Instagram, and Facebook to identify potential leads and then automates outreach & engagement through hyper-personalized campaigns.
          </p>
          <p>
            🔄 <strong>End-to-End Sales Automation</strong> – Unlike most CRMs that focus on post-acquisition management, GhostSales integrates prospecting, lead nurturing, engagement, and pipeline management—all in one system.
          </p>
          <p>
            At GhostSales, we envision a world where sales processes are seamlessly integrated with cutting-edge artificial intelligence, empowering businesses to achieve unprecedented levels of efficiency and success.
          </p>
          <p>
            Our journey began in 2024, when an AI enthusiast and a seasoned sales professional came together with a vision: to transform the sales landscape through innovation and technology. We recognized the challenges that sales teams face daily—manual lead generation, impersonal campaigns, and the struggle to derive actionable insights from data.
          </p>
          <p>
            Driven by our passion for AI and a deep understanding of the sales domain, we set out to create a platform that not only addresses these challenges but also redefines the sales process. GhostSales was born out of this vision, combining state-of-the-art AI algorithms with practical sales strategies to deliver a comprehensive solution.
          </p>
          <p>
            Our platform leverages AI to automate lead generation, ensuring that your sales team always has a pipeline full of high-quality prospects. We personalize campaigns at scale, tailoring messages to resonate with each potential customer. Our advanced analytics provide actionable insights, enabling data-driven decisions that drive growth.
          </p>
          <p>
            But GhostSales is more than just a tool—it&apos;s a partner in your success. We are committed to continuous innovation, constantly refining our algorithms and features to stay ahead of the curve. Our dedicated team works tirelessly to support our clients, ensuring they get the most out of our platform.
          </p>
          <p>
            Join us on this exciting journey as we revolutionize the sales industry. Together, we can achieve new heights of efficiency, effectiveness, and success.
          </p>
          <p>
          <motion.h1
          className="text-2xl md:text-3xl font-bold mb-8 text-center animate-hue-rotate"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
            <strong>Welcome to the AI-powered future of sales. Welcome to GhostSales.</strong>
        </motion.h1>
          </p>
          
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}