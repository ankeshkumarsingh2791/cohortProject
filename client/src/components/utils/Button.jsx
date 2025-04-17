import React from 'react'
import video2 from '../../assets/video2.mp4'
const Button = () => {
  return (
    <div className='w-full h-full'>
        <video src={video2}   autoPlay loop muted/>
    </div>
  )
}

export default Button