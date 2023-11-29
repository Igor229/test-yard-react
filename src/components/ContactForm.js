import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
                <input className="form-input item" type="tel" name="phone" maxLength="13" placeholder="Номер телефону" required/>
                <input className="form-input item" type="text" name="name" placeholder="Ваше ім’я" required/>
                <button className="form-button main-button item">Відправити</button>
            </div>
        </div>
        </form>
    )
}

export default ContactForm;