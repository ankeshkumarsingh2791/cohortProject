import React from 'react'
import {motion} from "framer-motion";
import InfoCard from './utils/InfoCard';

const cardData = [
    {
      text_number: '01',
      title: 'Creative Design',
      desc: 'Designs that speak for your brand and make lasting impressions.',
      link: '/design',
    },
    {
      text_number: '02',
      title: 'Web Development',
      desc: 'Building fast, scalable, and modern web apps tailored to your needs.',
      link: '/development',
    },
    {
      text_number: '03',
      title: 'SEO Optimization',
      desc: 'Helping your website rank higher and get discovered faster.',
      link: '/seo',
    },
    {
      text_number: '04',
      title: 'Digital Marketing',
      desc: 'Boost your business through data-driven digital strategies.',
      link: '/marketing',
    },
  ]

  
const InfoSection = () => {
    return (
        <div className="py-16 px-6 sm:px-10 lg:px-20 max-w-[1400px] mx-auto">
        <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} viewport={{once:true}} className="text-6xl font-bold text-center bg-gradient-to-r from-white to-[#c29ff0] bg-clip-text text-transparent mb-14">
        What We Do
        </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {cardData.map((card, idx) => (
              <InfoCard
                key={idx}
                text_number={card.text_number}
                title={card.title}
                desc={card.desc}
                link={card.link}
              />
            ))}
          </div>
        </div>
      );
}

export default InfoSection;