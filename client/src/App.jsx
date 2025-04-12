import { useState } from 'react'
import NavBar from './components/NavBar'
import HomeHero from './components/HomeHero'


function App() {
 

  return (
    <>
     
      <div className='w-full h-screen '>
        <NavBar />
        <div className=' mt-10  bg-blue-50  '>
          <HomeHero />
        </div>
      </div>
      
    </>
  )
}

export default App
