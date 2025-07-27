import React from "react";
import {motion} from "framer-motion";
const ServiceProvide = () => {
return(

     <div className=" w-full px-8 overflow-hidden md:p-12  text-white rounded-lg  gap-12 mt-10">
      {/* Left Section */}
      <motion.div initial={{y:400, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1}} viewport={{once:true}} className=" w-full flex flex-col md:flex-row mt-10 justify-between items-center md:items-center py-30 gap-y-8">
        <h2 className="mb-0 md:w-[40%] text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-[#FFFFFF] via-[#fff]  to-[#9746FF] bg-clip-text text-transparent text-center">
          Here&apos;s What
          <br />
          We Bring to
          <br />
          the Table
        </h2>

        <div className=" w-full md:w-[35%] space-y-4">
          <div className="w-full text-4xl text-center bg-gradient-to-r from-[#6011DF] to-[#1B95A3]  text-white font-semibold py-3 px-4 rounded-md inline-block">
            Tech Consultant
          </div>

          <div className="space-y-3 text-xl font-semibold">
            <div className="border-b pb-5 border-white">Full-stack development</div>
            <div className="border-b pb-5 border-white">Android and iOS app</div>
            <div className="border-b pb-5 border-white">SEO optimization</div>
            <div className="border-b pb-5 border-white">Software Development</div>
          </div>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div initial={{y:400, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1}} viewport={{once:true}} className="w-full flex flex-col md:flex-row mt-10 justify-between items-center md:items-center py-30 gap-y-8">
        <div className="w-full md:w-[35%] space-y-4 order-2 md:order-1">
          <div className="w-full text-4xl text-center bg-gradient-to-r from-[#6011DF] to-[#1B95A3]  text-white font-semibold py-3 px-4 rounded-md inline-block">
            Social Media Marketing
          </div>

          <div className="space-y-3 text-xl font-semibold">
            <div className="border-b border-white pb-5">Influencer collaborations</div>
            <div className="border-b border-white pb-5">Brand Awareness</div>
            <div className="border-b border-white pb-5">Targeted campaigns on Facebook</div>
          </div>
        </div>

        <h2 className="mb-0 md:w-[40%] text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-[#FFFFFF] via-[#fff]  to-[#9746FF] bg-clip-text text-transparent text-center order-1 md:order-2">
          Elevate
          
          Your Brand with
          
          High-Quality
          
          Content
        </h2>
      </motion.div>
    </div>
)
}

export default ServiceProvide