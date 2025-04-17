import React, { useState } from 'react';

const TestimonialCard = ({ name, role, image, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-72 h-96 relative perspective cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`w-full h-full transition-transform duration-500 preserve-3d relative ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-lg shadow-lg overflow-hidden z-10">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <p className="font-bold text-lg text-gray-800">{name}</p>
            <p className="text-blue-600">{role}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-blue-700 text-white backface-hidden rounded-lg shadow-lg p-6 flex flex-col justify-center rotate-y-180 z-0">
          <p className="font-bold text-xl mb-3">{name}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
