import React from 'react'
import {motion} from "framer-motion"
import StatsSection from '../components/StatsSection';
const AboutUs = () => {
  return (
    <div className='bg-gradient-horizontal pt-25 flex flex-col justify-center items-center'>
      {/* heading */}
      <motion.div initial={{y:-100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.8}} viewport={{once:true}} className='flex flex-col gap-3 items-center justify-center'> 
        <div><h1 className='text-3xl md:text-5xl text-white font-bold bg-gradient-to-r from-violet-500 to-sky-400 p-1 text-center'>ABOUT US</h1></div>
        <div><h4 className='text-xl sm:text-2xl md:text-4xl text-white font-semibold w-[20rem] sm:w-[30rem] md:w-[40rem] tracking-wider text-center'>At ZENIFO, We work differently.</h4></div>
      </motion.div>
      {/* upper */}
        <div className='flex flex-row justify-center md:justify-between items-center w-full md:w-[90%] md:py-11 py-8 flex-wrap-reverse'>
            <motion.div initial={{x:-200, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:0.8}} viewport={{once:true}} className='w-[80%] md:w-[45%] text-center md:text-left pt-4'>
                <h1 className='text-4xl md:text-6xl text-transparent bg-clip-text font-extrabold bg-gradient-to-r to-violet-300 from-sky-100'>What We Do</h1>
                <p className='text-lg -tracking-tighter font-semibold text-white'>we are passionate technologists, creative thinkers, and problem solvers driven by one goal: to build intelligent software that empowers businesses and enhances lives.</p>
            </motion.div>
            <motion.div initial={{x:200, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:0.8}} viewport={{once:true}} className='w-full md:w-1/2 md:h-1/3 rounded-4xl'><img src="/AboutUsLogo1.jpg" alt="about us" className='rounded-4xl'/></motion.div>
        </div>
      {/* middle */}
      <StatsSection/>

      {/* end */}
      <div className='flex flex-row justify-center md:justify-between items-center w-full md:w-[90%] md:py-11 py-8 flex-wrap'>
            <motion.div initial={{x:200, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:0.8}} viewport={{once:true}} className='w-full md:w-[50%] md:h-[40%] rounded-4xl'><img src="/AboutUsLogo2.jpg" alt="about us" className='rounded-4xl'/></motion.div>
            <motion.div initial={{x:-200, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:0.8}} viewport={{once:true}} className='w-[80%] md:w-[40%] text-center md:text-left pt-4'>
                <h1 className='text-4xl md:text-6xl text-transparent bg-clip-text font-extrabold bg-gradient-to-r to-violet-300 from-sky-100'>We specialize in</h1>
                <ul className="text-lg -tracking-tighter font-semibold text-white list-disc space-y-1 pt-4">
                  <li>Custom Software Development</li>
                  <li>Mobile App Development (iOS & Android)</li>
                  <li>Web Application Development</li>
                  <li>SaaS & Cloud Solutions</li>
                  <li>UI/UX Design</li>
                  <li>AI/ML Integration</li>
                  <li>E-commerce Platforms</li>
                  <li>Software Maintenance & Support</li>
                </ul>
            </motion.div>
        </div>
    </div>
  )
}

export default AboutUs;