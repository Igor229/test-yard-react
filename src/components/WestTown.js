import Slider from './WestSlider';
import ContactForm from './ContactForm';
import './Complexes.scss'
import 'swiper/css';


function WestTown () {
    
    return (
        <div className='complex'>
            <Slider />
            <ContactForm title = 'Отримати розрахунок розтермінування'/>
        </div>
    )
}

export default WestTown