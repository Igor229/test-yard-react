import { useState } from 'react'
import './RiverBanner.scss'
import Modal from '../components/Modal'
import { motion } from 'framer-motion'

function RiverBanner () {
    const [modalActive, setModalActive] = useState(false)

    return (
        <motion.section className="about-river" id="main-container"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.7}}
        >
            <Modal active={modalActive} setActive={setModalActive}/>

            <div className='about-container'>
                <div className='about-container__info'>
                    <div className='wrapper'>
                        <motion.h1 className='text-container__title-river'
                            initial={{y: -70, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{duration: 0.5}}
                        >
                            RIVER TOWN
                        </motion.h1>
                        <motion.p className='text-container__text-river'
                            initial={{y: -90, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{duration: 0.5}}
                        >
                            котеджне містечко таунхаусів, де природа <br/>і комфорт створюють ідеальний баланс
                        </motion.p>

                        <div className='text-container__actions'
                            initial={{y: -120, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{duration: 0.5}}
                        >
                            <button className="banner__action about-button-river" id='contacts__button' onClick={() => setModalActive(true)}
                                whileHover={{scale: 1.05}}
                                transition={{duration: 0.02}}
                            >
                                обрати таунхаус
                            </button>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        <div className='about-shadow'></div>
        </motion.section>
    )
}

export default RiverBanner