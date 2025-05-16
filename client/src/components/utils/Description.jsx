import React from 'react'
import { motion, useInView } from 'framer-motion'
import ContentTimeLine from '../ContentTimeLine';
const Description = ({text}) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false });
  return (
    <div className='w-full h-screen md:flex  justify-between items-center  md:flex-row '>
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
        className='md:w-1/2 flex-col m-10 rounded-2xl  flex justify-between  gap-4'>
            <p 
          
            className=' text-center md:text-left text-3xl md:text-7xl   font-bold text-white '>
                What <br /> Define Us
            </p>
            <p 
                ref={ref}
            className='text-2xl text-center md:text-left  font-medium text-white'>
                {/* {text.split("").map((letter, index) => (
                    <motion.span
                        key={index}
                        initial={{opacity: 0,}}
                        animate={isInView ? {opacity: 1,} : {}}
                        transition={{duration: 0.2, delay: index * 0.1}}
                        >
                            {letter}
                    </motion.span>
                ))} */}
                {text}
                
            </p>
        </motion.div>

        <div className='md:w-1/2 '>
            <ContentTimeLine />
        </div>

    </div>
  )
}

export default Description