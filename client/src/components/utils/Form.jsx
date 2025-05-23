import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import { useState } from "react";

const Form = () => {
  const [loading, setLoading] = useState(false);
  // 4cddccc4-ca22-45eb-98f4-dfe859cd96a6
   const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4cddccc4-ca22-45eb-98f4-dfe859cd96a6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <form onSubmit={onSubmit} className="w-full h-full flex flex-col mb-4 rounded-3xl  p-4 md:pr-6">
      <h1 className="  font-semibold text-3xl">Are You Interested In : </h1>
      
      <div className="w-full  grid grid-cols-1 gap-2 justify-between ">
        <Input type={"text"} name={"first_name"} title={"First Name"} required={true} />
        <Input type={"text"} name={"last_name"} title={"Last Name"} required={true} />
        <Input type={"email"} name={"email"} title={"Email Address"} required={true} />
        <Input type={"phone"} name={"contact"} title={"Mobile Number"} required={true} />
      </div>
      <div className="">
        <TextArea type={"text"} name={"message"} title={"Enter Your Message"} />
      </div>
      <div className="w-full flex items-center justify-center col-span-2">
        <button type="submit" className="p-4 flex bg-gradient-horizontal text-gray-50 font-medium rounded-4xl">
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
    </form>
  );
};

export default Form;
