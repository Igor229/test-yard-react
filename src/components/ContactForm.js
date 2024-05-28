import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'

function ContactForm (props) {
    const {title} = props

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
  
      emailjs.sendForm('service_fmre69r', 'contact_form', form.current, 'd8OBmhhtk0a-n4BwO')
        .then((result) => {
            console.log(result.text);
            window.location.reload()
        }, (error) => {
            console.log(error.text);
            alert('ERROR')
        });
    };

    return (
        <form ref={form} className="form box" onSubmit={sendEmail}>
        <div className="form__container">
            <h4 className="form__container-title box">{title}</h4>

            <div className="form__container-actions box">
                <motion.input whileHover={{scale: 1.05}} transition={{duration: 0.1}} className="form-input item" type="tel" name="phone" maxLength="13" placeholder="Номер телефону" required/>
                <motion.input whileHover={{scale: 1.05}} transition={{duration: 0.1}} className="form-input item" type="text" name="name" placeholder="Ваше ім’я" required/>
                <motion.button whileHover={{scale: 1.05}} transition={{duration: 0.02}} className="form-button main-button item">Відправити</motion.button>
            </div>
        </div>
        </form>
    )
}

export default ContactForm;