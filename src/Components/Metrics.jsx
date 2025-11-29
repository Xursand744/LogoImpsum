import React from 'react'
import Content03 from "../assets/Content03.png"
export default function Metrics() {
  return (
    <div className='container flex justify-between items-center mt-16'>
      <div className='max-w-[459px] w-full'>
    <h2 className='text-[50px] mb-[30px] font-bold'>
        In-depth metrics
    </h2>
    <p className='text-[20px] mb-[30px]'>Accurate, real-time reporting at your fingertips. Getting data has never been easier.</p>
      <a href="#!" className='text-blue-400 border-b-blue-400 border-b-2'>Learn more</a> 
      </div>
      <img src={Content03} alt="" />
    </div>
  )
}
