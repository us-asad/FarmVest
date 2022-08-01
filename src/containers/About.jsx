import React from 'react'
import { Btn, Faq, P, Title } from '../components'
import { about_section_1, download_apps, faqs, preferences, testimonials } from '../data';
import Human1 from "../assets/human/1.jpg"
import Human2 from "../assets/human/2.jpg";
import Human3 from "../assets/human/3.png";

export default function About() {
  return (
    <div className='px-40 space-y-36 mb-32'>
      <div className='flex justify-between'>
        <div className='w-[40%] leading-[1]'>
          <Title
            text1="How"
            coloredText="FarmVest"
            text2="Works"
            className="w-[80%]"
          />
          <P
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur"
            className="mt-6"
          />
          <ul className='mt-12 space-y-8'>
            {about_section_1.map((item, i) => (
              <li
                key={item.icon}
                className="flex space-x-5 w-[80%]"
              >
                <img
                  src={item.icon}
                  alt={`About Icon ${i}`}
                  className="w-[70px] object-contain"
                />
                <div className='space-y-2'>
                  <h3 className='font-medium text-[16px]'>{item.title}</h3>
                  <P
                    text={item.text}
                    className="text-[13px] leading-5"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='w-[60%] flex justify-center items-center'>
          <img
            src={Human1}
            alt="Human 1"
            className='w-[70%] object-contain'
          />
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='w-[60%] flex items-center'>
          <img
            src={Human2}
            alt="Human 1"
            className='w-[80%] object-contain'
          />
        </div>
        <div className='w-[50%] leading-[1]'>
          <Title
            text1="Your"
            coloredText="pathway"
            text2="to Future Investment"
            className="w-[70%]"
          />
          <P
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur"
            className="mt-6"
          />
          <ul className='mt-12 space-y-4'>
            {faqs.map((item, i) => (
              <li
                key={i}
                className="flex space-x-5 w-full"
              >
                <Faq {...item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='w-[50%] leading-[1]'>
          <Title
            text1="Why Choose"
            coloredText="FarmVest"
            className="w-[70%]"
          />
          <P
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac"
            className="mt-6"
          />
          <ul className='mt-12 space-y-6'>
            {preferences.map((item, i) => (
              <li
                key={item.icon}
                className="flex space-x-5 w-[80%] items-center"
              >
                <img
                  src={item.icon}
                  alt={`About Icon ${i}`}
                  className="w-[60px] object-contain"
                />
                <h3 className='font-normal text-[18px]'>{item.name}</h3>
              </li>
            ))}
          </ul>
          <Btn
            name="Learn More"
            className="px-8 py-4 mt-8"
          />
        </div>
        <div className='w-[60%] flex justify-end items-center'>
          <img
            src={Human3}
            alt="Human 1"
            className='w-[80%] object-contain'
          />
        </div>
      </div>
      <div className='text-center'>
        <Title
          text1="What"
          coloredText="Customers"
          text2="have to say"
        />
        <P
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac"
          className="w-[35%] mx-auto"
        />
        <ul className='flex space-x-10 justify-between mt-10'>
          {testimonials.map(({ name, image, comment}, i) => (
            <li
              key={i}
              className="rounded-[20px] bg-slate-100 flex"
            >
              <img
                src={image}
                alt={name}
                className="object-contain h-[300px] w-[350px]"
              />
              <div className='p-5 h-full flex flex-col justify-between text-start text-gray'>
                <P text={comment} />
                <b>{name}</b>
              </div>
            </li>
          ))}
        </ul>
        <Btn
          name="View All"
          className="mt-10 px-10"
        />
      </div>
      <div className='bg-slate-100 p-10 text-center rounded-[10px]'>
        <Title
          text1="Download"
          coloredText="FarmVest app"
          text2="and invest in your future"
          className="w-[50%] leading-[1] mx-auto"
        />
        <div className='flex justify-center mt-10 space-x-5'>
          {download_apps.map(img => (
            <img
              key={img}
              src={img}
              alt="Download App"
              className='w-[130px]'
            />
          ))}
        </div>
      </div>
    </div>
  )
}
