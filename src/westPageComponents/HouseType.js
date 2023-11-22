import './HouseType.scss'

function HouseType(props) {
    const {image, type, rooms, square, area} = props
    return (
        <div className='house-type'>
            <img src={image} alt='house-type-image' className='house-type__img' />
            <p className='house-type__type'>{type}</p>

            <div className='house-type__info'>
                <div className='house-type__info-item'>
                    <p className='house-type__info-main'>{rooms}</p>
                    <p className='house-type__info-subinfo'>Кімнати</p>
                </div>

                <div className='house-type__info-item'>
                    <p className='house-type__info-main'>{square}</p>
                    <p className='house-type__info-subinfo'>Площа</p>
                </div>

                <div className='house-type__info-item'>
                    <p className='house-type__info-main'>{area}</p>
                    <p className='house-type__info-subinfo'>Ділянка</p>
                </div>
            </div>
        </div>
    )
}
export default HouseType