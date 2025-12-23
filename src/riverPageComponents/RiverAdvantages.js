import RiverLockIcon from '../assets/RiverPage/images/icons/lock.svg'
import RiverTreeIcon from '../assets/RiverPage/images/icons/tree.svg'
import RiverTownIcon from '../assets/RiverPage/images/icons/town.svg'
import './RiverAdvantages.scss'

function RiverAdvantages() {
  return (
    <>
    <div className='riveradv wrapper'>
        <div className='riveradv-titles'>
            <h1 className='riveradv-titles__main'> Переваги містечка</h1>
        </div>

      <div className='riveradv-cards wrapper'>

        <div className='riveradv-card'>
          <img src={RiverLockIcon} className='riveradv-card-icon' alt='cart'/>
          <p className='riveradv-card-text'>Закрита територія містечка із зонами для відпочинку</p>
        </div>
        <div className='riveradv-card'>
          <img src={RiverTreeIcon} className='riveradv-card-icon' alt='cart'/>
          <p className='riveradv-card-text'>Таунхауси розташовані в зеленій зоні, неподалік річки</p>
        </div>
        <div className='riveradv-card'>
          <img src={RiverTownIcon} className='riveradv-card-icon' alt='cart'/>
          <p className='riveradv-card-text'>Всього 5 хвилин до центру міста</p>
        </div>
      </div>
    </div>

    <div className='riveradv-cards-tabs wrapper'>

        <div className='riveradv-card'>
          <img src={RiverLockIcon} className='riveradv-card-icon' alt='cart'/>
          <p className='riveradv-card-text'>Досвідчена керуюча компанія <br/>FOMICH HOTELS GROUP</p>
        </div>
        <div className='riveradv-card'>
          <img src={RiverTreeIcon} className='riveradv-card-icon' alt='cart'/>
          <p className='riveradv-card-text'>Сезон у Буковелі проходить <br/>365 днів на рік</p>
        </div>
        <div className='riveradv-card'>
          <img src={RiverTownIcon} className='riveradv-card-icon' alt='cart'/>
          <p className='riveradv-card-text'>Інвестиції з дохідністю <br/> до 15-ти % річних</p>
        </div>
      </div>
    </>
  )
}

export default RiverAdvantages