import React, { useState } from 'react'
import sprite from '../assets/icons/sprite.svg'
import Slider from './BeskedSlider';
import ContactForm from './ContactForm';
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
        <div className='complex' id="beskid-home">
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

                    <div className="complex__text-container besket_text box">
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

                        {/*=================== card actions ========================*/}
                        
                        <div className='info-actions'>
                            <a href='/beskid-home'>
                            <button className='info-actions__btn'>
                                Докладніше про комплекс
                                <svg className="btn-icon">
                                    <use href={sprite + '#chevron-right'}/>
                                </svg>
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <ContactForm title = {'Отримати презентацію комплексу із розрахунком окупності'}/>
        </div>
    )
}

export default Beskid