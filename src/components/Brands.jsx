import React from 'react'
import { brands } from '../data'

export default function Brands() {
  return (
    <div className='px-40 flex justify-between space-x-3'>
      {brands.map((brandImg, i) => (
        <img
          key={i}
          src={brandImg}
          alt={`Brand ${i}`}
          className="w-[150px] object-contain"
        />
      ))}
    </div>
  )
}
