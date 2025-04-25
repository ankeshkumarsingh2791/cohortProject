
import React, { useEffect } from "react";

const PopupContainer = ({ children, className }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <main className="fixed bg-black/55 sm:top-0 w-full h-full flex overflow-hidden justify-center items-center left-0 bottom-0 z-50">
      <div className="flex justify-center items-center overflow-y-auto w-full h-full max-w-[1240px]">
        <div className={`relative rounded-md shadow-lg w-[75%] lg:w-[80%] z-50 ${className}`}>
          {children}
        </div>
      </div>
    </main>
  );
};

export default PopupContainer;
