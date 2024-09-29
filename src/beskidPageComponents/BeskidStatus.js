import React, { useState } from 'react'
import '../components/BuildingStatus.scss'
import BeskidStatusSlider from '../components/BeskidStatusSlider'
import FsLightbox from 'fslightbox-react'

// import images

import beskid1 from '../assets/images/build-status/beskid-status/status-beskid1.webp'
import beskid2 from '../assets/images/build-status/beskid-status/status-beskid2.webp'
import beskid3 from '../assets/images/build-status/beskid-status/status-beskid3.webp'
import beskid4 from '../assets/images/build-status/beskid-status/status-beskid4.webp'
import beskidNovember1 from '../assets/images/build-status/beskid-status/beskid-november1-min.webp'
import beskidNovember2 from '../assets/images/build-status/beskid-status/beskid-november2-min.webp'
import beskidNovember3 from '../assets/images/build-status/beskid-status/beskid-november3-min.webp'
import beskidNovember4 from '../assets/images/build-status/beskid-status/beskid-november4-min.webp'
import beskidNovember5 from '../assets/images/build-status/beskid-status/beskid-november5-min.webp'
import beskidNovember6 from '../assets/images/build-status/beskid-status/beskid-november6-min.webp'
import beskidApril1 from '../assets/images/build-status/beskid-status/beskid-april1.webp'
import beskidApril2 from '../assets/images/build-status/beskid-status/beskid-april2.webp'
import beskidApril3 from '../assets/images/build-status/beskid-status/beskid-april3.webp'
import beskidApril4 from '../assets/images/build-status/beskid-status/beskid-april4.webp'
import beskidApril5 from '../assets/images/build-status/beskid-status/beskid-april5.webp'
import beskidApril6 from '../assets/images/build-status/beskid-status/beskid-april6.webp'
import beskidApril7 from '../assets/images/build-status/beskid-status/beskid-april7.webp'
import beskidApril8 from '../assets/images/build-status/beskid-status/beskid-april8.webp'
import beskidApril9 from '../assets/images/build-status/beskid-status/beskid-april9.webp'
import beskidMay1 from '../assets/images/build-status/beskid-status/may1.webp'
import beskidMay2 from '../assets/images/build-status/beskid-status/may2.webp'
import beskidMay3 from '../assets/images/build-status/beskid-status/may3.webp'
import beskidMay4 from '../assets/images/build-status/beskid-status/may4.webp'
import beskidMay5 from '../assets/images/build-status/beskid-status/may5.webp'
import beskidMay6 from '../assets/images/build-status/beskid-status/may6.webp'
import beskidMay7 from '../assets/images/build-status/beskid-status/may7.webp'
import beskidSeptember1 from '../assets/images/build-status/beskid-status/september1.webp'
import beskidSeptember2 from '../assets/images/build-status/beskid-status/september2.webp'
import beskidSeptember3 from '../assets/images/build-status/beskid-status/september3.webp'
import beskidSeptember4 from '../assets/images/build-status/beskid-status/september4.webp'
import beskidSeptember5 from '../assets/images/build-status/beskid-status/september5.webp'


function BeskidStatus() {
    const [togglerBeskid, setTogglerBeskid] = useState(false)
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
                <div className='build-status__slider' onClick={() => {setTogglerBeskid(!togglerBeskid)}}>
                    <BeskidStatusSlider/>
                </div>
            </div>
        </section>

        <FsLightbox 
          toggler={togglerBeskid}
          sources={[
            beskidSeptember1,
            beskidSeptember2,
            beskidSeptember3,
            beskidSeptember4,
            beskidSeptember5,
            beskidMay1,
            beskidMay2,
            beskidMay3,
            beskidMay4,
            beskidMay5,
            beskidMay6,
            beskidMay7,
            beskidApril1,
            beskidApril2,
            beskidApril3,
            beskidApril4,
            beskidApril5,
            beskidApril6,
            beskidApril7,
            beskidApril8,
            beskidApril9,
            beskidNovember1,
            beskidNovember2,
            beskidNovember3,
            beskidNovember4,
            beskidNovember5,
            beskidNovember6,
            beskid3,
            beskid4,
            beskid2,
            beskid1,
          ]}
        />
        </>
    )
}

export default BeskidStatus