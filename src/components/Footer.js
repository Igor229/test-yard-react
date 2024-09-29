import footerLogo from '../assets/images/footer-logo.png'
import icons from '../assets/icons/sprite.svg'
import tiktokIcon from '../assets/icons/tiktok.svg'
import './Footer.scss'

function Footer () {
    const handleClickScroll = () => {
        window.scrollTo(0, 0)
    }
//====================================
    const handleClickNews = () => {
        const element = document.getElementById('news')

        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    }
//====================================
    const handleClickBuildStatus = () => {
        const element = document.getElementById('build-status')

        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    }
//====================================
const handleClickFeedbacks = () => {
    const element = document.getElementById('feedbacks')

    if (element) {
        element.scrollIntoView({behavior: 'smooth'})
    }
}

    return (
        <footer className="footer">
        <div className="wrapper">
            <div className="footer__content">
                <div className="footer__content-items">
                    <div className="content__item footer__logo">
                        <a href="#" className='main-logo'><img src={footerLogo} alt="main-logo" className="content__item-logo"/></a>
                    </div>
                    <div className="content__item">
                        <h4 className="content__item-title">Наші комплекси</h4>
                        <a href='#comfort-town' className="content__item-text upper" onClick={handleClickScroll}>COMFORT TOWN</a>
                        <a href='#beskid-home' className="content__item-text upper" onClick={handleClickScroll}>BESKID HOME RESORT</a>
                        <a href='#west-town' className="content__item-text upper" onClick={handleClickScroll}>WEST TOWN</a>
                    </div>

                    <div className="content__item">
                        <h4 className="content__item-title">Yard Development</h4>
                        <a className="content__item-text upper" onClick={handleClickFeedbacks}>Відгуки</a>
                        <a className="content__item-text upper" onClick={handleClickNews}>Новини</a>
                        <a className="content__item-text upper" onClick={handleClickBuildStatus}>Стан будівництва</a>
                    </div>

                    <div className="content__item">
                        <h4 className="content__item-title">Контактна інформація</h4>
                        <p className="content__item-text number-text">+380 (98) 22 55 800 (Viber, Telegram, Messenger)</p>
                        <p className="content__item-text">yarddevelopment34@gmail.com</p>
                    </div>
                </div>

                <div className="footer__actions">
                    <p className="footer__actions-item">© 2024 | Всі права захищено</p>
                    <div className="footer__actions-socials">
                        <a href="https://www.instagram.com/yard.development/" target="_blank">
                            <svg className="social-icon">
                                <use href={icons + '#instagram'}/>
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100093522396873" target="_blank">
                            <svg className="social-icon">
                                <use href={icons + '#facebook'}/>
                            </svg>
                        </a>
                        <a href="https://www.tiktok.com/@yarddevelopment?_t=8eAdRa2Vt5B&_r=1" target="_blank">
                            <img src={tiktokIcon} alt='tiktok' className="tiktok-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </footer>
    )
}

export default Footer;