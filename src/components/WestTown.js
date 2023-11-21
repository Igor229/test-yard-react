import React, { useState, useRef } from 'react'
import icons from '../assets/icons/west-icons.svg'
import sprite from '../assets/icons/sprite.svg'
import Slider from './WestSlider';
import ContactForm from './ContactForm';
import './Complexes.scss'
import 'swiper/css';

function WestTown () {
    const [isClicked, setIsClicked] = useState(false)
    const btnClassActive = isClicked ? 'info-actions__btn show-less' : 'info-actions__btn'
    const btnClass = isClicked ? 'info-actions__btn' : 'info-actions__btn show-less'

    const extraTextActive = isClicked ? 'info-text' : 'info-text__extra'
    const extraText = isClicked ? 'info-text__extra' : 'info-text'
    const handleClick = () => {
        setIsClicked(!isClicked)
        showExtra()
    }

    const [extraBtn_class, setExtraBtnClass] = useState("complex__info-text complex__base-card")
    const [blurClass, setBlurClass] = useState("complex__info-slider")
    const showExtra = (e) => {
        if(!isClicked){
            setExtraBtnClass("complex__info-text complex__base-card show-extra")
            setBlurClass("complex__info-slider set-blur")
            setIsClicked(true)
        } else {
            setExtraBtnClass("complex__info-text complex__base-card")
            setBlurClass("complex__info-slider")
            setIsClicked(false)
        }
    }


    return (
        <div className='complex' id="west-town">
            <div className="complex__info box">

                <div className={blurClass}>
                <Slider />
                </div>

                <div className={extraBtn_class}>
                    <h3 className="info__title box">WEST TOWN</h3>

                    <div className="text-container box">
                        <p className="info-text upper-text">Одне з найбільших котеджних містечок таунхаусів у західному регіоні.</p>
                        <div className="sizes-container">
                            <p className="info__text"> - Площа 120 м2;</p>
                            <p className="info__text"> - Внутрішні таунхауси - ділянка 1,65 сотих;</p>
                            <p className="info__text"> - Крайні таунхауси - ділянка 2,5 сотих;</p>
                        </div>
                        <p className="info-text upper-text">РОЗТЕРМІНУВАННЯ ДО 24-х МІСЯЦІВ. <br/>Перший внесок від 18 300$</p>

                        <div className="info__container box">
                            <svg className="text-icon">
                                <use href={icons + '#school'}/>
                            </svg>
                            <p className="info-text">Школа знаходиться в межах 700 м;</p>
                        </div>


                        <div className="info__container box">
                            <svg className="text-icon">
                            <use href={icons + '#kindergarten'}/>
                            </svg>
                            <p className="info-text">Дитячий садочок знаходиться в межах 500 м;</p>
                        </div>


                        <div className="info__container box">
                            <svg className="text-icon">
                                <use href={icons + '#lake'}/>
                            </svg>
                            <p className="info-text">До міського озера на будь-якому транспорті ви зможете дістатись всього за 10 хвилин;</p>
                        </div>

                        <div className="info__container box">
                            <svg className="text-icon">
                                <use href={icons + '#building'}/>
                            </svg>
                            <p className="info-text">До центру міста за 20 хвилин.</p>
                        </div>

                        <div className="info__container box">
                            <p className="info-text">
                                Таунхауси розташовані у Крихівцях, поруч містечка Калинова Слобода.
                                <span className={extraTextActive}>
                                    У вартість вже входить штукатурка стін "під маяки", встановлення 6-тикамерних вікон
                                    з енергозберігаючим склом, вхідних броньованих дверей, бетонні сходи на другий поверх,
                                    всі міські комунікації та лічильники на мережі. <br/> Залишайте заявку нижче, щоб отримати 
                                    детальнішу інформацію чи записатись на перегляд будинку.
                                </span>
                            </p>
                        </div>

                        {/*=================== card actions ========================*/}
                        
                        <div className='info-actions'>
                            <button className={btnClassActive} onClick={handleClick}>
                                Показати більше
                                <svg className="btn-icon">
                                    <use href={sprite + '#chevron-right'}/>
                                </svg>
                            </button>
                            <button className={btnClass} onClick={handleClick}>
                                Показати менше
                                <svg className="btn-icon">
                                    <use href={sprite + '#chevron-right'}/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <ContactForm title = 'Отримати розрахунок розтермінування'/>
        </div>
    )
}

export default WestTown