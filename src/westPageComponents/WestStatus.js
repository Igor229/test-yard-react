import React, { useState } from 'react'
import '../components/BuildingStatus.scss'
import WestStatusSlider from '../components/WestStatusSlider'
import FsLightbox from 'fslightbox-react'
import { motion } from 'framer-motion'

// import images

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
import que12Apr1 from '../assets/images/build-status/west-status/queue12/apr1.webp'
import que12Apr2 from '../assets/images/build-status/west-status/queue12/apr2.webp'
import que12Apr3 from '../assets/images/build-status/west-status/queue12/apr3.webp'
import que12Apr4 from '../assets/images/build-status/west-status/queue12/apr4.webp'

//queue 13
import que13Apr1 from '../assets/images/build-status/west-status/queue13/apr1.webp'
import que13Apr2 from '../assets/images/build-status/west-status/queue13/apr2.webp'
import que13Apr3 from '../assets/images/build-status/west-status/queue13/apr3.webp'
import que13Apr4 from '../assets/images/build-status/west-status/queue13/apr4.webp'


  // cards data
const album12 = [
  {
    img: que12Apr1,
    month: 'Квітень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que12Apr2,
    month: 'Квітень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que12Apr3,
    month: 'Квітень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que12Apr4,
    month: 'Квітень 2025',
    title: 'west town',
    info: ''
  },
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

const album13 = [
  {
    img: que13Apr1,
    month: 'Квітень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13Apr2,
    month: 'Квітень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13Apr3,
    month: 'Квітень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13Apr4,
    month: 'Квітень 2025',
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
                      <motion.button whileHover={{scale: 1.15}} transition={{duration: 0.1}} type='button' className={activeSlider === 1 ? 'queue-button--active' : 'queue-button'} onClick={() => showSlider(1)}>12 черга</motion.button>
                      <motion.button whileHover={{scale: 1.15}} transition={{duration: 0.1}} type='button' className={activeSlider === 2 ? 'queue-button--active' : 'queue-button'} onClick={() => showSlider(2)}>13 черга</motion.button>
                    </div>
                    <div className={activeSlider === 1 ? '' : 'slider-hidden'} onClick={() => {setTogglerOne(!togglerOne)}}>
                        <WestStatusSlider photos={album12}/>
                    </div>
                    <div className={activeSlider === 2 ? '' : 'slider-hidden'} onClick={() => {setTogglerTwo(!togglerTwo)}}>
                        <WestStatusSlider photos={album13}/>
                    </div>
                </div>
            </div>
        </section>

        <FsLightbox 
          toggler={togglerOne}
          sources={[
            que12Apr1,
            que12Apr2,
            que12Apr3,
            que12Apr4,
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

        <FsLightbox 
          toggler={togglerTwo}
          sources={[
            que13Apr1,
            que13Apr2,
            que13Apr3,
            que13Apr4,
          ]}
        />
        </>
    )
}

export default WestStatus