import React, { useState, useEffect, useRef } from "react";
import PopupContainer from "./PopupContainer";
import PopCard from "./PopCard";
import { motion, useInView } from "framer-motion";
import TypeWriter from "./TypeWriter";
import { NavLink } from "react-router-dom";

const Herotext = ({ text = "Typing Effect", className }) => {
  const [show, setShow] = useState(false);
  const handlePop = () => {
    setShow(true);
  };
  const closePop = () => {
    setShow(false);
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
    <motion.div
      initial={{opacity:0, y:-500}}
      animate={{opacity:1, y:0}}
      transition={{duration:1}}
      className={`w-full mt-20 h-screen  flex justify-center items-center  flex-col max-h-screen ${className}`}
    >
      <div
        ref={ref}
      >
        <TypeWriter text={text} speed={100}/>
      </div>
      <NavLink to={"/contact"}>
      <button
        onClick={handlePop}
        className="p-4 mt-10 flex bg-[#9746FF] text-gray-50 font-medium shadow-2xl rounded-4xl cursor-pointer"
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
      </NavLink>
    </motion.div>
  );
};

export default Herotext;
