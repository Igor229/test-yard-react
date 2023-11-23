import './WestForm.scss'

function WestForm() {
    return (
        <form className='termination'>
            <div className='west-form'>
                <input className="west-form__input form-input" type="text" name="name" placeholder="Ваше ім'я" required/>
                <input className="west-form__input form-input" type="tel" name="phone" maxLength="13" placeholder="Номер телефону" required/>

                <select className='west-form__input form-input select'>
                    <option value=''>Оберіть таунхаус</option>
                    <option value='Внутрішній'>Внутрішній</option>
                    <option value='Крайній'>Крайній</option>
                    <option value='Обидва варіанти'>Обидва варіанти</option>
                </select>

                <select className='west-form__input form-input select'>
                    <option value='' selected disabled>Месенджер, де зручніше отримати розрахунок</option>
                    <option value='Viber'>Viber</option>
                    <option value='Telegram'>Telegram</option>
                    <option value='Wats App'>Wats App</option>
                </select>

                <button className="west-form__button main-button">Відправити</button>
            </div>
        </form>
    )
}

export default WestForm