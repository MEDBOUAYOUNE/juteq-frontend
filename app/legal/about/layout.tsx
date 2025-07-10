import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - JOTIQ AI-Powered Outreach",
  description:
    "Learn about JOTIQ's mission to automate client outreach for recruiters. Founded by recruitment and technology experts Joel Bennett and Otman Nouinou.",
  keywords: "about JOTIQ, recruitment automation, AI outreach founders, Joel Bennett, Otman Nouinou",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}