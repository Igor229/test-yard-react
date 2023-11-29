import BeskidBanner from '../beskidPageComponents/BeskidBanner';
import mapPinIcon from '../assets/beskidPage/icons/map-pin.png'
import icons from '../assets/icons/sprite.svg'
import FirstSlider from '../beskidPageComponents/FirstSlider';
import SecondSlider from '../beskidPageComponents/SecondSlider';
import PlanningType from '../beskidPageComponents/PlanningType';
import Contacts from '../beskidPageComponents/Contacts';
import Adventages from '../beskidPageComponents/Adventages';
import ManagmentGroup from '../beskidPageComponents/ManagmentGroup';
import InstallmentSystem from '../beskidPageComponents/InstallmentSystem';
import FsLightbox from 'fslightbox-react';

import './BeskidPage.scss'
import React, { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import typeOneFloorOne from '../assets/beskidPage/images/planning-types/resized/type1-floor1.png'
import typeOneFloorTwo from '../assets/beskidPage/images/planning-types/resized/type1-floor2.png'
import typeTwoFloorOne from '../assets/beskidPage/images/planning-types/resized/type2-floor1.png'
import typeTwoFloorTwo from '../assets/beskidPage/images/planning-types/resized/type2-floor2.png'

import groupImageOne from '../assets/beskidPage/images/group-images/group_img1-min.jpg'
import groupImageTwo from '../assets/beskidPage/images/group-images/group_img2-min.jpg'
import groupImageThree from '../assets/beskidPage/images/group-images/group_img3-min.jpg'

gsap.registerPlugin(ScrollTrigger)

function BeskidPage () {
    const main = useRef()
  
    useLayoutEffect(() => {
      const ctx = gsap.context((self) => {
        const boxes = self.selector('.box')
        const banners = self.selector('.banner-animation')
        boxes.forEach((box) => {
          gsap.fromTo(box, {y: 44, opacity: 0}, {y: 0, opacity: 1, duration: .5, scrollTrigger: {
            trigger: box,
          }})

          banners.forEach((banner) => {
            gsap.fromTo(banner, {opacity: 0}, {opacity: 1, duration: .5})
          })
        });
      }, main)
  
      return () => ctx.revert()
    }, [])
  
  
    return (
      <main ref={main}>
        <div className='banner-animation'>
          <BeskidBanner/>
        </div>

        {/* titles and actions */}
        <div className='wrapper box beskid-title'>
          <a href='#'>
            <div className='action'>
              <svg className="action-icon">
                <use href={icons + '#chevron-left'}/>
              </svg>
              <a className='action-text'>На головну</a>
            </div>
          </a>

          <h1 className='title'>Детальніше про котеджі BESKID</h1>

          <div className='location'>
            <img src={mapPinIcon} className='location-icon' />
            <p className='location-text'>Буковель</p>
          </div>
        </div>

        {/* sliders and text section */}   
          <div className='info wrapper west-info info-container'>
            <FirstSlider/>
          </div>
          <div className='info wrapper info-container second-slider__container'>
            <SecondSlider/>
          </div>


        {/* section with group of photos */}
        <div className='wrapper group-images box'>
          <img src={groupImageOne} alt='group-image' className='group-images__img'/>
          <img src={groupImageTwo} alt='group-image' className='group-images__img'/>
          <img src={groupImageThree} alt='group-image' className='group-images__img'/>
        </div>

        <div className='wrapper title-container box'>
          <h1 className='main-title'>Планування котеджів BESKID</h1>
        </div>

        {/* planning types section */}
        <div className='plannings-type wrapper'>
          <PlanningType type='Тип 1' area='117,94 м²' terrace='16,90 м²' floorOne={typeOneFloorOne} floorTwo={typeOneFloorTwo}/>
          <PlanningType type='Тип 2' area='121,74 м²' terrace='27,90 м²' floorOne={typeTwoFloorOne} floorTwo={typeTwoFloorTwo}/>
        </div>

        {/* adventages section */}
        <div className='adventages box'>
          <div className='overlay'>
            <h2 className='adventages__title'>Надійні інвестиції з дохідністю до 15% річних</h2>
            <div className='adventages__container wrapper'>
              <Adventages/>
            </div>
          </div>
        </div>

        <div className='wrapper title-container box'>
          <h1 className='main-title'>Які обов'язки бере на себе управлінська компанія?</h1>
        </div>

        <div className='wrapper overlay box'>
          <ManagmentGroup/>
        </div>

        <div className='wrapper'>
          <InstallmentSystem/>
        </div>

        <div className='wrapper title-container box'>
          <h1 className='main-title'>Контактна інформація</h1>
        </div>
        
        <Contacts/>
      </main>
    );
  }
  
  export default BeskidPage