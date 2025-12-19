import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import FsLightbox from 'fslightbox-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css';

// import required modules
import { Navigation } from 'swiper/modules';

import beskidImg1 from '../assets/beskidPage/images/first-slider/0.webp'
import beskidImg2 from '../assets/beskidPage/images/first-slider/1.webp'
import beskidImg3 from '../assets/beskidPage/images/first-slider/2.webp'
import beskidImg4 from '../assets/beskidPage/images/first-slider/3.webp'
import beskidImg5 from '../assets/beskidPage/images/first-slider/4.webp'
import beskidImg6 from '../assets/beskidPage/images/first-slider/5.webp'
import beskidImg7 from '../assets/beskidPage/images/first-slider/6.webp'

const images = [
  {
    src: '0',
    alt: 'beskid-home'
  },
  {
    src: '1',
    alt: 'beskid-home'
  },
  {
    src: '2',
    alt: 'beskid-home'
  },
  {
    src: '3',
    alt: 'beskid-home'
  },
    {
    src: '4',
    alt: 'beskid-home'
  },
    {
    src: '5',
    alt: 'beskid-home'
  },
    {
    src: '6',
    alt: 'beskid-home'
  },
]


export default function FirstSlider() {
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
        className="beskid-page-swiper"
      >

        {images.map((item, index) => {
          return (
            <SwiperSlide onClick={() => {setToggler(!toggler)}}>
              <img className="slider-img" src={require('../assets/beskidPage/images/first-slider/' + index + '.webp')} alt={item.alt}/>
            </SwiperSlide>
          )
        })}
        
      </Swiper>

      <div className='info-description'>
        <h2 className='info-description__title'>FOMICH RESIDENCE GUESTHOUSES</h2>
        <p className='info-description__text'>
          Це унікальний котеджний комплекс в самому серці Карпат з власною SPA-зоною та басейном. Котеджі розташовані на вершині поблизу карпатського лісу, а з тераси та вікон відкривається дивовижний краєвид на підйомник 1R гірськолижного курорту Bukovel.
        </p>
        <p className='info-description__text'>
          Проектуючи комплекс BESKID, ми подбали про те, щоб він був інвестиційно привабливим, тому врахували наявність власної інфраструктури та обрали найкраще розташування! До ГК Bukovel, ви зможете дістатись за 5 хвилин.
        </p>
        <p className='info-description__text'>
          Капітальне будівництво та індивідуальне газове опалення - наша велика перевага. Всі клопоти по обслуговуванні котеджів візьме на себе управлінська компанія, а ви отримуватимете тільки чистий дохід!
        </p>
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
        ]}
      />
    </>
  );
}