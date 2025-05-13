import React from 'react'
import NavBar from '../components/NavBar'
import Form from '../components/utils/Form'
import Footer from '../components/utils/Footer'

const ContactUsPage = () => {
  return (
    <div className="w-full bg-gradient-horizontal ">
        <NavBar />
        <div className=' w-full flex flex-col sm:flex-row gap-4 mt-18 md:mt-0 md:h-screen    md:justify-center md:items-center'>
            <div className=' sm:w-1/2 flex md:pl-10 items-center'>
                <div className='  text-3xl sm:text-lg font-semibold md:text-6xl  flex flex-col xl:gap-8'>
                    <h1>Drop us a line</h1> <h2>and let's make</h2>  history.</div>
            </div>
            <div className='sm::w-1/2 flex px-6 items-center justify-center'>
                <Form />
            </div>

        </div>
        <Footer />
    </div>
  )
}

export default ContactUsPage