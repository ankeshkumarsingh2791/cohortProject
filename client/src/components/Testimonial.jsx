import React from 'react'
import TestimonialCard from './utils/TestimonialCard'

const Testimonial = () => {
  const founders= [
    {
      name: "Name 1",
      role: "Principal, Greenfield International School",
      image: "/home.svg",
      description:
        "Shiksha Setu has transformed how we manage our school operations. From attendance tracking to parent-teacher communication, everything is now seamless and efficient. It's truly a game changer for educators."
    },
    {
      name: "Name 2",
      role: "Parent of Grade 10 Student",
      image: "/home1.png",
      description:
        "As a parent, having real-time access to my child’s progress, attendance, and homework is incredibly reassuring. Shiksha Setu bridges the gap between school and home beautifully."
    },
    {
      name: "Name 3",
      role: "Professor, Sunrise University",
      image: "/home.svg",
      description:
        "The platform’s intuitive interface and robust features have made managing large student batches and grading much easier. The support team is also quick and responsive."
    },
    {
      name: "Name 4",
      role: "Vice Principal, The Learning Tree Academy",
      image: "/home1.png",
      description:
        "We’ve seen a noticeable improvement in communication and workflow since adopting Shiksha Setu. The analytics dashboard, in particular, helps us make data-driven decisions daily."
    }
  ];
  
  return (
    <section className='pb-12'>
    <div className='container mx-auto px-4'>
      <p className='leading-tight bg-gradient-to-r from-[#FFFFFF] via-slate-300  to-[#9746FF] bg-clip-text text-transparent text-6xl text-center font-semibold '>Testimonial</p>
    
    <div className='flex items-center text-xl sm:text-3xl font-semibold justify-center gap-2 my-4'>
      <p className='text-center'>Here From
      <span className=" bg-gradient-to-r from-[#6011DF] to-[#1B95A3]  text-white font-semibold py-2 px-4 rounded-md inline-block">
            Business
          </span>
      That Trust Us</p>
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