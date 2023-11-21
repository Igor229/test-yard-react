import './InstallmentSystem.scss'
import arrowImg from '../assets/beskidPage/icons/arrow.png'
import bottomArrowImg from '../assets/beskidPage/icons/arrow-bottom.png'

function InstallmentSystem () {
    return (
        <div className='installment'>
            <h2 className='installment-title'>Вигідна система розтермінування</h2>
            <div className='installment__info'>
                <div className='installment__info-box'>
                    <h3 className='box-title'>30%</h3>
                    <p className='box-text'>Перший платіж</p>
                </div>

                <img src={arrowImg} alt='arrow-img' className='arrow'/>
                <img src={bottomArrowImg} alt='arrow-img' className='arrow-bottom'/>

                <div className='installment__info-box'>
                    <h3 className='box-title'>40%</h3>
                    <p className='box-text'>Другий платіж на середині терміну</p>
                </div>

                <img src={arrowImg} alt='arrow-img' className='arrow'/>
                <img src={bottomArrowImg} alt='arrow-img' className='arrow-bottom'/>

                <div className='installment__info-box'>
                    <h3 className='box-title'>30%</h3>
                    <p className='box-text'>Останній платіж після отримання документів</p>
                </div>
            </div>
        </div>
    )
}

export default InstallmentSystem