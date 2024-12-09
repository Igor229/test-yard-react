import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import sprite from '../assets/icons/sprite.svg'
import FsLightbox from 'fslightbox-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './ComplexSlider.css';

import beskidImg1 from '../assets/images/beskid-home/0.webp'
import beskidImg2 from '../assets/images/beskid-home/1.webp'
import beskidImg3 from '../assets/images/beskid-home/2.webp'
import beskidImg4 from '../assets/images/beskid-home/3.webp'
import beskidImg5 from '../assets/images/beskid-home/4.webp'
import beskidImg6 from '../assets/images/beskid-home/5.webp'
import beskidImg7 from '../assets/images/beskid-home/6.webp'
import beskidImg8 from '../assets/images/beskid-home/7.webp'
import beskidImg9 from '../assets/images/beskid-home/8.webp'
import beskidImg10 from '../assets/images/beskid-home/9.webp'
import beskidImg11 from '../assets/images/beskid-home/10.webp'
import beskidImg12 from '../assets/images/beskid-home/11.webp'
import beskidImg13 from '../assets/images/beskid-home/12.webp'
import beskidImg14 from '../assets/images/beskid-home/13.webp'
import beskidImg15 from '../assets/images/beskid-home/14.webp'
import beskidImg16 from '../assets/images/beskid-home/15.webp'

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
  const [isActive, setIsActive] = useState(true)

  const handleClick = () => {
      setIsActive(!isActive)
  }
  const buttonClassActive = isActive ? "main-button type__button type__button--active" : "main-button type__button"
  const buttonClass = isActive ? "main-button type__button" : "main-button type__button type__button--active"
  const squareContent = isActive ? '117,94' : '121,27'
  const terraceContent = isActive ? '16,80' : '27,90'

  const [toggler, setToggler] = useState(false)

  const handleClickScroll = () => {
    window.scrollTo(0, 0)
  }
  return (
    <>
    <div className="complex__info box">
        <div className='complex__info-slider'>
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
                <SwiperSlide key={index} onClick={() => {setToggler(!toggler)}}>
                  <img className="slider-img" src={require('../assets/images/beskid-home/' + index + '.webp')} alt={item.alt}/><div className="shadow"></div>
                </SwiperSlide>
              )
            })}
            
          </Swiper>
        </div>

        <div className="complex__info-text complex__base-card">
          <h3 className="info__title box">BESKID HOME RESORT (BUKOVEL)</h3>

          <p className='info__sub-title box'>Комплекс розташований в с.Поляниця, урочище Вишня (BUKOVEL).</p>

          <div className="complex__info-types box">
              <button className={buttonClassActive} id="typeButton-one" onClick={handleClick}>Тип - 1</button>
              <button className={buttonClass} id="typeButton-two" onClick={handleClick}>Тип - 2</button>
          </div>

          <div className="complex__text-container besket_text box">
              <div className="sizes-container">
                  <p className="info__text"> - Площа - {squareContent} м2</p>
                  <p className="info__text"> - Тераса – {terraceContent} м2</p>
              </div>

              <div className="info__container box">
                  <p className="info-text">
                      Двоповерхові високоякісні котеджі продаються повністю укомплектовані 
                      до проживання – з ремонтом, меблями та побутовою технікою. Будинок 
                      вміщує простору кухню-студію та спальню, а також санвузол на першому 
                      поверсі. Та ще дві окремі спальні з власними санвузлами на другому поверсі.
                  </p>
              </div>

              {/*=================== card actions ========================*/}
              
              <div className='info-actions'>
                  <a href='#fomich-guesthouses'>
                  <button className='info-actions__btn' onClick={handleClickScroll}>
                      Докладніше про комплекс
                      <svg className="btn-icon">
                          <use href={sprite + '#chevron-right'}/>
                      </svg>
                  </button>
                  </a>
              </div>
          </div>
        </div>
      </div>

      <FsLightbox
        toggler={toggler}
        sources={[
          beskidImg1, 
          beskidImg2,
          beskidImg3,
          beskidImg4,
          beskidImg5,
          beskidImg6,
          beskidImg7,
          beskidImg8,
          beskidImg9,
          beskidImg10,
          beskidImg11,
          beskidImg12,
          beskidImg13,
          beskidImg14,
          beskidImg15,
          beskidImg16,
        ]}
      />
    </>
  );
}

