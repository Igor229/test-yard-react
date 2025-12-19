import '../westPageComponents/AdventageList.scss'
import privateSectorIcon from '../assets/westPage/images/icons/privat-sector.png'
import treeIcon from '../assets/westPage/images/icons/tree.png'
import lakeIcon from '../assets/westPage/images/icons/lake.png'
import parkingIcon from '../assets/westPage/images/icons/parking.png'
import lockIcon from '../assets/westPage/images/icons/lock.png'
import cityIcon from '../assets/westPage/images/icons/city.png'
import squarepIcon from '../assets/westPage/images/icons/square-punktir.png'
import monumentIcon from '../assets/westPage/images/icons/monument.png'

const adventListData = [
    {
        text1: 'Закрита територія',
        icon1: lockIcon,
        text2: 'Приватні задні двори',
        icon2: privateSectorIcon,
        text3: 'Міські комунікації',
        icon3: monumentIcon,
    },
    {
        text1: 'Всього 5 хв до центру міста',
        icon1: cityIcon,
        text2: 'Власні паркомісця',
        icon2: parkingIcon,
        text3: 'Тиха та зелена локація',
        icon3: treeIcon,
    },
    {
        text1: 'Розташування поруч з річкою',
        icon1: lakeIcon,
        text2: 'Сучасні планування ',
        icon2: squarepIcon,
        text3: false,
        icon3: false
    },
]

function RiverAdvantagesBox (props) {
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

function RiverAdvantagesList() {
    return (
        <div className='advent'>
            {adventListData.map((item, index) => {
                return (<RiverAdvantagesBox key={index} {...item}/>)
            })}
        </div>
    )
}

export default RiverAdvantagesList