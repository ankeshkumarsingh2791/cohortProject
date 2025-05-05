import React from 'react'
import { motion, useInView } from 'framer-motion'
import ContentTimeLine from '../ContentTimeLine';
const Description = ({text}) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    <div className='w-full sm:flex justify-center items-center'>
        <div className='md:w-1/2 flex-col m-10 rounded-2xl  flex justify-between gap-4'>
            <motion.p 
            animate={{x:[50, 150, 0], opacity: 1, scale: 1}}
            transition={{
                duration: 5,
                delay: 0.1,
                ease: [0.5, 0.71, 1, 1.5]
            }}
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{ scale: 1}}
            className=' text-xl md:text-7xl text-center  font-bold text-white '>
                What <br /> Define Us
            </motion.p>
            <p 
                ref={ref}
            className='text-2xl text-center font-medium text-white'>
                {text.split("").map((letter, index) => (
                    <motion.span
                        key={index}
                        initial={{opacity: 0,}}
                        animate={isInView ? {opacity: 1,} : {}}
                        transition={{duration: 0.2, delay: index * 0.1}}
                        >
                            {letter}
                    </motion.span>
                ))}
            </p>
        </div>

        <div className='md:w-1/2 '>
            <ContentTimeLine />
        </div>

    </div>
  )
}

export default Description