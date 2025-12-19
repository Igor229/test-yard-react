import './IntroductionBlock.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FreeMode } from 'swiper/modules';
import checkIcon from '../assets/comfortPage/icons/check.png'


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
    <div className='introduction-swiper__slider-img' style={{backgroundImage: `url(${image})`}}>
    </div>
  )
}


export default function IntroductionBlock() {
  return (
      <>

        <div className='introduction'>
          <div className='introduction-swiper'>
            <Swiper
              slidesPerView={1}
              freeMode={false}
              navigation={true}
              modules={[Navigation, FreeMode]}
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-navigation-size": "8px",
              }}
              className="introduction-swiper__slider"
              >
                  {images.map((item, index) => {
                  return (
                  <SwiperSlide>
                      <FullPageImageBlock key={index} {...item} />
                  </SwiperSlide>)
                  })}
              </Swiper>
          </div>

          <div className='introduction-info'>
            <p className='introduction-info__text'>Це зразок сучасного житла в поєднанні з високим рівнем комфорту та приватності, це уособлення справжніх сімейних цінностей та затишку - адже комфортно там, де вдома!</p>
            <p className='introduction-info__text'>Таунхауси COMFORT TOWN - це високоякісні будинки з приватним подвір’ям, які розташовані в еко-локації міста.</p>

            <div className='introduction-info__blocks'>
              <div className='introduction-info__block'><img src={checkIcon} alt='cart'/><p className='inroduction-info__block-text'>Розвинута інфраструктура району</p></div>
              <div className='introduction-info__block'><img src={checkIcon} alt='cart'/><p className='inroduction-info__block-text'>Близкість до Центру міста</p></div>
            </div>
            <div className='introduction-info__blocks'>
              <div className='introduction-info__block'><img src={checkIcon} alt='cart'/><p className='inroduction-info__block-text'>Зручне транспортне сполучення</p></div>
              <div className='introduction-info__block'><img src={checkIcon} alt='cart'/><p className='inroduction-info__block-text'>Функціональне планування</p></div>
            </div>

            <p className='introduction-info__text'>І це ще далеко не всі переваги комплексу!</p>
          </div>
        </div>
      </>
  );
}