import { Lightbulb, Megaphone, BarChart3, Users, Target, Zap } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    title: "AI-Driven Lead Generation",
    description:
      "Leverage advanced AI algorithms to identify and capture high-quality leads across multiple platforms, increasing your sales pipeline efficiency.",
    icon: Lightbulb,
  },
  {
    title: "Intelligent Campaign Automation",
    description:
      "Create and execute personalized marketing strategies tailored to each lead's unique profile, maximizing engagement and conversion rates.",
    icon: Megaphone,
  },
  {
    title: "Advanced Analytics Dashboard",
    description:
      "Gain actionable insights with real-time metrics and detailed performance analytics, enabling data-driven decision-making for your sales strategy.",
    icon: BarChart3,
  },
  {
    title: "Seamless Team Collaboration",
    description:
      "Enhance team productivity with role-based access, task management, and real-time updates, ensuring your sales team operates at peak efficiency.",
    icon: Users,
  },
  {
    title: "Predictive Sales Forecasting",
    description:
      "Utilize AI-powered predictive analytics to forecast sales trends and optimize your strategy for maximum revenue growth.",
    icon: Target,
  },
  {
    title: "Automated Follow-ups",
    description:
      "Never miss an opportunity with intelligent, timely follow-ups tailored to each prospect, increasing your chances of closing deals.",
    icon: Zap,
  },
]

export default function FeaturesSection() {
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
    <section id="features" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 animate-hue-rotate"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Powerful AI-Driven Features
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-deep-blue/20 rounded-lg p-6 hover:bg-deep-blue/40 transition-all duration-300 group cursor-pointer"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <feature.icon className="w-12 h-12 mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

