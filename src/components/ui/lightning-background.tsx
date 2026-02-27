'use client'

import { useEffect, useRef } from 'react'

interface Bolt {
  segments: { x: number; y: number }[]
  opacity: number
  width: number
  fadeSpeed: number
}

export function LightningBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    const bolts: Bolt[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function createBolt(): Bolt {
      const startX = Math.random() * canvas!.width
      const segments: { x: number; y: number }[] = [{ x: startX, y: 0 }]
      let x = startX
      let y = 0
      const segCount = 8 + Math.floor(Math.random() * 12)
      const stepY = canvas!.height / segCount

      for (let i = 0; i < segCount; i++) {
        x += (Math.random() - 0.5) * 120
        y += stepY * (0.7 + Math.random() * 0.6)
        // Clamp x within canvas
        x = Math.max(20, Math.min(canvas!.width - 20, x))
        segments.push({ x, y })
      }

      return {
        segments,
        opacity: 0.12 + Math.random() * 0.08,
        width: 1 + Math.random() * 1.5,
        fadeSpeed: 0.003 + Math.random() * 0.004,
      }
    }

    // Spawn bolts at random intervals
    let lastSpawn = 0
    let nextDelay = 1500 + Math.random() * 2500

    function animate(time: number) {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)

      // Spawn new bolt
      if (time - lastSpawn > nextDelay) {
        bolts.push(createBolt())
        // Occasionally spawn a second bolt nearby
        if (Math.random() < 0.3) {
          bolts.push(createBolt())
        }
        lastSpawn = time
        nextDelay = 1500 + Math.random() * 2500
      }

      // Draw & fade bolts
      for (let i = bolts.length - 1; i >= 0; i--) {
        const bolt = bolts[i]
        bolt.opacity -= bolt.fadeSpeed

        if (bolt.opacity <= 0) {
          bolts.splice(i, 1)
          continue
        }

        // Main bolt
        ctx!.beginPath()
        ctx!.moveTo(bolt.segments[0].x, bolt.segments[0].y)
        for (let j = 1; j < bolt.segments.length; j++) {
          ctx!.lineTo(bolt.segments[j].x, bolt.segments[j].y)
        }
        ctx!.strokeStyle = `rgba(59, 130, 246, ${bolt.opacity})`
        ctx!.lineWidth = bolt.width
        ctx!.lineCap = 'round'
        ctx!.lineJoin = 'round'
        ctx!.stroke()

        // Glow layer
        ctx!.beginPath()
        ctx!.moveTo(bolt.segments[0].x, bolt.segments[0].y)
        for (let j = 1; j < bolt.segments.length; j++) {
          ctx!.lineTo(bolt.segments[j].x, bolt.segments[j].y)
        }
        ctx!.strokeStyle = `rgba(59, 130, 246, ${bolt.opacity * 0.4})`
        ctx!.lineWidth = bolt.width + 6
        ctx!.stroke()
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  )
}
