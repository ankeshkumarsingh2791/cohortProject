import React from 'react'
import Input from './Input'
import TextArea from './TextArea'
import { useState } from 'react'

const Form = () => {
    const [loading, setLoading] = useState(false);
  return (
    <div className='w-full h-full flex flex-col bg-gray-200 gap-8 mb-4 rounded-3xl shadow-2xl p-4 md:pr-6'>
            <h1 className= '  font-semibold text-3xl'>Are You Interested In : </h1>
            <div>

            </div>
            <div className='w-full  grid grid-cols-1 xl:grid-cols-2 gap-10 justify-between '>
                <Input type={"text"} title={"First Name"} required={true} />
                <Input type={"text"}  title={"Last Name"} required={true} />
                <Input type={"email"}  title={"Email Address"} required={true} />
                <Input type={"phone"} title={"Mobile Number"} required={true} />



            </div>
            <div className=''>

                <TextArea type={"text"}  title={"Enter Your Message"} /> 
            </div>
            <div className="w-full flex items-center justify-center col-span-2">
          <button type="submit"  className="bg-blue-400 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-all" >Submit</button>
        </div>
    </div>
  )
}

export default Form