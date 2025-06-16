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

import { motion } from 'framer-motion';
import icons from '../assets/icons/sprite.svg'
import zapIcon from '../assets/comfortPage/icons/zap.png'
import yellowZapIcon from '../assets/comfortPage/icons/yellow-zap.png'
import phoneIcon from '../assets/beskidPage/icons/contacts-icons/phone.png'
import chevronRight from '../assets/icons/chevron-right.png'
import rectangleIcon from '../assets/icons/rectangle.svg'

import PrivateGroundImage from '../assets/comfortPage/images/ground-place.webp'
import ContactInfoImage from '../assets/comfortPage/images/contact-info.webp'

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

        {/* ======== advantages block ======== */}
        <div className="wrapper title-container">
          <h1 className="main-title">9 причин обрати таунхаус у COMFORT TOWN</h1>
        </div>

        <div className="wrapper">
          <ComfortAdvantages />
        </div>

        {/* ======== planning types block ======== */}
        <div className="wrapper title-container box" style={{paddingBottom: '60px'}}>
          <h1 className="main-title">Можливість самостійно обрати варіант планування!</h1>
        </div>

        <div className='wrapper'>
          <ComfortPlanning />
        </div>

          <ComfortStatus/>

        {/* ======== contact block ======== */}
        <div className="wrapper title-container contact-comfort-title box" style={{padding: '112px 0 64px 0'}}>
          <h1 className="main-title">Контактна інформація</h1>
        </div>
        <div className='contact-block wrapper'>
          <p className='contact-block__text'>Дізнатись більше інформації можна <br/> зателефонувавши у відділ продажу</p>
          <div className='contact-block__phone'>
            <img src={phoneIcon} alt='phone-icon'/>
            <div className='contact-block__phone-box'>
              <p className='contact-block__phone-box-text'>Номер телефону:</p>
              <p className='contact-block__phone-box-tel'>+38 (098) 225 58 00</p>
            </div>
          </div>
        </div>
        <div className='comfort-last-block wrapper' style={{marginBottom: '112px'}}>
          <FullPageImage image={ContactInfoImage}/>
        </div>
      </main>
    </>
  )
}

export default ComfortPage