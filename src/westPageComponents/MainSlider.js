// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './WestSlider.css'

// import required modules
import { Navigation } from 'swiper/modules';

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
]

function MainSlider () {
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
                <SwiperSlide>
                  <img className="slider-img" src={require('../assets/westPage/images/main-slider/' + index + '.jpg')} alt={item.alt}/>
                </SwiperSlide>
              )
            })}
            
          </Swiper>
        </>
    );
}

export default MainSlider