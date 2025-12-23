import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import '../components/BuildStatusSlider.css';
import '../components/ComplexCard.scss'
import '../components/Complexes.scss'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import mapPinIcon from '../assets/icons/map-pin.png'
import comfortCardPhoto from '../assets/images/home-comfort.webp'
import westCardPhoto from '../assets/images/home-west.webp'
import westXIIICardPhoto from '../assets/images/home-west_XIII.webp'
import RiverTownCardPhoto from '../assets/images/river-home.webp'

const complexesData = [
    {
        header: 'RIVER TOWN',
        location: 'Микитинці',
        type: '10 хв до Центру Івано-Франківська',
        image: RiverTownCardPhoto,
        href: '#river-town'
    },
    {
        header: 'WEST TOWN XIII (квадрохауси)',
        location: 'Крихівці',
        type: '10 хв до Центру Івано-Франківська',
        image: westXIIICardPhoto,
        href: '#west-town'
    },
    {
        header: 'WEST TOWN',
        location: 'Крихівці',
        type: '10 хв до міського озера',
        image: westCardPhoto,
        href: '#west-town'
    },
    {
        header: 'COMFORT TOWN',
        location: 'Угорники',
        type: '10 хв до Центру Івано-Франківська',
        image: comfortCardPhoto,
        href: '#comfort-town'
    },
    
]

function ComplexCard (props) {
    // Scrolling Tips
    const handleClickScroll = () => {
        window.scrollTo(0, 0)
      }


    const {header, location, type, image, href} = props
    return (
        <a href={href} onClick={handleClickScroll}>
        <div className='complex' style={{backgroundImage: `url(${image})`, zIndex: -99}}>
            <div className='complex-body' style={{background: 'linear-gradient(180deg, rgba(24, 30, 26, 0) 20%, rgba(24, 30, 26, 0.65) 91%)', zIndex: 100}}>
                <div className='complex-body__text'>
                    <h3 className='complex-body__header'>{header}</h3>
                    <p className='complex-body__location'><img src={mapPinIcon} alt='cart'/>{location}</p>
                    <p className='complex-body__type'>{type}</p>
                </div>
            </div>
        </div>
        </a>
    )
}

export default function ComplexCards() {
    return (
        <>
                <Swiper
                slidesPerView={2}
                spaceBetween={36}
                freeMode={true}
                pagination={false}
                navigation={true}
                style={{
                    "--swiper-navigation-color": "#181E1A",
                    "--swiper-navigation-size": "12px",
                  }}
                modules={[Navigation]}
                breakpoints={{
                    279: {
                        slidesPerView: 1,
                    },
                    620: {
                        slidesPerView: 1,
                    },
                    821: {
                        slidesPerView: 2,
                    },

                }}

                className="complexes-up complexes-slider"
                >
                    {complexesData.map((item, index) => {
                    return (
                        <SwiperSlide>
                            <ComplexCard key={index} {...item} />
                        </SwiperSlide>)
                    })}
                </Swiper>
        </>
    );
}