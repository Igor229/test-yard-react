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
import img1 from '../assets/westPage/images/background_yard/0.webp'
import img2 from '../assets/westPage/images/background_yard/1.webp'
import img3 from '../assets/westPage/images/background_yard/2.webp'
import main_img0 from '../assets/westPage/images/background_yard/main-0.webp'
import main_img1 from '../assets/westPage/images/background_yard/main-1.webp'
import main_img2 from '../assets/westPage/images/background_yard/main-2.webp'


const background_yard_images = [
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
]

function BackgroundYard () {
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
            className="west-page-swiper back-yard-swiper"
          >
    
            {background_yard_images.map((item, index) => {
              return (
                <SwiperSlide onClick={() => {setToggler(!toggler)}}>
                  <img className="slider-img" src={require('../assets/westPage/images/background_yard/' + index + '.webp')} alt={item.alt}/>
                </SwiperSlide>
              )
            })}
            
          </Swiper>

            <div className='info-description west-info'>
              <h2 className='info-description__title'>Задній двір</h2>
              <p className='info-description__text'>
              Таунхаус - відмінна альтернатива квартирі, проте тут є великою перевагою саме наявність власної земельної ділянки, яку ви можете використати на свій розсуд. Зайнятись йогою та спортом прямо на свіжому повітрі, влаштувати сімейний сніданок на терасі та насолодитись світанком, читати улюблену книгу чи просто попрацювати - на власному подвірʼї з великим задоволенням у містечку WEST TOWN.
              </p>
            </div>

          <FsLightbox
            toggler={toggler}
            sources={[
              main_img0,
              main_img1,
              main_img2,
            ]}
          />
        </>
    );
}

export default BackgroundYard