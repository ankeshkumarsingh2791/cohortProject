import React, { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";

const Form = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        if (onSuccess) onSuccess();
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

  if (isSubmitted) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-semibold text-green-400">
          Thank you! Your message has been sent.
        </h1>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-2xl mx-auto bg-transparent rounded-3xl px-6 py-10 space-y-6"
    >
      <h1 className="font-semibold text-3xl text-white text-center m-auto">
        Get in Touch
      </h1>

      <div className="flex flex-col gap-6">
        <Input
          title="First Name"
          type="text"
          name="first_name"
          placeholder="Enter your first name"
          required
        />
        <Input
          title="Last Name"
          type="text"
          name="last_name"
          placeholder="Enter your last name"
          required
        />
        <Input
          title="Email Address"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <Input
          title="Mobile Number"
          type="tel"
          name="contact"
          placeholder="Enter your number"
          required
        />
        <TextArea
          title="Message"
          name="message"
          placeholder="Write your message here"
          required
        />
      </div>

      <div className="w-full flex justify-center pt-4">
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 cursor-pointer hover:to-transparent hover:from-transparent bg-gradient-to-r border-2 border-violet-500 from-[#6A5BFF] to-[#A685E2] text-white font-semibold rounded-full shadow-md hover:scale-105 transition-all duration-500 disabled:opacity-60"
        >
          {loading ? "SENDING..." : "Send Message"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-3 inline-block -mt-1"
            width="22"
            height="22"
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
