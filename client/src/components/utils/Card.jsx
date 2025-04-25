import React from "react";
import video2 from '../../assets/video2.mp4'


const Card = () => {
  return (
     <div className="relative group w-full h-80 md:h-96 overflow-hidden rounded-2xl shadow-lg">
      {/* <img
        alt=""
        src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
        className="absolute inset-0 h-full w-full object-fill opacity-75 transition-opacity group-hover:opacity-50"
      /> */}
               <video src={video2} 
                 autoPlay
                  loop 
                  muted
                     className="absolute inset-0 h-full w-full duration-300 object-cover opacity-75 transition-opacity group-hover:opacity-50"
                  />
         <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center text-white z-10 transition-all duration-500 ease-in-out group-hover:backdrop-blur-sm group-hover:bg-black">
        <h2 className="text-3xl font-bold">Developer</h2>
        <p className="text-lg mt-1 text-pink-400">subtitle</p>
        <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-sm md:text-base"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              perferendis hic asperiores quibusdam quidem voluptates doloremque
              reiciendis nostrum harum. Repudiandae?</p>
        </div>
      </div>

      {/* <div className="relative   p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
          Developer
        </p>

        <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

        <div className="mt-32  sm:mt-48 lg:mt-64">
          <div className="translate-y-8  transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm  text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              perferendis hic asperiores quibusdam quidem voluptates doloremque
              reiciendis nostrum harum. Repudiandae?
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Card;
