import Link from "next/link";
import {
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black/80 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              GhostSales
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 mb-8 md:mb-0">
            <Link
              href="/#features"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#pricing"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/#testimonials"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="/about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </nav>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/ghostsales"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <LinkedIn className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} GhostSales. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
