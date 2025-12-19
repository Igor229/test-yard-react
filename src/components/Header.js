import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import mainLogoWhite from '../assets/images/main-logo-white.png'
import menuOpen from '../assets/icons/menu-open.svg'
import menuClose from '../assets/icons/menu-close.svg'
import icons from '../assets/icons/sprite.svg'
import Modal from './Modal'
import tiktokIcon from '../assets/icons/tiktok.svg'
import phoneIcon from '../assets/icons/phone.png'
import { motion } from 'framer-motion';
import './Header.scss'

function Header(props) {
    const {top} = props
    const [modalActive, setModalActive] = useState(false)
//====================================
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
  
      emailjs.sendForm('service_fmre69r', 'form_without_name', form.current, 'd8OBmhhtk0a-n4BwO')
        .then((result) => {
            console.log(result.text);
            window.location.reload()
        }, (error) => {
            console.log(error.text);
            alert('ERROR')
        });
    };

    // show burger menu
    const [burger_class, setBurgerClass] = useState("burger__menu")
    const [burger_icon, setBurgerIcon] = useState(menuOpen)
    const [isClicked, setIsClicked] = useState(false)
    const showBurger = (e) => {
        if (!isClicked) {
            setBurgerClass("burger__menu showMenu")
            setIsClicked(true)
            setBurgerIcon(menuClose)
            document.body.style.overflow = 'hidden'
            setColor(true)
        } else {
            setBurgerClass("burger__menu")
            setIsClicked(false)
            setBurgerIcon(menuOpen)
            document.body.style.overflow = 'auto'
            // setColor(false)
        }
    }

    // change header background while scrolling
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90){
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)


    // Scrolling Tips
    const handleClickScroll = () => {
        window.scrollTo(0, 0)
    }

    return (
        <>
            <header className={color ? 'header header-bg' : 'header'} style={{top: color ? '0px' : top}}>

                <Modal active={modalActive} setActive={setModalActive}/>

                {/* Burger Menu */}
                <div className='burger'>
                    <div className="burger__items">
                        <div className="humburger">
                            <img src={burger_icon} alt="menu-open" className="burger__items-icon menuIcon" onClick={showBurger}/>
                            <img src={burger_icon} alt="menu-close" className="burger__items-icon closeIcon" onClick={showBurger}/>
                        </div> 
                        <a href='/'><img src={mainLogoWhite} alt="main-logo" className="header__items-logo"/></a>
                    </div>

                    <div className={burger_class}>
                        <div className="burger__container">
                            <h4 className="burger__menu-title">Замовити консультацію</h4>

                            <form ref={form} onSubmit={sendEmail} className="burger__menu-actions">
                                <input className="form-input burger-input" type="tel" name="phone" maxLength="13" placeholder="Номер телефону" required/>
                                <button className="burger-button main-button">Замовити</button>
                            </form>

                            <div className="burger__menu-contacts">
                                <div className="contacts__container">
                                    <h4 className="contacts__container-title">Yard Development</h4>
                                    <a href="#comfort-town" className="contacts__container-text burger-link" onClick={showBurger}>Comfort Town</a>
                                    <a href="#fomich-guesthouses" className="contacts__container-text burger-link" onClick={showBurger}>FOMICH RESIDENCE GUESTHOUSES</a>
                                    <a href="#west-town" className="contacts__container-text burger-link" onClick={showBurger}>WEST TOWN</a>
                                </div>
                                <div className="contacts__container">
                                    <h4 className="contacts__container-title">Контактна інформація</h4>
                                    <a href="/" className="contacts__container-text">+380 (98) 22 55 800 (Viber, Telegram, Messenger)</a>
                                    <a href="/" className="contacts__container-text">yarddevelopment34@gmail.com</a>

                                    <div className="footer__actions-socials burger__socials">
                                        <a href="https://www.instagram.com/yard.development/" target="_blank" rel="noopener noreferrer" onClick={showBurger}>
                                            <svg className="social-icon">
                                                <use href={icons + '#instagram'}></use>
                                            </svg>
                                        </a>

                                        <a href="https://www.facebook.com/profile.php?id=100093522396873" target="_blank" rel="noopener noreferrer" onClick={showBurger}>
                                            <svg className="social-icon">
                                                <use href={icons + '#facebook'}></use>
                                            </svg>
                                        </a>

                                        <a href="https://www.tiktok.com/@yarddevelopment?_t=8eAdRa2Vt5B&_r=1" target="_blank" rel="noopener noreferrer" onClick={showBurger}>
                                            <img src={tiktokIcon} alt='tiktok' className="tiktok-icon" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrapper">
                <div className="header__items">
                    <div className="header__items-nav">

                        <a href="/"><img src={mainLogoWhite} alt="main-logo" className="header__items-logo"/></a>
                        <ul className="navigations">
                            <li className='comfortTown_action'><a href="#comfort-town" className="navigations__action" onClick={handleClickScroll}>Comfort Town</a></li>
                            <li><a href="#west-town" className="navigations__action" onClick={handleClickScroll}>West town</a></li>
                            <li><a href="#fomich-guesthouses" className="navigations__action" onClick={handleClickScroll}>FOMICH RESIDENCE GUESTHOUSES</a></li>
                        </ul>
                    </div>

                    <div className="header__items-contacts">
                        <p className="contacts__number"><img src={phoneIcon} alt='phone' className='contacts__phone-icon'/>+380 (98) 22 55 800</p>
                        <motion.button className="contacts__button main-button" id='contacts__button' onClick={() => setModalActive(true)}
                            whileHover={{scale: 1.05}}
                            transition={{duration: 0.02}}
                        >
                            Замовити дзвінок
                        </motion.button>
                    </div>
                </div>

                <div className="header__menu">
                    <div className="wrapper">
                        <h2 className="menu__title"></h2>
                    </div>
                </div>
            </div>
            </header>
        </>
    )
}

export default Header;