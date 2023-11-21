import './PlanningType.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";

function PlanningType (props) {
    const {type, area, terrace, floorOne, floorTwo} = props

    return (
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

                    <SwiperSlide><img src={floorOne} className='card__item-img' alt='type image'/></SwiperSlide>
                    <SwiperSlide><img src={floorTwo} className='card__item-img' alt='type image'/></SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default PlanningType