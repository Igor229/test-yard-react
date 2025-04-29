// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import './BuildStatusSlider.css';

// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';

// comfort-town
import comfortMay1 from '../assets/images/build-status/comfort-status/may1.webp'
import comfortMay2 from '../assets/images/build-status/comfort-status/may2.webp'
import comfortMay3 from '../assets/images/build-status/comfort-status/may3.webp'
import comfortMay4 from '../assets/images/build-status/comfort-status/may4.webp'
import comfortJune1 from '../assets/images/build-status/comfort-status/jun1.webp'
import comfortJune2 from '../assets/images/build-status/comfort-status/jun2.webp'
import comfortJune3 from '../assets/images/build-status/comfort-status/jun3.webp'
import comfortJuly1 from '../assets/images/build-status/comfort-status/jul1.webp'
import comfortJuly2 from '../assets/images/build-status/comfort-status/jul2.webp'
import comfortJuly3 from '../assets/images/build-status/comfort-status/jul3.webp'
import comfortJuly4 from '../assets/images/build-status/comfort-status/jul4.webp'
import comfortOct1 from '../assets/images/build-status/comfort-status/oct1.webp'
import comfortOct2 from '../assets/images/build-status/comfort-status/oct2.webp'
import comfortOct3 from '../assets/images/build-status/comfort-status/oct3.webp'
import comfortOct4 from '../assets/images/build-status/comfort-status/oct4.webp'
import comfortFeb1 from '../assets/images/build-status/comfort-status/feb1.webp'
import comfortFeb2 from '../assets/images/build-status/comfort-status/feb2.webp'
import comfortFeb3 from '../assets/images/build-status/comfort-status/feb3.webp'
import comfortFeb4 from '../assets/images/build-status/comfort-status/feb4.webp'
import comfortMarch1 from '../assets/images/build-status/comfort-status/march1.webp'
import comfortMarch2 from '../assets/images/build-status/comfort-status/march2.webp'
import comfortApr1 from '../assets/images/build-status/comfort-status/apr1.webp'
import comfortApr2 from '../assets/images/build-status/comfort-status/apr2.webp'
import comfortApr3 from '../assets/images/build-status/comfort-status/apr3.webp'

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


export default function ComfortStatusSlider() {
  const cardData = [
    {
      img: comfortApr1,
      month: 'Квітень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortApr2,
      month: 'Квітень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortApr3,
      month: 'Квітень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortMarch1,
      month: 'Березень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortMarch2,
      month: 'Березень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortFeb1,
      month: 'Лютий',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortFeb2,
      month: 'Лютий',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortFeb3,
      month: 'Лютий',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortFeb4,
      month: 'Лютий',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortOct1,
      month: 'Жовтень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortOct2,
      month: 'Жовтень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortOct3,
      month: 'Жовтень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortOct4,
      month: 'Жовтень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortJuly1,
      month: 'Липень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortJuly2,
      month: 'Липень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortJuly3,
      month: 'Липень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortJuly4,
      month: 'Липень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortJune1,
      month: 'Червень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortJune2,
      month: 'Червень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortJune3,
      month: 'Червень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortMay1,
      month: 'Травень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortMay2,
      month: 'Травень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortMay3,
      month: 'Травень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortMay4,
      month: 'Травень',
      title: 'COMFORT TOWN',
      info: ''
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
