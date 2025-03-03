import type React from "react"
import { Analytics } from "@vercel/analytics/react" // Updated import path
import Header from "@/components/Header" // Adjust path as needed
import Footer from "@/components/Footer" // Adjust path as needed
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Krishna Mallick | Portfolio",
  description: "Software Engineering Student Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}


