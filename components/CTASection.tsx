import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
          Join GhostSales
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We are the future of sales solutions. We are always looking for
          passionate individuals who envision to build something that has never
          been built before. If you are one of them, we would love to have you
          on board.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="mailto:manangoel0209@gmail.com">
            <Button
              variant="outline"
              className="text-white transition-colors border-2 border-white hover:bg-white hover:text-black rounded-md"
            >
              Connect with the Founder
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/curiousmanan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="text-white transition-colors border-2 border-white hover:bg-white hover:text-black rounded-md"
            >
              Connect on LinkedIn
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
