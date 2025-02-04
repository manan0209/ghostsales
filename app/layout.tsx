import { Analytics } from "@vercel/analytics/react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GhostSales - AI-Powered CRM Platform",
  description:
    "Transform your sales process with AI-driven automation. GhostSales offers cutting-edge lead generation, campaign automation, and analytics.",
  keywords: "AI, CRM, sales automation, lead generation, campaign automation, ghostsales",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ghostsales.vercel.app",
    siteName: "GhostSales",
    images: [
      {
        url: "https://imgur.com/a/mkST6x4",
        width: 1200,
        height: 630,
        alt: "GhostSales - AI-Powered CRM Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ghostsales",
    creator: "@ghostsales",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

