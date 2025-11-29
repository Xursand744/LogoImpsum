import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import Logo1 from "../assets/logo1.svg"
import Logo2 from "../assets/logo2.svg"
import Logo3 from "../assets/logo3.svg"
import Logo4 from "../assets/logo4.svg"
import Logo5 from "../assets/logo5.svg"
export default function Logos() {
  return (
    <div className='container'>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}

        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true, 
          effect: 'slide',            
    easing: 'ease-in-out', 
        }}
       modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Logo1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Logo2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Logo3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Logo4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Logo5} alt="" /></SwiperSlide>
        
      </Swiper>
    </div>
  )
}
