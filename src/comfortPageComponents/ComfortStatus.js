import React, { useState } from 'react'
import '../components/BuildingStatus.scss'
import ComfortStatusSlider from '../components/ComfortStatusSlider'
import FsLightbox from 'fslightbox-react'


// import images

import comfortMay1 from '../assets/images/build-status/comfort-status/may1.webp'
import comfortMay2 from '../assets/images/build-status/comfort-status/may2.webp'
import comfortMay3 from '../assets/images/build-status/comfort-status/may3.webp'
import comfortMay4 from '../assets/images/build-status/comfort-status/may4.webp'
import comfortJune1 from '../assets/images/build-status/comfort-status/jun1.webp'
import comfortJune2 from '../assets/images/build-status/comfort-status/jun2.webp'
import comfortJune3 from '../assets/images/build-status/comfort-status/jun3.webp'
import comfortJuly1 from '../assets/images/build-status/comfort-status/jul1.webp'
import comfortJuly2 from '../assets/images/build-status/comfort-status/jul2.webp'
import comfortJuly3 from '../assets/images/build-status/comfort-status/jul3.webp'
import comfortJuly4 from '../assets/images/build-status/comfort-status/jul4.webp'

function ComfortStatus() {
    const [toggler, setToggler] = useState(false)
//====================================

    return (
      <>
      <section className="build-status box" id='build-status'>
            <div className="wrapper">
                <div className="build-status__items">
                    <div className="build-status__item">
                        <h2 className="build-status__title main-title">Стани будівництва</h2>
                    </div>
                </div>

                <div className='build-status__slider'  onClick={() => {setToggler(!toggler)}}>
                    <ComfortStatusSlider/>
                </div>
            </div>
        </section>

        <FsLightbox 
          toggler={toggler}
          sources={[
            comfortJuly1,
            comfortJuly2,
            comfortJuly3,
            comfortJuly4,
            comfortJune1,
            comfortJune2,
            comfortJune3,
            comfortMay1,
            comfortMay2,
            comfortMay3,
            comfortMay4,
          ]}
        />
        </>
    )
}

export default ComfortStatus