import './WestPlanningType.scss'
import planImg from '../assets/westPage/images/west-town-plan.png'
import FsLightbox from 'fslightbox-react'
import { useState } from 'react'

function WestPlanningType() {
    const [toggle, setToggle] = useState(false)
    return (
            <div className='info west__info-container west-plan info-container'>
                <img src={planImg} className='west-plan__img' onClick={() => {setToggle(!toggle)}}/>

                <div className='info-description west__info-description'>
                    <h2 className='info-description__title'>ПЛАНУВАННЯ ТАУНХАУСА</h2>
                    <p className='info-description__text'>Загальна площа будинку становить 120 м². Планування функціональне, спроектоване таким чином, щоб особистого простору вистачило для всіх мешканців. Затишна простора вітальня з виходом на задній двір-терасу. Окрема кухня, кладова, передпокій та гостьовий санвузол на першому поверсі. Велика батьківська спальня з можливістю облаштувати гардероб та дві окремі кімнати - дитяча і кабінет, ванна кімната на другому поверсі</p>
                    <p className='info-description__text'>Є можливість облаштування 3-поверху - корисна площа + 30 м².</p>
                    <p className='info-description__text'>ДОСТУПНА ФУНКЦІЯ - БЕЗКОШТОВНЕ ПЕРЕПЛАНУВАННЯ. Гараж/кухня-студія, гардеробна у спальні - ми врахуємо всі ваші індивідуальні побажання.</p>
                </div>
                <FsLightbox
                    toggler={toggle}
                    sources={[
                        planImg
                    ]}
                />
            </div>       
    )
}

export default WestPlanningType