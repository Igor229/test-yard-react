import { useState } from 'react';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import sprite from '../assets/icons/sprite.svg'
import FsLightbox from 'fslightbox-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './ComplexSlider.css';

import west1 from '../assets/images/west-town/west1.jpg'
import west2 from '../assets/images/west-town/west2.jpg'
import west3 from '../assets/images/west-town/west3.jpg'
import west4 from '../assets/images/west-town/west4.jpg'
import west5 from '../assets/images/west-town/west5.jpg'
import west6 from '../assets/images/west-town/west6.jpg'
import west7 from '../assets/images/west-town/west7.jpg'
import west8 from '../assets/images/west-town/west8.jpg'
import west9 from '../assets/images/west-town/west9.jpg'
import west10 from '../assets/images/west-town/west10.jpg'

const imgArr = [
  {
    src: 'west1',
    alt: 'west-home'
  },
  {
    src: 'west2',
    alt: 'west-home'
  },
  {
    src: 'west3',
    alt: 'west-home'
  },
  {
    src: 'west4',
    alt: 'west-home'
  },
  {
    src: 'west5',
    alt: 'west-home'
  },
  {
    src: 'west6',
    alt: 'west-home'
  },
  {
    src: 'west7',
    alt: 'west-home'
  },
  {
    src: 'west8',
    alt: 'west-home'
  },
  {
    src: 'west9',
    alt: 'west-home'
  },
  {
    src: 'west10',
    alt: 'west-home'
  },
]

export default function Slider() {
  const [toggler, setToggler] = useState(false)

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
                <SwiperSlide onClick={() => {setToggler(!toggler)}}>
                  <img className="slider-img" src={require('../assets/images/west-town/' + item.src + '.jpg')} alt={item.alt}/><div className="shadow"></div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        
        <div className='complex__info-text complex__base-card'>
          <h3 className="info__title box">WEST TOWN</h3>

          <div className="complex__text-container box">
              <div className="info__container box">
                  <p className="info-text">
                      Одне з найбільших котеджних містечок таунхаусів в Івано-Франківську WEST TOWN. Таунхаус - це найкраща альтернатива квартирі у новобудові, адже практично за ті самі кошти, ви отримуєте повноцінний будинок площею 120 м² із власною земельною ділянкою та двома паркомісцями або гаражем. Ми пропонуємо вигідні умови розтермінування до двох років з початковим внеском 30%. Більше інформації можна отримати на сторінці комплексу.
                  </p>
              </div>

              {/*=================== card actions ========================*/}
              
              <div className='info-actions'>
                  <a href='#west-town'>
                  <button className='info-actions__btn'>
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
            west1,
            west2,
            west3,
            west4,
            west5,
            west6,
            west7,
            west8,
            west9,
            west10,
        ]}
      />
    </>
  );
}

