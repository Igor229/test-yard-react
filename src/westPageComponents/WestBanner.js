import './WestBanner.scss'
import '../beskidPageComponents/BeskidBanner.scss'
import mainImg from '../assets/westPage/images/west-banner.png'

function WestBanner () {
    return (
        <section className="banner west-banner">
            <img src={mainImg} className='banner__image' alt='main-logo' />
            <div className='banner__titles'> 
                <h3 className='banner__titles-subtitle'>Найбільше містечко таунхаусів <br/> в Івано-Франківську</h3>
                <h1 className='banner__titles-main'>WEST TOWN</h1>  
            </div>
            <button className='banner__action west-banner__action'><a href='#'>Обрати таунхаус</a></button>
        </section>
    )
}

export default WestBanner