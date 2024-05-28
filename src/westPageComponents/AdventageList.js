import './AdventageList.scss'
import privateSectorIcon from '../assets/westPage/images/icons/privat-sector.png'
import treeIcon from '../assets/westPage/images/icons/tree.png'
import wallIcon from '../assets/westPage/images/icons/wall.png'
import lakeIcon from '../assets/westPage/images/icons/lake.png'
import parkingIcon from '../assets/westPage/images/icons/parking.png'
// import playgroundIcon from '../assets/westPage/images/icons/playground.png'
import lockIcon from '../assets/westPage/images/icons/lock.png'
import cityIcon from '../assets/westPage/images/icons/city.png'
import calendarIcon from '../assets/westPage/images/icons/date.png'
import { motion } from 'framer-motion'

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
        // text3: 'Дитячий майданчик',
        // icon3: playgroundIcon,
        text3: 'Окремі житлові квартали',
        icon3: lockIcon,
    },
    {
        text1: 'Міські комунікації ',
        icon1: cityIcon,
        text2: 'Вигідні умови розтермінування',
        icon2: calendarIcon,
        text3: false,
        icon3: false
    },
]

function AdventageBox (props) {
    const {text1, text2, text3, icon1, icon2, icon3} = props
    return (
            <div className='advent-box'>
                <div className='advent-box__item'
                    initial={{x: -350}}
                    whileInView={{x: 0}}
                    transition={{duration: 0.45}}
                >
                    <img src={icon1} alt='advent-icon' className='advent-box__item-icon' />
                    <p className='advent-box__item-text'>{text1}</p>
                </div>

                <div className='advent-box__item'
                    initial={{x: -350}}
                    whileInView={{x: 0}}
                    transition={{duration: 0.45}}
                >
                    <img src={icon2} alt='advent-icon' className='advent-box__item-icon' />
                    <p className='advent-box__item-text'>{text2}</p>
                </div>

                <div className='advent-box__item'
                    initial={{x: -350}}
                    whileInView={{x: 0}}
                    transition={{duration: 0.45}}
                >
                    <img src={icon3} alt='advent-icon' className={icon3 ? 'advent-box__item-icon' : 'hidden'} />
                    <p className={text3 ? 'advent-box__item-text': 'hidden'}>{text3}</p>
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

// This comment was written for git deploy, just ignore it
// This comment was written for git deploy, just ignore it
// This comment was written for git deploy, just ignore it
// This comment was written for git deploy, just ignore it