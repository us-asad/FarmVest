import React from 'react'

export default function Title({ text1, coloredText, text2, className }) {
  return (
    <h2 className={`text-[50px] font-bold font-spartan text-gray ${className}`}>
      {text1} <span className='text-green'>{coloredText}</span> {text2}
    </h2>
  )
}
