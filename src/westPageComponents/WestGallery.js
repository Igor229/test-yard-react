import './WestGallery.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../components/BuildStatusSlider.css';
import { FreeMode, Autoplay } from 'swiper/modules';

import image from '../assets/westPage/images/gallery-slider/0.jpg'
import image1 from '../assets/westPage/images/gallery-slider/1.jpg'
import image2 from '../assets/westPage/images/gallery-slider/2.jpg'
import image3 from '../assets/westPage/images/gallery-slider/3.jpg'
import image4 from '../assets/westPage/images/gallery-slider/4.jpg'
import image5 from '../assets/westPage/images/gallery-slider/5.jpg'
import image6 from '../assets/westPage/images/gallery-slider/6.jpg'
import image7 from '../assets/westPage/images/gallery-slider/7.jpg'

const westSliderData = [
    {
        image: image,
        src: 'gallery-image'
    },
    {
        image: image1,
        src: 'gallery-image'
    },
    {
        image: image2,
        src: 'gallery-image'
    },
    {
        image: image3,
        src: 'gallery-image'
    },
    {
        image: image4,
        src: 'gallery-image'
    },
    {
        image: image5,
        src: 'gallery-image'
    },
    {
        image: image6,
        src: 'gallery-image'
    },
    {
        image: image7,
        src: 'gallery-image'
    },
]

function SliderPhoto(props) {
    const {image, alt} = props
    return (
    <div className="news__item box">
        <img className="news__item-image" src={image} alt={alt}/>
    </div>
    )
}

export default function WestGallery() {
    return (
        <>
            <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={false}
            autoHeight = {true}
            autoplay = {true}

            breakpoints={{
                279: {
                    slidesPerView: 1,
                },
                620: {
                    slidesPerView: 2,
                },
                821: {
                    slidesPerView: 3,
                },

            }}

            modules={[FreeMode, Autoplay]}
            className="buildStatusSlider"
            >
                {westSliderData.map((item, index) => {
                return (
                <SwiperSlide>
                    <SliderPhoto key={index} {...item} />
                </SwiperSlide>)
                })}
            </Swiper>
        </>
    );
}