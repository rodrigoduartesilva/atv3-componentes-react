import { useState } from 'react';
import '../CardOffers/CardOffers.css';
import { promoCards } from '../../funcoes/promoCards.js';
import CadastroDeOfertas from '../../pages/CadastroDeOfertas/CadastroDeOfertas.js';
import Card from '../Card/Card.js';

const CardOffers = () => {
    const [promoCardsState, setPromoCardsState] = useState(promoCards);

    const addPromoCard = (newPromo) => {
        return setPromoCardsState([...promoCardsState, newPromo]);
    };

    return (
        <>
            <section className='container'>
                <h2 className='container__subtitle'>Ofertas da semana</h2>
                <hr className='container__underlined'></hr>
                <ul className='CardOffers__List'>
                    {promoCardsState.map((card, index) => (
                        <Card card={card} key={index} />
                    ))}
                </ul>
            </section>
            {/* Adiciona o componente CadastroDeOfertas e passa a função addPromoCard como props */}
            <CadastroDeOfertas state={promoCardsState} onAddPromo={addPromoCard} />
        </>
    )
}

export default CardOffers;
