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

import './BeskidPage.scss'
import React, { useRef, useLayoutEffect } from 'react';
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
        <div className='wrapper title-container box'>
          <a href='/'>
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
        <div className='info wrapper'>
          <div className='info-container box'>
            <FirstSlider/>
            <div className='info-description'>
              <h2 className='info-description__title'>BESKID HOME RESORT</h2>
              <p className='info-description__text'>
                Це унікальний котеджний комплекс в самому серці Карпат з власною SPA-зоною та басейном. Котеджі розташовані на вершині поблизу карпатського лісу, а з тераси та вікон відкривається дивовижний краєвид на підйомник 1R гірськолижного курорту Bukovel.
              </p>
              <p className='info-description__text'>
                Проектуючи комплекс BESKID, ми подбали про те, щоб він був інвестиційно привабливим, тому врахували наявність власної інфраструктури та обрали найкраще розташування! До ГК Bukovel, ви зможете дістатись за 5 хвилин.
              </p>
              <p className='info-description__text'>
                Капітальне будівництво та індивідуальне газове опалення - наша велика перевага. Всі клопоти по обслуговуванні котеджів візьме на себе управлінська компанія, а ви отримуватимете тільки чистий дохід!
              </p>
            </div>
          </div>

          <div className='info-container second-slider__container box'>
            <div className='info-description'>
              <h2 className='info-description__title'>КОТЕДЖІ З АВТОРСЬКИМ РЕМОНТОМ</h2>

              <p className='info-description__text'>
                Котеджі продаються зі стильним та сучасним ремонтом, укомплектовані меблями та технікою провідних марок. Авторський дизайн-проект поєднує в собі елементи етнічного орнаменту та сучасного стилю, що додає певного карпатського колориту.
              </p>
              <p className='info-description__text'>
                Функціональна кухня-студія, де максимум простору, щоб зібратись всією сім'єю чи друзями за великим столом, або відпочивати на комфортному м'якому дивані.
              </p>
              <p className='info-description__text'>
                Три спальні з панорамними вікнами, з яких відкривається дивовижний краєвид на гори. Контрастні відтінки, застосовані в інтер'єрі - поєднання бетону та структурного дерева, роблять його багатограннішим та яскравішим!
              </p>
            </div>

            <SecondSlider/>
          </div>
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
        <div className='plannings-type wrapper box'>
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