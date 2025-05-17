import React from 'react'
import TestimonialCard from './utils/TestimonialCard'

const Testimonial = () => {
  const founders = [
    {
      name: 'Dummy Data',
      role: 'CEO & Co-founder',
      image: " /home.svg",
      description:
        'Shiksha Setu is a comprehensive student management system designed to support and enhance the operations of educational institutions. It provides a centralized platform for managing various academic and administrative functions, facilitating effective communication, and streamlining processes for students, parents, teachers, and administrators.',
    },
    {
      name: 'Dummy Data',
      role: 'CTO & Co-founder',
      image: "/home1.png",
      description:
        'Shiksha Setu is a comprehensive student management system designed to support and enhance the operations of educational institutions. It provides a centralized platform for managing various academic and administrative functions, facilitating effective communication, and streamlining processes for students, parents, teachers, and administrators.',
    },
    {
      name: 'Dummy Data',
      role: 'Chief Business Officer',
      image: "/home.svg",
      description:
        'Shiksha Setu is a comprehensive student management system designed to support and enhance the operations of educational institutions. It provides a centralized platform for managing various academic and administrative functions, facilitating effective communication, and streamlining processes for students, parents, teachers, and administrators.',
    },
    {
      name: 'Dummy Data',
      role: 'Chief Innovation Officer',
      image: "/home1.png",
      description:
        'Shiksha Setu is a comprehensive student management system designed to support and enhance the operations of educational institutions. It provides a centralized platform for managing various academic and administrative functions, facilitating effective communication, and streamlining processes for students, parents, teachers, and administrators.',
    },
  ];
  return (
    <section className='pb-12'>
    <div className='container mx-auto px-4'>
      <p className='leading-tight bg-gradient-to-r from-[#FFFFFF] via-slate-300  to-[#9746FF] bg-clip-text text-transparent text-6xl text-center font-semibold '>Testimonial</p>
    
    <div className='flex items-center text-xl sm:text-3xl font-semibold justify-center gap-2 my-4'>
      <p>Here From</p>
      <div className=" bg-gradient-to-r from-[#6011DF] to-[#1B95A3]  text-white font-semibold py-2 px-4 rounded-md inline-block">
            Business
          </div>
          <p> That Trust Us</p>
    </div>

      {/* Scrolling Container */}
      <div className="relative overflow-hidden w-full group">
        <div className="flex animate-scroll my-4">
          {founders.concat(founders).map((founder, index) => (
            <div key={index} className={`flex-shrink-0 w-80 transition-all duration-300 ${index % 2 === 0 ? 'mt-0' : 'mt-15'}`}>
              <TestimonialCard
                name={founder.name}
                index={founder.name+ " " +index}
                role={founder.role}
                image={founder.image}
                description={founder.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonial