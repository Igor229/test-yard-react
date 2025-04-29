import thunderIcon from '../assets/westPage/icons/zap.png'
import windowIcon from '../assets/westPage/icons/window.png'
import crownIcon from '../assets/westPage/icons/crown.png'
import QuadroSlider from './QuadroSlider'
import './QuadroWest.scss'

function QuadroWest () {
    return (
        <section className="quadro-section">
            <div className='quadro wrapper'>
            <QuadroSlider/>
                <div className="quadro-info">
                    <div className="quadro-info__thunder"><img src={thunderIcon} alt='thunder-icon' className="quadro-info_thunder-png"/><p className="quadro-info__thunder-text">Новинка у WEST TOWN</p></div>
                    <h2 className="quadro-info__title">Будинки-квадрохауси із повністю закритим подвір'ям</h2>
                    <h2 className="quadro-info__subtitle">Квадрохауси це</h2>
                    <div className="quadro-info__list">
                        <div className="quadro-info__list-block"><img src={windowIcon} alt='window-icon' className="quadro-info__list-block-icon"/><p className="quadro-info__list-block-text">Будинки, які складаються з чотирьох секцій, з'єднаних між собою в єдиний будинок, кожен з яких має власну земельну ділянку.</p></div>
                        <div className="quadro-info__list-block"><img src={crownIcon} alt='crown-icon' className="quadro-info__list-block-icon"/><p className="quadro-info__list-block-text">Будівництво преміум-сегменту та має ряд переваг, а саме такі як - повністю відгороджений двір та всього 3 сусіди збоку, високий рівень енергоефективності, відмінна шумоізоляція, тощо.</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QuadroWest