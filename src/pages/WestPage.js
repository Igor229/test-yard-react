import WestBanner from '../westPageComponents/WestBanner';
import MainSlider from '../westPageComponents/MainSlider';
import WestAdventages from '../westPageComponents/WestAdventages';
import WestPlanningType from '../westPageComponents/WestPlanningType';
import AdventageList from '../westPageComponents/AdventageList';
import HouseType from '../westPageComponents/HouseType';
import WestForm from '../westPageComponents/WestForm';
import Contacts from '../beskidPageComponents/Contacts';
import WestGallery from '../westPageComponents/WestGallery';
import FsLightbox from 'fslightbox-react';

import './WestPage.scss'
import icons from '../assets/icons/sprite.svg'
import React, { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import west1 from '../assets/westPage/images/main-slider/0.jpg'
import west2 from '../assets/westPage/images/main-slider/1.jpg'
import west3 from '../assets/westPage/images/main-slider/2.jpg'
import west4 from '../assets/westPage/images/main-slider/3.jpg'
import west5 from '../assets/westPage/images/main-slider/4.jpg'

import internalTypeImg from '../assets/westPage/images/house-types/internal.png'
import externalTypeImg from '../assets/westPage/images/house-types/external.png'

gsap.registerPlugin(ScrollTrigger)

function WestPage () {
    const main = useRef()
    const [toggleSlider, setToggleSlider] = useState(false)
    const [toggleAdventages, setToggleAdventages] = useState(false)
  
    useLayoutEffect(() => {
      const ctx = gsap.context((self) => {
        const boxes = self.selector('.box')
        const banners = self.selector('.banner-animation')

        boxes.forEach((box) => {
          gsap.fromTo(box, {y: 44, opacity: 0}, {y: 0, opacity: 1, duration: .5, scrollTrigger: {
            trigger: box,
          }})
        });

        banners.forEach((banner) => {
          gsap.fromTo(banner, {opacity: 0}, {opacity: 1, duration: .5})
        })
      }, main)
  
      return () => ctx.revert()
    }, [])
  
  
    return (
      <main ref={main}>
        <div className='banner-animation'>
          <WestBanner/>
        </div>
        
        <div className='west-action'>
          <div className='action wrapper'>
            <svg className="action-icon">
              <use href={icons + '#chevron-left'}/>
            </svg>
            <a href='#' className='action-text'>На головну</a>
          </div>
        </div>


        {/* Main Slider Block */}
          <div className='wrapper west-info info-container'>
            <MainSlider/>
          </div>

        {/* Adventages Images */}
        <div className='wrapper title-container box'>
          <h1 className='main-title'>У містечку WEST TOWN ви купуєте не тільки таунхаус</h1>
        </div>
        <div className='wrapper box'>
          <WestAdventages/>
        </div>

        {/* House Types */}
        <div className='wrapper title-container box'>
          <h1 className='main-title'>У нашому містечку ви можете обрати таунхаус</h1>
        </div>
        <div className='wrapper houses'>
          <HouseType image={internalTypeImg} type='Внутрішній' rooms='4' square='120 м²' area='1,65-1,8 сотих'/>
          <HouseType image={externalTypeImg} type='Крайній' rooms='4' square='120 м²' area='2,5-2,8 сотих'/>
        </div>

        {/* Planning Types Section */}
        <WestPlanningType/>

        <div className='bedroom box'>
          <div className='bedroom-container'>
            <h2 className='bedroom-container__title'>ДИЗАЙН-ПРОЕКТ У ПОДАРУНОК <br/>ПРИ КУПІВЛІ ТАУНХАУСА</h2>
          </div>
        </div>


        {/* Adventages List section */}
        <div className='wrapper title-container box'>
          <h1 className='main-title'>Переваги</h1>
        </div>
        <div className='wrapper box'>
          <AdventageList/>
        </div>
        
        <div className='wrapper title-container box'>
          <h1 className='main-title'>ВИГІДНІ УМОВИ РОЗТЕРМІНУВАННЯ ДО 2-Х РОКІВ</h1>
        </div>
        <div className='wrapper termination-form'>
          <p className='termination-form__subtitle'>Заповність форму та отримайте детальний <br/> розрахунок розтермінування.</p>
          <WestForm/>
        </div>

        <WestGallery/>
        
        <Contacts/>

      </main>
    );
  }
  
  export default WestPage