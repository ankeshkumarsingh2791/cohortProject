import React from "react";
import { motion } from "framer-motion";
import ImageCard from "./utils/ImageCard";
import OfferCard from "./utils/OfferCard";

const HomeHero2 = () => {
  return (
    <motion.div
      className="w-full min-h-screen flex flex-col   md:flex-row gap-8 px-6 sm:px-10 py-10 relative"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Left Section */}
      <div className="w-full relative md:w-1/2 flex justify-center items-center border-2 min-h-[300px] md:min-h-auto">
      
       <div className=" absolute top-25 left-20 ">
        <img src="/Ankesh.jpg" className="w-40 h-40 object-cover" />
       </div>
        <div className="w-[75%] border-2 border-dashed h-[200px] md:h-[200px] m-10 shadow-lg">

        </div>
      
      </div>

      {/* Right Section with cards */}
      <div className="w-full md:w-1/2 flex flex-col md:flex-row flex-wrap gap-8 relative md:relative px-2 sm:px-10 py-8">
        
        {/* Card 1 */}
        <motion.div
          className="relative md:absolute md:top-0 lg:left-10"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-[#9B45E4] rounded-2xl p-6 w-64 flex flex-col items-center text-white shadow-lg">
            <img src="/your-icon1.png" alt="Icon" className="w-10 h-10 mb-4" />
            <h3 className="text-2xl font-bold">3+</h3>
            <p className="text-center text-sm">
              Years of Industry <br /> Experience
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="relative md:absolute md:top-[35%] left-20 lg:left-52 xl:left-96 "
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-[#9B45E4] rounded-2xl p-6 w-64 flex flex-col items-center text-white shadow-lg">
            <img src="/your-icon2.png" alt="Icon" className="w-10 h-10 mb-4" />
            <h3 className="text-2xl font-bold">10,000+</h3>
            <p className="text-center text-sm">
              Creators <br /> Collaborated With
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="relative md:absolute md:bottom-0 lg:left-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-[#9B45E4] rounded-2xl p-6 w-64 flex flex-col items-center text-white shadow-lg">
            <img src="/your-icon3.png" alt="Icon" className="w-10 h-10 mb-4" />
            <h3 className="text-2xl font-bold">200+</h3>
            <p className="text-center text-sm">
              Projects <br /> Completed
            </p>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default HomeHero2;
