import React from 'react'
import { motion } from 'framer-motion'

const infoCardVariant = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
  hidden: {
    y: 200,
    opacity: 0,
  },
}

const InfoCard = ({ text_number = '01', title = "Card Title", desc, link = "#" }) => {
  return (
    <motion.div
      variants={infoCardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="w-68 rounded-2xl overflow-hidden relative shadow-lg"
    >
      <div
        className="absolute inset-0 bg-violet-500 z-0"
        style={{
          WebkitMaskImage:
            'radial-gradient(circle at 85% 10%, transparent 140px, black 141px)',
          maskImage:
            'radial-gradient(circle at 85% 10%, transparent 140px, black 141px)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        }}
      />
      <span className="absolute right-8 top-8 text-7xl font-bold text-gray-400 z-10">
        {text_number}
      </span>

      {/* Content area */}
      <div className="relative z-10 p-6 flex flex-col gap-4 pt-45 bg-transparent">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        <p className="text-gray-300 text-lg opacity-90">
          {desc ??
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, ratione. Eos inventore modi ullam, animi facere veniam?'}
        </p>
        <a
          href={link}
          className="mt-4 inline-block text-lg font-bold text-white bg-violet-600 hover:bg-violet-700 px-10 py-3 rounded-2xl w-fit transition m-auto"
        >
          Know More
        </a>
      </div>
    </motion.div>
  )
}

export default InfoCard
