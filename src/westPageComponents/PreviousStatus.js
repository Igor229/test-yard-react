// import './WestGallery.scss'
import './PreviousStatus.scss'
import FsLightbox from 'fslightbox-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../components/BuildStatusSlider.css';
import { FreeMode, Autoplay } from 'swiper/modules';
import { useState } from 'react';

import image1 from '../assets/westPage/images/previous-builds/1.webp'
import image2 from '../assets/westPage/images/previous-builds/2.webp'
import image3 from '../assets/westPage/images/previous-builds/3.webp'
import image4 from '../assets/westPage/images/previous-builds/4.webp'
import image5 from '../assets/westPage/images/previous-builds/5.webp'
import image6 from '../assets/westPage/images/previous-builds/6.webp'
import image7 from '../assets/westPage/images/previous-builds/7.webp'
import image8 from '../assets/westPage/images/previous-builds/8.webp'
import image9 from '../assets/westPage/images/previous-builds/9.webp'
import image10 from '../assets/westPage/images/previous-builds/10.webp'
import image11 from '../assets/westPage/images/previous-builds/11.webp'
import image12 from '../assets/westPage/images/previous-builds/12.webp'



const westSliderData = [
    {
      image: image1,
      header: '1 черга',
      type: 'Введено в експлуатацію'
    },
    {
      image: image2,
      header: '2 черга',
      type: 'Введено в експлуатацію'
    },
    {
      image: image3,
      header: '3 черга',
      type: 'Введено в експлуатацію'
    },
    {
      image: image4,
      header: '4 черга',
      type: 'Введено в експлуатацію'
    },
    {
      image: image5,
      header: '5 черга',
      type: 'Введено в експлуатацію'
    },
    {
      image: image6,
      header: '6 черга',
      type: 'Введено в експлуатацію'
    },
    {
      image: image7,
      header: '7 черга',
      type: 'Введено в експлуатацію'
    },
    {
      image: image8,
      header: '8 черга',
      type: 'Введено в експлуатацію'
    },
    {
      image: image9,
      header: '9 черга',
      type: 'Введено в експлуатацію'
    },
    {
      image: image10,
      header: '10 черга',
      type: 'Введено в експлуатацію'
    },
    {
      image: image11,
      header: '11 черга',
      type: 'Введено в експлуатацію'
    },
    {
      image: image12,
      header: '12 черга',
      type: 'Введено в експлуатацію'
    },
]

function PreviousSliderPhoto(props) {
    const {image, header, type} = props
    return (
        <div className='prev' style={{backgroundImage: `url(${image})`, zIndex: -99}}>
          <p className='prev-sold'>Продано</p>
          <div className='prev-body' style={{background: 'linear-gradient(180deg, rgba(24, 30, 26, 0) 0%, rgba(24, 30, 26, 0.65) 100%)', zIndex: 100}}>
              <div className='prev-body__text'>
                  <h3 className='prev-body__header'>{header}</h3>
                  <p className='prev-body__type'>{type}</p>
              </div>
          </div>
      </div>
    )
}

export default function PreviousStatus() {
    const [toggler, setToggler] = useState(false)
    return (
        <>
            <div className='wrapper title-container box'>
                <h1 className='main-title'>Попередні черги будівництва WEST TOWN</h1>
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
                        <PreviousSliderPhoto key={index} {...item} />
                    </SwiperSlide>)
                    })}
                </Swiper>
            </div>

            <FsLightbox
                toggler={toggler}
                sources={[
                    image1,
                    image2,
                    image3,
                    image4,
                    image5,
                    image6,
                    image7,
                    image8,
                    image9,
                    image10,
                    image11,
                    image12,
                ]}
            />
        </>
    );
}