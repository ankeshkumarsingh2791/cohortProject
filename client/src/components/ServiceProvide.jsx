import React from "react";

const ServiceProvide = () => {
return(

     <div className=" w-full px-8 overflow-hidden md:p-12  text-white rounded-lg  gap-12 mt-10">
      {/* Left Section */}
      <div className=" w-full flex flex-col md:flex-row mt-10 justify-center md:items-center space-y-8">
        <h2 className=" md:w-1/2 text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-[#FFFFFF] via-[#fff]  to-[#9746FF] bg-clip-text text-transparent">
          Here&apos;s What
          <br />
          We Bring to
          <br />
          the Table
        </h2>

        <div className=" w-full md:w-1/2 space-y-4">
          <div className=" bg-gradient-to-r from-[#6011DF] to-[#1B95A3]  text-white font-semibold py-2 px-4 rounded-md inline-block">
            Tech Consultant
          </div>

          <div className="space-y-3">
            <div className="border-b border-white pb-2">Full-stack development</div>
            <div className="border-b border-white pb-2">Android and iOS app</div>
            <div className="border-b border-white pb-2">SEO optimization</div>
            <div className="border-b border-white pb-2">Software Development</div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className=" w-full flex flex-col-reverse md:flex-row mt-10 justify-center md:items-center space-y-8 ">
        <div className=" md:w-1/2 space-y-4">
          <div className="bg-gradient-to-r from-[#6011DF] to-[#1B95A3]  mt-10 md:mt-0 text-white font-semibold py-2 px-4 rounded-md inline-block">
            Social Media Marketing
          </div>

          <div className="space-y-3">
            <div className="border-b border-white pb-2">Influencer collaborations</div>
            <div className="border-b border-white pb-2">Brand Awareness</div>
            <div className="border-b border-white pb-2">Targeted campaigns on Facebook</div>
          </div>
        </div>

        <h2 className=" md:w-1/2 md:text-center text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-[#FFFFFF] via-[#FFFF] to-[#9746FF] bg-clip-text text-transparent">
          Elevate
          
          Your Brand with
          
          High-Quality
          
          Content
        </h2>
      </div>
    </div>
)
}

export default ServiceProvide