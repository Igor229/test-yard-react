import mainImg from '../assets/beskidPage/images/beskid_page-banner.jpg'
import './BeskidBanner.scss'

function BeskidBanner () {
    return (
        <section className="banner">
            <img src={mainImg} className='banner__image' alt='main-logo' />
            <div className='banner__titles'>
                <h1 className='banner__titles-main'>BESKID HOME RESORT</h1>
                <h3 className='banner__titles-subtitle'>Котеджне містечко у самому серці Карпат</h3>  
            </div>
            <button className='banner__action'><a href='#'>Отримати комерційну пропозицію</a></button>
        </section>
    )
}

export default BeskidBanner