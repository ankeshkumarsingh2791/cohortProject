import React from 'react'
import NavBar from '../components/NavBar'
import Form from '../components/utils/Form'
import Footer from '../components/utils/Footer'
import { motion } from "framer-motion";


const ContactUsPage = () => {
  return (
    <div className="w-full bg-gradient-horizontal text-white overflow-hidden ">
        <NavBar />
        <div className=' w-full flex flex-col sm:flex-row gap-4 mt-18 md:mt-0 md:h-screen    md:justify-center md:items-center'>
            <motion.div
             initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className=' sm:w-1/2 flex md:pl-10 items-center'>
                <div className='  text-3xl sm:text-lg font-semibold md:text-6xl  flex flex-col xl:gap-8'>
                    <h1>Drop us a line</h1> <h2>and let's make</h2>  history.</div>
                    
            </motion.div>
            <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className='sm:w-1/2 text-black flex px-6 items-center justify-center'>
                <Form />
            </motion.div>

        </div>
        <Footer />
    </div>
  )
}

export default ContactUsPage