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
import FullPageSlider from '../comfortPageComponents/FullPageSlider'

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
      <div className='special-proposal'>
          <p className='special-proposal__text'>Змінено умови розтермінування для COMFORT TOWN. </p>
          <a className='special-proposal__action' onClick={handleClickProposal} style={{fontWeight: '600', cursor: 'pointer', color: '#000'}}>Умови акції<img src={chevronRight} style={{cursor: 'pointer'}}/></a>
      </div>
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
          <h2 className='block-info__title'>Котеджне містечко таунхаусів <br/> COMFORT TOWN</h2>
          <p className='block-info__text'>Це зразок сучасного житла в поєднанні з високим рівнем комфорту та приватності, це уособлення справжніх сімейних цінностей та затишку - адже комфортно там, де вдома!</p>
        </div>
        
        <div className='wrapper'>
          <FullPageSlider/>
        </div>

        <div  id='propose'></div>

         {/* ======= propose block ======= */}
        <div className='propose wrapper'>
          <div className='propose-block'>
            <h2 className='propose-title'>Умови розтермінування</h2>
            <p className='propose-block__text'>Наша компанія максимально лояльна до кожного клієнта, тож ми пропонуємо 2 варіанти вигідного розтермінування платежу на купівлю таунхауса у містечку COMFORT TOWN</p>
          </div>

          <div className='propose-boxes'>
          <div className='propose-box'>
              <h3 className='propose-box__title'>1-ий варіант</h3>
              <div className='propose-box__info'>
                <p className='propose-box__info-text'>Умови</p>
                <p className='propose-box__info-subtext'><span className='propose-span'>30%</span> перший платіж від <span className='propose-price'>19 500$</span></p>
                <p className='propose-box__info-subtext'><span className='propose-span'>2 р.</span> термін розтермінування</p>
                <p className='propose-box__info-subtext'><span className='propose-span'>серпень 2025 р.</span> здача будинку в експлуатацію  </p>
              </div>
              <button onClick={() => setModalActive(true)} className='main-button propose-box__button'>Отримати повний розрахунок</button>
            </div>

            <div className='propose-box'>
              <h3 className='propose-box__title'>2-ий варіант</h3>
              <div className='propose-box__info'>
                <p className='propose-box__info-text'>Умови</p>
                <p className='propose-box__info-subtext'><span className='propose-span'>40%</span> перший платіж від <span className='propose-price'>26 000$</span></p>
                <p className='propose-box__info-subtext'><span className='propose-span'>60%</span> сума платежу після отримання документів на право власності</p>
                <p className='propose-box__info-subtext'><span className='propose-span'>серпень 2025 р.</span> здача будинку в експлуатацію </p>
              </div>
              <button onClick={() => setModalActive(true)} className='main-button propose-box__button'>Отримати повний розрахунок</button>
            </div>
          </div>
        </div>

        {/* ======== more about project block ======== */}
        <div className="wrapper title-container about-comfort-title" style={{padding: '112px 0 64px 0'}}>
          <h1 className="main-title">Детальніше про проект</h1>
        </div>
        <div className='wrapper'>
          <MoreAbout/>
        </div>

        {/* ======== private ground block ======== */}
        <div className='private-ground wrapper'>
          <p className='private-ground__proposal'><img src={zapIcon} alt='zap-icon'/>Нова пропозиція</p>
          <h2 className='private-ground__title'>Таунхауси з повністю приватною ділянкою</h2>
          <p className='private-ground__text'>Закритий передній та задній двори. Ділянки від 1,65 до 2,5 сотих.</p>
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