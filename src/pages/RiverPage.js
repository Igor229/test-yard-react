import RiverBanner from '../riverPageComponents/RiverBanner';
import MainInfoBlock from '../riverPageComponents/MainInfoBlock';
import RiverAdvantages from '../riverPageComponents/RiverAdvantages';
import SecondBlock from '../riverPageComponents/SecondBlock';
import RPlanType from '../riverPageComponents/RPlanType';
import RiverAdvantagesList from '../riverPageComponents/RiverAdventagesList';
import WestForm from '../westPageComponents/WestForm';
import RiverMap from '../riverPageComponents/RiverMap';

import './WestPage.scss'
import './RiverPage.scss'
import { useState } from 'react';
import { motion } from 'framer-motion';

import icons from '../assets/icons/sprite.svg'
import phoneIcon from '../assets/beskidPage/icons/contacts-icons/phone.png'
import instagramIcon from '../assets/beskidPage/icons/contacts-icons/instagram.png'
import mailIcon from '../assets/beskidPage/icons/contacts-icons/mail.png'
import mapIcon from '../assets/beskidPage/icons/contacts-icons/map.png'
import Modal from '../components/Modal';
import '../beskidPageComponents/Contacts.scss'

// proposal imports =====================================
import Header from '../components/Header';

// =======================================================
function RiverPage () {
    const [modalActive, setModalActive] = useState(false)

    return (
      <>
        <Modal active={modalActive} setActive={setModalActive} />
        <Header/>
        <motion.div
            className="banner-animation"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <RiverBanner />
          </motion.div>
        <main>
            {/* ======== return button ========= */}
            <motion.div
            className="west-action"
            initial={{ x: -350 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.45 }}
            >
                <motion.div
                    className="action comfort-action wrapper"
                    whileHover={{ scale: 1.1, duration: 0.01 }}
                    style={{marginBottom: '15px', marginTop: '60px'}}
                >
                    <svg className="action-icon">
                    <use href={icons + "#chevron-left"} />
                    </svg>
                    <a href="/" className="action-text">
                    На головну
                    </a>
                </motion.div>
            </motion.div>

            {/* ======= first block about river town ======= */}
            <motion.div
            className="wrapper west-info info-container river-info"
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.37 }}
            style={{padding: 0}}
            >
                <MainInfoBlock />
            </motion.div>

            <RiverAdvantages />

            <motion.div className='info wrapper info-container second-slider__container'
            initial={{opacity: 0, y: 100, scale: 0.9}}
            whileInView={{opacity: 1, y: 0, scale: 1}}
            transition={{duration: 0.37}}
            >
                <SecondBlock/>
            </motion.div>

            {/* planning types section */}
            <motion.div className='wrapper'
            initial={{y: 150, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6}}
            >
                <RPlanType/>
            </motion.div>

            {/* Adventages List section */}
            <div className="wrapper title-container box">
                <h1 className="main-title">Чому саме River Town?</h1>
            </div>
            <div className="wrapper box">
                <RiverAdvantagesList />
            </div>

            {/* Form section */}
            <motion.div
                className="wrapper title-container box"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                id='propose'
            >
                <h1 className="main-title">ВИГІДНІ УМОВИ РОЗТЕРМІНУВАННЯ ДО 2-Х РОКІВ</h1>
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
                <WestForm options={['Внутрішній', 'Крайній']} />
            </motion.div>

          {/* <Contacts/> */}
        <div className='wrapper title-container box'>
          <h1 className='main-title'>Контактна інформація</h1>
        </div>
          <section className="contacts">
            <div className="contacts-container">
              <div className="contacts__item">
                <img src={phoneIcon} alt='phone' className="contacts__item-icon" />
                <div className="contacts__item-info">
                  <p className="contacts-title">Номер телефону:</p>
                  <p className="contacts-subtitle">+38 (098) 225 58 00 </p>
                </div>
              </div>

              <div className="contacts__item">
                <img src={instagramIcon} alt='insta' className="contacts__item-icon" />
                <div className="contacts__item-info">
                  <p className="contacts-title">Instagram:</p>
                  <p className="contacts-subtitle">yard.development</p>
                </div>
              </div>

              <div className="contacts__item">
                <img src={mailIcon} alt='mail' className="contacts__item-icon" />
                <div className="contacts__item-info">
                  <p className="contacts-title">Email:</p>
                  <p className="contacts-subtitle">
                    yarddevelopment34@gmail.com{" "}
                  </p>
                </div>
              </div>

              <div className="contacts__item">
                <img src={mapIcon} alt='map' className="contacts__item-icon" />
                <div className="contacts__item-info">
                  <p className="contacts-title">Локація:</p>
                  <p className="contacts-subtitle">
                    с. Микитинці, вул. Українських Декабристів
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
            <RiverMap />
          </section>
        </main>
      </>
    );
  }
  
  export default RiverPage