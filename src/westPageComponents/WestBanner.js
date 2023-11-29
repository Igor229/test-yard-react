import './WestBanner.scss'
import '../beskidPageComponents/BeskidBanner.scss'
import { useState } from 'react'
import mainImg from '../assets/westPage/images/west-banner.png'
import ModalPlus from '../components/ModalPlus'

function WestBanner () {
    const [modalActive, setModalActive] = useState(false)
    return (
        <section className="banner west-banner">
            <ModalPlus active={modalActive} setActive={setModalActive}/>
            <img src={mainImg} className='banner__image' alt='main-logo' />
            <div className='banner__titles'> 
                <h3 className='banner__titles-subtitle'>Найбільше містечко таунхаусів <br/> в Івано-Франківську</h3>
                <h1 className='banner__titles-main'>WEST TOWN</h1>  
            </div>
            <button className='banner__action west-banner__action' onClick={() => setModalActive(true)}>Обрати таунхаус</button>
        </section>
    )
}

export default WestBanner