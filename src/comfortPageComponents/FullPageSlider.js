import './FullPageImage.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';


import image1 from '../assets/comfortPage/images/full-page/1.webp'
import image2 from '../assets/comfortPage/images/full-page/2.webp'
import image3 from '../assets/comfortPage/images/full-page/3.webp'
import image4 from '../assets/comfortPage/images/full-page/4.webp'

const images = [
  {
    image: image1
  },
  {
    image: image2
  },
  {
    image: image3
  },
  {
    image: image4
  },
]
function FullPageImageBlock (props) {
  const {image} = props

  return (
    <div className='main-block' style={{backgroundImage: `url(${image})`}}>
    </div>
  )
}


export default function FullPageSlider() {
  return (
      <>
              <Swiper
              slidesPerView={1}
              freeMode={false}
              pagination={false}

              modules={[FreeMode]}
              className="comf-full__slider"
              >
                  {images.map((item, index) => {
                  return (
                  <SwiperSlide>
                      <FullPageImageBlock key={index} {...item} />
                  </SwiperSlide>)
                  })}
              </Swiper>
      </>
  );
}