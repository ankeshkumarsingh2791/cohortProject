import React from "react";
import { motion } from "framer-motion";


const OfferCard = ({ title, leftImage, rightImage, items }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    viewport={{ once: false, amount: 0.3 }}
    className="w-full mt-10 rounded-2xl bg-[#9746FF] pb-8 flex flex-col-reverse sm:flex-row justify-between sm:items-center">
      <div className="sm:w-1/2 px-6">
      <div className="w-32 h-32 mt-10 rounded-full bg-[#0E79F3] flex justify-center items-center ">

        <img src={leftImage} className="w-20 h-20 object-cover" />
      </div>
        <h1 className="text-xl font-medium my-2 md:text-2xl">{title}</h1>
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-4">

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
      <div className="sm:1/2 ">
        <img src={rightImage} className=" object-cover m-10 rounded-3xl h-[200px]" />
      </div>
    </motion.div>
  );
};

export default OfferCard;
