import { useState } from 'react'
import './ComfortPage.scss'

import ComfortBanner from '../comfortPageComponents/ComfortBanner'
import Header from '../components/Header'
import FullPageImage from '../comfortPageComponents/FullPageImage'
import ComfortAdvantages from '../comfortPageComponents/ComfortAdvantages'
import Modal from '../components/Modal'
import MoreAbout from '../comfortPageComponents/MoreAbout'
import ComfortPlanning from '../comfortPageComponents/ComfortPlanning'
import ComfortStatus from '../comfortPageComponents/ComfortStatus'
import IntroductionBlock from '../comfortPageComponents/IntroductionBlock'

import instagramIcon from '../assets/beskidPage/icons/contacts-icons/instagram.png'
import mailIcon from '../assets/beskidPage/icons/contacts-icons/mail.png'
import mapIcon from '../assets/beskidPage/icons/contacts-icons/map.png'
import ComfortMap from '../comfortPageComponents/ComfortMap'

import { motion } from 'framer-motion';
import icons from '../assets/icons/sprite.svg'
import phoneIcon from '../assets/beskidPage/icons/contacts-icons/phone.png'


import PrivateGroundImage from '../assets/comfortPage/images/ground-place1.webp'
import WestForm from '../westPageComponents/WestForm'

function ComfortPage () {
  const [modalActive, setModalActive] = useState(false)

  const handleClickProposal = () => {
    const element = document.getElementById('propose')
    if (element) {
      element.scrollIntoView({behavior: 'smooth'})
    }
  }
  return (
    <>
      <Modal active={modalActive} setActive={setModalActive}/>
      
      <Header/>
      <ComfortBanner/>

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
            <a href="#" className="action-text">
              На головну
            </a>
          </motion.div>
        </motion.div>

        {/* ======= first block about comfort town ======= */}
        <div className='block-info wrapper'>
          <h2 className='block-info__title'>Котеджне містечко таунхаусів COMFORT TOWN</h2>
        </div>
        
        <div className='wrapper'>
          <IntroductionBlock/>
        </div>

        <div  id='propose'></div>

        {/* ======== more about project block ======== */}
        <div className="wrapper title-container about-comfort-title" style={{padding: '112px 0 64px 0'}}>
          <h1 className="main-title">Детальніше про проект</h1>
        </div>
        <div className='wrapper'>
          <MoreAbout/>
        </div>

        {/* ======== private ground block ======== */}
        <div className='private-ground wrapper'>
          <h2 className='private-ground__title'>COMFORT TOWN 2 черга - таунхауси з повністю <br/> приватним подвір’ям</h2>
          <p className='private-ground__text'>Земельні ділянки від 1,6 до 2,9 сотих</p>
        </div>

        {/* ======== full page image ============ */}
        <div className='wrapper'>
          <FullPageImage image={PrivateGroundImage}/>
        </div>


        {/* ======== planning types block ======== */}
        <div className='planning-type'>
          <div className="wrapper title-container box">
            <h1 className="main-title" style={{color: '#fff'}}>Планування</h1>
          </div>
          <ComfortPlanning />
        </div>

        {/* ======== advantages block ======== */}
        <div className="wrapper title-container">
          <h1 className="main-title">9 причин обрати таунхаус у COMFORT TOWN</h1>
        </div>

        <div className="wrapper">
          <ComfortAdvantages />
        </div>

        {/* ======== contact form block ======== */}
        <div className="wrapper comfortForm" style={{backgroundColor: '#181E1A', borderRadius: '32px'}}>
          <div className="title-container comfort-formtitle box">
            <h1 className="main-title contactform-title" style={{color: '#fff'}}>ВИГІДНІ УМОВИ РОЗТЕРМІНУВАННЯ ДО 2-Х РОКІВ</h1>
          </div>
          <div className="wrapper termination-form">
            <p className="termination-form__subtitle" style={{color: '#fff', paddingBottom: '0'}}>Заповніть форму та отримайте детальний <br /> розрахунок розтермінування.</p>
            <WestForm />
          </div>
        </div>

          <ComfortStatus/>


        {/* <Contacts/> */}
        <div className='wrapper title-container box'>
          <h1 className='main-title'>Контактна інформація</h1>
        </div>
        <section className='contacts'>  
            <div className='contacts-container'>
                <div className='contacts__item'>
                    <img src={phoneIcon} className='contacts__item-icon'/>
                    <div className='contacts__item-info'>
                        <p className='contacts-title'>Номер телефону:</p>
                        <p className='contacts-subtitle'>+38 (098) 225 58 00 </p>
                    </div>
                </div>

                <a href='https://www.instagram.com/comfort_town_if?igsh=dm5tZXF4Y3M1eGNj' target='etarget' className='contacts__item'>
                    <img src={instagramIcon} className='contacts__item-icon'/>
                    <div className='contacts__item-info'>
                        <p className='contacts-title'>Instagram:</p>
                        <p className='contacts-subtitle'>comfort_town_if</p>
                    </div>
                </a>

                <div className='contacts__item'>
                    <img src={mailIcon} className='contacts__item-icon'/>
                    <div className='contacts__item-info'>
                        <p className='contacts-title'>Email:</p>
                        <p className='contacts-subtitle'>yarddevelopment34@gmail.com</p>
                    </div>
                </div>

                <div className='contacts__item'>
                    <img src={mapIcon} className='contacts__item-icon'/>
                    <div className='contacts__item-info'>
                        <p className='contacts-title'>Локація:</p>
                        <p className='contacts-subtitle'>с. Угорники, вулиця Тополина</p>
                    </div>
                </div>

                <button className='main-button contacts-button' onClick={() => setModalActive(true)}>Отримати детальну інформацію</button>
            </div>
                <ComfortMap/>
        </section>

      </main>
    </>
  )
}

export default ComfortPage