import React from 'react'

const BrandLogo = () => {
  return (
    <div className="flex flex-col items-center justify-center max-h-20">
    {/* <div className="relative h-7 w-7 self-center">
        <div className="absolute top-0 left-0 -rotate-45 bg-gradient-to-r from-violet-500 to-sky-400 w-5 h-7 z-[1000] rounded"></div>
        <div className="absolute top-0 left-0 -rotate-45 bg-blue-950 translate-x-3 w-5 h-7 z-[500] rounded"></div>
    </div> */}
    <div className="flex flex-col items-center text-center">
        <span className="bg-gradient-to-r from-violet-500 to-sky-400 text-white text-lg font-bold px-3 py-1 rounded-3xl">
        Zenifo
        </span>
        {/* <span className="mt-1 text-xs text-violet-400">You Think, We Develop</span> */}
    </div>
    </div>
  )
}

export default BrandLogo;