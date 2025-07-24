import React from 'react'
import {motion} from "framer-motion"
const AboutUs = () => {
  return (
    <div className='bg-gradient-horizontal pt-25 flex flex-col justify-center items-center'>
      <motion.div initial={{y:-200, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.8}} viewport={{once:true}} className='flex flex-col gap-3 items-center justify-center'> 
        <div><h1 className='text-3xl sm:text-4xl md:text-5xl text-white font-semibold bg-gradient-to-r from-violet-500 to-sky-400 w-60 rounded-xl p-1 text-center'>ABOUT US</h1></div>
        <div><h4 className='text-xl sm:text-2xl md:text-4xl text-white font-semibold w-[20rem] sm:w-[30rem] md:w-[40rem] tracking-wider text-center'>At ZENIFO, We work differently.</h4></div>
      </motion.div>
        <div className='flex flex-row justify-center md:justify-between items-center w-[90%] p-3 flex-wrap-reverse'>
            <motion.div initial={{x:-200, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:0.8}} viewport={{once:true}} className='w-1/2 text-center md:text-left'>
                <h1 className='text-6xl text-transparent bg-clip-text font-extrabold bg-gradient-to-r to-violet-300 from-sky-100'>What We Do</h1>
                <p className='text-lg -tracking-tighter font-semibold text-white'>we are passionate technologists, creative thinkers, and problem solvers driven by one goal: to build intelligent software that empowers businesses and enhances lives.</p>
            </motion.div>
            <motion.div initial={{x:200, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:0.8}} viewport={{once:true}}><img src="/AboutUsLogo.png" alt="about us" /></motion.div>
        </div>
    </div>
  )
}

export default AboutUs;