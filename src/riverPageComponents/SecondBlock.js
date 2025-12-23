import '../westPageComponents/WestGallery.scss'
import FsLightbox from 'fslightbox-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../components/BuildStatusSlider.css';
import { FreeMode, Autoplay } from 'swiper/modules';
import { useState } from 'react';
import { motion } from 'framer-motion';

import image from '../assets/RiverPage/images/seecond_info_block/0.webp'
import image1 from '../assets/RiverPage/images/seecond_info_block/1.webp'
import image2 from '../assets/RiverPage/images/seecond_info_block/2.webp'
import image3 from '../assets/RiverPage/images/seecond_info_block/3.webp'


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
]

function SliderPhoto(props) {
    const {image, alt} = props
    return (
        <motion.div className="news__item box"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6}}
        >
            <img className="news__item-image west-gallery__img" src={image} alt={alt}/>
        </motion.div>
    )
}

export default function SecondBlock() {
    const [toggler, setToggler] = useState(false)
    return (
        <>
            <div className='wrapper title-container box sb-box'>
                <div className='sb-info'>
                  <h1 className='main-title sb-info-title'>Простір для комфортного проживання</h1>
                  <p className='sb-info-text'>Територія містечка закрита та з комфортними зонами для відпочинку, сучасний дитячий майданчик, де діти можуть безпечно проводити час, поки дорослі насолоджуються спокоєм.</p>
                </div>
                <Swiper
                slidesPerView={3}
                spaceBetween={10}
                freeMode={false}
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
                className="west-gallery__slider"
                >
                    {westSliderData.map((item, index) => {
                    return (
                    <SwiperSlide onClick={() => {setToggler(!toggler)}} >
                        <SliderPhoto key={index} {...item} />
                    </SwiperSlide>)
                    })}
                </Swiper>
            </div>

            <FsLightbox
                toggler={toggler}
                sources={[
                    image,
                    image1,
                    image2,
                    image3,
                ]}
            />
        </>
    );
}