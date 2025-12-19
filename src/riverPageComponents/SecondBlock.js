import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import FsLightbox from 'fslightbox-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../beskidPageComponents/Slider.css';


import riverSec1 from '../assets/RiverPage/images/seecond_info_block/0.webp'
import riverSec2 from '../assets/RiverPage/images/seecond_info_block/1.webp'
import riverSec3 from '../assets/RiverPage/images/seecond_info_block/2.webp'
import riverSec4 from '../assets/RiverPage/images/seecond_info_block/3.webp'


const imageArr = [
  {
    src: '0',
    alt: 'river-town'
  },
  {
    src: '1',
    alt: 'river-town'
  },
  {
    src: '2',
    alt: 'river-town'
  },
  {
    src: '3',
    alt: 'river-town'
  },
]


export default function SecondBlock() {
  const [toggler, setToggler] = useState(false)
  return (
    <>
      <div className='info-description'>

        <p className='info-description__text'>
            Територія містечка закрита та з комфортними зонами для відпочинку, <br/> сучасний дитячий майданчик, де діти можуть безпечно проводити час, поки дорослі насолоджуються спокоєм.
        </p>
      </div>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "8px",
        }}
        className="beskid-page-swiper"
      >

        {imageArr.map((item, index) => {
          return (
            <SwiperSlide onClick={() => {setToggler(!toggler)}}>
              <img className="slider-img" src={require('../assets/RiverPage/images/seecond_info_block/' + index + '.webp')} alt={item.alt}/>
            </SwiperSlide>
          )
        })}
        
      </Swiper>

      <FsLightbox 
        toggler={toggler}
        sources={[
          riverSec1,
          riverSec2,
          riverSec3,
          riverSec4,
        ]}
      />
    </>
  );
}