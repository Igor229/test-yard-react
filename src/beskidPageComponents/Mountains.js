import MountShieldIcon from '../assets/beskidPage/icons/mountains-icons/shield.svg'
import MountCalendarIcon from '../assets/beskidPage/icons/mountains-icons/calendar.svg'
import MountStoncksIcon from '../assets/beskidPage/icons/mountains-icons/stoncks.svg'
import './Mountains.scss'

function Mountains() {
  return (
    <>
    <div className='mountains'>
      <div className='mountains-titles'>
        <h1 className='mountains-titles__main'> Інвестуйте в нерухомість <br/> у Карпатах вигідно вже зараз!</h1>
        <p className='mountains-titles__sub'> Наші котеджі повністю готові - тож ваші інвестиції не змушуватимуть вас чекати - почніть заробляти вже сьогодні! </p>
      </div>

      <div className='mountains-cards wrapper'>

        <div className='mountains-card'>
          <img src={MountShieldIcon} alt='cart'/>
          <p className='mountains-card-text'>Досвідчена керуюча компанія <br/>FOMICH HOTELS GROUP</p>
        </div>
        <div className='mountains-card'>
          <img src={MountCalendarIcon} alt='cart'/>
          <p className='mountains-card-text'>Сезон у Буковелі проходить <br/>365 днів на рік</p>
        </div>
        <div className='mountains-card'>
          <img src={MountStoncksIcon} alt='cart'/>
          <p className='mountains-card-text'>Інвестиції з дохідністю <br/> до 15-ти % річних</p>
        </div>
      </div>
    </div>

    <div className='mountains-cards-tabs wrapper'>

        <div className='mountains-card'>
          <img src={MountShieldIcon} alt='cart'/>
          <p className='mountains-card-text'>Досвідчена керуюча компанія <br/>FOMICH HOTELS GROUP</p>
        </div>
        <div className='mountains-card'>
          <img src={MountCalendarIcon} alt='cart'/>
          <p className='mountains-card-text'>Сезон у Буковелі проходить <br/>365 днів на рік</p>
        </div>
        <div className='mountains-card'>
          <img src={MountStoncksIcon} alt='cart'/>
          <p className='mountains-card-text'>Інвестиції з дохідністю <br/> до 15-ти % річних</p>
        </div>
      </div>
    </>
  )
}

export default Mountains