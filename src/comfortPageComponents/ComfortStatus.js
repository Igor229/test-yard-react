import React, { useState } from 'react'
import { motion } from 'framer-motion'
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
import comfortOct1 from '../assets/images/build-status/comfort-status/oct1.webp'
import comfortOct2 from '../assets/images/build-status/comfort-status/oct2.webp'
import comfortOct3 from '../assets/images/build-status/comfort-status/oct3.webp'
import comfortOct4 from '../assets/images/build-status/comfort-status/oct4.webp'
import comfortFeb1 from '../assets/images/build-status/comfort-status/feb1.webp'
import comfortFeb2 from '../assets/images/build-status/comfort-status/feb2.webp'
import comfortFeb3 from '../assets/images/build-status/comfort-status/feb3.webp'
import comfortFeb4 from '../assets/images/build-status/comfort-status/feb4.webp'
import comfortMarch1 from '../assets/images/build-status/comfort-status/march1.webp'
import comfortMarch2 from '../assets/images/build-status/comfort-status/march2.webp'
import comfortApr1 from '../assets/images/build-status/comfort-status/apr1.webp'
import comfortApr2 from '../assets/images/build-status/comfort-status/apr2.webp'
import comfortApr3 from '../assets/images/build-status/comfort-status/apr3.webp'
import comfortNewMay1 from '../assets/images/build-status/comfort-status/newmay1.webp'
import comfortNewMay2 from '../assets/images/build-status/comfort-status/newmay2.webp'
import comfortNewMay3 from '../assets/images/build-status/comfort-status/newmay3.webp'
import comfortNewMay4 from '../assets/images/build-status/comfort-status/newmay4.webp'
import comfortNewMay5 from '../assets/images/build-status/comfort-status/newmay5.webp'
import comfortNewMay6 from '../assets/images/build-status/comfort-status/newmay6.webp'
import comfortNewJuly1 from '../assets/images/build-status/comfort-status/july1.webp'
import comfortNewJuly2 from '../assets/images/build-status/comfort-status/july2.webp'
import comfortNewJuly3 from '../assets/images/build-status/comfort-status/july3.webp'
import comfortAug1 from '../assets/images/build-status/comfort-status/august1.webp'
import comfortAug2 from '../assets/images/build-status/comfort-status/august2.webp'
import comfortAug3 from '../assets/images/build-status/comfort-status/august3.webp'
import comfortAug4 from '../assets/images/build-status/comfort-status/august4.webp'
import comfortSept1 from '../assets/images/build-status/comfort-status/sept1.webp'
import comfortSept2 from '../assets/images/build-status/comfort-status/sept2.webp'
import comfortSept3 from '../assets/images/build-status/comfort-status/sept3.webp'
import comfortSept4 from '../assets/images/build-status/comfort-status/sept4.webp'
import comfortSept5 from '../assets/images/build-status/comfort-status/sept5.webp'
import comfortNOct1 from '../assets/images/build-status/comfort-status/oct1_1.webp'
import comfortNOct2 from '../assets/images/build-status/comfort-status/oct2_1.webp'
import comfortNOct3 from '../assets/images/build-status/comfort-status/oct3_1.webp'
import comfortNOct4 from '../assets/images/build-status/comfort-status/oct4_1.webp'


//queue2
import comfortJun1 from '../assets/images/build-status/comfort-status/queue2/jun1.webp'
import comfortJun2 from '../assets/images/build-status/comfort-status/queue2/jun2.webp'
import comfortJul1 from '../assets/images/build-status/comfort-status/queue2/jul1.webp'
import comfortJul2 from '../assets/images/build-status/comfort-status/queue2/jul2.webp'
import comfortJul3 from '../assets/images/build-status/comfort-status/queue2/jul3.webp'
import comfortQue2Aug1 from '../assets/images/build-status/comfort-status/queue2/august1.webp'
import comfortQue2Aug2 from '../assets/images/build-status/comfort-status/queue2/august2.webp'
import comfortQue2Aug3 from '../assets/images/build-status/comfort-status/queue2/august3.webp'
import comfortQue2Aug4 from '../assets/images/build-status/comfort-status/queue2/august4.webp'
import comfortQue2Aug5 from '../assets/images/build-status/comfort-status/queue2/august5.webp'
import comfortQue2Aug6 from '../assets/images/build-status/comfort-status/queue2/august6.webp'
import comfortQueSept1 from '../assets/images/build-status/comfort-status/queue2/sept1.webp'
import comfortQueSept2 from '../assets/images/build-status/comfort-status/queue2/sept2.webp'
import comfortQueSept3 from '../assets/images/build-status/comfort-status/queue2/sept3.webp'
import comfortQueSept4 from '../assets/images/build-status/comfort-status/queue2/sept4.webp'
import comfortQueSept5 from '../assets/images/build-status/comfort-status/queue2/sept5.webp'
import comfortQueSept6 from '../assets/images/build-status/comfort-status/queue2/sept6.webp'
import comfortQueSept7 from '../assets/images/build-status/comfort-status/queue2/sept7.webp'
import comfortQueSept8 from '../assets/images/build-status/comfort-status/queue2/sept8.webp'
import comfortQueSept9 from '../assets/images/build-status/comfort-status/queue2/sept9.webp'
import comfortQueSept10 from '../assets/images/build-status/comfort-status/queue2/sept10.webp'
import comfortQueSept11 from '../assets/images/build-status/comfort-status/queue2/sept11.webp'
import comfortQueOct1 from '../assets/images/build-status/comfort-status/queue2/oct1.webp'
import comfortQueOct2 from '../assets/images/build-status/comfort-status/queue2/oct2.webp'
import comfortQueOct3 from '../assets/images/build-status/comfort-status/queue2/oct3.webp'
import comfortQueOct4 from '../assets/images/build-status/comfort-status/queue2/oct4.webp'
import comfortQueOct5 from '../assets/images/build-status/comfort-status/queue2/oct5.webp'

  const album1 = [
    {
      img: comfortNOct1,
      month: 'Жовтень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortNOct2,
      month: 'Жовтень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortNOct3,
      month: 'Жовтень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortNOct4,
      month: 'Жовтень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortSept1,
      month: 'Вересень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortSept2,
      month: 'Вересень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortSept3,
      month: 'Вересень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortSept4,
      month: 'Вересень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortSept5,
      month: 'Вересень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortAug1,
      month: 'Липеь 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortAug2,
      month: 'Липеь 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortAug3,
      month: 'Липеь 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortAug4,
      month: 'Липеь 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortNewJuly1,
      month: 'Липень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortNewJuly2,
      month: 'Липень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortNewJuly3,
      month: 'Липень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortNewMay1,
      month: 'Травень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortNewMay2,
      month: 'Травень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortNewMay3,
      month: 'Травень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortNewMay4,
      month: 'Травень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortNewMay5,
      month: 'Травень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortNewMay6,
      month: 'Травень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortApr1,
      month: 'Квітень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortApr2,
      month: 'Квітень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortApr3,
      month: 'Квітень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortMarch1,
      month: 'Березень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortMarch2,
      month: 'Березень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortFeb1,
      month: 'Лютий',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortFeb2,
      month: 'Лютий',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortFeb3,
      month: 'Лютий',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortFeb4,
      month: 'Лютий',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortOct1,
      month: 'Жовтень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortOct2,
      month: 'Жовтень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortOct3,
      month: 'Жовтень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortOct4,
      month: 'Жовтень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortJuly1,
      month: 'Липень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortJuly2,
      month: 'Липень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortJuly3,
      month: 'Липень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortJuly4,
      month: 'Липень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortJune1,
      month: 'Червень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortJune2,
      month: 'Червень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortJune3,
      month: 'Червень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortMay1,
      month: 'Травень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortMay2,
      month: 'Травень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortMay3,
      month: 'Травень',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortMay4,
      month: 'Травень',
      title: 'COMFORT TOWN',
      info: ''
    },
  ]

  const album2 = [
    {
      img: comfortQueOct1,
      month: 'Жовтень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortQueOct2,
      month: 'Жовтень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortQueOct3,
      month: 'Жовтень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortQueOct4,
      month: 'Жовтень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
      img: comfortQueOct5,
      month: 'Жовтень 2025',
      title: 'COMFORT TOWN',
      info: ''
    },
    {
        img: comfortQueSept1,
        month: 'Вересень 2025',
        title: 'COMFORT TOWN',
        info: ''
    },
    {
        img: comfortQueSept2,
        month: 'Вересень 2025',
        title: 'COMFORT TOWN',
        info: ''
    },
    {
        img: comfortQueSept3,
        month: 'Вересень 2025',
        title: 'COMFORT TOWN',
        info: ''
    },{
        img: comfortQueSept4,
        month: 'Вересень 2025',
        title: 'COMFORT TOWN',
        info: ''
    },
    {
        img: comfortQueSept5,
        month: 'Вересень 2025',
        title: 'COMFORT TOWN',
        info: ''
    },
    {
        img: comfortQueSept6,
        month: 'Вересень 2025',
        title: 'COMFORT TOWN',
        info: ''
    },
    {
        img: comfortQueSept7,
        month: 'Вересень 2025',
        title: 'COMFORT TOWN',
        info: ''
    },
    {
        img: comfortQueSept8,
        month: 'Вересень 2025',
        title: 'COMFORT TOWN',
        info: ''
    },
    {
        img: comfortQueSept9,
        month: 'Вересень 2025',
        title: 'COMFORT TOWN',
        info: ''
    },
    {
        img: comfortQueSept10,
        month: 'Вересень 2025',
        title: 'COMFORT TOWN',
        info: ''
    },
    {
        img: comfortQueSept11,
        month: 'Вересень 2025',
        title: 'COMFORT TOWN',
        info: ''
    },
    {
        img: comfortQue2Aug1,
        month: 'Липень 2025',
        title: 'COMFORT TOWN',
        info: ''
    },
    {
        img: comfortQue2Aug2,
        month: 'Липень 2025',
        title: 'COMFORT TOWN',
        info: ''
    },
    {
        img: comfortQue2Aug3,
        month: 'Липень 2025',
        title: 'COMFORT TOWN',
        info: ''
    },
    {
        img: comfortQue2Aug4,
        month: 'Липень 2025',
        title: 'COMFORT TOWN',
        info: ''
    },
    {
        img: comfortQue2Aug5,
        month: 'Липень 2025',
        title: 'COMFORT TOWN',
        info: ''
    },
    {
        img: comfortQue2Aug6,
        month: 'Липень 2025',
        title: 'COMFORT TOWN',
        info: ''
    },
    {
        img: comfortJul1,
        month: 'Липень 2025',
        title: 'COMFORT TOWN',
        info: ''
    },
    {
        img: comfortJul2,
        month: 'Липень 2025',
        title: 'COMFORT TOWN',
        info: ''
    },
    {
        img: comfortJul3,
        month: 'Липень 2025',
        title: 'COMFORT TOWN',
        info: ''
    },
    {
        img: comfortJun1,
        month: 'Червень 2025',
        title: 'COMFORT TOWN',
        info: ''
    },
    {
        img: comfortJun2,
        month: 'Червень 2025',
        title: 'COMFORT TOWN',
        info: ''
    },
  ]

function ComfortStatus() {
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
                      <motion.button whileHover={{scale: 1.15}} transition={{duration: 0.1}} type='button' className={activeSlider === 1 ? 'queue-button--active' : 'queue-button'} onClick={() => showSlider(1)}>1 черга</motion.button>
                      <motion.button whileHover={{scale: 1.15}} transition={{duration: 0.1}} type='button' className={activeSlider === 2 ? 'queue-button--active' : 'queue-button'} onClick={() => showSlider(2)}>2 черга</motion.button>
                    </div>
                    <div className={activeSlider === 1 ? '' : 'slider-hidden'} onClick={() => {setTogglerOne(!togglerOne)}}>
                        <ComfortStatusSlider photos={album1}/>
                    </div>
                    <div className={activeSlider === 2 ? '' : 'slider-hidden'} onClick={() => {setTogglerTwo(!togglerTwo)}}>
                        <ComfortStatusSlider photos={album2}/>
                    </div>
                </div>
            </div>
        </section>

        <FsLightbox 
          toggler={togglerOne}
          sources={[
            comfortNOct1,
            comfortNOct2,
            comfortNOct3,
            comfortNOct4,
            comfortSept1,
            comfortSept2,
            comfortSept3,
            comfortSept4,
            comfortSept5,
            comfortAug1,
            comfortAug2,
            comfortAug3,
            comfortAug4,
            comfortNewJuly1,
            comfortNewJuly2,
            comfortNewJuly3,
            comfortNewMay1,
            comfortNewMay2,
            comfortNewMay3,
            comfortNewMay4,
            comfortNewMay5,
            comfortNewMay6,
            comfortApr1,
            comfortApr2,
            comfortApr3,
            comfortMarch1,
            comfortMarch2,
            comfortFeb1,
            comfortFeb2,
            comfortFeb3,
            comfortFeb4,
            comfortOct1,
            comfortOct2,
            comfortOct3,
            comfortOct4,
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
        <FsLightbox 
          toggler={togglerTwo}
          sources={[
            comfortQueOct1,
            comfortQueOct2,
            comfortQueOct3,
            comfortQueOct4,
            comfortQueOct5,
            comfortQueSept1,
            comfortQueSept2,
            comfortQueSept3,
            comfortQueSept4,
            comfortQueSept5,
            comfortQueSept6,
            comfortQueSept7,
            comfortQueSept8,
            comfortQueSept9,
            comfortQueSept10,
            comfortQueSept11,
            comfortQue2Aug1,
            comfortQue2Aug2,
            comfortQue2Aug3,
            comfortQue2Aug4,
            comfortQue2Aug5,
            comfortQue2Aug6,
            comfortJul1,
            comfortJul2,
            comfortJul3,
            comfortJun1,
            comfortJun2,
          ]}
        />
        </>
    )
}

export default ComfortStatus