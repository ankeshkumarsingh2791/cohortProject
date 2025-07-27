import React from "react";
import { motion } from "framer-motion";


const HomeHero2 = () => {
  return (
    <motion.div
      className="w-full min-h-[600px] flex flex-col   md:flex-row gap-8 px-6 sm:px-10 py-10 relative"
      initial={{ opacity: 0, y: -200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Left Section */}
      <div className="w-full relative md:w-1/2 flex md:justify-center md:items-center  min-h-[300px] md:min-h-auto">
      
       <motion.div 
       
       className=" absolute -top-16 lg:top-10 -left-2 md:left-12  ">
        <img src="/img2.jpg" className="w-60 h-44 rounded-2xl border-t-8 border-[#9746FF] object-fill" />
       </motion.div>

       <div className=" absolute top-[60%] md:bottom-28 right-0 md:right-12 ">
        <img src="/img1.jpg" className="w-60 h-44   rounded-2xl border-t-8 border-[#9746FF] object-fill" />
       </div>
        <div className=" w-full  md:w-[75%] border-4 rounded-2xl  border-dashed  h-[280px] mx-4 md:mx-0 md:m-10 shadow-lg">

        </div>
      
      </div>

      {/* Right Section with cards */}
      <div className="w-full mt-9 md:mt-0 md:w-1/2 flex flex-col items-center justify-center md:flex-row flex-wrap gap-6 md:gap-3 relative md:relative px-2 sm:px-10 py-4">
        
        {/* Card 1 */}
        <motion.div
          className="md:absolute md:top-0 lg:left-10"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-[#9B45E4] rounded-2xl p-3 w-64 flex flex-col items-center text-white shadow-lg">
            <img src="/Software.svg" alt="Icon" className="w-10 h-10 mb-4" />
            <h3 className="text-2xl font-bold">3+</h3>
            <p className="text-center text-sm">
              Years of Industry <br /> Experience
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="md:absolute md:top-[35%] left-20 lg:left-52 xl:left-96 "
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-[#9B45E4] rounded-2xl p-3 w-64 flex flex-col items-center text-white shadow-lg">
            <img src="/deliverable 1.svg" alt="Icon" className="w-10 h-10 mb-4" />
            <h3 className="text-2xl font-bold">10,000+</h3>
            <p className="text-center text-sm">
              Creators <br /> Collaborated With
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="md:absolute md:bottom-0 lg:left-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-[#9B45E4] rounded-2xl p-3 w-64 flex flex-col items-center text-white shadow-lg">
            <img src="/closure 1.svg" alt="Icon" className="w-10 h-10 mb-4" />
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
