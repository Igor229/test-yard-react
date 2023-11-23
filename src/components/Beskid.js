import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react'
import icons from '../assets/icons/besket-icons.svg'
import Slider from './BeskedSlider';
import ContactForm from './ContactForm';
// import YouTubeVideo from './YouTubeVideo';
import './Complexes.scss'
import 'swiper/css';

function Beskid () {
    const [isActive, setIsActive] = useState(true)

    const handleClick = () => {
        setIsActive(!isActive)
    }

    const buttonClassActive = isActive ? "main-button type__button type__button--active" : "main-button type__button"
    const buttonClass = isActive ? "main-button type__button" : "main-button type__button type__button--active"
    const squareContent = isActive ? '117,94' : '121,27'
    const terraceContent = isActive ? '16,80' : '27,90'

    return (
        <div className='complex'>
            <div className="complex__info box">

                <div className='complex__info-slider'>
                <Slider />
                </div>

                <div className="complex__info-text complex__base-card">
                    <h3 className="info__title box">BESKID HOME RESORT (BUKOVEL)</h3>

                    <p className='info__sub-title box'>Комплекс розташований в с.Поляниця, урочище Вишня (BUKOVEL).</p>

                    <div className="complex__info-types box">
                        <button className={buttonClassActive} id="typeButton-one" onClick={handleClick}>Тип - 1</button>
                        <button className={buttonClass} id="typeButton-two" onClick={handleClick}>Тип - 2</button>
                    </div>

                    <div className="text-container besket_text box">
                        <div className="sizes-container">
                            <p className="info__text"> - Площа - {squareContent} м2</p>
                            <p className="info__text"> - Тераса – {terraceContent} м2</p>
                        </div>

                        <div className="info__container box">
                            <p className="info-text">
                                Двоповерхові високоякісні котеджі продаються повністю укомплектовані 
                                до проживання – з ремонтом, меблями та побутовою технікою. Будинок 
                                вміщує простору кухню-студію та спальню, а також санвузол на першому 
                                поверсі. Та ще дві окремі спальні з власними санвузлами на другому поверсі.
                            </p>
                        </div>

                        <div className="info__container box">
                            <svg className="text-icon">
                                <use href={icons + '#elevator'}/>
                            </svg>
                            <p className="info-text">5 хв до найближчого підйомника;</p>
                        </div>


                        <div className="info__container box">
                            <svg className="text-icon">
                            <use href={icons + '#spa-zone'}/>
                            </svg>
                            <p className="info-text">власна SPA-зона;</p>
                        </div>


                        <div className="info__container box">
                            <svg className="text-icon">
                                <use href={icons + '#pool'}/>
                            </svg>
                            <p className="info-text">сезонний басейн;</p>
                        </div>

                        <div className="info__container box">
                            <svg className="text-icon">
                                <use href={icons + '#terrace'}/>
                            </svg>
                            <p className="info-text">велика тераса з виглядом на гори;</p>
                        </div>

                        <div className="info__container box">
                            <svg className="text-icon">
                                <use href={icons + '#company'}/>
                            </svg>
                            <p className="info-text">власна керуюча компанія.</p>
                        </div>
                    </div>
                </div>
            </div>

            <ContactForm title = {'Отримати презентацію комплексу із розрахунком окупності'}/>
            {/* <YouTubeVideo/> */}
        </div>
    )
}

export default Beskid