import { useState } from 'react'

import './HouseType.scss'
import internalImg from '../assets/westPage/images/house-types/internal.webp'
import externalImg from '../assets/westPage/images/house-types/external.webp'
import quadroImg from '../assets/westPage/images/quadroWest.webp'


function HouseType() {
  const [activeButton, setActiveButton] = useState(0)
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber)
  }
    return (
            <div className='htype'>

                <div className='htype-content'>
                  <img src={quadroImg} className={activeButton === 0 ? 'htype-image' : 'htype-image--hidden'}/>
                  <img src={internalImg} className={activeButton === 1 ? 'htype-image' : 'htype-image--hidden'}/>
                  <img src={externalImg} className={activeButton === 2 ? 'htype-image' : 'htype-image--hidden'}/>

                  <div className='htype-actions'>
                    <div className='htype-actions__buttons'>
                      <button className={activeButton === 0 ? 'htype-button' : 'htype-button--noactive'} onClick={() => handleButtonClick(0)}>Квадрохаус</button>
                      <button className={activeButton === 1 ? 'htype-button' : 'htype-button--noactive'} onClick={() => handleButtonClick(1)}>Внутрішній</button>
                      <button className={activeButton === 2 ? 'htype-button' : 'htype-button--noactive'} onClick={() => handleButtonClick(2)}>Крайній</button>
                    </div>

                    <div className='htype-actions__list'>
                    <div className={activeButton === 0 ? 'htype-list' : 'htype-list--hidden'}>
                        <div className='hlist'><div className='hlist-item'><p className='hlist-text'>Кімнати</p></div><p className='hlist-text'>4</p></div>
                        <div className='hlist'><div className='hlist-item'><p className='hlist-text'>Площа</p></div><p className='hlist-text'>105-135 м²</p></div>
                        <div className='hlist'><div className='hlist-item'><p className='hlist-text'>Ділянка</p></div><p className='hlist-text'>1,6-1,9 сотих</p></div>
                      </div>
                      <div className={activeButton === 1 ? 'htype-list' : 'htype-list--hidden'}>
                        <div className='hlist'><div className='hlist-item'><p className='hlist-text'>Кімнати</p></div><p className='hlist-text'>4</p></div>
                        <div className='hlist'><div className='hlist-item'><p className='hlist-text'>Площа</p></div><p className='hlist-text'>120 м² - 135 м²</p></div>
                        <div className='hlist'><div className='hlist-item'><p className='hlist-text'>Ділянка</p></div><p className='hlist-text'>1,65-1,8 сотих</p></div>
                      </div>

                      <div className={activeButton === 2 ? 'htype-list' : 'htype-list--hidden'}>
                        <div className='hlist'><div className='hlist-item'><p className='hlist-text'>Кімнати</p></div><p className='hlist-text'>4</p></div>
                        <div className='hlist'><div className='hlist-item'><p className='hlist-text'>Площа</p></div><p className='hlist-text'>120 м²</p></div>
                        <div className='hlist'><div className='hlist-item'><p className='hlist-text'>Ділянка</p></div><p className='hlist-text'>2,5-2,8 сотих</p></div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
    )
}

export default HouseType