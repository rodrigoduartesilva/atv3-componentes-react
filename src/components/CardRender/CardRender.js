import { promoCards } from '../../funcoes/promoCards.js';
import Card from '../Card/Card';
import '../CardRender/CardRender.css';
import React, { useState } from 'react';

const CardRender = () => {
    const [promoCardsState, setPromoCardsState] = useState(promoCards);

    return (
        <section className='container'>
            <h2 className='container__subtitle'>Ofertas da semana</h2>
            <hr className='container__underlined'></hr>
            <ul className='CardOffers__List'>
                {promoCardsState.map((card, index) => (
                    <Card card={card} key={index} />
                ))}
            </ul>
        </section>
    )
}

export default CardRender;