import './Contacts.scss'
import phoneIcon from '../assets/beskidPage/icons/contacts-icons/phone.png'
import instagramIcon from '../assets/beskidPage/icons/contacts-icons/instagram.png'
import mailIcon from '../assets/beskidPage/icons/contacts-icons/mail.png'
import mapIcon from '../assets/beskidPage/icons/contacts-icons/map.png'
import BeskedMap from './BeskedMap'

function Contacts () {
    return (
        <section className='contacts'>
            <div className='contacts-container'>
                <div className='contacts__item'>
                    <img src={phoneIcon} className='contacts__item-icon'/>
                    <div className='contacts__item-info'>
                        <p className='contacts-title'>Номер телефону:</p>
                        <p className='contacts-subtitle'>+38 (098) 225 58 00 </p>
                    </div>
                </div>

                <div className='contacts__item'>
                    <img src={instagramIcon} className='contacts__item-icon'/>
                    <div className='contacts__item-info'>
                        <p className='contacts-title'>Instagram:</p>
                        <p className='contacts-subtitle'>beskid_home_resort </p>
                    </div>
                </div>

                <div className='contacts__item'>
                    <img src={mailIcon} className='contacts__item-icon'/>
                    <div className='contacts__item-info'>
                        <p className='contacts-title'>Email:</p>
                        <p className='contacts-subtitle'>yarddevelopment34@gmail.com </p>
                    </div>
                </div>

                <div className='contacts__item'>
                    <img src={mapIcon} className='contacts__item-icon'/>
                    <div className='contacts__item-info'>
                        <p className='contacts-title'>Локація:</p>
                        <p className='contacts-subtitle'>с. Поляниця, вулиця урочище Вишня (поруч готелю Підгір'я) </p>
                    </div>
                </div>

                <button className='main-button contacts-button'><a href='#'>Отримати детальну інформацію</a></button>
            </div>
                <BeskedMap/>
        </section>
    )
}

export default Contacts