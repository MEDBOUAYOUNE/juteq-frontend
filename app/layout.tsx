import type React from "react"
import type { Metadata } from "next"
import { Roboto } from 'next/font/google'
 
// const roboto = Roboto({
//   weight: '400',
//   subsets: ['latin'],
// })
import "./globals.css"
import CleanHeader from "./components/clean-header"
import MinimalFooter from "./components/minimal-footer"

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "JOTIQ | AI-Powered Business Development Tool",
  description:
    "Automate client outreach, find new clients, and save hours every day with JOTIQ's AI-powered business development tools built for recruiters and global businesses.",
  keywords: "AI outreach, cold calling, lead generation, business development, recruiting tools",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <CleanHeader />
        {children}
        </body>
        <MinimalFooter />
    </html>
  )
}
