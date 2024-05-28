import './InstallmentSystem.scss'
import arrowImg from '../assets/beskidPage/icons/arrow.png'
import bottomArrowImg from '../assets/beskidPage/icons/arrow-bottom.png'
import { motion } from 'framer-motion'

function InstallmentSystem () {
    return (
        <div className='installment'>
            <h2 className='installment-title'>Вигідна система розтермінування</h2>
            <div className='installment__info'>
                <motion.div className='installment__info-box'
                    initial={{x: -150, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 0.4}}
                >
                    <h3 className='box-title'>30%</h3>
                    <p className='box-text'>Перший платіж</p>
                </motion.div>

                <img src={arrowImg} alt='arrow-img' className='arrow'/>
                <img src={bottomArrowImg} alt='arrow-img' className='arrow-bottom'/>

                <motion.div className='installment__info-box'
                    initial={{x: -150, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 0.8}}
                >
                    <h3 className='box-title'>40%</h3>
                    <p className='box-text'>Другий платіж на середині терміну</p>
                </motion.div>

                <img src={arrowImg} alt='arrow-img' className='arrow'/>
                <img src={bottomArrowImg} alt='arrow-img' className='arrow-bottom'/>

                <motion.div className='installment__info-box'
                    initial={{x: -150, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 1}}
                >
                    <h3 className='box-title'>30%</h3>
                    <p className='box-text'>Останній платіж після отримання документів</p>
                </motion.div>
            </div>
        </div>
    )
}

export default InstallmentSystem