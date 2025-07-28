import type React from "react"
import type { Metadata } from "next"
import { Inter, Sora } from 'next/font/google';
 
// const roboto = Roboto({
//   weight: '400',
//   subsets: ['latin'],
// })
import "./globals.css"
import CleanHeader from "./components/clean-header"
import MinimalFooter from "./components/minimal-footer"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
});

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
      <body className={`${inter.variable} ${sora.variable}`}>
        <CleanHeader />
        {children}
        </body>
        <MinimalFooter />
    </html>
  )
}
