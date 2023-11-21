import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import './BuildStatusSlider.css';

// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';

import beskid1 from '../assets/images/build-status/status-beskid1.jpg'
import beskid2 from '../assets/images/build-status/status-beskid2.jpg'
import beskid3 from '../assets/images/build-status/status-beskid3.jpg'
import beskid4 from '../assets/images/build-status/status-beskid4.jpg'

function SliderCard(props) {
  const {month, title, info, img, subinfo} = props
    return (
      <div>
        <img className='buildStatusImg' src={img} alt="west-town"/>
        <div className='status-info__container'>
          <p className='status-info__date'>{month}</p>
          <h3 className='status-info__title'>{title}</h3>
          <p className='status-info__text'>{info}</p>
          <p className='status-info__text'>{subinfo}</p>
        </div>
      </div>
    )
}


export default function BeskidStatusSlider() {
  const cardData = [
    {
      img: beskid3,
      month: 'Серпень',
      title: 'BESKID HOME RESORT',
      info: '- завершення фасадних робіт, монтаж перил та балконів у будинку №3.'
    },
    {
      img: beskid4,
      month: 'Серпень',
      title: 'BESKID HOME RESORT',
      info: '-  встановлення підпірних колон під монолітну плиту - будинок №4-7.'
    },
    {
      img: beskid1,
      month: 'Липень',
      title: 'BESKID HOME RESORT',
      info: '- здійснюються внутрішні ремонтні роботи у котеджі №2 (тип 1).'
    },
    {
      img: beskid2,
      month: 'Липень',
      title: 'BESKID HOME RESORT',
      info: '- здійснюються електромонтажні роботи у котеджі №3 (тип 1).'
    },
  ]


  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={false}
        autoHeight={true}

        breakpoints={{
            279: {
                slidesPerView: 1,
            },
            620: {
                slidesPerView: 2,
            },
            821: {
                slidesPerView: 3,
            },

        }}

        modules={[FreeMode, Autoplay]}
        className="buildStatusSlider"
      >
        {cardData.map((item, index) => {
            return (
            <SwiperSlide>
              <SliderCard key={index} {...item} />
            </SwiperSlide>)
          })}
      </Swiper>
    </>
  );
}
