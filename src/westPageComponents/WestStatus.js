import React, { useState } from 'react'
import '../components/BuildingStatus.scss'
import WestStatusSlider from '../components/WestStatusSlider'
import FsLightbox from 'fslightbox-react'
import { motion } from 'framer-motion'

// import images

// Queue 10
import que10Img1 from '../assets/images/build-status/west-status/queue10/que10-1.webp'
import que10Img2 from '../assets/images/build-status/west-status/queue10/que10-2.webp'
import que10Img3 from '../assets/images/build-status/west-status/queue10/que10-3.webp'
import que10Nov1 from '../assets/images/build-status/west-status/queue10/november1.webp'
import que10Nov2 from '../assets/images/build-status/west-status/queue10/november2.webp'
import que10Nov3 from '../assets/images/build-status/west-status/queue10/november3.webp'
import que10Nov4 from '../assets/images/build-status/west-status/queue10/november4.webp'
import que10Feb1 from '../assets/images/build-status/west-status/queue10/february1.webp'
import que10Feb2 from '../assets/images/build-status/west-status/queue10/february2.webp'
import que10March1 from '../assets/images/build-status/west-status/queue10/march1.webp'
import que10March2 from '../assets/images/build-status/west-status/queue10/march2.webp'
import que10March3 from '../assets/images/build-status/west-status/queue10/march3.webp'
import que10March4 from '../assets/images/build-status/west-status/queue10/march4.webp'
import que10April1 from '../assets/images/build-status/west-status/queue10/april1.webp'
import que10April2 from '../assets/images/build-status/west-status/queue10/april2.webp'
import que10April3 from '../assets/images/build-status/west-status/queue10/april3.webp'
import que10April4 from '../assets/images/build-status/west-status/queue10/april4.webp'
import que10April5 from '../assets/images/build-status/west-status/queue10/april5.webp'
import que10May1 from '../assets/images/build-status/west-status/queue10/may1.webp'
import que10May2 from '../assets/images/build-status/west-status/queue10/may2.webp'
import que10May3 from '../assets/images/build-status/west-status/queue10/may3.webp'
import que10May4 from '../assets/images/build-status/west-status/queue10/may4.webp'
import que10May5 from '../assets/images/build-status/west-status/queue10/may5.webp'
import que10June1 from '../assets/images/build-status/west-status/queue10/jun1.webp'
import que10June2 from '../assets/images/build-status/west-status/queue10/jun2.webp'
import que10June3 from '../assets/images/build-status/west-status/queue10/jun3.webp'
import que10June4 from '../assets/images/build-status/west-status/queue10/jun4.webp'
import que10July1 from '../assets/images/build-status/west-status/queue10/jul1.webp'
import que10July2 from '../assets/images/build-status/west-status/queue10/jul2.webp'
import que10July3 from '../assets/images/build-status/west-status/queue10/jul3.webp'
import que10July4 from '../assets/images/build-status/west-status/queue10/jul4.webp'
import que10Sept1 from '../assets/images/build-status/west-status/queue10/sept1.webp'
import que10Sept2 from '../assets/images/build-status/west-status/queue10/sept2.webp'
import que10Sept3 from '../assets/images/build-status/west-status/queue10/sept3.webp'
import que10Sept4 from '../assets/images/build-status/west-status/queue10/sept4.webp'
import que10Oct1 from '../assets/images/build-status/west-status/queue10/oct1.webp'
import que10Oct2 from '../assets/images/build-status/west-status/queue10/oct2.webp'
import que10Oct3 from '../assets/images/build-status/west-status/queue10/oct3.webp'
import que10Oct4 from '../assets/images/build-status/west-status/queue10/oct4.webp'
import que10Oct5 from '../assets/images/build-status/west-status/queue10/oct5.webp'
import que10Nov5 from '../assets/images/build-status/west-status/queue10/november5.webp'
import que10Nov6 from '../assets/images/build-status/west-status/queue10/november6.webp'
import que10Nov7 from '../assets/images/build-status/west-status/queue10/november7.webp'

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

  // cards data

const album10 = [
  {
    img: que10Nov5,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que10Nov6,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que10Nov7,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que10Oct1,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que10Oct2,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que10Oct3,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que10Oct4,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que10Oct5,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que10Sept1,
    month: 'Вересень',
    title: 'west town',
    info: ''
  },
  {
    img: que10Sept2,
    month: 'Вересень',
    title: 'west town',
    info: ''
  },
  {
    img: que10Sept3,
    month: 'Вересень',
    title: 'west town',
    info: ''
  },
  {
    img: que10Sept4,
    month: 'Вересень',
    title: 'west town',
    info: ''
  },
  {
    img: que10July1,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que10July2,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que10July3,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que10July4,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que10June1,
    month: 'Червень',
    title: 'west town',
    info: ''
  },
  {
    img: que10June2,
    month: 'Червень',
    title: 'west town',
    info: ''
  },
  {
    img: que10June3,
    month: 'Червень',
    title: 'west town',
    info: ''
  },
  {
    img: que10June4,
    month: 'Червень',
    title: 'west town',
    info: ''
  },
  {
    img: que10May1,
    month: 'Травень',
    title: 'west town',
    info: ''
  },
  {
    img: que10May2,
    month: 'Травень',
    title: 'west town',
    info: ''
  },
  {
    img: que10May3,
    month: 'Травень',
    title: 'west town',
    info: ''
  },
  {
    img: que10May4,
    month: 'Травень',
    title: 'west town',
    info: ''
  },
  {
    img: que10May5,
    month: 'Травень',
    title: 'west town',
    info: ''
  },
  {
    img: que10April1,
    month: 'Квітень',
    title: 'west town',
    info: ''
  },
  {
    img: que10April2,
    month: 'Квітень',
    title: 'west town',
    info: ''
  },
  {
    img: que10April3,
    month: 'Квітень',
    title: 'west town',
    info: ''
  },
  {
    img: que10April4,
    month: 'Квітень',
    title: 'west town',
    info: ''
  },
  {
    img: que10April5,
    month: 'Квітень',
    title: 'west town',
    info: ''
  },
  {
    img: que10March1,
    month: 'Березень',
    title: 'west town',
    info: ''
  },
  {
    img: que10March2,
    month: 'Березень',
    title: 'west town',
    info: ''
  },
  {
    img: que10March3,
    month: 'Березень',
    title: 'west town',
    info: ''
  },
  {
    img: que10March4,
    month: 'Березень',
    title: 'west town',
    info: ''
  },
  {
    img: que10Feb1,
    month: 'Лютий',
    title: 'west town',
    info: ''
  },
  {
    img: que10Feb2,
    month: 'Лютий',
    title: 'west town',
    info: ''
  },
  {
    img: que10Nov1,
    month: 'Січень',
    title: 'west town',
    info: ''
  },
  {
    img: que10Nov2,
    month: 'Січень',
    title: 'west town',
    info: ''
  },
  {
    img: que10Nov3,
    month: 'Січень',
    title: 'west town',
    info: ''
  },
  {
    img: que10Nov4,
    month: 'Січень',
    title: 'west town',
    info: ''
  },
  {
    img: que10Img1,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que10Img2,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que10Img3,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
]

const album11 = [
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
    const [togglerTwo, setTogglerTwo] = useState(false)
    const [togglerThree, setTogglerThree] = useState(false)
    const [togglerFour, setTogglerFour] = useState(false)
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
                      <motion.button whileHover={{scale: 1.15}} transition={{duration: 0.1}} type='button' className={activeSlider === 1 ? 'queue-button--active' : 'queue-button'} onClick={() => showSlider(1)}>10 черга</motion.button>
                      <motion.button whileHover={{scale: 1.15}} transition={{duration: 0.1}} type='button' className={activeSlider === 2 ? 'queue-button--active' : 'queue-button'} onClick={() => showSlider(2)}>11 черга</motion.button>
                      <motion.button whileHover={{scale: 1.15}} transition={{duration: 0.1}} type='button' className={activeSlider === 3 ? 'queue-button--active' : 'queue-button'} onClick={() => showSlider(3)}>12 черга</motion.button>
                    </div>
                    <div className={activeSlider === 1 ? '' : 'slider-hidden'} onClick={() => {setTogglerTwo(!togglerTwo)}}>
                        <WestStatusSlider photos={album10}/>
                    </div>
                    <div className={activeSlider === 2 ? '' : 'slider-hidden'} onClick={() => {setTogglerThree(!togglerThree)}}>
                        <WestStatusSlider photos={album11}/>
                    </div>
                    <div className={activeSlider === 3 ? '' : 'slider-hidden'} onClick={() => {setTogglerFour(!togglerFour)}}>
                        <WestStatusSlider photos={album12}/>
                    </div>
                </div>
            </div>
        </section>

        <FsLightbox 
          toggler={togglerTwo}
          sources={[
            que10Nov5,
            que10Nov6,
            que10Nov7,
            que10Oct1,
            que10Oct2,
            que10Oct3,
            que10Oct4,
            que10Oct5,
            que10Sept1,
            que10Sept2,
            que10Sept3,
            que10Sept4,
            que10July1,
            que10July2,
            que10July3,
            que10July4,
            que10June1,
            que10June2,
            que10June3,
            que10June4,
            que10May1,
            que10May2,
            que10May3,
            que10May4,
            que10May5,
            que10April1,
            que10April2,
            que10April3,
            que10April4,
            que10April5,
            que10March1,
            que10March2,
            que10March3,
            que10March4,
            que10Feb1,
            que10Feb2,
            que10Nov1,
            que10Nov2,
            que10Nov3,
            que10Nov4,
            que10Img1,
            que10Img2,
            que10Img3,
          ]}
        />

        <FsLightbox 
          toggler={togglerThree}
          sources={[
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
          toggler={togglerFour}
          sources={[
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