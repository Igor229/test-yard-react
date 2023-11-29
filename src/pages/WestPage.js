import WestBanner from '../westPageComponents/WestBanner';
import MainSlider from '../westPageComponents/MainSlider';
import WestAdventages from '../westPageComponents/WestAdventages';
import WestPlanningType from '../westPageComponents/WestPlanningType';
import AdventageList from '../westPageComponents/AdventageList';
import HouseType from '../westPageComponents/HouseType';
import WestForm from '../westPageComponents/WestForm';
import WestGallery from '../westPageComponents/WestGallery';

import './WestPage.scss'
import icons from '../assets/icons/sprite.svg'
import React, { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import phoneIcon from '../assets/beskidPage/icons/contacts-icons/phone.png'
import instagramIcon from '../assets/beskidPage/icons/contacts-icons/instagram.png'
import mailIcon from '../assets/beskidPage/icons/contacts-icons/mail.png'
import mapIcon from '../assets/beskidPage/icons/contacts-icons/map.png'
import BeskedMap from '../beskidPageComponents/BeskedMap';
import Modal from '../components/Modal';
import '../beskidPageComponents/Contacts.scss'

import internalTypeImg from '../assets/westPage/images/house-types/internal.png'
import externalTypeImg from '../assets/westPage/images/house-types/external.png'

gsap.registerPlugin(ScrollTrigger)

function WestPage () {
    const [modalActive, setModalActive] = useState(false) 
    const main = useRef()
  
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
        <Modal active={modalActive} setActive={setModalActive}/>
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
        <div className='wrapper '>
          <WestPlanningType/>
        </div>

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
        
         {/* <Contacts/> */}
         <section className='contacts'>  
            <div className='contacts-container'>
                <div className='contacts__item'>
                    <img src={phoneIcon} className='contacts__item-icon'/>
                    <div className='contacts__item-info'>
                        <p className='contacts-title'>Номер телефону:</p>
                        <p className='contacts-subtitle'>+38 (098) 225 58 00 </p>
                    </div>
                </div>

                <div className='contacts__item'>
                    <img src={instagramIcon} className='contacts__item-icon'/>
                    <div className='contacts__item-info'>
                        <p className='contacts-title'>Instagram:</p>
                        <p className='contacts-subtitle'>beskid_home_resort </p>
                    </div>
                </div>

                <div className='contacts__item'>
                    <img src={mailIcon} className='contacts__item-icon'/>
                    <div className='contacts__item-info'>
                        <p className='contacts-title'>Email:</p>
                        <p className='contacts-subtitle'>yarddevelopment34@gmail.com </p>
                    </div>
                </div>

                <div className='contacts__item'>
                    <img src={mapIcon} className='contacts__item-icon'/>
                    <div className='contacts__item-info'>
                        <p className='contacts-title'>Локація:</p>
                        <p className='contacts-subtitle'>с. Поляниця, вулиця урочище Вишня (поруч готелю Підгір'я) </p>
                    </div>
                </div>
                <button className='main-button contacts-button' onClick={() => setModalActive(true)}>Отримати детальну інформацію</button>
            </div>
                <BeskedMap/>
        </section>

      </main>
    );
  }
  
  export default WestPage