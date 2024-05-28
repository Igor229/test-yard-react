import { useState } from 'react'
import './ComfortPlanning.scss'


function ComfortPlanning () {
  const [activeButton, setActiveButton] = useState(1)
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber)
  }
  return (
    <div className='plans'>
      <div className='plans-info'>
        <h2 className='plans-info__title'>ЗАГАЛЬНА ПЛОЩА ТАУНХАУСА 135 М²</h2>
        <p className='plans-info__text'>Вибір планування залежить від особистих уподобань та потреб вашої сім’ї - ми пропонуємо декілька варіантів планувань: </p>
        <div className='plans-info__actions'>
          <button className={activeButton === 1 ? 'plans-info__actions-button main-button' : 'plans-info__actions-button main-button active-plan'} onClick={() => handleButtonClick(1)}>Гараж у будинку</button>
          <button className={activeButton === 0 ? 'plans-info__actions-button main-button' : 'plans-info__actions-button main-button active-plan'} onClick={() => handleButtonClick(0)}>Окрема кухня</button>
        </div>
        <p className='plans-info__text'>Особистого простору вистачить для всіх. А яке оберете ви?</p>
      </div>

      <div className={activeButton === 1 ? 'plans-images' : 'plans-images--kitchen'}></div>
    </div>
  )
}

export default ComfortPlanning