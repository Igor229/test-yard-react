import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './ComplexSlider.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const imgArr = [
  {
    src: 'besked1',
    alt: 'beskid-home'
  },
  {
    src: 'besked2',
    alt: 'beskid-home'
  },
  {
    src: 'besked3',
    alt: 'beskid-home'
  },
  {
    src: 'besked4',
    alt: 'beskid-home'
  },
  {
    src: 'besked5',
    alt: 'beskid-home'
  },
  {
    src: 'besked6',
    alt: 'beskid-home'
  },
  {
    src: 'besked7',
    alt: 'beskid-home'
  },
  {
    src: 'besked8',
    alt: 'beskid-home'
  },
  {
    src: 'besked9',
    alt: 'beskid-home'
  },
  {
    src: 'besked10',
    alt: 'beskid-home'
  },
  {
    src: 'besked11',
    alt: 'beskid-home'
  },
  {
    src: 'besked12',
    alt: 'beskid-home'
  },
  {
    src: 'besked13',
    alt: 'beskid-home'
  },
  {
    src: 'besked14',
    alt: 'beskid-home'
  },
  {
    src: 'besked15',
    alt: 'beskid-home'
  },
  {
    src: 'besked16',
    alt: 'beskid-home'
  },
  {
    src: 'besked17',
    alt: 'beskid-home'
  },
]

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "8px",
        }}
        className="mySwiper"
      >

        {imgArr.map((item, index) => {
          return (
            <SwiperSlide>
              <img className="slider-img" src={require('../assets/images/beskid-home/' + index + '.jpg')} alt={item.alt}/><div className="shadow"></div>
            </SwiperSlide>
          )
        })}
        
      </Swiper>
    </>
  );
}

