'use client'

import { useEffect, useRef, useState } from 'react'

interface VantaEffect {
  destroy: () => void
}

declare global {
  interface Window {
    VANTA: {
      NET: (opts: Record<string, unknown>) => VantaEffect
    }
  }
}

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null)
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null)

  useEffect(() => {
    const initVanta = () => {
      if (!vantaEffect && vantaRef.current && window.VANTA) {
        const effect = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x0a0a0a,
          color: 0xe05a3a,
          points: 8.0,
          maxDistance: 22.0,
          spacing: 18.0,
        })
        setVantaEffect(effect)
      }
    }

    // If scripts already loaded (e.g. from a previous render) just init
    if (window.VANTA) {
      initVanta()
      return
    }

    const threeScript = document.createElement('script')
    threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'
    threeScript.async = true
    document.body.appendChild(threeScript)

    threeScript.onload = () => {
      const vantaScript = document.createElement('script')
      vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js'
      vantaScript.async = true
      document.body.appendChild(vantaScript)
      vantaScript.onload = initVanta
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div
      ref={vantaRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
