import React from 'react'
import Form from '../components/utils/Form'
import { motion } from "framer-motion";


const ContactUsPage = () => {
  return (
    <div className="w-full bg-gradient-horizontal text-white overflow-hidden ">
        <motion.div 
        initial={{opacity:0, x:400}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1}}
        className='m-auto w-full sm:w-[90%] md:w-[80%] flex flex-col sm:flex-row gap-4 mt-18 md:mt-0 md:h-screen  md:justify-center md:items-center'>
            <div
            
            className=' sm:w-1/2 flex md:pl-20 flex-col items-start gap-8 text-center sm:text-left'>
                <div className='  text-3xl sm:text-lg font-bold md:text-7xl m-auto'>
                    <h1>Pleasure bumpin’ into you!</h1>
                </div>
                <div className='font-bold w-80 m-auto sm:m-0'>
                For general enquiries, please fill out the form to <span className='text-blue-500'>get in touch.</span>
                </div>
            </div>
            <div
            
            className='sm:w-1/2 md:pr-20 text-white flex px-6 md:mt-15 '>
                <Form />
            </div>

        </motion.div>
    </div>
  )
}

export default ContactUsPage