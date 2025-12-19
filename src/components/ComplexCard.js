import mapPinIcon from '../assets/icons/map-pin.png'
import './ComplexCard.scss'
import './Complexes.scss'


function ComplexCard (props) {
    const {header, location, type, image} = props
    return (
        <div className='complex' style={{backgroundImage: `url(${image})`, zIndex: -99}}>
            <div className='complex-body' style={{background: 'linear-gradient(180deg, rgba(24, 30, 26, 0) 20%, rgba(24, 30, 26, 0.65) 91%)', zIndex: 100}}>
                <div className='complex-body__text'>
                    <h3 className='complex-body__header'>{header}</h3>
                    <p className='complex-body__location'><img src={mapPinIcon} alt='map'/>{location}</p>
                    <p className='complex-body__type'>{type}</p>
                </div>
            </div>
        </div>
    )
}

export default ComplexCard