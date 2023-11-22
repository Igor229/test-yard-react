import WestBanner from '../westPageComponents/WestBanner';
import MainSlider from '../westPageComponents/MainSlider';
import WestAdventages from '../westPageComponents/WestAdventages';
import WestPlanningType from '../westPageComponents/WestPlanningType';
import AdventageList from '../westPageComponents/AdventageList';
import HouseType from '../westPageComponents/HouseType';
import WestForm from '../westPageComponents/WestForm';
import Contacts from '../beskidPageComponents/Contacts';
import WestGallery from '../westPageComponents/WestGallery';

import './WestPage.scss'
import icons from '../assets/icons/sprite.svg'
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import internalTypeImg from '../assets/westPage/images/house-types/internal.png'
import externalTypeImg from '../assets/westPage/images/house-types/external.png'

gsap.registerPlugin(ScrollTrigger)

function WestPage () {
    const main = useRef()
  
    useLayoutEffect(() => {
      const ctx = gsap.context((self) => {
        const boxes = self.selector('.box')
        boxes.forEach((box) => {
          gsap.fromTo(box, {y: 44, opacity: 0}, {y: 0, opacity: 1, duration: .5, scrollTrigger: {
            trigger: box,
          }})
        });
      }, main)
  
      return () => ctx.revert()
    }, [])
  
  
    return (
      <main ref={main}>

        <WestBanner/>
        <div className='west-action'>
          <div className='action wrapper'>
            <svg className="action-icon">
              <use href={icons + '#chevron-left'}/>
            </svg>
            <a href='/' className='action-text'>На головну</a>
          </div>
        </div>


        {/* Main Slider Block */}
        <div className='info wrapper'>
          <div className='info-container box west-slider'>
            <MainSlider/>
            <div className='info-description west-info'>
              <h2 className='info-description__title'>WEST TOWN</h2>
              <p className='info-description__text'>
                Найбільше містечко таунхаусів в Івано-Франківську WEST TOWN - ідеально створене для комфортного сімейного проживання, адже проектуючи цей комплекс ми подбали про інтереси всіх поколінь, особистого простору вистачить для кожного члена вашої сім’ї.
              </p>
              <p className='info-description__text'>
                Проводити час з дитиною на власному подвір’ї, читати улюблену книгу на свіжому повітрі, милуватись світанком, заходом сонця за чашкою кави чи спонтанно влаштувати вечірку-барбекю з друзями - все це можливо у містечку WEST TOWN.
              </p>
              <p className='info-description__text'>
                Таунхауси розташовані у Крихівцях поруч містечка Калинова Слобода. Затишне розташування поруч приватного сектору. До міського озера та парку ім.Шевченка  можна дістатись за 10 хвилин на авто. До Центру міста за 15 хвилин.
              </p>
            </div>
          </div>
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
        <div className='info wrapper box west-plan'>
          <WestPlanningType/>
        </div>

        <div className='bedroom wrapper box'>
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

        <div className='wrapper title-container box'>
          <h1 className='main-title'>Фотогалерея</h1>
          <WestGallery/>
        </div>

        <Contacts/>

      </main>
    );
  }
  
  export default WestPage