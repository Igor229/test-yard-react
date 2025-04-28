import React, { useState } from 'react'
import './ComfortBanner.scss'
import Modal from '../components/Modal'
import { motion } from 'framer-motion'

function ComfortBanner () {
    const [modalActive, setModalActive] = useState(false)

    return (
        <motion.section className="about-comfort" id="main-container"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.7}}
        >
            <Modal active={modalActive} setActive={setModalActive}/>

            <div className='about-container'>
                <div className='about-container__info'>
                    <div className='wrapper'>
                        <motion.h1 className='text-container__title-comfort'
                            initial={{y: -70, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{duration: 0.5}}
                        >
                            Comfort Town
                        </motion.h1>
                        <motion.p className='text-container__text-comfort'
                            initial={{y: -90, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{duration: 0.5}}
                        >
                            котеджне містечко таунхаусів <br/> в екологічній зоні Івано-Франківська
                        </motion.p>

                        <div className='text-container__actions'
                            initial={{y: -120, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{duration: 0.5}}
                        >
                            <button className="banner__action about-button-comfort" id='contacts__button' onClick={() => setModalActive(true)}
                                whileHover={{scale: 1.05}}
                                transition={{duration: 0.02}}
                            >
                                Дізнатися деталі
                            </button>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        <div className='about-shadow'></div>
        </motion.section>
    )
}

export default ComfortBanner