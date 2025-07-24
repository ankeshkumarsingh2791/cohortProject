'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'



const CountUpCard = ({ label, target, duration = 2 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return

    const start = 0
    const end = target
    const increment = Math.ceil(end / (duration * 60)) // 60fps
    let current = start

    const interval = setInterval(() => {
      current += increment
      if (current >= end) {
        current = end
        clearInterval(interval)
      }
      setCount(current)
    }, 1000 / 60)

    return () => clearInterval(interval)
  }, [inView, target, duration])

  return (
    <motion.div
      ref={ref}
      className="p-2 md:p-4 bg-[#9746FF] rounded-xl text-center md:py-15"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{once:true, amount:0.3}}
    >
      <h2 className="text-5xl font-bold">{count.toLocaleString()}+</h2>
      <p className="text-gray-300 text-2xl">{label}</p>
    </motion.div>
  )
}

export default CountUpCard
