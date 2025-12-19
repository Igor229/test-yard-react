import './MoreAbout.scss'
import natureIcon from '../assets/comfortPage/icons/more-about-project_icons/nature.png'
import buildingIcon from '../assets/comfortPage/icons/more-about-project_icons/building.png'
import cityIcon from '../assets/comfortPage/icons/more-about-project_icons/city.png'
import blockImage from '../assets/comfortPage/images/more-about1.webp'
import numberOneIcon from '../assets/comfortPage/icons/1.png'
import numberTwoIcon from '../assets/comfortPage/icons/2.png'
import numberThreeIcon from '../assets/comfortPage/icons/3.png'
import numberFourIcon from '../assets/comfortPage/icons/4.png'

const cardData = [
  {
    icon: natureIcon,
    text: 'Містечко таунхаусів розташоване в чистій екологічній зоні Івано-Франківська.'
  },
  {
    icon: buildingIcon,
    text: 'В 5-ти хвилинах пішої доступності розташована школа-ліцей та дитячий садочок.'
  },
  {
    icon: cityIcon,
    text: 'Всього за 10 хвилин, ви зможете дістатись Центру міста.'
  },
]

function MoreAboutCard (props) {
  const {icon, text} = props
  return (
    <div className='moreabout-card'>
      <img src={icon} alt='cart' className='moreabout-card__icon'/>
      <p className='moreabout-card__text'>{text}</p>
    </div>
  )
}

function MoreAbout() {
  return (
      <div className='moreabout'>
          <div className='moreabout-cards'>
            {cardData.map((item, index) => {
                return (<MoreAboutCard key={index} {...item}/>)
            })}
          </div>

          <div className='moreabout-content'>
            <div className='moreabout-content__info'>
              <h2 className='moreabout-content__info-title'>Що отримують власники таунхауса у містечку COMFORT TOWN?</h2>
              <div className='moreabout-content__info-list'>
                {/* list of items */}
                <div className='moreabout-content__info-item'>
                  <img src={numberOneIcon} alt='one' className='moreabout-content__info-item-icon'/>
                  <p className='moreabout-content__info-item-text'>Повноцінний будинок-таунхаус площею 135 м² з сучасним та ергономічним плануванням, яке ви до речі, можете обрати самостійно.</p>
                </div>
                <div className='moreabout-content__info-item'>
                  <img src={numberTwoIcon} alt='one' className='moreabout-content__info-item-icon'/>
                  <p className='moreabout-content__info-item-text'>Власну приватну земельну ділянку, яку ви можете облаштувати на свій розсуд - поставити мангал та запросити друзів чи проводити теплі вечори з сім’єю. Таунхауси з повністю закритим подвір’ям - відгороджений, як передній, так і задній двір.</p>
                </div>
                <div className='moreabout-content__info-item'>
                  <img src={numberThreeIcon} alt='one' className='moreabout-content__info-item-icon'/>
                  <p className='moreabout-content__info-item-text'>Гараж та два паркомісця. Обираючи таунхаус, у вас не буде проблем з парковкою, адже ми про все подбали.</p>
                </div>
                <div className='moreabout-content__info-item'>
                  <img src={numberFourIcon} alt='one' className='moreabout-content__info-item-icon'/>
                  <p className='moreabout-content__info-item-text'>Простір для дозвілля. Власна ділянка та простора територія містечка дозволить вам проводити більше часу з дітьми на свіжому повітрі.</p>
                </div>
              </div>
            </div>
            <img src={blockImage} alt='about' className='moreabout-content__img'/>
          </div>
      </div>
  )
}

export default MoreAbout