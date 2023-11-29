import mainImg from '../assets/beskidPage/images/beskid_page-banner.jpg'
import { useState } from 'react'
import Modal from '../components/Modal'
import './BeskidBanner.scss'

function BeskidBanner () {
    const [modalActive, setModalActive] = useState(false)
    return (
        <section className="banner">
            <Modal active={modalActive} setActive={setModalActive}/>
            <img src={mainImg} className='banner__image' alt='main-logo' />
            <div className='banner__titles'>
                <h1 className='banner__titles-main'>BESKID HOME RESORT</h1>
                <h3 className='banner__titles-subtitle'>Котеджне містечко у самому серці Карпат</h3>  
            </div>
            <button className='banner__action' onClick={() => setModalActive(true)}>Отримати комерційну пропозицію</button>
        </section>
    )
}

export default BeskidBanner