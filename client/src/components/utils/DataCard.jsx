import React from 'react'

const DataCard = ({img, counter, text}) => {
  return (
    <div className='w-full bg-[#9746FF] text-white font-medium rounded-3xl flex flex-col justify-center items-center gap-2 '>
        <img src={img} alt='title' className='w-10 h-10' />
        <p>{counter}</p>
        <p>{text}</p>
    </div>
  )
}

export default DataCard