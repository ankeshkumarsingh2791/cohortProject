import React, { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";

// const Form = () => {
//   const [loading, setLoading] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false); // track if form is submitted

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);

//     const formData = new FormData(event.target);
//     formData.append("access_key", "4cddccc4-ca22-45eb-98f4-dfe859cd96a6");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     try {
//       const res = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: json,
//       });

//       const data = await res.json();
//       setLoading(false);

//       if (data.success) {
//         console.log("Success", data);
//         setIsSubmitted(true); // hide form after successful submission
//       } else {
//         alert("Form submission failed. Please check your input.");
//       }
//     } catch (error) {
//       setLoading(false);
//       console.error("Error submitting form:", error);
//       alert("Something went wrong. Please try again.");
//     }
//   };

const Form = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
   const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "4cddccc4-ca22-45eb-98f4-dfe859cd96a6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const res = await response.json();
      setLoading(false);

      if (res.success) {
        console.log("Success", res);
        if (onSuccess) onSuccess(); // call the close function from PopCard

        setIsSubmitted(true);
      } else {
        alert("Form submission failed. Please check your input.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }

  };

 ; // track if form is submitted


  if (isSubmitted) {
    return (
      <div className="p-4 text-center">
        <h1 className="text-2xl font-semibold text-green-600">Thank you! Your message has been sent.</h1>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full h-full flex flex-col mb-4 rounded-3xl p-4 md:pr-6">
      <h1 className="font-semibold text-3xl">Are You Interested In:</h1>

      <div className="w-full grid grid-cols-1 gap-2 justify-between">
        <Input type="text" name="first_name" title="First Name" required />
        <Input type="text" name="last_name" title="Last Name" required />
        <Input type="email" name="email" title="Email Address" required />
        <Input type="phone" name="contact" title="Mobile Number" required />
      </div>
      <div>
        <TextArea type="text" name="message" title="Enter Your Message" />
      </div>
      <div className="w-full flex items-center justify-center col-span-2">
        <button
          type="submit"
          disabled={loading}
          className="p-4 flex bg-gradient-horizontal cursor-pointer mt-10 text-gray-50 font-medium rounded-4xl"
        >
          {loading ? "SENDING..." : "GET IN TOUCH"}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mt-2 ml-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
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
