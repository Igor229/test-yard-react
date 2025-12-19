import BeskidBanner from '../beskidPageComponents/BeskidBanner';
import icons from '../assets/icons/sprite.svg'
import FirstSlider from '../beskidPageComponents/FirstSlider';
import SecondSlider from '../beskidPageComponents/SecondSlider';
import PlanningType from '../beskidPageComponents/PlanningType';
import ManagmentGroup from '../beskidPageComponents/ManagmentGroup';
import BeskidStatus from '../beskidPageComponents/BeskidStatus';
import Mountains from '../beskidPageComponents/Mountains';

import phoneIcon from '../assets/beskidPage/icons/contacts-icons/phone.png'
import instagramIcon from '../assets/beskidPage/icons/contacts-icons/instagram.png'
import mailIcon from '../assets/beskidPage/icons/contacts-icons/mail.png'
import mapIcon from '../assets/beskidPage/icons/contacts-icons/map.png'
import BeskedMap from '../beskidPageComponents/BeskedMap';
import Modal from '../components/Modal';
import { motion } from 'framer-motion';
import '../beskidPageComponents/Contacts.scss'

import './BeskidPage.scss'
import { useState } from 'react';

import groupImageOne from '../assets/beskidPage/images/group-images/group_img1.webp'
import groupImageTwo from '../assets/beskidPage/images/group-images/group_img2.webp'
import groupImageThree from '../assets/beskidPage/images/group-images/group_img3.webp'

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
          <a href='/' style={{display: 'block', width: 'fit-content', marginBottom: '24px'}}>
            <motion.div className='action'
              whileHover={{scale: 1.1, duration: 0.01}}
            >
              <svg className="action-icon">
                <use href={icons + '#chevron-left'}/>
              </svg>
              <a href='/'className='action-text'>На головну</a>
            </motion.div>
          </a>
        </motion.div>

        <Mountains/>


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
          <img src={groupImageOne} alt='group' className='group-images__img'/>
          <img src={groupImageTwo} alt='group' className='group-images__img'/>
          <img src={groupImageThree} alt='group' className='group-images__img'/>
        </motion.div>

        <motion.div className='wrapper title-container box'
          initial={{y: 150, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6}}
        >
        </motion.div>

        {/* planning types section */}
        <motion.div className='plannings-type wrapper'
          initial={{y: 150, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6}}
        >
          <PlanningType />
        </motion.div>

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

        <BeskidStatus/>

        <div className='wrapper title-container box'>
          <h1 className='main-title'>Контактна інформація</h1>
        </div>
        
        {/* <Contacts/> */}
        <section className='contacts'>  
            <div className='contacts-container'>
                <div className='contacts__item'>
                    <img src={phoneIcon} alt='phone' className='contacts__item-icon'/>
                    <div className='contacts__item-info'>
                        <p className='contacts-title'>Номер телефону:</p>
                        <p className='contacts-subtitle'>+38 (098) 225 58 00 </p>
                    </div>
                </div>

                <a href='https://www.instagram.com/fomich_residence_guesthouses?igsh=MWE2Z2dpencyaWdmYw==' target='etarget' className='contacts__item'>
                    <img src={instagramIcon} alt='insta' className='contacts__item-icon'/>
                    <div className='contacts__item-info'>
                        <p className='contacts-title'>Instagram:</p>
                        <p className='contacts-subtitle'>fomich_residence_guesthouses </p>
                    </div>
                </a>

                <div className='contacts__item'>
                    <img src={mailIcon} alt='mail' className='contacts__item-icon'/>
                    <div className='contacts__item-info'>
                        <p className='contacts-title'>Email:</p>
                        <p className='contacts-subtitle'>yarddevelopment34@gmail.com </p>
                    </div>
                </div>

                <div className='contacts__item'>
                    <img src={mapIcon} alt='map' className='contacts__item-icon'/>
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