import './AdventageList.scss'
import privateSectorIcon from '../assets/westPage/images/icons/privat-sector.png'
import treeIcon from '../assets/westPage/images/icons/tree.png'
import wallIcon from '../assets/westPage/images/icons/wall.png'
import lakeIcon from '../assets/westPage/images/icons/lake.png'
import parkingIcon from '../assets/westPage/images/icons/parking.png'
import playgroundIcon from '../assets/westPage/images/icons/playground.png'
import lockIcon from '../assets/westPage/images/icons/lock.png'
import cityIcon from '../assets/westPage/images/icons/city.png'
import calendarIcon from '../assets/westPage/images/icons/date.png'

const adventListData = [
    {
        text1: 'Приватний сектор',
        icon1: privateSectorIcon,
        text2: 'Озеленення території',
        icon2: treeIcon,
        text3: 'Цегляне будівництво',
        icon3: wallIcon,
    },
    {
        text1: '10 хв до міського озера та парку на авто',
        icon1: lakeIcon,
        text2: 'Паркомісця до кожного будинку',
        icon2: parkingIcon,
        text3: 'Дитячий майданчик',
        icon3: playgroundIcon,
    },
    {
        text1: 'Закриті окремі квартали',
        icon1: lockIcon,
        text2: 'Міські комунікації ',
        icon2: cityIcon,
        text3: 'Вигідні умови розтермінування',
        icon3: calendarIcon,
    },
]

function AdventageBox (props) {
    const {text1, text2, text3, icon1, icon2, icon3} = props
    return (
            <div className='advent-box'>
                <div className='advent-box__item'>
                    <img src={icon1} alt='advent-icon' className='advent-box__item-icon' />
                    <p className='advent-box__item-text'>{text1}</p>
                </div>

                <div className='advent-box__item'>
                    <img src={icon2} alt='advent-icon' className='advent-box__item-icon' />
                    <p className='advent-box__item-text'>{text2}</p>
                </div>

                <div className='advent-box__item'>
                    <img src={icon3} alt='advent-icon' className='advent-box__item-icon' />
                    <p className='advent-box__item-text'>{text3}</p>
                </div>
            </div>
    )
}

function AdventageList() {
    return (
        <div className='advent'>
            {adventListData.map((item, index) => {
                return (<AdventageBox key={index} {...item}/>)
            })}
        </div>
    )
}

export default AdventageList