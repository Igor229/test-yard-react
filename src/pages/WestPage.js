import WestBanner from '../westPageComponents/WestBanner';
import MainSlider from '../westPageComponents/MainSlider';
import WestAdventages from '../westPageComponents/WestAdventages';
import AdventageList from '../westPageComponents/AdventageList';
import HouseType from '../westPageComponents/HouseType';
import WestForm from '../westPageComponents/WestForm';
import WestGallery from '../westPageComponents/WestGallery';
import Partners from '../westPageComponents/Partners';
import BackgroundYard from '../westPageComponents/BackgroundYard';
import WPlanType from '../westPageComponents/WPlanType';
import WestStatus from '../westPageComponents/WestStatus';
import PreviousStatus from '../westPageComponents/PreviousStatus';
import QuadroWest from '../westPageComponents/QuadroWest';

import './WestPage.scss'
import icons from '../assets/icons/sprite.svg'
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import phoneIcon from '../assets/beskidPage/icons/contacts-icons/phone.png'
import instagramIcon from '../assets/beskidPage/icons/contacts-icons/instagram.png'
import mailIcon from '../assets/beskidPage/icons/contacts-icons/mail.png'
import mapIcon from '../assets/beskidPage/icons/contacts-icons/map.png'
import BeskedMap from '../beskidPageComponents/BeskedMap';
import Modal from '../components/Modal';
import partnersInstagram from '../assets/westPage/images/partners/instagram-icon.png'
import '../beskidPageComponents/Contacts.scss'

import internalTypeImg from '../assets/westPage/images/house-types/internal.webp'
import externalTypeImg from '../assets/westPage/images/house-types/external.webp'

// ==========planning type component from beskid==================
import WestPlanningTypes from '../westPageComponents/WestPlanningTypes';
import PlanTypeImgOne from '../assets/westPage/images/TypeOne.webp'
import PlanTypeImgTwo from '../assets/westPage/images/TypeTwo.webp'

// proposal imports =====================================
import Header from '../components/Header';
import '../westPageComponents/Proposal.scss'

// =======================================================
function WestPage () {
    const [modalActive, setModalActive] = useState(false)

    // ====== scrolling from stick to proposal block ======
    // const handleClickProposal = () => {
    //   const element = document.getElementById('proposal-block')
    //   if (element) {
    //     element.scrollIntoView({behavior: 'smooth'})
    //   }
    // }

    // ====== scrolling from proposal block to termination-form =====
    // const handleClickGetPropose = () => {
    //   const element = document.getElementById('propose')
    //   if (element) {
    //     element.scrollIntoView({behavior: 'smooth'})
    //   }
    // }
    return (
      <>
        {/* ================ SPECIAL PROPOSAL STICK ================ */}
        {/* <div className="special-proposal">
          <p className="special-proposal__text">
            СТАРТ ПРОДАЖУ! 30 МІСЯЦІВ РОЗТЕРМІНУВАННЯ!
          </p>
          <a onClick={handleClickProposal} className="special-proposal__action">
            Детальніше{" "}
            <img src={chevronRight} style={{ width: "24px", height: "24px" }} />
          </a>
        </div> */}

        <Header/>
        <main>
          <Modal active={modalActive} setActive={setModalActive} />
          <motion.div
            className="banner-animation"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <WestBanner />
          </motion.div>

          <motion.div
            className="west-action"
            initial={{ x: -350 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <motion.div
              className="action wrapper"
              whileHover={{ scale: 1.1, duration: 0.01 }}
              style={{marginBottom: '15px'}}
            >
              <svg className="action-icon">
                <use href={icons + "#chevron-left"} />
              </svg>
              <a href="#" className="action-text">
                На головну
              </a>
            </motion.div>
          </motion.div>

          {/* =============== PROPOSAL ACTION SECTION =============== */}
          {/* <div className="proposal" id='proposal-block'>
            <h3 className="proposal-title">
              СТАРТ ПРОДАЖУ НОВОЇ ЧЕРГИ БУДІВНИЦТВА
            </h3>
            <div>
              <h2 className="proposal-subtitle">WEST TOWN 11</h2>
              <h2 className="proposal-subtitle">30 МІСЯЦІВ РОЗТЕРМІНУВАННЯ</h2>
            </div>
            <div className="proposal-actions">
              <div className="proposal-actions__price">
                <h2 className="proposal-actions__price-text">1493$</h2>
                <p className="proposal-actions__price-subtext">
                  щомісячний платіж
                </p>
              </div>
                <button className="main-button proposal-actions__price-button" onClick={handleClickGetPropose}>
                  Отримати розрахунок ціни
                </button>
            </div>
          </div> */}

          {/* <div className='mobActions wrapper'>
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
              <h3 className='mobActions-title'>WEST TOWN 11</h3>
              <h3 className='mobActions-title'>30 МІСЯЦІВ РОЗТЕРМІНУВАННЯ </h3>
            </div>
            <button onClick={handleClickGetPropose} className='main-button mobActions-button'>Отримати розрахунок ціни</button>
          </div> */}
          {/* ================================================================================ */}



          {/* Main Slider Block */}
          <motion.div
            className="wrapper west-info info-container"
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.37 }}
            style={{padding: 0}}
          >
            <MainSlider />
          </motion.div>

            <QuadroWest />

          {/* Adventages Images */}
          <motion.div
            className="wrapper title-container box"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="main-title">
              У містечку WEST TOWN ви купуєте не тільки таунхаус
            </h1>
          </motion.div>
          <motion.div
            className="wrapper box"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <WestAdventages />
          </motion.div>

          {/* House Types */}
          <motion.div
            className="wrapper title-container box"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="main-title">
            У нашому містечку ви можете обрати <br/>таунхаус / квадрохаус
            </h1>
          </motion.div>
          <motion.div
            className="wrapper houses"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <HouseType/>
          </motion.div>

          {/* Planning Types Section */}
          {/* planning types section */}
        <motion.div className='wrapper'
          initial={{y: 150, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6}}
        >
          <WPlanType/>
          {/* <WestPlanningTypes type='Тип 1' area='120 м²' floorOne={PlanTypeImgOne}/>
          <WestPlanningTypes type='Тип 2' area='135 м²' floorOne={PlanTypeImgTwo}/> */}
        </motion.div>

          {/* =================Partners Section======================== */}
          <motion.div
            className="wrapper partners"
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.37 }}
          >
            <div className="partners__info">
              <h1 className="partners__info-title">
                Партнер містечка WEST TOWN - студія дизайну інтер’єру Monochrome
                Interior Design
              </h1>
              <p className="partners__info-text">
                  Придбавши таунхаус у нашому містечку, наступним вашим етапом
                стануть ремонтні роботи у власній домівці. Саме тут, ми
                рекомендуємо звернутись до спеціалістів своєї справи - студії
                дизайну інтер’єру Monochrome Interior Design, вони допоможуть
                створити простір, який відповідатиме вашим потребам та
                естетичним уподобанням. 
              </p>

              <div className="partners__info-link">
                <img
                  src={partnersInstagram}
                  alt="partners-instagram-icon"
                  className="partners__info-icon"
                />
                <a
                  href="https://www.instagram.com/monochrome_interiors_?igsh=Nms0am00anF3a3E1"
                  target="_blank"
                  className="partners__info-action"
                >
                  monochrome_interiors_
                </a>
              </div>
            </div>
            <Partners />
          </motion.div>

          {/* Adventages List section */}
          <div className="wrapper title-container box">
            <h1 className="main-title">Переваги</h1>
          </div>
          <div className="wrapper box">
            <AdventageList />
          </div>

          {/* Background Slider Block */}
          <motion.div
            className="wrapper west-info info-container"
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.37 }}
            style={{padding: 0}}
          >
            <BackgroundYard />
          </motion.div>

          <motion.div
            className="wrapper title-container box"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            id='propose'
          >
            <h1 className="main-title">
              ВИГІДНІ УМОВИ РОЗТЕРМІНУВАННЯ ДО 2-Х РОКІВ
            </h1>
          </motion.div>
          <motion.div
            className="wrapper termination-form"
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="termination-form__subtitle">
              Заповніть форму та отримайте детальний <br /> розрахунок
              розтермінування.
            </p>
            <WestForm />
          </motion.div>


          <PreviousStatus/>
          <WestStatus/>

          <WestGallery />

          {/* <Contacts/> */}
          <section className="contacts">
            <div className="contacts-container">
              <div className="contacts__item">
                <img src={phoneIcon} className="contacts__item-icon" />
                <div className="contacts__item-info">
                  <p className="contacts-title">Номер телефону:</p>
                  <p className="contacts-subtitle">+38 (098) 225 58 00 </p>
                </div>
              </div>

              <div className="contacts__item">
                <img src={instagramIcon} className="contacts__item-icon" />
                <div className="contacts__item-info">
                  <p className="contacts-title">Instagram:</p>
                  <p className="contacts-subtitle">west_town_if</p>
                </div>
              </div>

              <div className="contacts__item">
                <img src={mailIcon} className="contacts__item-icon" />
                <div className="contacts__item-info">
                  <p className="contacts-title">Email:</p>
                  <p className="contacts-subtitle">
                    yarddevelopment34@gmail.com{" "}
                  </p>
                </div>
              </div>

              <div className="contacts__item">
                <img src={mapIcon} className="contacts__item-icon" />
                <div className="contacts__item-info">
                  <p className="contacts-title">Локація:</p>
                  <p className="contacts-subtitle">
                    с. Крихівці, вулиця Бузкова
                  </p>
                </div>
              </div>
              <button
                className="main-button contacts-button"
                onClick={() => setModalActive(true)}
              >
                Отримати детальну інформацію
              </button>
            </div>
            <BeskedMap />
          </section>
        </main>
      </>
    );
  }
  
  export default WestPage