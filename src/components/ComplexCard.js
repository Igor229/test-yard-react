import React, { useState } from 'react'
import Slider from './BeskedSlider';
import ContactForm from './ContactForm';
import mapPinIcon from '../assets/icons/map-pin.png'
import './ComplexCard.scss'
import './Complexes.scss'


function ComplexCard (props) {
    const {header, location, type, image} = props
    return (
        <div className='complex' style={{backgroundImage: `url(${image})`}}>
            <div className='complex-body'>
                <div className='complex-body__text'>
                    <h3 className='complex-body__header'>{header}</h3>
                    <p className='complex-body__location'><img src={mapPinIcon}/>{location}</p>
                    <p className='complex-body__type'>{type}</p>
                </div>
            </div>
        </div>
    )
}

export default ComplexCard