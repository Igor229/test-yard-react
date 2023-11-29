import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Modal.scss'
import icon from '../assets/icons/sprite.svg'

function Modal({active, setActive}) {

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
        <div className={active ? 'modal--active' : 'modal'} onClick={() => setActive(false)}>
            <div className="modal__container" onClick={e => e.stopPropagation()}>                   
                <div className="modal__close">
                    <svg className="modal__close-icon" onClick={() => setActive(false)}>
                        <use href={icon + '#close'}></use>
                    </svg>
                </div>
    
    
                <h2 className="modal__title">Замовити консультацію</h2>
                <form ref={form} onSubmit={sendEmail} className="modal__actions">
                    <input className="modal__actions-action form-input" type="tel" name="phone" maxLength="13" placeholder="Номер телефону" required/>
                    <button className="modal__actions-action main-button">Замовити</button>
                </form>
            </div>
        </div>
    )
}

export default Modal;