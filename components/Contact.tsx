"use client"

import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export default function Contact() {
  const email = "krishnamallick46@hotmail.com"
  const subject = "What is your Subject?"

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`
  }

  return (
    <section id="contact" className="relative py-20 bg-blue-200 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/ContactsVid.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Content */}
      <div className="relative container mx-auto px-6 text-center z-10">
        <h2 className="text-3xl font-bold mb-8 text-red-600">Contact Me</h2>
        <div className="max-w-md mx-auto bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
          <p className="mb-6 text-gray-700">
            Feel free to reach out to me directly via email. Click the button below to open your email client.
          </p>
          <Button
            onClick={handleEmailClick}
            className="px-6 py-3 flex items-center justify-center gap-2 mx-auto"
            size="lg"
          >
            <Mail className="h-5 w-5" />
            Email Me
          </Button>
          <p className="mt-4 text-sm text-gray-600">{email}</p>
        </div>
      </div>
    </section>
  )
}



