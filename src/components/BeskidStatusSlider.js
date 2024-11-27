import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import './BuildStatusSlider.css';

// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';

import beskid1 from '../assets/images/build-status/beskid-status/status-beskid1.webp'
import beskid2 from '../assets/images/build-status/beskid-status/status-beskid2.webp'
import beskid3 from '../assets/images/build-status/beskid-status/status-beskid3.webp'
import beskid4 from '../assets/images/build-status/beskid-status/status-beskid4.webp'
// beskid compressed photos
import beskidNovember1 from '../assets/images/build-status/beskid-status/beskid-november1-min.webp'
import beskidNovember2 from '../assets/images/build-status/beskid-status/beskid-november2-min.webp'
import beskidNovember3 from '../assets/images/build-status/beskid-status/beskid-november3-min.webp'
import beskidNovember4 from '../assets/images/build-status/beskid-status/beskid-november4-min.webp'
import beskidNovember5 from '../assets/images/build-status/beskid-status/beskid-november5-min.webp'
import beskidNovember6 from '../assets/images/build-status/beskid-status/beskid-november6-min.webp'
import beskidApril1 from '../assets/images/build-status/beskid-status/beskid-april1.webp'
import beskidApril2 from '../assets/images/build-status/beskid-status/beskid-april2.webp'
import beskidApril3 from '../assets/images/build-status/beskid-status/beskid-april3.webp'
import beskidApril4 from '../assets/images/build-status/beskid-status/beskid-april4.webp'
import beskidApril5 from '../assets/images/build-status/beskid-status/beskid-april5.webp'
import beskidApril6 from '../assets/images/build-status/beskid-status/beskid-april6.webp'
import beskidApril7 from '../assets/images/build-status/beskid-status/beskid-april7.webp'
import beskidApril8 from '../assets/images/build-status/beskid-status/beskid-april8.webp'
import beskidApril9 from '../assets/images/build-status/beskid-status/beskid-april9.webp'
import beskidMay1 from '../assets/images/build-status/beskid-status/may1.webp'
import beskidMay2 from '../assets/images/build-status/beskid-status/may2.webp'
import beskidMay3 from '../assets/images/build-status/beskid-status/may3.webp'
import beskidMay4 from '../assets/images/build-status/beskid-status/may4.webp'
import beskidMay5 from '../assets/images/build-status/beskid-status/may5.webp'
import beskidMay6 from '../assets/images/build-status/beskid-status/may6.webp'
import beskidMay7 from '../assets/images/build-status/beskid-status/may7.webp'
import beskidSeptember1 from '../assets/images/build-status/beskid-status/september1.webp'
import beskidSeptember2 from '../assets/images/build-status/beskid-status/september2.webp'
import beskidSeptember3 from '../assets/images/build-status/beskid-status/september3.webp'
import beskidSeptember4 from '../assets/images/build-status/beskid-status/september4.webp'
import beskidSeptember5 from '../assets/images/build-status/beskid-status/september5.webp'
import beskidOct1 from '../assets/images/build-status/beskid-status/oct1.webp'
import beskidOct2 from '../assets/images/build-status/beskid-status/oct2.webp'
import beskidOct3 from '../assets/images/build-status/beskid-status/oct3.webp'
import beskidOct4 from '../assets/images/build-status/beskid-status/oct4.webp'
import beskidOct5 from '../assets/images/build-status/beskid-status/oct5.webp'
import beskidOct6 from '../assets/images/build-status/beskid-status/oct6.webp'
import beskidOct7 from '../assets/images/build-status/beskid-status/oct7.webp'
import beskidOct8 from '../assets/images/build-status/beskid-status/oct8.webp'

function SliderCard(props) {
  const {month, title, info,info1,info2,info3,info4,info5,info6,info7,info8, img, subinfo} = props
    return (
      <div>
        <img className='buildStatusImg' src={img} alt="west-town"/>
        <div className='status-info__container'>
          <p className='status-info__date'>{month}</p>
          <h3 className='status-info__title'>{title}</h3>
          <p className='status-info__text'>{info}</p>
          <p className='status-info__text'>{info1}</p>
          <p className='status-info__text'>{info2}</p>
          <p className='status-info__text'>{info3}</p>
          <p className='status-info__text'>{info4}</p>
          <p className='status-info__text'>{info5}</p>
          <p className='status-info__text'>{info6}</p>
          <p className='status-info__text'>{info7}</p>
          <p className='status-info__text'>{info8}</p>
          <p className='status-info__text'>{subinfo}</p>
        </div>
      </div>
    )
}


export default function BeskidStatusSlider() {
  const cardData = [
    {
      img: beskidOct1,
      month: 'Жовтень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidOct2,
      month: 'Жовтень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidOct3,
      month: 'Жовтень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidOct4,
      month: 'Жовтень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidOct5,
      month: 'Жовтень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidOct6,
      month: 'Жовтень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidOct7,
      month: 'Жовтень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidOct8,
      month: 'Жовтень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidSeptember1,
      month: 'Вересень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidSeptember2,
      month: 'Вересень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidSeptember3,
      month: 'Вересень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidSeptember4,
      month: 'Вересень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidSeptember5,
      month: 'Вересень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidMay1,
      month: 'Травень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: '- здійнюється підведення газових труб до котеджів',
      info1: '- зроблено сантехніку, опалення, електророзводку, відеонагляд, інтернет, пожежну та охоронну сигналізацію у всіх котеджах',
      info2: '- додатково утеплюються дахи та здійснюється шумоізоляція',
      info3: '- здійснено гідроізоляцію цокольних приміщень',
      info4: '- здійснюється водовідведення та дренажні роботи',
      info5: '- монтаж водомірного вузла з системою фільтрації',
      info6: '- фасад котеджів утеплено пінопластом 10 см',
      info7: "- монтаж дерев'яного каркасу фасаду",
      info8: '- здійснюються роботи з прокладання дороги до комплексу',
    },
    {
      img: beskidMay2,
      month: 'Травень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidMay3,
      month: 'Травень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidMay4,
      month: 'Травень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidMay5,
      month: 'Травень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidMay6,
      month: 'Травень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidMay7,
      month: 'Травень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidApril1,
      month: 'Квітень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidApril2,
      month: 'Квітень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidApril3,
      month: 'Квітень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidApril4,
      month: 'Квітень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidApril5,
      month: 'Квітень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidApril6,
      month: 'Квітень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidApril7,
      month: 'Квітень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidApril8,
      month: 'Квітень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidApril9,
      month: 'Квітень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: ''
    },
    {
      img: beskidNovember1,
      month: 'Січень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: '- КОТЕДЖ №2 - (січень) - виконуються внутрішні ремонтні роботи.'
    },
    {
      img: beskidNovember2,
      month: 'Січень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: '- КОТЕДЖ №3 - (січень) - виконуються внутрішні ремонтні роботи.'
    },
    {
      img: beskidNovember3,
      month: 'Січень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: '- стан будівництва за січень котеджі №4-9.'
    },
    {
      img: beskidNovember4,
      month: 'Січень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: '- стан будівництва за січень котеджі №4-9.'
    },
    {
      img: beskidNovember5,
      month: 'Січень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: '- стан будівництва за січень котеджі №4-9.'
    },
    {
      img: beskidNovember6,
      month: 'Січень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: '- стан будівництва за січень котеджі №4-9.'
    },
    {
      img: beskid3,
      month: 'Серпень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: '- завершення фасадних робіт, монтаж перил та балконів у будинку №3.'
    },
    {
      img: beskid4,
      month: 'Серпень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: '-  встановлення підпірних колон під монолітну плиту - будинок №4-7.'
    },
    {
      img: beskid1,
      month: 'Липень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: '- здійснюються внутрішні ремонтні роботи у котеджі №2 (тип 1).'
    },
    {
      img: beskid2,
      month: 'Липень',
      title: 'FOMICH RESIDENCE GUESTHOUSES',
      info: '- здійснюються електромонтажні роботи у котеджі №3 (тип 1).'
    },
  ]


  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={false}
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
            <SwiperSlide key={index}>
              <SliderCard {...item} />
            </SwiperSlide>)
          })}
      </Swiper>
    </>
  );
}
