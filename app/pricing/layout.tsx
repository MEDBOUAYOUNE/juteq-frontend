import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing Plans - JOTIQ AI-Powered Outreach",
  description:
    "Choose the perfect AI outreach plan for your business. From free exploration to enterprise solutions with custom integrations and premium support.",
  keywords: "AI outreach pricing, business development plans, cold calling pricing, email automation costs",
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
