import { useState } from 'react'
import './ComfortPlanning.scss'


function ComfortPlanning () {
  const [activeButton, setActiveButton] = useState(0)
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber)
  }
  return (
    <div className='plans wrapper'>
      <div className='plans-info'>
        <h2 className='plans-info__title'>У містечку COMFORT TOWN доступна площа - 120 м² та 135 м².</h2>
        <p className='plans-info__text'>Ми пропонуємо на вибір планування з окремою кухнею та вітальнею або ж з гаражем та кухнею-студією на 1-му поверсі. На стадії будівництва ми врахуємо всі ваші індивідуальні побажання щодо планування.</p>
        <div className='plans-info__actions'>
          <button className={activeButton === 0 ? 'plans-info__actions-button main-button' : 'plans-info__actions-button main-button active-plan'} onClick={() => handleButtonClick(0)}>120 м²</button>
          <button className={activeButton === 1 ? 'plans-info__actions-button main-button' : 'plans-info__actions-button main-button active-plan'} onClick={() => handleButtonClick(1)}>135 м²</button>
          <button className={activeButton === 2 ? 'plans-info__actions-button main-button' : 'plans-info__actions-button main-button active-plan'} onClick={() => handleButtonClick(2)}>135 м² з гаражем</button>
        </div>
      </div>

      <div className='plans-img'>
        <div className={activeButton === 0 ? 'plans-images' : 'plans-images--hidden'}></div>
        <div className={activeButton === 1 ? 'plans-images--kitchen' : 'plans-images--hidden'}></div>
        <div className={activeButton === 2 ? 'plans-images--garage' : 'plans-images--hidden'}></div>
      </div>
    </div>
  )
}

export default ComfortPlanning