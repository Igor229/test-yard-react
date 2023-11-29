import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import FsLightbox from 'fslightbox-react';
import './PlanningType.scss'
import "swiper/css";

function PlanningType (props) {
    const {type, area, terrace, floorOne, floorTwo} = props
    const [toggler, setToggler] = useState(false)

    return (
        <>
            <div className='plannings-type__item'>
                <div className="card">
                    {/* upper box with info */}
                    <div className="card__item">
                        <h3 className="card__item-title">{type}</h3>
                        <div className="card__item-info">
                            
                            <div className="plan">
                                <div className='plan-container'>
                                    <p className='plan-container__text'>Площа: {area}</p>
                                </div>
                            </div>

                            <div className="plan">
                                <div className='plan-container'>
                                    <p className='plan-container__text'>Тераса: {terrace}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* bottom box with image */}
                    <div className='plan-slider'>
                        <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-navigation-size": "8px",
                        }} 
                        className='card__item-slider'>

                            <SwiperSlide onClick={() => {setToggler(!toggler)}}><img src={floorOne} className='card__item-img' alt='type image'/></SwiperSlide>
                            <SwiperSlide onClick={() => {setToggler(!toggler)}}><img src={floorTwo} className='card__item-img' alt='type image'/></SwiperSlide>

                        </Swiper>
                    </div>         
                </div>
            </div>

        <FsLightbox
            toggler={toggler}
            sources={[
                floorOne,
                floorTwo
            ]}
        />
        </>
        
    )
}

export default PlanningType