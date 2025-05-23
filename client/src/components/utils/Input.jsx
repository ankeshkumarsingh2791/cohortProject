import React from 'react';

const Input = ({ title, required, type, name, value, onChange }) => {
  return (
    <div className="w-full">
      <label
        htmlFor={title}
        className=" block rounded-md "
      >
        {title}
        </label>
        <input
          type={type}
          id={title}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full peer py-2 px-2 border-b-2 bg-transparent outline-none "
          
          required={required}
        />

        {/* <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          {title}
        </span> */}
      
    </div>
  );
};

export default Input;
