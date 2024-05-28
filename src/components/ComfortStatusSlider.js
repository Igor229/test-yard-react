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
            <SwiperSlide key={index}>
              <SliderCard {...item} />
            </SwiperSlide>)
          })}
      </Swiper>
    </>
  );
}
