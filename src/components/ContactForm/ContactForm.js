import '../ContactForm/ContactForm.css';
import Button from '../Button/Button';
import ContactFormInput from '../ContactFormInput/ContactFormInput';

const ContactForm = () => {
    return (
        <section className='container__form' id='contact'>
            <form className='form'>
                <div className='form__container'>
                    <h2 className='container__subtitle' >Contato</h2>
                    <hr className='container__underlined'></hr>
                </div>
                <ContactFormInput inputName='Nome' id='nome' type='text' />
                <ContactFormInput inputName='Celular' id='cel' type='phone' />
                <ContactFormInput inputName='Email' id='email' type='email' />

                <Button type={'submit'}>Enviar</Button>
            </form>
        </section>
    )
}

export default ContactForm;