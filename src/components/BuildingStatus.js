import React, { useState } from 'react'
import './BuildingStatus.scss'
import WestStatusSlider from './WestStatusSlider'
import BeskidStatusSlider from './BeskidStatusSlider'

// import images

// Queue 8
import november1 from '../assets/images/build-status/west-status/queue8/november1.png'
import november2 from '../assets/images/build-status/west-status/queue8/november2.png'
import november3 from '../assets/images/build-status/west-status/queue8/november3.jpg'
import november4 from '../assets/images/build-status/west-status/queue8/november4.png'
import west10 from '../assets/images/build-status/west-status/queue8/west10.jpg'
import west11 from '../assets/images/build-status/west-status/queue8/west11.jpg'
import west1 from '../assets/images/build-status/west-status/queue8/status-west1.jpg'
import west2 from '../assets/images/build-status/west-status/queue8/status-west2.jpg'
import west3 from '../assets/images/build-status/west-status/queue8/west3.jpg'
import west4 from '../assets/images/build-status/west-status/queue8/west4.jpg'
import west5 from '../assets/images/build-status/west-status/queue8/west5.jpg'

// Queue 9
import que9Img1 from '../assets/images/build-status/west-status/queue9/que9-1.jpg'
import que9Img2 from '../assets/images/build-status/west-status/queue9/que9-2.jpg'
import que9Img3 from '../assets/images/build-status/west-status/queue9/que9-3.jpg'
import que9Img4 from '../assets/images/build-status/west-status/queue9/que9-4.jpg'
import que9Img5 from '../assets/images/build-status/west-status/queue9/que9-5.jpg'
import que9Img6 from '../assets/images/build-status/west-status/queue9/que9-6.jpg'
import que9Img7 from '../assets/images/build-status/west-status/queue9/que9-7.jpg'
import que9Img8 from '../assets/images/build-status/west-status/queue9/que9-8.jpg'
import que9Img9 from '../assets/images/build-status/west-status/queue9/que9-9.jpg'
import que9Img10 from '../assets/images/build-status/west-status/queue9/que9-10.jpg'
import west7 from '../assets/images/build-status/west-status/queue9/west7.jpg'
import west8 from '../assets/images/build-status/west-status/queue9/west8.jpg'
import west9 from '../assets/images/build-status/west-status/queue9/west9.jpg'
import west12 from '../assets/images/build-status/west-status/queue9/west12.jpg'
import west13 from '../assets/images/build-status/west-status/queue9/west13.jpg'

// Queue 10
import que10Img1 from '../assets/images/build-status/west-status/queue10/que10-1.jpg'
import que10Img2 from '../assets/images/build-status/west-status/queue10/que10-2.jpg'
import que10Img3 from '../assets/images/build-status/west-status/queue10/que10-3.jpg'

  // cards data
const album8 = [
  {
    img: november1,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: november2,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: november3,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: november4,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: west11,
    month: 'Жовтень',
    title: 'west town',
    info: ''
  },
  {
    img: west10,
    month: 'Жовтень',
    title: 'west town',
    info: ''
  },
  {
    img: west5,
    month: 'Жовтень',
    title: 'west town',
    info: '- Таунхауси 13-24 - повністю готові.'
  },
  {
    img: west4,
    month: 'Жовтень',
    title: 'west town',
    info: '- Таунхауси 13-24 - повністю готові.'
  },
  {
    img: west3,
    month: 'Жовтень',
    title: 'west town',
    info: '- Таунхауси 1-12 - триває монтаж деревʼяних балок дахового накриття з подальшим перекриттям металочерепицею.'
  },
  {
    img: west2,
    month: 'Жовтень',
    title: 'west town',
    info: `- у таунхаусах 1-6 завершуються мурування зовнішніх та внутрішніх стін;`,
    subinfo: ' - у таунхаусах 7-12 - здійснюється перекриття даху.'
  },
  {
    img: west1,
    month: 'Жовтень',
    title: 'west town',
    info: '-у таунхаусах 13-24 (черга 8) - здійснюються фасадні роботи.'
  },
]

const album9 = [
  {
    img: que9Img1,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img2,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img3,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img4,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img5,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img6,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img7,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img8,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img9,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img10,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: west13,
    month: 'Жовтень',
    title: 'west town',
    info: ''
  },
  {
    img: west12,
    month: 'Жовтень',
    title: 'west town',
    info: ''
  },
  {
    img: west9,
    month: 'Жовтень',
    title: 'west town',
    info: '- черга 9 (здача 2 квартал 2024 року).'
  },
  {
    img: west8,
    month: 'Жовтень',
    title: 'west town',
    info: '- черга 9 (здача 2 квартал 2024 року).'
  },
  {
    img: west7,
    month: 'Жовтень',
    title: 'west town',
    info: '- черга 9 (здача 2 квартал 2024 року).'
  },
]

const album10 = [
  {
    img: que10Img1,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que10Img2,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que10Img3,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
]


function BuildingStatus() {
    const [isActive, setIsActive] = useState(true)
    const handleClick = () => {
        setIsActive(!isActive)
    }

    const [activeSlider, setActiveSlider] = useState(1)
    const showSlider = (sliderNumber) => {
        setActiveSlider(sliderNumber)
    }

    const buttonClassActive = isActive ? "build-status__actions-button button-active" : "build-status__actions-button"
    const buttonClass = isActive ? "build-status__actions-button" : "build-status__actions-button  button-active"

    const westTypeActive = isActive ? 'build-status__slider slider-hidden' : 'build-status__slider'
    const beskidTypeActive = isActive ? 'build-status__slider' : 'build-status__slider slider-hidden'

    return (
        <section className="build-status box" id='building-status'>
            <div className="wrapper">
                <div className="build-status__items">
                    <div className="build-status__item">
                        <h2 className="build-status__title main-title">Стани будівництва</h2>
                        <div className="build-status__actions">
                            <button type="button" className={buttonClassActive} onClick={handleClick} id='wes-town__button'>WEST TOWN</button>
                            <button type="button" className={buttonClass} onClick={handleClick}>BESKID HOME RESORT</button>
                        </div>
                    </div>
                </div>

                <div className={beskidTypeActive}>
                    <div className='queue'>
                      <p className='queue-title'>Черга:</p>
                      <button type='button' className={activeSlider === 1 ? 'queue-button--active' : 'queue-button'} onClick={() => showSlider(1)}>8</button>
                      <button type='button' className={activeSlider === 2 ? 'queue-button--active' : 'queue-button'} onClick={() => showSlider(2)}>9</button>
                      <button type='button' className={activeSlider === 3 ? 'queue-button--active' : 'queue-button'} onClick={() => showSlider(3)}>10</button>
                    </div>
                    <div className={activeSlider === 1 ? '' : 'slider-hidden'}>
                        <WestStatusSlider photos={album8}/>
                    </div>
                    <div className={activeSlider === 2 ? '' : 'slider-hidden'}>
                        <WestStatusSlider photos={album9}/>
                    </div>
                    <div className={activeSlider === 3 ? '' : 'slider-hidden'}>
                        <WestStatusSlider photos={album10}/>
                    </div>
                </div>

                <div className={westTypeActive}>
                    <BeskidStatusSlider/>
                </div>
            </div>
        </section>
    )
}

export default BuildingStatus