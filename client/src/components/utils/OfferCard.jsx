import React from "react";


const OfferCard = ({ title, leftImage, rightImage, items }) => {
  return (
    <div className="w-full m-10 rounded-2xl bg-[#9746FF] flex justify-between items-center">
      <div className="w-1/2 px-6">
        <img src={leftImage} className="w-20 h-20" />
        <h1>{title}</h1>
        <div className="grid grid-cols-2 gap-4">

        {items?.map((item, index) => (
          <div
            key={index}
            className="border-2 border-white text-white px-4 py-2 rounded-md"
          >
            <h2>{item.text}</h2>
          </div>
        ))} 
        </div>
      </div>
      <div className="1/2 ">
        <img src={rightImage} className=" object-cover m-10 px-10 rounded-3xl  w-140 h-140" />
      </div>
    </div>
  );
};

export default OfferCard;
