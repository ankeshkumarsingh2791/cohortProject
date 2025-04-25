import React from 'react'
import NavBar from '../components/NavBar'
import AboutCard from '../components/utils/AboutCard'
import HeroBg from '../components/utils/HeroBg'
import Footer from '../components/utils/Footer'

const Services = () => {
  return (
    <div className='w-full bg-black/10  flex flex-col '>
            <NavBar />
           <HeroBg />
           <div className="w-full h-full flex gap-6 flex-col px-6 sm:px-10 my-10  ">
          <AboutCard className={`flex flex-col md:flex-row` } />
          <AboutCard className={`flex flex-col md:flex-row-reverse` } />
  
       </div>
           <Footer />
    </div>
  )
}

export default Services