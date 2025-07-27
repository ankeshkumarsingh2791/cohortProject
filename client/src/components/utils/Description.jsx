'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import ContentTimeLine from '../ContentTimeLine';

const heroTextVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};

const Description = ({ text }) => {
  const ref = useRef(null);

  return (
    <div className="w-full h-screen flex flex-col md:flex-row items-center px-6 md:px-12">
      {/* Animated Text Section */}
      <motion.div
        variants={heroTextVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full md:w-1/2 flex flex-col gap-6 rounded-2xl"
      >
        <p className="text-center md:text-left text-3xl md:text-7xl text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-white to-[#9746FF]">
          What <br /> Define Us
        </p>

        <p
          ref={ref}
          className="text-lg md:text-2xl text-center md:text-left font-medium text-white max-w-xl"
        >
          {text}
        </p>
      </motion.div>

      {/* Timeline Section */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <ContentTimeLine />
      </div>
    </div>
  );
};

export default Description;
