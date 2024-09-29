import { useState } from 'react';
import Card from '../Card/Card';
import '../CardOffers/CardOffers.css';
import { promoCards } from '../../funcoes/promoCards.js';
import CadastroDeOfertas from '../../pages/CadastroDeOfertas/CadastroDeOfertas.js';

const CardOffers = () => {
    const [promoCardsState, setPromoCardsState] = useState(promoCards);

    const addPromoCard = (newPromo) => {
        setPromoCardsState([...promoCardsState, newPromo]);
    };

    return (
        <section className='container'>
            <h2 className='container__subtitle'>Ofertas da semana</h2>
            <hr className='container__underlined'></hr>
            <ul className='CardOffers__List'>
                {promoCardsState.map((card, index) => (
                    <Card card={card} key={index} />
                ))}
            </ul>
            {/* Adicione o componente CadastroDeOfertas e passe a função addPromoCard como props */}
            <CadastroDeOfertas onAddPromo={addPromoCard} />
        </section>
    )
}

export default CardOffers;
