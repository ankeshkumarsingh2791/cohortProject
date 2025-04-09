import { useState } from 'react'
import NavBar from './components/NavBar'


function App() {
 

  return (
    <>
     
      <div className='w-full h-screen flex items-center justify-center'>
        <NavBar />
        <h1 className='text-4xl font-bold'>Welcome to ChaiCode</h1>
      </div>
      
    </>
  )
}

export default App
