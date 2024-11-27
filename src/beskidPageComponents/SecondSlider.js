import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import FsLightbox from 'fslightbox-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css';


import beskidSec1 from '../assets/beskidPage/images/second-slider/0.webp'
import beskidSec2 from '../assets/beskidPage/images/second-slider/1.webp'
import beskidSec3 from '../assets/beskidPage/images/second-slider/2.webp'
import beskidSec4 from '../assets/beskidPage/images/second-slider/3.webp'
import beskidSec5 from '../assets/beskidPage/images/second-slider/4.webp'


const imageArr = [
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
]


export default function SecondSlider() {
  const [toggler, setToggler] = useState(false)
  return (
    <>
      <div className='info-description'>
        <h2 className='info-description__title'>КОТЕДЖІ З АВТОРСЬКИМ РЕМОНТОМ</h2>

        <p className='info-description__text'>
          Котеджі продаються зі стильним та сучасним ремонтом, укомплектовані меблями та технікою провідних марок. Авторський дизайн-проект поєднує в собі елементи етнічного орнаменту та сучасного стилю, що додає певного карпатського колориту.
        </p>
        <p className='info-description__text'>
          Функціональна кухня-студія, де максимум простору, щоб зібратись всією сім'єю чи друзями за великим столом, або відпочивати на комфортному м'якому дивані.
        </p>
        <p className='info-description__text'>
          Три спальні з панорамними вікнами, з яких відкривається дивовижний краєвид на гори. Контрастні відтінки, застосовані в інтер'єрі - поєднання бетону та структурного дерева, роблять його багатограннішим та яскравішим!
        </p>
      </div>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "8px",
        }}
        className="beskid-page-swiper"
      >

        {imageArr.map((item, index) => {
          return (
            <SwiperSlide onClick={() => {setToggler(!toggler)}}>
              <img className="slider-img" src={require('../assets/beskidPage/images/second-slider/' + index + '.webp')} alt={item.alt}/>
            </SwiperSlide>
          )
        })}
        
      </Swiper>

      <FsLightbox 
        toggler={toggler}
        sources={[
          beskidSec1,
          beskidSec2,
          beskidSec3,
          beskidSec4,
          beskidSec5,
        ]}
      />
    </>
  );
}