import React, { useState, useEffect, useRef } from "react";
import PopupContainer from "./PopupContainer";
import PopCard from "./PopCard";
import { motion, useInView } from "framer-motion";

const Herotext = ({ text = "Typing Effect", className }) => {
  const [show, setShow] = useState(false);
  const handlePop = () => {
    setShow(true);
  };
  const closePop = () => {
    setShow(false);
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setAnimationKey((prev) => prev + 1);
      }, text.length * 100 + 3000); // wait for animation + 3s pause
      return () => clearInterval(interval);
    }
  }, [isInView, text]);
  return (
    <div
      className={`w-full mt-20  lg:h-screen  flex justify-center items-center  flex-col max-h-screen ${className}`}
    >
      <h2
        ref={ref}
        className="text-4xl bg-gradient-to-r from-[#FFFFFF] via-slate-100  to-[#6404DF] bg-clip-text text-transparent  text-center sm:text-7xl font-bold lg:text-9xl lg:leading-[4rem]   md:leading-[2rem]"
      >
        {text.split(" ").map((letter, index) => (
        <motion.span
        key={`${animationKey}-${index}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: index * 0.5 }}
        className="inline-block md:py-10 px-2 md:px-4"
      >
          {letter}
        </motion.span>
      ))}

       
      </h2>
      <button
        onClick={handlePop}
        className="p-4 mt-10 flex bg-[#9746FF] text-gray-50 font-medium shadow-2xl rounded-4xl"
      >
        GET IN TOUCH{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="animate-ping ml-2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-arrow-right-icon lucide-arrow-right"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
      {show && (
        <PopupContainer>
          <PopCard onClose={closePop} />
        </PopupContainer>
      )}
    </div>
  );
};

export default Herotext;
