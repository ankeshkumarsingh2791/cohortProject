import React from 'react'
import NavBar from '../components/NavBar'
import AboutCard from '../components/utils/AboutCard'
import HeroBg from '../components/utils/HeroBg'
import Footer from '../components/utils/Footer'
import ServiceProvide from '../components/ServiceProvide'

const Services = () => {
  return (
    <div className='w-full bg-gradient-horizontal  flex flex-col '>
            <NavBar />
           {/* <HeroBg /> */}
           <ServiceProvide />
           <div className="w-full h-full flex gap-6 flex-col px-6 sm:px-10 my-10  ">
          

  
       </div>
           <Footer />
    </div>
  )
}

export default Services