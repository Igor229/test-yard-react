import mainImg from '../assets/beskidPage/images/main-banner.webp'
import checkIcon from '../assets/beskidPage/icons/check.svg'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from '../components/Modal'
import './BeskidBanner.scss'

function BeskidBanner () {
    const [modalActive, setModalActive] = useState(false)
    return (
        <section className="banner">
            <Modal active={modalActive} setActive={setModalActive}/>
            <img src={mainImg} className='banner__image' alt='main-logo' />
            <div className='banner__titles'>

                <p className='banner__titles-liltext'><img src={checkIcon} alt='check' className='banner__titles-liltext-icon'/> Котеджі введено в експлуатацію</p>

                <motion.h1 className='banner__titles-main'
                    initial={{y: -70, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 0.5}}
                >
                    FOMICH RESIDENCE <br/> GUESTHOUSES
                </motion.h1>
                <motion.h3 className='banner__titles-subtitle'
                    initial={{y: -90, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 0.5}}
                >
                     відпочивайте та заробляйте - продаж котеджів у серці Карпат
                </motion.h3>  
            </div>
            <motion.button className='banner__action' onClick={() => setModalActive(true)}
                transition={{duration: 0.05}}
                whileHover={{scale: 1.03}}
            >
                Дізнатися більше
            </motion.button>
        </section>
    )
}

export default BeskidBanner