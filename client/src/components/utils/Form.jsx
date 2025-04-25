import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import { useState } from "react";

const Form = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full h-full flex flex-col bg-gray-100 gap-8 mb-4 rounded-3xl shadow-2xl p-4 md:pr-6">
      <h1 className="  font-semibold text-3xl">Are You Interested In : </h1>
      
      <div className="w-full  grid grid-cols-1 xl:grid-cols-2 gap-10 justify-between ">
        <Input type={"text"} title={"First Name"} required={true} />
        <Input type={"text"} title={"Last Name"} required={true} />
        <Input type={"email"} title={"Email Address"} required={true} />
        <Input type={"phone"} title={"Mobile Number"} required={true} />
      </div>
      <div className="">
        <TextArea type={"text"} title={"Enter Your Message"} />
      </div>
      <div className="w-full flex items-center justify-center col-span-2">
        <button className="p-4 flex bg-gradient-horizontal text-gray-50 font-medium rounded-4xl">
          GET IN TOUCH{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mt-2"
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
      </div>
    </div>
  );
};

export default Form;
