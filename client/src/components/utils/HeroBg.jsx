import React from 'react';

const HeroBg = () => {
  return (
    <div
      className=" h-[100vh] bg-cover object-fill bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/Service.jpg')` }}
    >
      {/* Optional: Add content inside this background */}
      <div className="flex items-center justify-center h-full  bg-opacity-50 text-white">
        <h1 className="text-5xl font-bold">Aligning Expertise And innovation To Drive Results</h1>
      </div>
    </div>
  );
};

export default HeroBg;
