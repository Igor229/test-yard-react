import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css';

// import required modules
import { Navigation } from 'swiper/modules';

const images = [
  {
    src: '0',
    alt: 'beskid-home'
  },
  {
    src: '1',
    alt: 'beskid-home'
  },
  {
    src: '2',
    alt: 'beskid-home'
  },
  {
    src: '3',
    alt: 'beskid-home'
  },
    {
    src: '4',
    alt: 'beskid-home'
  },
    {
    src: '5',
    alt: 'beskid-home'
  },
    {
    src: '6',
    alt: 'beskid-home'
  },
]


export default function FirstSlider() {

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "8px",
        }}
        className="beskid-page-swiper"
      >

        {images.map((item, index) => {
          return (
            <SwiperSlide>
              <img className="slider-img" src={require('../assets/beskidPage/images/first-slider/' + index + '.png')} alt={item.alt}/>
            </SwiperSlide>
          )
        })}
        
      </Swiper>
    </>
  );
}