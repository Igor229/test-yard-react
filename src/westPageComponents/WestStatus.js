import React, { useState } from 'react'
import '../components/BuildingStatus.scss'
import WestStatusSlider from '../components/WestStatusSlider'
import FsLightbox from 'fslightbox-react'
import { motion } from 'framer-motion'

// import images

// queue11
import que11April1 from '../assets/images/build-status/west-status/queue11/april1.webp'
import que11April2 from '../assets/images/build-status/west-status/queue11/april2.webp'
import que11May1 from '../assets/images/build-status/west-status/queue11/may1.webp'
import que11May2 from '../assets/images/build-status/west-status/queue11/may2.webp'
import que11May3 from '../assets/images/build-status/west-status/queue11/may3.webp'
import que11May4 from '../assets/images/build-status/west-status/queue11/may4.webp'
import que11June1 from '../assets/images/build-status/west-status/queue11/jun1.webp'
import que11June2 from '../assets/images/build-status/west-status/queue11/jun2.webp'
import que11June3 from '../assets/images/build-status/west-status/queue11/jun3.webp'
import que11July1 from '../assets/images/build-status/west-status/queue11/jul1.webp'
import que11July2 from '../assets/images/build-status/west-status/queue11/jul2.webp'
import que11July3 from '../assets/images/build-status/west-status/queue11/jul3.webp'
import que11July4 from '../assets/images/build-status/west-status/queue11/jul4.webp'
import que11July5 from '../assets/images/build-status/west-status/queue11/jul5.webp'
import que11July6 from '../assets/images/build-status/west-status/queue11/jul6.webp'
import que11July7 from '../assets/images/build-status/west-status/queue11/jul7.webp'
import que11July8 from '../assets/images/build-status/west-status/queue11/jul8.webp'
import que11July9 from '../assets/images/build-status/west-status/queue11/jul9.webp'
import que11Sept1 from '../assets/images/build-status/west-status/queue11/sept1.webp'
import que11Sept2 from '../assets/images/build-status/west-status/queue11/sept2.webp'
import que11Sept3 from '../assets/images/build-status/west-status/queue11/sept3.webp'
import que11Sept4 from '../assets/images/build-status/west-status/queue11/sept4.webp'
import que11Oct1 from '../assets/images/build-status/west-status/queue11/oct1.webp'
import que11Oct2 from '../assets/images/build-status/west-status/queue11/oct2.webp'
import que11Oct3 from '../assets/images/build-status/west-status/queue11/oct3.webp'
import que11Oct4 from '../assets/images/build-status/west-status/queue11/oct4.webp'
import que11Oct5 from '../assets/images/build-status/west-status/queue11/oct5.webp'
import que11Oct6 from '../assets/images/build-status/west-status/queue11/oct6.webp'
import que11Nov1 from '../assets/images/build-status/west-status/queue11/nov1.webp'
import que11Nov2 from '../assets/images/build-status/west-status/queue11/nov2.webp'
import que11Nov3 from '../assets/images/build-status/west-status/queue11/nov3.webp'
import que11Nov4 from '../assets/images/build-status/west-status/queue11/nov4.webp'
import que11Nov5 from '../assets/images/build-status/west-status/queue11/nov5.webp'
import que11Nov6 from '../assets/images/build-status/west-status/queue11/nov6.webp'
import que11Nov7 from '../assets/images/build-status/west-status/queue11/nov7.webp'
import que11Nov8 from '../assets/images/build-status/west-status/queue11/nov8.webp'
import que11Nov9 from '../assets/images/build-status/west-status/queue11/nov9.webp'
import que11Nov10 from '../assets/images/build-status/west-status/queue11/nov10.webp'
import que11Nov11 from '../assets/images/build-status/west-status/queue11/nov11.webp'
import que11December1 from '../assets/images/build-status/west-status/queue11/december1.webp'
import que11December2 from '../assets/images/build-status/west-status/queue11/december2.webp'
import que11Jan1 from '../assets/images/build-status/west-status/queue11/jan1.webp'
import que11Jan2 from '../assets/images/build-status/west-status/queue11/jan2.webp'
import que11Jan3 from '../assets/images/build-status/west-status/queue11/jan3.webp'
import que11Jan4 from '../assets/images/build-status/west-status/queue11/jan4.webp'
import que11Feb1 from '../assets/images/build-status/west-status/queue11/feb1.webp'
import que11Feb2 from '../assets/images/build-status/west-status/queue11/feb2.webp'
import que11Feb3 from '../assets/images/build-status/west-status/queue11/feb3.webp'
import que11Feb4 from '../assets/images/build-status/west-status/queue11/feb4.webp'
import que11Feb5 from '../assets/images/build-status/west-status/queue11/feb5.webp'
import que11Mar1 from '../assets/images/build-status/west-status/queue11/mar1.webp'
import que11Mar2 from '../assets/images/build-status/west-status/queue11/mar2.webp'
import que11Mar3 from '../assets/images/build-status/west-status/queue11/mar3.webp'
import que11Mar4 from '../assets/images/build-status/west-status/queue11/mar4.webp'
import que11Mar5 from '../assets/images/build-status/west-status/queue11/mar5.webp'
import que11Mar6 from '../assets/images/build-status/west-status/queue11/mar6.webp'

// queue12
import que12July1 from '../assets/images/build-status/west-status/queue12/sept1.webp'
import que12July2 from '../assets/images/build-status/west-status/queue12/sept2.webp'
import que12July3 from '../assets/images/build-status/west-status/queue12/sept3.webp'
import que12July4 from '../assets/images/build-status/west-status/queue12/sept4.webp'
import que12Oct1 from '../assets/images/build-status/west-status/queue12/oct1.webp'
import que12Oct2 from '../assets/images/build-status/west-status/queue12/oct2.webp'
import que12Oct3 from '../assets/images/build-status/west-status/queue12/oct3.webp'
import que12Oct4 from '../assets/images/build-status/west-status/queue12/oct4.webp'
import que12Nov1 from '../assets/images/build-status/west-status/queue12/nov1.webp'
import que12Nov2 from '../assets/images/build-status/west-status/queue12/nov2.webp'
import que12Nov3 from '../assets/images/build-status/west-status/queue12/nov3.webp'
import que12Nov4 from '../assets/images/build-status/west-status/queue12/nov4.webp'
import que12Nov5 from '../assets/images/build-status/west-status/queue12/nov5.webp'
import que12Nov6 from '../assets/images/build-status/west-status/queue12/nov6.webp'
import que12Nov7 from '../assets/images/build-status/west-status/queue12/nov7.webp'
import que12Nov8 from '../assets/images/build-status/west-status/queue12/nov8.webp'
import que12Nov9 from '../assets/images/build-status/west-status/queue12/nov9.webp'
import que12Nov10 from '../assets/images/build-status/west-status/queue12/nov10.webp'
import que12Nov11 from '../assets/images/build-status/west-status/queue12/nov11.webp'
import que12Nov12 from '../assets/images/build-status/west-status/queue12/nov12.webp'
import que12December1 from '../assets/images/build-status/west-status/queue12/december1.webp'
import que12December2 from '../assets/images/build-status/west-status/queue12/december2.webp'
import que12December3 from '../assets/images/build-status/west-status/queue12/december3.webp'
import que12Jan1 from '../assets/images/build-status/west-status/queue12/jan1.webp'
import que12Jan2 from '../assets/images/build-status/west-status/queue12/jan2.webp'
import que12Jan3 from '../assets/images/build-status/west-status/queue12/jan3.webp'
import que12Jan4 from '../assets/images/build-status/west-status/queue12/jan4.webp'
import que12Jan5 from '../assets/images/build-status/west-status/queue12/jan5.webp'
import que12Feb1 from '../assets/images/build-status/west-status/queue12/feb1.webp'
import que12Feb2 from '../assets/images/build-status/west-status/queue12/feb2.webp'
import que12Feb3 from '../assets/images/build-status/west-status/queue12/feb3.webp'
import que12Feb4 from '../assets/images/build-status/west-status/queue12/feb4.webp'
import que12Mar1 from '../assets/images/build-status/west-status/queue12/mar1.webp'
import que12Mar2 from '../assets/images/build-status/west-status/queue12/mar2.webp'
import que12Mar3 from '../assets/images/build-status/west-status/queue12/mar3.webp'
import que12Mar4 from '../assets/images/build-status/west-status/queue12/mar4.webp'
import que12Mar5 from '../assets/images/build-status/west-status/queue12/mar5.webp'
import que12Mar6 from '../assets/images/build-status/west-status/queue12/mar6.webp'

  // cards data
const album11 = [
  {
    img: que11Mar1,
    month: 'Березень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que11Mar2,
    month: 'Березень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que11Mar3,
    month: 'Березень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que11Mar4,
    month: 'Березень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que11Mar5,
    month: 'Березень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que11Mar6,
    month: 'Березень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que11Feb1,
    month: 'Лютий 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que11Feb2,
    month: 'Лютий 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que11Feb3,
    month: 'Лютий 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que11Feb4,
    month: 'Лютий 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que11Feb5,
    month: 'Лютий 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que11Jan1,
    month: 'Січень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que11Jan2,
    month: 'Січень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que11Jan3,
    month: 'Січень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que11Jan4,
    month: 'Січень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que11December1,
    month: 'Грудень',
    title: 'west town',
    info: ''
  },
  {
    img: que11December2,
    month: 'Грудень',
    title: 'west town',
    info: ''
  },
  {
    img: que11Nov9,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que11Nov10,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que11Nov11,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que11Nov1,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que11Nov2,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que11Nov3,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que11Nov4,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que11Nov5,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que11Nov6,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que11Nov7,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que11Nov8,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que11Oct1,
    month: 'Жовтень',
    title: 'west town',
    info: ''
  },
  {
    img: que11Oct2,
    month: 'Жовтень',
    title: 'west town',
    info: ''
  },
  {
    img: que11Oct3,
    month: 'Жовтень',
    title: 'west town',
    info: ''
  },
  {
    img: que11Oct4,
    month: 'Жовтень',
    title: 'west town',
    info: ''
  },
  {
    img: que11Oct5,
    month: 'Жовтень',
    title: 'west town',
    info: ''
  },
  {
    img: que11Oct6,
    month: 'Жовтень',
    title: 'west town',
    info: ''
  },
  {
    img: que11Sept1,
    month: 'Вересень',
    title: 'west town',
    info: ''
  },
  {
    img: que11Sept2,
    month: 'Вересень',
    title: 'west town',
    info: ''
  },
  {
    img: que11Sept3,
    month: 'Вересень',
    title: 'west town',
    info: ''
  },
  {
    img: que11Sept4,
    month: 'Вересень',
    title: 'west town',
    info: ''
  },
  {
    img: que11July1,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que11July2,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que11July3,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que11July4,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que11July5,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que11July6,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que11July7,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que11July8,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que11July9,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que11June1,
    month: 'Червень',
    title: 'west town',
    info: ''
  },
  {
    img: que11June2,
    month: 'Червень',
    title: 'west town',
    info: ''
  },
  {
    img: que11June3,
    month: 'Червень',
    title: 'west town',
    info: ''
  },
  {
    img: que11May1,
    month: 'Травень',
    title: 'west town',
    info: ''
  },
  {
    img: que11May2,
    month: 'Травень',
    title: 'west town',
    info: ''
  },
  {
    img: que11May3,
    month: 'Травень',
    title: 'west town',
    info: ''
  },
  {
    img: que11May4,
    month: 'Травень',
    title: 'west town',
    info: ''
  },
  {
    img: que11April1,
    month: 'Квітень',
    title: 'west town',
    info: ''
  },
  {
    img: que11April2,
    month: 'Квітень',
    title: 'west town',
    info: ''
  },
]

const album12 = [
  {
    img: que12Mar1,
    month: 'Березень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que12Mar2,
    month: 'Березень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que12Mar3,
    month: 'Березень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que12Mar4,
    month: 'Березень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que12Mar5,
    month: 'Березень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que12Mar6,
    month: 'Березень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que12Feb1,
    month: 'Лютий 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que12Feb2,
    month: 'Лютий 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que12Feb3,
    month: 'Лютий 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que12Feb4,
    month: 'Лютий 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que12Jan1,
    month: 'Січень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que12Jan2,
    month: 'Січень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que12Jan3,
    month: 'Січень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que12Jan4,
    month: 'Січень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que12Jan5,
    month: 'Січень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que12December1,
    month: 'Грудень',
    title: 'west town',
    info: ''
  },
  {
    img: que12December2,
    month: 'Грудень',
    title: 'west town',
    info: ''
  },
  {
    img: que12December3,
    month: 'Грудень',
    title: 'west town',
    info: ''
  },
  {
    img: que12Nov9,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que12Nov10,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que12Nov11,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que12Nov12,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que12Nov1,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que12Nov2,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que12Nov3,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que12Nov4,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que12Nov5,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que12Nov6,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que12Nov7,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que12Nov8,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que12Oct1,
    month: 'Жовтень',
    title: 'west town',
    info: ''
  },
  {
    img: que12Oct2,
    month: 'Жовтень',
    title: 'west town',
    info: ''
  },
  {
    img: que12Oct3,
    month: 'Жовтень',
    title: 'west town',
    info: ''
  },
  {
    img: que12Oct4,
    month: 'Жовтень',
    title: 'west town',
    info: ''
  },
  {
    img: que12July1,
    month: 'Вересень',
    title: 'west town',
    info: ''
  },
  {
    img: que12July2,
    month: 'Вересень',
    title: 'west town',
    info: ''
  },
  {
    img: que12July3,
    month: 'Вересень',
    title: 'west town',
    info: ''
  },
  {
    img: que12July4,
    month: 'Вересень',
    title: 'west town',
    info: ''
  },
]

function WestStatus() {
    const [togglerOne, setTogglerOne] = useState(false)
    const [togglerTwo, setTogglerTwo] = useState(false)
//====================================
    const [activeSlider, setActiveSlider] = useState(1)
    const showSlider = (sliderNumber) => {
        setActiveSlider(sliderNumber)
    }
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

                <div className='build-status__slider'>
                    <div className='queue'>
                      <motion.button whileHover={{scale: 1.15}} transition={{duration: 0.1}} type='button' className={activeSlider === 1 ? 'queue-button--active' : 'queue-button'} onClick={() => showSlider(1)}>11 черга</motion.button>
                      <motion.button whileHover={{scale: 1.15}} transition={{duration: 0.1}} type='button' className={activeSlider === 2 ? 'queue-button--active' : 'queue-button'} onClick={() => showSlider(2)}>12 черга</motion.button>
                    </div>
                    <div className={activeSlider === 1 ? '' : 'slider-hidden'} onClick={() => {setTogglerOne(!togglerOne)}}>
                        <WestStatusSlider photos={album11}/>
                    </div>
                    <div className={activeSlider === 2 ? '' : 'slider-hidden'} onClick={() => {setTogglerTwo(!togglerTwo)}}>
                        <WestStatusSlider photos={album12}/>
                    </div>
                </div>
            </div>
        </section>

        <FsLightbox 
          toggler={togglerOne}
          sources={[
            que11Mar1,
            que11Mar2,
            que11Mar3,
            que11Mar4,
            que11Mar5,
            que11Mar6,
            que11Feb1,
            que11Feb2,
            que11Feb3,
            que11Feb4,
            que11Feb5,
            que11Jan1,
            que11Jan2,
            que11Jan3,
            que11Jan4,
            que11December1,
            que11December2,
            que11Nov9,
            que11Nov10,
            que11Nov11,
            que11Nov1,
            que11Nov2,
            que11Nov3,
            que11Nov4,
            que11Nov5,
            que11Nov6,
            que11Nov7,
            que11Nov8,
            que11Oct1,
            que11Oct2,
            que11Oct3,
            que11Oct4,
            que11Oct5,
            que11Oct6,
            que11Sept1,
            que11Sept2,
            que11Sept3,
            que11Sept4,
            que11July1,
            que11July2,
            que11July3,
            que11July4,
            que11July5,
            que11July6,
            que11July7,
            que11July8,
            que11July9,
            que11June1,
            que11June2,
            que11June3,
            que11May1,
            que11May2,
            que11May3,
            que11May4,
            que11April1,
            que11April2,
          ]}
        />

        <FsLightbox 
          toggler={togglerTwo}
          sources={[
            que12Mar1,
            que12Mar2,
            que12Mar3,
            que12Mar4,
            que12Mar5,
            que12Mar6,
            que12Feb1,
            que12Feb2,
            que12Feb3,
            que12Feb4,
            que12Jan1,
            que12Jan2,
            que12Jan3,
            que12Jan4,
            que12Jan5,
            que12December1,
            que12December2,
            que12December3,
            que12Nov9,
            que12Nov10,
            que12Nov11,
            que12Nov12,
            que12Nov1,
            que12Nov2,
            que12Nov3,
            que12Nov4,
            que12Nov5,
            que12Nov6,
            que12Nov7,
            que12Nov8,
            que12Oct1,
            que12Oct2,
            que12Oct3,
            que12Oct4,
            que12July1,
            que12July2,
            que12July3,
            que12July4,
          ]}
        />
        </>
    )
}

export default WestStatus