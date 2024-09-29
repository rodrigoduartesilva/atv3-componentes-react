import { useState } from 'react';
import Button from '../../components/Button/Button';
import ContactFormInput from '../../components/ContactFormInput/ContactFormInput';
import '../CadastroDeOfertas/CadastroDeOfertas.css';

const CadastroDeOfertas = ({ onAddPromo }) => {
    const [newPromo, setNewPromo] = useState({
        incluso: '',
        destino: '',
        preco: '',
        background: null // Mude para null
    });

    const handleFieldsChange = (event) => {
        const { id, value, type } = event.target;
        setNewPromo(prev => ({
            ...prev,
            [id]: type === 'file' ? event.target.files[0] : value // Atualize para lidar com arquivos
        }));
    }

    const handleClick = () => {
        if (newPromo.background) {
            const backgroundUrl = URL.createObjectURL(newPromo.background); // Crie um URL para o arquivo
            const promoToAdd = { ...newPromo, background: backgroundUrl };
            onAddPromo(promoToAdd); // Chame a função passada por props
        }

        // Limpe o formulário
        setNewPromo({
            incluso: '',
            destino: '',
            preco: '',
            background: null
        });
    }

    return (
        <section className='container__cadOfertas'>
            <div className='form__container'>
                <h2 className='container__subtitle'>Cadastro de Ofertas</h2>
                <hr className='container__underlined'></hr>
            </div>
            <ContactFormInput inputName='Incluso' id='incluso' type='text' value={newPromo.incluso} onChange={handleFieldsChange} />
            <ContactFormInput inputName='Destino' id='destino' type='text' value={newPromo.destino} onChange={handleFieldsChange} />
            <ContactFormInput inputName='Preço' id='preco' type='number' value={newPromo.preco} onChange={handleFieldsChange} />
            <ContactFormInput inputName='Background' id='background' type='file' onChange={handleFieldsChange} />
            <div className='container__cadOfertas--buttonArea'>
                <Button type={'button'} onClick={handleClick}>Cadastrar</Button>
            </div>
        </section >
    )
}

export default CadastroDeOfertas;
