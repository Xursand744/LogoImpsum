import React from 'react'
import Content02 from "../assets/Content02.png"
export default function Subscription() {
  return (
    <div className='container flex justify-between items-center mt-16'>
      <img src={Content02} alt="" />
      <div className='max-w-[459px] w-full'>
    <h2 className='text-[50px] mb-[30px] font-bold'>
        Subscription index
    </h2>
    <p className='text-[20px] mb-[30px]'>A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.</p>
      <a href="#!" className='text-blue-400 border-b-blue-400 border-b-2'>Learn more</a> 
      </div>
    </div>
  )
}
