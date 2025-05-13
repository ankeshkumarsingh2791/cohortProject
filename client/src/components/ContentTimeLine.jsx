import React from 'react'
import { motion } from 'framer-motion'

const ContentTimeLine = () => {
  return (
    <div className="  w-full p-10 ">
    <div className="  max-w-3xl w-full h-[400px]">
     

     
      {/* Image container */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
      className="  rounded-3xl shadow-2xl overflow-hidden z-10 hover:ring-2 hover:ring-[#9B45E4] hover:shadow-lg transition-all duration-300 ease-in-out">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-28%20155530-MtkNXrAmAbPGvZgMDL9WEvxphPuKrV.png"
          alt="Team collaborating around a computer"
          className="object-fill w-full lg:h-[370px] "
        />
      </motion.div>
    </div>
  </div>
  )
}

export default ContentTimeLine



  