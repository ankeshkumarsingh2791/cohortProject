import React from 'react'
import { Quote } from 'lucide-react';

const TestiMonialCardInfo = ({
    name, role, image, description
}) => {
  return (
    <div className=' min-h-90 bg-violet-500 text-white flex flex-col justify-center items-center gap-3'>
        <div className='w-[80%] text-left'><Quote size={40} strokeWidth={2} className='text-yellow-300 font-bold'/></div>
        <div className='italic tracking-tight max-w-[80%]'>{description}</div>
        <div className='flex flex-row justify-center items-center gap-3'>
            {/* image */}
            <div className='rounded-full'>
                <img src={image} alt={image} className='w-25 h-25 rounded-full'/>
            </div>
            {/* role */}
            <div className='flex flex-col w-30'>
                <div className='font-bold text-xl'>{name}</div>
                <div className='text-lg'>{role}</div>
            </div>
        </div>
    </div>
  )
}

export default TestiMonialCardInfo;