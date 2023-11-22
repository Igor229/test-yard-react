import './AdventageList.scss'
import adventageIcon from '../assets/westPage/images/icons/adventage-icon.png'

const adventListData = [
    {
        text1: 'Приватний сектор',
        text2: 'Озеленення території',
        text3: 'Цегляне будівництво',
    },
    {
        text1: '10 хв до міського озера та парку на авто',
        text2: 'Паркомісця до кожного будинку',
        text3: 'Дитячий майданчик',
    },
    {
        text1: 'Закриті окремі квартали',
        text2: 'Міські комунікації ',
        text3: 'Вигідні умови розтермінування',
    },
]

function AdventageBox (props) {
    const {text1, text2, text3} = props
    return (
            <div className='advent-box'>
                <div className='advent-box__item'>
                    <img src={adventageIcon} alt='advent-icon' className='advent-box__item-icon' />
                    <p className='advent-box__item-text'>{text1}</p>
                </div>

                <div className='advent-box__item'>
                    <img src={adventageIcon} alt='advent-icon' className='advent-box__item-icon' />
                    <p className='advent-box__item-text'>{text2}</p>
                </div>

                <div className='advent-box__item'>
                    <img src={adventageIcon} alt='advent-icon' className='advent-box__item-icon' />
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