import '../westPageComponents/AdventageList.scss'
import schoolIcon from '../assets/comfortPage/icons/advantages-icons/Frame.svg'
import planningIcon from '../assets/comfortPage/icons/advantages-icons/planning.png'
import stationIcon from '../assets/comfortPage/icons/advantages-icons/bus-station.png'
import groundIcon from '../assets/comfortPage/icons/advantages-icons/ground-space.png'
import qualityIcon from '../assets/comfortPage/icons/advantages-icons/quality-build.png'
import parkingIcon from '../assets/comfortPage/icons/advantages-icons/parking-place.png'
import natureIcon from '../assets/comfortPage/icons/advantages-icons/nature.png'
import cityIcon from '../assets/comfortPage/icons/advantages-icons/city.png'
import calendarIcon from '../assets/comfortPage/icons/advantages-icons/calendar.png'
import { motion } from 'framer-motion'

const adventListData = [
    {
        text1: '5 хвилин до школи та садочку пішки',
        icon1: schoolIcon,
        text2: 'Вибір планування',
        icon2: planningIcon,
        text3: '2 хв до найближчої зупинки',
        icon3: stationIcon,
    },
    {
        text1: 'Власна приватна земельна ділянка',
        icon1: groundIcon,
        text2: 'Якісне будівництво',
        icon2: qualityIcon,
        text3: '2 паркомісця до кожного будинку',
        icon3: parkingIcon,
    },
    {
        text1: 'Екологічне розташування',
        icon1: natureIcon,
        text2: '10 хв до центру міста на авто ',
        icon2: cityIcon,
        text3: 'Розтермінування до 2-х років',
        icon3: calendarIcon
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

function ComfortAdvantages() {
    return (
        <div className='advent advantage-comfort-title'>
            {adventListData.map((item, index) => {
                return (<AdventageBox key={index} {...item}/>)
            })}
        </div>
    )
}

export default ComfortAdvantages