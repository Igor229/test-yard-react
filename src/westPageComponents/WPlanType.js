import { useState } from 'react'

import './WPlanType.scss'
import planImageOne from '../assets/westPage/images/TypeOne.png'
import planImageTwo from '../assets/westPage/images/TypeTwo.png'

import numIconOne from '../assets/westPage/images/icons/num1.png'
import numIconTwo from '../assets/westPage/images/icons/num2.png'
import numIconThree from '../assets/westPage/images/icons/num3.png'
import numIconFour from '../assets/westPage/images/icons/num4.png'
import numIconFive from '../assets/westPage/images/icons/num5.png'
import numIconSix from '../assets/westPage/images/icons/num6.png'
import numIconSeven from '../assets/westPage/images/icons/num7.png'
import numIconEight from '../assets/westPage/images/icons/num8.png'
import numIconNine from '../assets/westPage/images/icons/num9.png'
import numIconTen from '../assets/westPage/images/icons/num10.png'
import numIconEleven from '../assets/westPage/images/icons/num11.png'

function WPlanType() {
  const [activeButton, setActiveButton] = useState(1)
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber)
  }
    return (
            <div className='wtype'>
                <div className='wtype-main'>
                  <h3 className='wtype-main__header main-title'>Планування</h3>
                  <p className='wtype-main__text'>Загальна площа таунхауса становить 120 м². Ми пропонуємо на вибір планування з окремою кухнею та вітальнею або ж з гаражем та кухнею-студією на 1-му поверсі. На стадії будівництва ми врахуємо всі ваші індивідуальні побажання щодо планування.</p>
                </div>

                <div className='wtype-actions__buttons upper-actions'>
                  <button className={activeButton === 1 ? 'wtype-button' : 'wtype-button--noactive'} onClick={() => handleButtonClick(1)}>1-ий поверх</button>
                  <button className={activeButton === 0 ? 'wtype-button' : 'wtype-button--noactive'} onClick={() => handleButtonClick(0)}>2-ий поверх</button>
                </div>

                <div className='wtype-content'>
                  <img src={planImageOne} className={activeButton === 1 ? 'wtype-image' : 'wtype-image--hidden'}/>
                  <img src={planImageTwo} className={activeButton === 0 ? 'wtype-image' : 'wtype-image--hidden'}/>

                  <div className='wtype-actions'>
                    <div className='bottom-actions wtype-actions__buttons'>
                      <button className={activeButton === 1 ? 'wtype-button' : 'wtype-button--noactive'} onClick={() => handleButtonClick(1)}>1-ий поверх</button>
                      <button className={activeButton === 0 ? 'wtype-button' : 'wtype-button--noactive'} onClick={() => handleButtonClick(0)}>2-ий поверх</button>
                    </div>

                    <div className='wtype-actions__list'>
                      <div className={activeButton === 1 ? 'wtype-list' : 'wtype-list--hidden'}>
                        <div className='wlist'><div className='wlist-item'><img src={numIconOne} className='wlist-icon'/><p className='wlist-text'>Коридор</p></div><p className='wlist-text'>13,5 м²</p></div>
                        <div className='wlist'><div className='wlist-item'><img src={numIconTwo} className='wlist-icon'/><p className='wlist-text'>Вітальня</p></div><p className='wlist-text'>25,5 м²</p></div>
                        <div className='wlist'><div className='wlist-item'><img src={numIconThree} className='wlist-icon'/><p className='wlist-text'>Кухня</p></div><p className='wlist-text'>13,3 м²</p></div>
                        <div className='wlist'><div className='wlist-item'><img src={numIconFour} className='wlist-icon'/><p className='wlist-text'>Кладова</p></div><p className='wlist-text'>2,9 м²</p></div>
                        <div className='wlist'><div className='wlist-item'><img src={numIconFive} className='wlist-icon'/><p className='wlist-text'>Санвузол</p></div><p className='wlist-text'>3,4 м²</p></div>
                      </div>

                      <div className={activeButton === 0 ? 'wtype-list' : 'wtype-list--hidden'}>
                        <div className='wlist'><div className='wlist-item'><img src={numIconSix} className='wlist-icon'/><p className='wlist-text'>Коридор</p></div><p className='wlist-text'>6,2 м²</p></div>
                        <div className='wlist'><div className='wlist-item'><img src={numIconSeven} className='wlist-icon'/><p className='wlist-text'>Батьківська спальня</p></div><p className='wlist-text'>23,2 м²</p></div>
                        <div className='wlist'><div className='wlist-item'><img src={numIconEight} className='wlist-icon'/><p className='wlist-text'>Ванна кімната</p></div><p className='wlist-text'>5,5 м²</p></div>
                        <div className='wlist'><div className='wlist-item'><img src={numIconNine} className='wlist-icon'/><p className='wlist-text'>Спальня №2</p></div><p className='wlist-text'>12,5 м²</p></div>
                        <div className='wlist'><div className='wlist-item'><img src={numIconTen} className='wlist-icon'/><p className='wlist-text'>Спальня №3</p></div><p className='wlist-text'>13,5 м²</p></div>
                        <div className='wlist'><div className='wlist-item'><img src={numIconEleven} className='wlist-icon'/><p className='wlist-text'>Балкон</p></div><p className='wlist-text'>1,9 м²</p></div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
    )
}

export default WPlanType