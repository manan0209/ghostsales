"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          GhostSales
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/#features" className="text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/#pricing" className="text-gray-300 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/#testimonials" className="text-gray-300 hover:text-white transition-colors">
            Testimonials
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
            About Us
          </Link>
        </nav>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
        onClick={() =>
          (window.location.href = "/#pricing")
        }>
          Get Started
        </Button>
      </div>
    </header>
  )
}

