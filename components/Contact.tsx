"use client"

import { Mail, LucideLinkedin, LucideGithub, Copy, CheckCircle } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 14px',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '8px',
  fontSize: '13px',
  color: '#ffffff',
  outline: 'none',
  boxSizing: 'border-box',
}

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const email = "krishnamallick46@hotmail.com"

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <LucideLinkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/krishna-mallick-a558b6260/",
    },
    {
      name: "GitHub",
      icon: <LucideGithub className="w-5 h-5" />,
      url: "https://github.com/KrishnaKMA",
    },
  ]

  return (
    <section
      id="contact"
      className="section-pad"
      style={{ background: 'transparent', position: 'relative' }}
    >
      {/* Subtle background glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '-80px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(224,90,58,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="porto-container">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px' }}
        >
          <span className="section-label">Say Hello</span>
          <h2 className="section-heading">Get In Touch</h2>
          <p style={{ fontSize: '16px', fontWeight: 300, color: 'rgba(255,255,255,0.5)', maxWidth: '480px', lineHeight: '1.7', marginTop: '16px' }}>
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div style={{ maxWidth: '860px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="porto-card-flat"
          >
            <div className="flex flex-col md:flex-row" style={{ padding: '48px' }}>

              {/* Left — contact details */}
              <div style={{ flex: 1, marginRight: '0', paddingRight: '0' }} className="md:pr-12 md:border-r md:border-white/5">
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '28px', letterSpacing: '0.05em', color: '#ffffff', marginBottom: '16px' }}>
                  Contact Me
                </h3>
                <p style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.5)', lineHeight: '1.7', marginBottom: '28px' }}>
                  I&apos;m always open to new opportunities and collaborations. Feel free to reach out via email.
                </p>

                {/* Email row */}
                <div style={{ marginBottom: '24px' }}>
                  <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '8px' }}>
                    Email
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <code
                      style={{
                        flex: 1,
                        padding: '10px 14px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '8px',
                        fontSize: '13px',
                        color: 'rgba(255,255,255,0.7)',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {email}
                    </code>
                    <button
                      onClick={handleCopyEmail}
                      style={{
                        padding: '10px 14px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '8px',
                        color: copied ? '#44cc88' : 'rgba(255,255,255,0.6)',
                        fontSize: '12px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        flexShrink: 0,
                        transition: 'color 0.2s ease, border-color 0.2s ease',
                      }}
                    >
                      {copied ? <CheckCircle className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>

                {/* Social links */}
                <div>
                  <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '10px' }}>
                    Connect
                  </p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        aria-label={link.name}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — contact form */}
              <div className="md:pl-12 md:pt-0" style={{ flex: 1, paddingTop: '32px' }}>
                {status === 'sent' ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '12px', textAlign: 'center' }}>
                    <CheckCircle style={{ width: '40px', height: '40px', color: '#44cc88' }} />
                    <p style={{ fontSize: '15px', fontWeight: 500, color: '#ffffff' }}>Message sent!</p>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>I&apos;ll get back to you within 24–48 hours.</p>
                    <button onClick={() => setStatus('idle')} style={{ marginTop: '8px', fontSize: '12px', color: '#e05a3a', background: 'none', border: 'none', cursor: 'pointer' }}>
                      Send another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div>
                      <label htmlFor="contact-name" style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: '6px' }}>
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: '6px' }}>
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-message" style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: '6px' }}>
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        placeholder="What's on your mind?"
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        style={{ ...inputStyle, resize: 'none' }}
                      />
                    </div>
                    {status === 'error' && (
                      <p style={{ fontSize: '12px', color: '#e05a3a' }}>Something went wrong. Please try again.</p>
                    )}
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      style={{
                        padding: '12px 24px',
                        background: 'linear-gradient(135deg, #c0392b, #e05a3a)',
                        border: 'none',
                        borderRadius: '0',
                        color: '#ffffff',
                        fontSize: '13px',
                        fontWeight: 500,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        opacity: status === 'sending' ? 0.7 : 1,
                        transition: 'opacity 0.2s ease',
                      }}
                    >
                      <Mail className="w-4 h-4" />
                      {status === 'sending' ? 'Sending…' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Back to top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ marginTop: '40px', textAlign: 'center' }}
        >
          <p style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.4)', marginBottom: '12px' }}>
            Looking forward to hearing from you!
          </p>
          <a href="#about" className="btn-text" style={{ fontSize: '13px' }}>
            Back to top
          </a>
        </motion.div>
      </div>
    </section>
  )
}
