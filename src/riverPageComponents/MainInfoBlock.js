// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import FsLightbox from 'fslightbox-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../westPageComponents/WestSlider.css'
import '../pages/WestPage.scss'
import './MainInfoBlock.scss'
// import required modules
import { Navigation } from 'swiper/modules';
import west0 from '../assets/RiverPage/images/main_info_block/0.webp'

const images = [
  {
    src: '0',
    alt: 'beskid-home'
  }
]

function MainInfoBlock () {
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
            className="west-page-swiper river-info-swiper"
          >
    
            {images.map((item, index) => {
              return (
                <SwiperSlide onClick={() => {setToggler(!toggler)}}>
                  <img className="slider-img" src={require('../assets/RiverPage/images/main_info_block/' + index + '.webp')} alt={item.alt}/>
                </SwiperSlide>
              )
            })}
            
          </Swiper>

            <div className='info-description west-info river-info-text'>
              <h2 className='info-description__title'>RIVER TOWN</h2>
              <p className='info-description__text'>
                Це нове котеджне містечко таунхаусів закритого типу, створене для комфортного проживання, де відчувається ідеальний баланс між природою, комфортом та інфраструктурою, поєднуючи природу навколо та зручність розташування — усього 5 хвилин до центру Івано-Франківська.  Містечко розташоване поруч із зеленою зоною та місцями для прогулянок. У декількох хвилинах — річка, де можна відпочити, провести час на свіжому повітрі або насолодитися ранковими пробіжками. А з іншого боку — вся необхідна соціальна інфраструктура: дитячий садок і школа, приватні навчальні заклади, продуктові магазини, аптеки, супермаркети тощо. Усе це робить життя в River Town максимально зручним для сім’ї.
              </p>
            </div>

          <FsLightbox
            toggler={toggler}
            sources={[
              west0,
            ]}
          />
        </>
    );
}

export default MainInfoBlock