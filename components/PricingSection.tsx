"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

const pricingTiers = [
  {
    name: "Starter",
    price: "$59",
    period: "/month",
    features: [
      "AI-driven lead generation (up to 500 leads/month)",
      "Basic campaign automation",
      "Standard analytics dashboard",
      "Up to 3 team members",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "$159",
    period: "/month",
    features: [
      "Advanced AI lead scoring (up to 2,000 leads/month)",
      "Personalized campaign automation",
      "Advanced analytics and reporting",
      "Up to 10 team members",
      "Priority support",
      "Integration with CRM systems",
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Full-scale AI automation (unlimited leads)",
      "Custom integrations and API access",
      "Dedicated account manager",
      "Unlimited team members",
      "24/7 premium phone and email support",
      "On-site training and setup",
    ],
  },
]

export default function PricingSection() {
  const openFormPage = () => {
    window.open("/form")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section id="pricing" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 animate-color"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Choose Your Plan
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className={`bg-deep-blue/20 rounded-lg p-8 flex flex-col ${
                tier.recommended
                  ? "transform scale-105 shadow-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20"
                  : ""
              }`}
              variants={itemVariants}
              whileHover={{
                scale: tier.recommended ? 1.1 : 1.05,
                boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h3 className="text-2xl font-bold mb-4 animate-color">{tier.name}</h3>
              <div className="text-4xl font-bold mb-2 animate-color">
                {tier.price}
                <span className="text-xl font-normal text-gray-400">{tier.period}</span>
              </div>
              <ul className="mb-8 flex-grow">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="w-5 h-5 mr-2 text-green-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full rounded-md ${
                  tier.recommended
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    : "bg-blue-500 hover:bg-blue-600"
                } transition-all duration-300`}
                onClick={openFormPage}
              >
                {tier.name === "Enterprise" ? "Contact Sales" : "Get in touch"}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}