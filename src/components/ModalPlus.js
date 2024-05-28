import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Modal.scss'
import icon from '../assets/icons/sprite.svg'

function ModalPlus({active, setActive}) {
//====================================
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
    };

    return (
        <div className={active ? 'modal--active' : 'modal'} onClick={() => setActive(false)}>
            <div className="modal__container" onClick={e => e.stopPropagation()}>                   
                <div className="modal__close">
                    <svg className="modal__close-icon" onClick={() => setActive(false)}>
                        <use href={icon + '#close'}></use>
                    </svg>
                </div>
    
    
                <h2 className="modal__title">Замовити</h2>
                <form ref={form} onSubmit={sendEmail} className="modal__actions--column">
                    <input className="modal__actions-action form-input" type="text" name="name" placeholder="Ваше ім'я" required/>
                    <input className="modal__actions-action form-input" type="tel" name="phone" maxLength="13" placeholder="Номер телефону" required/>

                    <select className='modal__actions-action west-form__input form-input select' name='house'>
                        <option value='' selected disabled>Оберіть таунхаус</option>
                        <option value='Внутрішній'>Внутрішній</option>
                        <option value='Крайній'>Крайній</option>
                        <option value='Обидва варіанти'>Обидва варіанти</option>
                    </select>

                    <select className='modal__actions-action west-form__input form-input select' name='messanger'>
                        <option value='' selected disabled>Месенджер, де зручніше отримати розрахунок</option>
                        <option value='Viber'>Viber</option>
                        <option value='Telegram'>Telegram</option>
                        <option value='Wats App'>WatsApp</option>
                    </select>
                    <button className="modal__actions-action main-button">Замовити</button>
                </form>
            </div>
        </div>
    )
}

export default ModalPlus;