import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TypeWriter = ({ text, speed = 100, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    let interval;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
        if (index >= text.length) clearInterval(interval);
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, delay]);

  return (
    <motion.h2
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[90%] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1000px] p-4 mx-auto text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-center bg-gradient-to-r from-white via-slate-100 to-[#6404DF] bg-clip-text text-transparent leading-[5rem] sm:leading-[6rem] md:leading-[7rem] lg:leading-[8rem]"
    >
      {displayedText}
    </motion.h2>
  );
};

export default TypeWriter;
