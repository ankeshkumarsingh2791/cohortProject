import React from 'react'
import ServiceProvide from '../components/ServiceProvide'
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <>
     <Helmet>
        <title>Zenifo Services | Software Development & SEO Solutions</title>
        <meta
          name="description"
          content="Explore Zenifo’s expert services in software development, SEO optimization, and digital consulting to power your business growth."
        />
      </Helmet>
    <div className='w-full bg-gradient-horizontal  flex flex-col '>
           <ServiceProvide />
           <div className="w-full h-full flex gap-6 flex-col px-6 sm:px-10 my-10  ">
       </div>
    </div>
    </>
  )
}

export default Services