import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useState } from 'react';
import FsLightbox from 'fslightbox-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './WestSlider.css'

import quadroImg1 from '../assets/westPage/images/quadro/0.webp'
import quadroImg2 from '../assets/westPage/images/quadro/1.webp'
import quadroImg3 from '../assets/westPage/images/quadro/2.webp'

const images = [
    {
        src: '0',
        alt: 'quadro-img'
    },
    {
        src: '1',
        alt: 'quadro-img'
    },
    {
        src: '2',
        alt: 'quadro-img'
    }
]

function QuadroSlider () {
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
            className="west-page-swiper-quadro"
          >
    
            {images.map((item, index) => {
              return (
                <SwiperSlide onClick={() => {setToggler(!toggler)}}>
                  <img className="slider-img" src={require('../assets/westPage/images/quadro/' + index + '.webp')} alt={item.alt}/>
                </SwiperSlide>
              )
            })}
            
          </Swiper>

          <FsLightbox
            toggler={toggler}
            sources={[
                quadroImg1,
                quadroImg2,
                quadroImg3,
            ]}
          />
        </>
    );
}

export default QuadroSlider