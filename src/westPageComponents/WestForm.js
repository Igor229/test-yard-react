import './WestForm.scss'
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

function WestForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
  
      emailjs.sendForm('service_fmre69r', 'form_without_name', form.current, 'd8OBmhhtk0a-n4BwO')
        .then((result) => {
            console.log(result.text);
            window.location.reload()
        }, (error) => {
            console.log(error.text);
            alert('ERROR')
        });
        window.scrollTo(0, 0)
    };
    return (
        <form ref={form} className='termination' onSubmit={sendEmail}>
            <div className='west-form'>
                <motion.input whileHover={{scale: 1.03}} className="west-form__input form-input" type="text" name="name" placeholder="Ваше ім'я" required/>
                <motion.input whileHover={{scale: 1.03}} className="west-form__input form-input" type="tel" name="phone" maxLength="13" placeholder="Номер телефону" required/>

                <motion.select whileHover={{scale: 1.03}} className='west-form__input form-input select' name='house'>
                    <option value='' selected disabled>Оберіть таунхаус</option>
                    <option value='Внутрішній'>Внутрішній</option>
                    <option value='Крайній'>Крайній</option>
                    <option value='Обидва варіанти'>Обидва варіанти</option>
                </motion.select>

                <motion.select whileHover={{scale: 1.03}} className='west-form__input form-input select' name='messanger'>
                    <option value='' selected disabled>Месенджер, де зручніше отримати розрахунок</option>
                    <option value='Viber'>Viber</option>
                    <option value='Telegram'>Telegram</option>
                    <option value='Wats App'>WatsApp</option>
                </motion.select>

                <motion.button whileHover={{scale: 1.03}} className="west-form__button main-button">Відправити</motion.button>
            </div>
        </form>
    )
}

export default WestForm