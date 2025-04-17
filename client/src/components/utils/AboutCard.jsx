import React from "react";

const AboutCard = ({className}) => {
  return (
    <div className={`w-full flex flex-col md:flex-row gap-4 ${className}`}>
      <div className="md:w-1/2 ">
        <h1 className="text-xl font-medium t text-red-500">About Us</h1>
        <div className="w-full h-full text-xl  flex flex-col gap-8 p-4">
          <p className="text-4xl ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos iure sit vel recusandae voluptatum impedit doloremque
            numquam maiores!
          </p>
          <p>
            Lorem ipsum dolor sit <br /> amet, consectetur adipisicing elit.
            <br /> Non, iure.
          </p>
          <section className="w-full flex text-red-500">
            <p>
              Learn More{" "}
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>

          </section>
        </div>
      </div>
      <div className="md:w-1/2 ">
        <img src="/Ankesh.jpg" className="w-full h-[550px] object-cover" />
      </div>
    </div>
  );
};

export default AboutCard;
