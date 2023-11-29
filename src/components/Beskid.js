import React, { useState } from 'react'
import Slider from './BeskedSlider';
import ContactForm from './ContactForm';
import './Complexes.scss'
import 'swiper/css';

function Beskid () {
    return (
        <div className='complex'>
            <Slider />
            <ContactForm title = {'Отримати презентацію комплексу із розрахунком окупності'}/>
        </div>
    )
}

export default Beskid