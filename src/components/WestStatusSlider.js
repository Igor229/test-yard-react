import { Swiper, SwiperSlide } from 'swiper/react';
import './BuildStatusSlider.css';

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

export default function WestStatusSlider( {photos} ) {

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={false}
        autoHeight = {true}

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

        className="buildStatusSlider"
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
