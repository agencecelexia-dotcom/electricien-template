'use client'

import { motion } from 'framer-motion'

export function HeroCircuit({ className }: { className?: string }) {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, delay: i * 0.3, ease: 'easeInOut' as const },
        opacity: { duration: 0.5, delay: i * 0.3 },
      },
    }),
  }

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, delay: i * 0.3 + 1.5 },
    }),
  }

  const pulseVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: [0.3, 1, 0.3],
      transition: {
        duration: 2,
        delay: i * 0.5 + 2,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    }),
  }

  return (
    <div className={className}>
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        {/* Circuit paths */}
        <motion.path
          d="M50 250 H150 V100 H300 V200 H400"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeLinecap="round"
          variants={pathVariants}
          custom={0}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M100 400 H200 V300 H350 V350 H450"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeLinecap="round"
          variants={pathVariants}
          custom={1}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M250 50 V150 H400 V300"
          stroke="#60A5FA"
          strokeWidth="1.5"
          strokeLinecap="round"
          variants={pathVariants}
          custom={2}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M150 200 H250 V350 H150 V450"
          stroke="#60A5FA"
          strokeWidth="1.5"
          strokeLinecap="round"
          variants={pathVariants}
          custom={3}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M350 100 H450 V250"
          stroke="#F59E0B"
          strokeWidth="1.5"
          strokeLinecap="round"
          variants={pathVariants}
          custom={4}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M300 400 V450 H450"
          stroke="#F59E0B"
          strokeWidth="1.5"
          strokeLinecap="round"
          variants={pathVariants}
          custom={2}
          initial="hidden"
          animate="visible"
        />

        {/* Junction nodes */}
        {[
          { cx: 150, cy: 250 }, { cx: 150, cy: 100 }, { cx: 300, cy: 100 },
          { cx: 300, cy: 200 }, { cx: 400, cy: 200 }, { cx: 200, cy: 400 },
          { cx: 200, cy: 300 }, { cx: 350, cy: 300 }, { cx: 350, cy: 350 },
          { cx: 250, cy: 50 }, { cx: 250, cy: 150 }, { cx: 400, cy: 150 },
          { cx: 400, cy: 300 }, { cx: 250, cy: 350 }, { cx: 150, cy: 350 },
          { cx: 450, cy: 250 }, { cx: 350, cy: 100 },
        ].map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r="4"
            fill="#3B82F6"
            variants={dotVariants}
            custom={i * 0.15}
            initial="hidden"
            animate="visible"
          />
        ))}

        {/* Pulsing glow nodes */}
        {[
          { cx: 400, cy: 200, color: '#3B82F6' },
          { cx: 350, cy: 350, color: '#F59E0B' },
          { cx: 250, cy: 150, color: '#60A5FA' },
          { cx: 450, cy: 250, color: '#F59E0B' },
        ].map((node, i) => (
          <motion.circle
            key={`pulse-${i}`}
            cx={node.cx}
            cy={node.cy}
            r="8"
            fill={node.color}
            variants={pulseVariants}
            custom={i}
            initial="hidden"
            animate="visible"
            style={{ filter: 'blur(4px)' }}
          />
        ))}
      </svg>
    </div>
  )
}
