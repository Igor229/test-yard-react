import sprite from '../assets/icons/sprite.svg'
import Slider from './WestSlider';
import ContactForm from './ContactForm';
import './Complexes.scss'
import 'swiper/css';

function WestTown () {
    return (
        <div className='complex' id="west-town">
            <div className="complex__info box">

                <div className='complex__info-slider'>
                <Slider />
                </div>

                <div className='complex__info-text complex__base-card'>
                    <h3 className="info__title box">WEST TOWN</h3>

                    <div className="complex__text-container box">
                        <div className="info__container box">
                            <p className="info-text">
                                Одне з найбільших котеджних містечок таунхаусів в Івано-Франківську WEST TOWN. Таунхаус - це найкраща альтернатива квартирі у новобудові, адже практично за ті самі кошти, ви отримуєте повноцінний будинок площею 120 м² із власною земельною ділянкою та двома паркомісцями або гаражем. Ми пропонуємо вигідні умови розтермінування до двох років з початковим внеском 30%. Більше інформації можна отримати на сторінці комплексу.
                            </p>
                        </div>

                        {/*=================== card actions ========================*/}
                        
                        <div className='info-actions'>
                            <a href='/west-town'>
                            <button className='info-actions__btn'>
                                Докладніше про комплекс
                                <svg className="btn-icon">
                                    <use href={sprite + '#chevron-right'}/>
                                </svg>
                            </button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            <ContactForm title = 'Отримати розрахунок розтермінування'/>
        </div>
    )
}

export default WestTown