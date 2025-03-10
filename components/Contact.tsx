"use client"

import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Copy, CheckCircle, ArrowRight } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = "krishnamallick46@hotmail.com"
  const subject = "Portfolio Contact"

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/krishna-mallick-a558b6260/",
      color: "bg-[#0077B5]",
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/KrishnaKMA",
      color: "bg-[#333]",
    },
    // Add more social links as needed
  ]

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black border-b border-red-600"
    >
      {/* Red accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)",
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In <span className="text-red-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl relative"
          >
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-r from-red-600/20 to-red-800/20 blur-xl"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-r from-red-800/20 to-red-600/20 blur-xl"></div>

            <div className="p-8 md:p-10 relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-4">Contact Me</h3>
                  <p className="text-gray-300 mb-6">
                    I&apos;m always open to new opportunities and collaborations. Feel free to reach out via email.
                  </p>

                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Email:</p>
                      <div className="flex items-center gap-2">
                        <code className="bg-gray-800 px-3 py-2 rounded text-gray-300 flex-grow text-sm overflow-hidden overflow-ellipsis">
                          {email}
                        </code>
                        <Button
                          onClick={handleCopyEmail}
                          variant="outline"
                          size="sm"
                          className="text-xs flex items-center gap-1 min-w-[70px]"
                        >
                          {copied ? (
                            <>
                              <CheckCircle className="w-3 h-3" />
                              Copied
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              Copy
                            </>
                          )}
                        </Button>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-400 mb-1">Connect with me:</p>
                      <div className="flex gap-3">
                        {socialLinks.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${link.color} p-3 rounded-full text-white hover:opacity-90 transition-opacity`}
                            aria-label={link.name}
                          >
                            {link.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                  <div className="bg-gradient-to-r from-red-700 to-red-600 p-[1px] rounded-full w-24 h-24 mb-6">
                    <div className="bg-gray-900 rounded-full w-full h-full flex items-center justify-center">
                      <Mail className="w-10 h-10 text-red-500" />
                    </div>
                  </div>

                  <Button
                    onClick={handleEmailClick}
                    className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white px-8 py-6 h-auto rounded-full flex items-center gap-3 transition-all text-lg font-medium"
                  >
                    <Mail className="w-5 h-5" />
                    Email Me
                  </Button>

                  <p className="text-gray-400 text-sm mt-4">Response time: 24-48 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-300 mb-4">Looking forward to hearing from you!</p>
            <a href="#about" className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors">
              Back to top
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

