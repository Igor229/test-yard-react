import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import FsLightbox from 'fslightbox-react';

import planTypeMain from '../assets/beskidPage/images/planning-types/0.webp'
import planTypeOne from '../assets/beskidPage/images/planning-types/1.webp'
import planTypeTwo from '../assets/beskidPage/images/planning-types/2.webp'
import './PlanningType.scss'
import "swiper/css";

const data = [
    {
        src: '0',
        alt: 'plan-image'
    },
    {
        src: '1',
        alt: 'plan-image'
    },
    {
        src: '2',
        alt: 'plan-image'
    },
]

function PlanningType () {

    const [toggler, setToggler] = useState(false)

    return (
        <>
            <div className='plan'>
                <div className='plan-slider'>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-navigation-size": "8px",
                    }}
                    className="beskid-plan-swiper"
                >

                    {data.map((item, index) => {
                    return (
                        <SwiperSlide onClick={() => {setToggler(!toggler)}}>
                        <img className="slider-img" src={require('../assets/beskidPage/images/planning-types/' + index + '.webp')} alt={item.alt}/>
                        </SwiperSlide>
                    )
                    })}
        
                </Swiper>
                </div>

                <div className='plan-info'>
                    <h1 className='plan-info__title'>КОТЕДЖІ GUESTHOUSES</h1>
                    <p className='plan-info__text'>З сучасним дизайнерським ремонтом та максимальним наповненням "під ключ"</p>

                    <div className='plan-info__cards'>
                        <div className='plan-info__cards-box'>

                            <div className='plan-info__card'>
                                <p className='plan-info__card-title'>Загальна площа</p>
                                <p className='plan-info__card-info'>121,74 м²</p>
                            </div>

                            <div className='plan-info__card'>
                                <p className='plan-info__card-title'>Тераса</p>
                                <p className='plan-info__card-info'>27,90 м²</p>
                            </div>
                        </div>

                        <div className='plan-info__cards-box'>

                            <div className='plan-info__card'>
                                <p className='plan-info__card-title'>Кімнат</p>
                                <p className='plan-info__card-info'>3</p>
                            </div>

                            <div className='plan-info__card'>
                                <p className='plan-info__card-title'>Санвузол</p>
                                <p className='plan-info__card-info'>3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FsLightbox 
                toggler={toggler}
                sources={[
                    planTypeMain,
                    planTypeOne,
                    planTypeTwo
                ]}
      />
        </>
    )
}

export default PlanningType