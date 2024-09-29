import React, { useState } from 'react'
import './About.scss'
import Modal from './Modal'
import { motion } from 'framer-motion'
import MainVideoBG from '../assets/videos/bg-video.MP4'

function About () {
    const [modalActive, setModalActive] = useState(false)

    return (
        <motion.section className="about" id="main-container"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.7}}
        >
            <Modal active={modalActive} setActive={setModalActive}/>

            <div className='about-container'>
                <div className='about-container__info'>

                

                    <div className='wrapper'>
                        <motion.h1 className='text-container__title'
                            initial={{y: -70, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{duration: 0.5}}
                        >
                            Yard Development
                        </motion.h1>
                        <motion.p className='text-container__text'
                            initial={{y: -90, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{duration: 0.5}}
                        >
                            Дбаємо про ваш комфорт та добробут
                        </motion.p>

                        <motion.div className='text-container__actions'
                            initial={{y: -120, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{duration: 0.5}}
                        >
                            <motion.button className="contacts__button main-button about-button" id='contacts__button' onClick={() => setModalActive(true)}
                                whileHover={{scale: 1.05}}
                                transition={{duration: 0.02}}
                            >
                                Замовити дзвінок
                            </motion.button>
                            
                        </motion.div>
                    </div>
                    
                </div>
                <div className='video-container'>
                <video src={MainVideoBG} typeof='video/mp4' className='main-video' autoPlay playsInline loop muted/>
            </div>
            </div>
        <div className='about-shadow'></div>
        </motion.section>
    )
}

export default About