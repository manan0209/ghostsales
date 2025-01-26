import { Analytics } from "@vercel/analytics/react";
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GhostSales - AI-Powered CRM Platform",
  description: "Transform your sales process with AI-driven automation",
};

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

