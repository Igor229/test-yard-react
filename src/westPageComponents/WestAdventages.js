import './WestAdventages.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import { Navigation, Pagination } from 'swiper/modules';

import imgOne from '../assets/westPage/images/adventages/1.webp'
import imgTwo from '../assets/westPage/images/adventages/2.webp'
import imgThree from '../assets/westPage/images/adventages/3.webp'

const adventagesData = [
    {
        text: 'Два паркомісця входить у вартість до кожного будинку',
        image: imgOne,
    },
    {
        text: 'Земельна ділянка',
        image: imgTwo,
    },
    {
        text: 'Повноцінний будинок',
        image: imgThree,
    },
]

function AdventageBox (props) {
    const {image, text} = props
    
    return (
        
        <div className='advantage__box grad'>
            <p className='adventage__box-text'>{text}</p>
            <img src={image} alt='box-image' className='adventage__box-image' />
        </div>
    )
}

function WestAdventages () {
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

export default WestAdventages