'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ContentTimeLine = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 py-10 mt-12 md:mt-0">
      <div className="max-w-6xl mx-auto min-h-[400px] relative">
        {/* Animated Card */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative w-[240px] sm:w-[280px] md:w-[280px] lg:w-[300px] xl:w-[350px] h-[260px] sm:h-[260px] md:h-[300px] lg:h-[350px] rounded-3xl shadow-2xl z-10 hover:shadow-lg transition-all duration-300 ease-in-out outline-2 outline-dashed outline-amber-50 bg-white/10 backdrop-blur mx-auto"
        >
          {/* Floating Text */}
          <p className="absolute -top-15 sm:-top-28 sm:-left-0 -translate-x-1/2 w-[50%] sm:w-[80%] text-xs sm:text-sm md:text-base lg:text-2xl text-center p-4 sm:p-5 rounded-2xl z-20 font-semibold lg:font-bold bg-[#9746FF] text-white shadow-md">
            We are the mapmakers of the content realm, navigating the digital landscape since its wild west days.
          </p>

          {/* Accent Circles */}
          <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-white absolute -right-4 -top-4"></div>
          <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-white absolute -bottom-4 -left-4"></div>

          {/* Image */}
          <div className="absolute top-1/4 left-3/4 -translate-x-1/2 w-[200px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] h-[150px] sm:h-[150px] md:h-[180px] lg:h-[220px] xl:h-[340px] z-1">
            <img
              src="/photo1.jpg"
              alt="Team collaborating around a computer"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentTimeLine;
