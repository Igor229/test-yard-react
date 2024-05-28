import { useState } from 'react';
import FsLightbox from 'fslightbox-react';
// import './PlanningType.scss'
import "swiper/css";

function WestPlanningTypes (props) {
    const {type, area, terrace, floorOne} = props
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
                        </div>
                    </div>

                    {/* bottom box with image */}
                    <div className='plan-slider'>
                        <div className='card__item-slider'>
                            <div onClick={() => {setToggler(!toggler)}}><img src={floorOne} className='plannigTypeImg' style={{width: '100%', height: '100%'}} alt='type image'/></div>
                        </div>
                    </div>
                </div>
            </div>

        <FsLightbox
            toggler={toggler}
            sources={[
                floorOne,
            ]}
        />
        </>
        
    )
}

export default WestPlanningTypes