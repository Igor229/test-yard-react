// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import './BuildStatusSlider.css';

// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';


function SliderCard(props) {
  const {month, info, img, subinfo} = props
    return (
      <div>
        <img className='buildStatusImg' src={img} alt="west-town"/>
        <div className='status-info__container'>
          <p className='status-info__date'>{month}</p>
          <p className='status-info__text'>{info}</p>
          <p className='status-info__text'>{subinfo}</p>
        </div>
      </div>
    )
}


export default function ComfortStatusSlider( {photos} ) {


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
        className="buildStatusSlider comfort-slider"
      >
        {photos.map((item, index) => {
            return (
            <SwiperSlide key={index}>
              <SliderCard {...item} />
            </SwiperSlide>)
          })}
      </Swiper>
    </>
  );
}
