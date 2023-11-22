import './WestAdventages.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';

import imgOne from '../assets/westPage/images/adventages/1.jpg'
import imgTwo from '../assets/westPage/images/adventages/2.jpg'
import imgThree from '../assets/westPage/images/adventages/3.jpg'

const adventagesData = [
    {
        text: 'Два паркомісця входить у вартість до кожного будинку',
        image: imgOne,
    },
    {
        text: 'Приватна земельна ділянка',
        image: imgTwo,
    },
    {
        text: 'Повноцінний будинок 120 м²',
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
                pagination={true}
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
    
                modules={[FreeMode, Autoplay]}
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