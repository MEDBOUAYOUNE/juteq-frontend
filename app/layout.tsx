import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import CleanHeader from "./components/clean-header"
import MinimalFooter from "./components/minimal-footer"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JOTIQ | AI-Powered Business Development Tool",
  description:
    "Automate client outreach, find new clients, and save hours every day with JOTIQ's AI-powered business development tools built for recruiters and global businesses.",
  keywords: "AI outreach, cold calling, lead generation, business development, recruiting tools",
  icons: {
    icon: "/favicon.png",
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
        <CleanHeader />
        {children}
        </body>
        <MinimalFooter />
    </html>
  )
}
