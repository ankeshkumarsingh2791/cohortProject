import React from 'react'
import Button from './utils/Button'
import Card from './utils/Card'
import AboutCard from './utils/AboutCard'
import Testimonial from './Testimonial'
import Footer from './utils/Footer'
import NavBar from './NavBar'
import Form from './utils/Form'
import Herotext from './utils/Herotext'


const HomePage = () => {
  return (
    
     
    
    
    <div className=" w-full flex flex-col bg-gradient-vertical text-white ">
        <NavBar />
        {/* <div className='w-full h-screen relative'>
          <p className='text-center mt-[320px] flex justify-center items-center'>I am ankesh kumar singh from bihar</p>
        </div> */}
        {/* <Button /> */}
        <Herotext text={"Teach That fuels influence"} />
       
        <div className="w-full px-6 sm:px-10 mt-10 h-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <Card />
        <Card />
            <Card />
            <Card />
        </div>
        <div className="w-full  h-full flex gap-6 flex-col px-6 sm:px-10 mt-10  ">
          <AboutCard className={`flex flex-col md:flex-row` } />
          <AboutCard className={`flex flex-col md:flex-row-reverse` } />
  
       </div>
       {/* <Form /> */}
        <Testimonial />
       <Footer />
       </div>
   
  
  
  
  )
}

export default HomePage