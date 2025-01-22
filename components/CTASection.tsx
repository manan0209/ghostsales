import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-deep-blue to-purple">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 animate-color"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to supercharge your sales?
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get started with GhostSales today and experience the power of AI-driven sales automation.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button className="bg-white text-black hover:bg-gray-200 transition-all duration-300 text-lg py-6 px-8 rounded-md">
            Start Free Trial Now
          </Button>
          <Button
            variant="outline"
            className="text-white hover:text-gray-300 transition-colors border-2 border-white hover:bg-white hover:text-black rounded-md"
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

