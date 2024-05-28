import './WestAdventages.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import { Navigation, Pagination } from 'swiper/modules';

import imgOne from '../assets/westPage/images/partners/1.jpg'
import imgTwo from '../assets/westPage/images/partners/2.jpg'
import imgThree from '../assets/westPage/images/partners/3.jpg'

const adventagesData = [
    {
        text: '',
        image: imgOne,
    },
    {
        text: '',
        image: imgTwo,
    },
    {
        text: '',
        image: imgThree,
    },
]

function AdventageBox (props) {
    const {image, text} = props
    
    return (
        
        <div className='advantage__box'>
            <p className='adventage__box-text'>{text}</p>
            <img src={image} alt='box-image' className='adventage__box-image' />
        </div>
    )
}

function Partners () {
    return (
        <div className='adventage'>
            <Swiper
                slidesPerView={3}
                spaceBetween={0}
                freeMode={true}
                pagination={{dynamicBullets: true}}
                autoplay = {false}
    
                breakpoints={{
                    279: {
                        slidesPerView: 1,
                    },
                    620: {
                        slidesPerView: 2,
                    },
                    821: {
                        slidesPerView: 3,
                    },
    
                }}
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-navigation-size": "8px",
                }}
    
                modules={[FreeMode, Autoplay, Pagination, Navigation]}
                className="westAdventageSlider"
            >
                {adventagesData.map((item, index) => {
                    return (
                        <SwiperSlide>
                            <AdventageBox key={index} {...item}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            {/* <div className='grad'></div> */}
        </div>
    )
}

export default Partners