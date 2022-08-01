import React from 'react'

export default function P({ text, className }) {
  return (
    <p className={`text-[15px] text-gray font-normal leading-7 ${className}`}>{text}</p>
  )
}
