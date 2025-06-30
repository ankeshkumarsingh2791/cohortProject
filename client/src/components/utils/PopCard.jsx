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
        <div className='flex justify-end'>
        <button className='text-red-500  m-4 md:m-0' onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
          </div>

            <Form onSuccess={onClose} />
        </div>
    </div>
  )
}

export default PopCard