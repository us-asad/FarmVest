import React from 'react'

export default function Btn({ name, outline, className }) {
  return (
    <button
      className={`py-3 px-5 border border-green rounded-[10px] duration-200 ${outline ? "color-green hover:bg-green text-green hover:text-white" : "bg-green hover:bg-transparent text-white hover:text-green"} ${className}`}
    >
      {name}
    </button>
  );
}
