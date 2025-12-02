import React, { useEffect } from 'react'
import Banner from '../assets/Header.png'
import AOS from 'aos'
import "aos/dist/aos.css";



export default function Header() {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div>
            <header className='container mt-10 flex justify-between items-center'>
                <div className='max-w-[462px] w-full '>
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-center">
                        <h1 className='text-7xl font-bold mb-[30px]'>Grow your subscription business</h1>
                    </div>
              <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
                    <p className='text-[20px] mb-[50px] text-[#696871]'>Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.</p>
</div>

                    <button className='py-[19px] px-[60px] bg-[#5454D4] text-white rounded-md'>Get Started</button>
                </div>
              <div data-aos="zoom-out-left">

                <div className='max-w-[580px] max-h-[644px]'>
                    <img className='w-full h-full object-cover' src={Banner} alt="" />
                </div>
              </div>
            </header>
        </div>
    )
}
