import './WestForm.scss'
import React, { useRef } from 'react';
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
                <input className="west-form__input form-input" type="text" name="name" placeholder="Ваше ім'я" required/>
                <input className="west-form__input form-input" type="tel" name="phone" maxLength="13" placeholder="Номер телефону" required/>

                <select className='west-form__input form-input select' name='house'>
                    <option value='' selected disabled>Оберіть таунхаус</option>
                    <option value='Внутрішній'>Внутрішній</option>
                    <option value='Крайній'>Крайній</option>
                    <option value='Обидва варіанти'>Обидва варіанти</option>
                </select>

                <select className='west-form__input form-input select' name='messanger'>
                    <option value='' selected disabled>Месенджер, де зручніше отримати розрахунок</option>
                    <option value='Viber'>Viber</option>
                    <option value='Telegram'>Telegram</option>
                    <option value='Wats App'>WatsApp</option>
                </select>

                <button className="west-form__button main-button">Відправити</button>
            </div>
        </form>
    )
}

export default WestForm