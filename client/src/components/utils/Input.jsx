import React from 'react';

const Input = ({ title, required, type, name, value, onChange }) => {
  return (
    <div className="w-full">
          <label
        htmlFor={title}
        className="relative block rounded-md"
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
    </div>
  );
};

export default Input;
