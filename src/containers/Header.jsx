import React from 'react'
import { Brands, Form, Navbar, P, Title } from "../components";

export default function Header() {
  return (
    <div className='mb-28'>
      <Navbar />
      <div className='mt-10 mb-32 w-[40%] text-center mx-auto tracking-wider leading-[1.1]'>
        <Title text1="The easiest and fastest way to" coloredText="Invest" text2="in Agriculture" />
        <P
          className="mt-10"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur"
        />
        <Form />
      </div>
      <Brands />
    </div>
  )
}
