import { useState } from 'react'

import '../westPageComponents/HouseType.scss'
import './RPlanType.scss'
import internalImg from '../assets/RiverPage/images/plan-type/120m2.webp'
import externalImg from '../assets/RiverPage/images/plan-type/135m2.webp'
import quadroImg from '../assets/RiverPage/images/plan-type/135m2g.webp'


function RTypePlan() {
  const [activeButton, setActiveButton] = useState(0)
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber)
  }
    return (
        <div className='htype rtype'>

            <div className='htype-content rtype-content'>
                <div className='htype-actions rtype-actions'>
                    <div className='rtype-info'>
                        <h2 className='rtype-info__title main-title'>Планування будинків</h2>
                        <p className='rtype-info__text'>Ми пропонуємо різну площу будинків, щоб ви могли обрати планування, яке буде комфортним саме для вас – окрема кухня та вітальня, гараж з просторою кухнею-вітальнею чи гардеробна у спальні – на етапі будівництва врахуємо всі ваші індивідуальні побажання.</p>
                    </div>

                    <div className='htype-actions__buttons rtype-actions__buttons rtype-buttons'>
                        <button className={activeButton === 0 ? 'htype-button rtype-button' : 'htype-button--noactive rtype-button--noactive'} onClick={() => handleButtonClick(0)}>120 м²</button>
                        <button className={activeButton === 1 ? 'htype-button rtype-button' : 'htype-button--noactive rtype-button--noactive'} onClick={() => handleButtonClick(1)}>135 м²</button>
                        <button className={activeButton === 2 ? 'htype-button rtype-button' : 'htype-button--noactive rtype-button--noactive'} onClick={() => handleButtonClick(2)}>135 м² з гаражем</button>
                    </div>
                </div>

                <div className='rtype-image-block'>
                    <img src={internalImg} className={activeButton === 0 ? 'htype-image' : 'htype-image--hidden'}/>
                    <img src={externalImg} className={activeButton === 1 ? 'htype-image' : 'htype-image--hidden'}/>
                    <img src={quadroImg} className={activeButton === 2 ? 'htype-image' : 'htype-image--hidden'}/>
                </div>
            </div>
        </div>
    )
}

export default RTypePlan