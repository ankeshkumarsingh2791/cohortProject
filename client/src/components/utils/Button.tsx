import React from 'react'

const Button = ({ text,
    type,
    className = "",
    onClick,
    disable = false}) => {
  return (
    <button
    type={type}
    className={`cursor-pointer ${className}`}
    disabled={disable}
    onClick={onClick}
  >
    {text}
  </button>
  )
}

export default Button