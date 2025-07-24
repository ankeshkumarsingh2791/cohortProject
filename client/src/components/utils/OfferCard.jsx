import React from "react";
import { motion } from "framer-motion";


const OfferCard = ({ title, leftImage, rightImage, items }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    viewport={{ once: true, amount: 0.3 }}
    className="w-full min-h-80 rounded-2xl bg-[#9746FF] px-7 py-7 md:py-3 flex flex-col-reverse md:flex-row justify-between items-center md:items-start">
      <div className="w-full md:w-1/2">
      <div className="w-17 h-17 mt-4 rounded-full bg-[#0E79F3] flex justify-center items-center">
        <img src={leftImage} className="w-15 h-15 object-cover" />
      </div>
        <h1 className="text-xl font-medium my-2 md:text-3xl text-center">{title}</h1>
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-4">

        {items?.map((item, index) => (
          <div
            key={index}
            className="border-2 border-white text-white px-4 py-2 rounded-3xl"
          >
            <h2>{item.text}</h2>
          </div>
        ))} 
        </div>
      </div>
      <div className="w-full p-3 md:p-0 md:w-1/2 flex justify-center items-center ">
        <img src={rightImage} className=" object-fill  rounded-3xl h-[300px]" />
      </div>
    </motion.div>
  );
};

export default OfferCard;
