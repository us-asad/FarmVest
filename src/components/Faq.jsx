import React from 'react'
import { useState } from 'react';
import { BsChevronDown } from "react-icons/bs";

export default function Faq({ question, answer }) {
  const [opened, setOpened] = useState(false)

  return (
    <details
      open={opened}
      className='w-full appearance-none bg-slate-100'
      onToggle={e => setOpened(e.target.open)}
    >
      <summary className='p-5 text-[20px] text-slate-700 appearance-none cursor-pointer bg-slate-100 w-full flex justify-between'>
        {question}
        <BsChevronDown className={`duration-200 ${opened && "rotate-[-180deg]"}`} />
      </summary>
      <div className='p-5 mt-3 border-t border-slate-300 text-[14px] leading-5'>{answer}</div>
    </details>
  )
}
