import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "The concept of AI-powered sales automation is exactly what our small business needs. If it can help streamline our follow-ups, I'd definitely invest in this.",
    name: "Rishita Goel",
    title: "Data Analyst, IIT Roorkee",
    avatar: "avatar-2.svg",
  },
  {
    quote:
      "As a sales manager, I'm excited about the potential of AI insights to help my team focus on building relationships rather than administrative tasks.",
    name: "Rajesh Patel",
    title: "Sales Manager, GrowthFirst",
    avatar: "avatar-1.svg",
  },
  {
    quote:
      "The demo showed promising features for personalized customer outreach. Looking forward to seeing this solution in action.",
    name: "Aisha Khan",
    title: "Business Development Head, NextGen Solutions",
    avatar: "avatar-4.svg",
  },
  {
    quote:
      "If this platform can help identify and nurture leads automatically, it would solve a major pain point for our sales team.",
    name: "Vikram Malhotra",
    title: "Director, InnovateHub Bangalore",
    avatar: "avatar-3.svg",
  },
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-deep-blue/20 to-purple/20"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 animate-color"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What People Are Saying
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <motion.div
            className="w-full md:w-1/2 h-[300px] overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-black/30 rounded-lg p-6 h-full flex flex-col justify-center"
              >
                <p className="text-lg italic text-gray-300 mb-4">
                  &quot;{testimonials[currentTestimonial].quote}&quot;
                </p>
                <div className="flex items-center">
                  <Image
                    src={
                      testimonials[currentTestimonial].avatar ||
                      "/placeholder.svg"
                    }
                    alt={testimonials[currentTestimonial].name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold animate-color">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-gray-400">
                      {testimonials[currentTestimonial].title}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`bg-black/30 rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                  index === currentTestimonial
                    ? "border-l-4 border-blue-500"
                    : ""
                }`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 5px 15px -5px rgba(0, 0, 0, 0.1)",
                }}
                onClick={() => setCurrentTestimonial(index)}
              >
                <p className="text-sm text-gray-300 truncate">
                  {testimonial.quote}
                </p>
                <p className="text-xs text-gray-400 mt-2 group-hover:animate-color">
                  {testimonial.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
