import footerLogo from '../assets/images/footer-logo.png'
import icons from '../assets/icons/sprite.svg'
import tiktokIcon from '../assets/icons/tiktok.svg'
import './Footer.scss'

function Footer () {
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
                        <a href='#beskid-home' className="content__item-text upper">BESKID HOME RESORT</a>
                        <a href='#west-town' className="content__item-text upper">WEST TOWN</a>
                    </div>

                    <div className="content__item">
                        <h4 className="content__item-title">Yard Development</h4>
                        <a href='#' className="content__item-text upper">Новини</a>
                        <a href='#' className="content__item-text upper">Стан будівництва</a>
                    </div>

                    <div className="content__item">
                        <h4 className="content__item-title">Контактна інформація</h4>
                        <p className="content__item-text number-text">+380 (98) 22 55 800 (Viber, Telegram, Messenger)</p>
                        <p className="content__item-text">yarddevelopment34@gmail.com</p>
                    </div>
                </div>

                <div className="footer__actions">
                    <p className="footer__actions-item">© 2023 | Всі права захищено</p>
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