// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import FsLightbox from 'fslightbox-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './WestSlider.css'

// import required modules
import { Navigation } from 'swiper/modules';
import west0 from '../assets/westPage/images/main-slider/0.webp'
import west1 from '../assets/westPage/images/main-slider/1.webp'
import west2 from '../assets/westPage/images/main-slider/2.webp'
import west3 from '../assets/westPage/images/main-slider/3.webp'
import west4 from '../assets/westPage/images/main-slider/4.webp'
import west5 from '../assets/westPage/images/main-slider/5.webp'
import west6 from '../assets/westPage/images/main-slider/6.webp'
import west7 from '../assets/westPage/images/main-slider/7.webp'
import west8 from '../assets/westPage/images/main-slider/8.webp'
import west9 from '../assets/westPage/images/main-slider/9.webp'

const images = [
  {
    src: '0',
    alt: 'beskid-home'
  },
  {
    src: '1',
    alt: 'west-town'
  },
  {
    src: '2',
    alt: 'west-town'
  },
  {
    src: '3',
    alt: 'west-town'
  },
  {
    src: '4',
    alt: 'west-town'
  },
  {
    src: '5',
    alt: 'west-town'
  },
  {
    src: '6',
    alt: 'west-town'
  },
  {
    src: '7',
    alt: 'west-town'
  },
  {
    src: '8',
    alt: 'west-town'
  },
  {
    src: '9',
    alt: 'west-town'
  },
]

function MainSlider () {
    const [toggler, setToggler] = useState(false)
    return (
        <>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-navigation-size": "8px",
            }}
            className="west-page-swiper"
          >
    
            {images.map((item, index) => {
              return (
                <SwiperSlide onClick={() => {setToggler(!toggler)}}>
                  <img className="slider-img" src={require('../assets/westPage/images/main-slider/' + index + '.webp')} alt={item.alt}/>
                </SwiperSlide>
              )
            })}
            
          </Swiper>

            <div className='info-description west-info'>
              <h2 className='info-description__title'>WEST TOWN</h2>
              <p className='info-description__text'>
                Найбільше містечко таунхаусів в Івано-Франківську WEST TOWN - ідеально створене для комфортного сімейного проживання, адже проектуючи цей комплекс ми подбали про інтереси всіх поколінь, особистого простору вистачить для кожного члена вашої сім’ї.
              </p>
              <p className='info-description__text'>
                Проводити час з дитиною на власному подвір’ї, читати улюблену книгу на свіжому повітрі, милуватись світанком, заходом сонця за чашкою кави чи спонтанно влаштувати вечірку-барбекю з друзями - все це можливо у містечку WEST TOWN.
              </p>
              <p className='info-description__text'>
                Таунхауси розташовані у Крихівцях поруч містечка Калинова Слобода. Затишне розташування поруч приватного сектору. До міського озера та парку ім.Шевченка  можна дістатись за 10 хвилин на авто. До Центру міста за 15 хвилин.
              </p>
            </div>

          <FsLightbox
            toggler={toggler}
            sources={[
              west0,
              west1,
              west2,
              west3,
              west4,
              west5,
              west6,
              west7,
              west8,
              west9,
            ]}
          />
        </>
    );
}

export default MainSlider