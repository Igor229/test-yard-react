import BeskidBanner from '../beskidPageComponents/BeskidBanner';
import mapPinIcon from '../assets/beskidPage/icons/map-pin.png'
import icons from '../assets/icons/sprite.svg'
import FirstSlider from '../beskidPageComponents/FirstSlider';
import SecondSlider from '../beskidPageComponents/SecondSlider';
import PlanningType from '../beskidPageComponents/PlanningType';
import Adventages from '../beskidPageComponents/Adventages';
import ManagmentGroup from '../beskidPageComponents/ManagmentGroup';
import InstallmentSystem from '../beskidPageComponents/InstallmentSystem';

import phoneIcon from '../assets/beskidPage/icons/contacts-icons/phone.png'
import instagramIcon from '../assets/beskidPage/icons/contacts-icons/instagram.png'
import mailIcon from '../assets/beskidPage/icons/contacts-icons/mail.png'
import mapIcon from '../assets/beskidPage/icons/contacts-icons/map.png'
import BeskedMap from '../beskidPageComponents/BeskedMap';
import Modal from '../components/Modal';
import { motion } from 'framer-motion';
import '../beskidPageComponents/Contacts.scss'

import './BeskidPage.scss'
import React, { useRef, useState } from 'react';

import typeOneFloorOne from '../assets/beskidPage/images/planning-types/resized/type1-floor1.png'
import typeOneFloorTwo from '../assets/beskidPage/images/planning-types/resized/type1-floor2.png'
import typeTwoFloorOne from '../assets/beskidPage/images/planning-types/resized/type2-floor1.png'
import typeTwoFloorTwo from '../assets/beskidPage/images/planning-types/resized/type2-floor2.png'

import groupImageOne from '../assets/beskidPage/images/group-images/group_img1-min.jpg'
import groupImageTwo from '../assets/beskidPage/images/group-images/group_img2-min.jpg'
import groupImageThree from '../assets/beskidPage/images/group-images/group_img3-min.jpg'

import Header from '../components/Header';
function BeskidPage () {
  const [modalActive, setModalActive] = useState(false)

    return (
      <>
      <Header/>
      <main>
        <Modal active={modalActive} setActive={setModalActive}/>
        <motion.div className='banner-animation'
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.7}}
        >
          <BeskidBanner/>
        </motion.div>

        {/* titles and actions */}
        <motion.div className='wrapper beskid-title'
          initial={{x: -350}}
          whileInView={{x: 0}}
          transition={{duration: 0.45}}
        >
          <a href='#' >
            <motion.div className='action'
              whileHover={{scale: 1.1, duration: 0.01}}
            >
              <svg className="action-icon">
                <use href={icons + '#chevron-left'}/>
              </svg>
              <a className='action-text'>На головну</a>
            </motion.div>
          </a>

          <h1 className='title'>Детальніше про котеджі BESKID</h1>

          <div className='location'>
            <img src={mapPinIcon} className='location-icon' />
            <p className='location-text'>Буковель</p>
          </div>
        </motion.div>

        {/* sliders and text section */}   
          <motion.div className='info wrapper west-info info-container'
            initial={{opacity: 0, y: 100, scale: 0.9}}
            whileInView={{opacity: 1, y: 0, scale: 1}}
            transition={{duration: 0.37}}
          >
            <FirstSlider/>
          </motion.div>
          <motion.div className='info wrapper info-container second-slider__container'
            initial={{opacity: 0, y: 100, scale: 0.9}}
            whileInView={{opacity: 1, y: 0, scale: 1}}
            transition={{duration: 0.37}}
          >
            <SecondSlider/>
          </motion.div>


        {/* section with group of photos */}
        <motion.div className='wrapper group-images box'
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.8}}
        >
          <img src={groupImageOne} alt='group-image' className='group-images__img'/>
          <img src={groupImageTwo} alt='group-image' className='group-images__img'/>
          <img src={groupImageThree} alt='group-image' className='group-images__img'/>
        </motion.div>

        <motion.div className='wrapper title-container box'
          initial={{y: 150, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6}}
        >
          <h1 className='main-title'>Планування котеджів BESKID</h1>
        </motion.div>

        {/* planning types section */}
        <motion.div className='plannings-type wrapper'
          initial={{y: 150, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6}}
        >
          <PlanningType type='Тип 1' area='117,94 м²' terrace='16,90 м²' floorOne={typeOneFloorOne} floorTwo={typeOneFloorTwo}/>
          <PlanningType type='Тип 2' area='121,74 м²' terrace='27,90 м²' floorOne={typeTwoFloorOne} floorTwo={typeTwoFloorTwo}/>
        </motion.div>

        {/* adventages section */}
        <div className='adventages box'>
          <div className='overlay'>
            <h2 className='adventages__title'>Надійні інвестиції з дохідністю до 15% річних</h2>
            <div className='adventages__container wrapper'>
              <Adventages/>
            </div>
          </div>
        </div>

        <motion.div className='wrapper title-container box'
          initial={{y: 100, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6}}
        >
          <h1 className='main-title'>Які обов'язки бере на себе управлінська компанія?</h1>
        </motion.div>

        <motion.div className='wrapper overlay box'
         initial={{y: 100, opacity: 0}}
         whileInView={{y: 0, opacity: 1}}
         transition={{duration: 0.6}}
        >
          <ManagmentGroup/>
        </motion.div>

        <div className='wrapper'>
          <InstallmentSystem/>
        </div>

        <div className='wrapper title-container box'>
          <h1 className='main-title'>Контактна інформація</h1>
        </div>
        
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
      </>
    );
  }
  
  export default BeskidPage