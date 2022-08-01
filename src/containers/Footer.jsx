import React from 'react'
import footerLogo from "../assets/footer-logo.png";
import { Form, P } from '../components';
import { footer_nav_items, social } from '../data';



export default function Footer() {
  return (
    <footer className='px-28 bg-slate-100'>
      <div className='flex justify-between space-x-20 pb-16 pt-10'>
        <div className='w-[30%]'>
          <img
            src={footerLogo}
            alt="FarmVest"
            className='w-[140px] h-[25px]'
          />
          <P
            text="High level experience in web design and development knowledge, producing quality work."

          />
        </div>
        <div className='w-[30%]'>
          <P
            text="Subscribe to stay tuned for new web design and latest updates. Let's do it!"
          />
          <Form />
        </div>
        <div className='space-y-5 w-[20%]'>
          <h5 className='font-bold text-[17px]'>Follow us</h5>
          <div className='flex space-x-3'>
            {social.map(item => (
              <img
                src={item}
                alt="FarmVest Social Media"
                className='w-[40px] h-[40px]'
              />
            ))}
          </div>
        </div>
        <div className='space-y-5 w-[20%]'>
          <h5 className='font-bold text-[17px]'>Call us</h5>
          <p>+9893274283479</p>
        </div>
        
      </div>
      <div className='border-t border-slate-300 text-slate-600 py-10'>
        <div className="flex justify-between">
          <p className='text-[13px]'>© 2021 All Rights Reserved</p>
          <ul className='flex space-x-5 text-[14px]'>
            {footer_nav_items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
