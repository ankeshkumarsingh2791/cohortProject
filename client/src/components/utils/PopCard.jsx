import React from 'react'
import Form from './Form'

const PopCard = ({onClose}) => {
  return (
    <div className='w-full border border-blue-600 rounded-2xl bg-gradient-vertical lg:flex lg:px-10 justify-center items-center'>
        
        <div className=' hidden sm:block lg:w-1/2'>
        <h1 className=" text-xl md:text-7xl text-center px-10 py-4 font-bold bg-gradient-to-r from-[#fff] via-[#d9eeddd0] to-[#5f8ff5] bg-clip-text text-transparent">
        Powering the next wave of the 
      </h1>
        </div>
        <div className='lg:w-1/2 px-2 lg:my-8'>
        <button className='text-white ' onClick={onClose}>close</button>

            <Form onSuccess={onClose} />
        </div>
    </div>
  )
}

export default PopCard