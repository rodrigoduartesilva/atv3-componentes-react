import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import ContactFormInput from '../../components/ContactFormInput/ContactFormInput';
import '../CadastroDeOfertas/CadastroDeOfertas.css';
import { promoCards } from '../../funcoes/promoCards';

const CadastroDeOfertas = ({ onAddPromo }) => {
    const [newPromo, setNewPromo] = useState({
        incluso: '',
        destino: '',
        preco: '',
        background: ''
    });

    useEffect(() => {
        getOffers();
    }, []);

    const handleFieldsChange = (event) => {
        const { id, value, type } = event.target;
        setNewPromo(prev => ({
            ...prev,
            [id]: type === 'file' ? event.target.files[0] : value // Atualize para lidar com arquivos
        }));
    }

    const handleClick = async () => {
        const response = await fetch('http://localhost:3005/promoCards', {
            method: 'POST',
            headers: new Headers({
                "Content-type": "application/json"
            }),
            body: JSON.stringify(promoCards)
        });

        const data = await response.json();
        alert('Cadastrado com sucesso', data);

        getOffers();


        if (newPromo.background) {
            const backgroundUrl = URL.createObjectURL(newPromo.background); // Crie um URL para o arquivo
            const promoToAdd = { ...newPromo, background: backgroundUrl };
            onAddPromo(promoToAdd); // Chame a função passada por props
        }

        // Limpa o form
        setNewPromo({
            incluso: '',
            destino: '',
            preco: '',
            background: ''
        });
    }

    const getOffers = async () => {
        // GET -> busca as informações das ofertas cadastradas no db.json
        const response = await fetch('http://localhost:3005/promoCards')
        const data = await response.json();
        setNewPromo(data);
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
