import React from 'react'
import Btn from './Btn'

export default function Form() {
  return (
    <form
      onSubmit={e => e.preventDefault()}
      className="bg-slate-200 py-1 mt-8 pr-1 pl-3 w-fit max-w-full mx-auto rounded-[10px] flex"
    >
      <input
        type="email"
        placeholder='Enter your email'
        className='outline-none bg-transparent text-[17px] w-[300px]'
      />
      <Btn
        name="Get Started"
        className="min-w-max"
      />
    </form>
  )
}
