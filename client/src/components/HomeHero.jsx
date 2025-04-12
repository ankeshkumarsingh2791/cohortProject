import React from 'react'
import Button from './utils/Button'

const HomeHero = () => {
  return (
    <div className='w-full h-full px-10  '>
        <div className='w-full  flex justify-center items-center  bg-blue-50'>
            <div className='w-1/2 flex flex-col gap-4 '>
                <h1 className='text-4xl font-medium '>Consistency and Community Learning for coding courses.</h1>
                <p className='text-lg'>Content is every where , we provide a learning experience that is unmatched. Bounties, peer learning, peer code reviews, virtual hostel, Alumni network, Doubt sessions, Group projects and so many other activities to keep you on track.</p>
            </div>
           
            <div className='w-1/2 flex flex-col items-center justify-center'>
                <img src='home1.png' className=' mt-10  h-[500px]'/>
            </div>
        </div>
        <div className='flex  justify-center'>
            <Button className='bg-blue-400  hover:bg-blue-600 text-white  py-2 px-3 rounded-md border border-blue-200' text={"Check all live Cohorts"}  />
        </div>
        <div className='flex justify-center mt-10'>
        <iframe className=' w-100 h-60 rounded-md'  src="https://www.youtube.com/embed/Hr5iLG7sUa0?si=8S9fL5YejU3-QWTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

    </div>
  )
}

export default HomeHero