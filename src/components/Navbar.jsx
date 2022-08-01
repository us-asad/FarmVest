import React from 'react'
import { nav_items } from '../data'
import Btn from './Btn'

export default function Navbar() {
  return (
    <nav className='px-[120px] py-[43px] flex justify-between'>
      <h2 className='text-[#263238] text-[25px]'>FarmVest</h2>
      <ul className='flex space-x-10'>
        {nav_items.map((item, i) => (
          <li key={i}>
            {item}
          </li>
        ))}
      </ul>
      <div className='space-x-3'>
        <Btn name="Sign In" outline />
        <Btn name="Get Started" />
      </div>
    </nav>
  )
}
