import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import TypeWriter from "./TypeWriter";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
        className="relative mt-10 overflow-hidden flex group bg-[#9746FF] text-gray-50 font-medium shadow-2xl rounded-4xl cursor-pointer z-3"
      >
        
        <div
        style={{
          WebkitMaskImage:
            'radial-gradient(circle at 100% 50%, transparent 25px, black 23px)',
          maskImage:
            'radial-gradient(circle at 100% 50%, transparent 25px, black 23px)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        }}
         className="absolute w-full h-full bg-white/40 z-8 -left-[100%] group-hover:-left-[10%] transition-all duration-500 rounded-l-full">
        </div>
        <span className="px-7 py-3 flex font-bold gap-4">
          <div>GET IN TOUCH{" "}</div>
          <ArrowRight strokeWidth={2} className="group-hover:translate-x-4 transition-all ease-linear duration-500"/>
        </span>
      </button>
      </NavLink>
    </motion.div>
  );
};

export default Herotext;
