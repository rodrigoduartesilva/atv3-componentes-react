import Card from '../Card/Card';
import '../CardOffers/CardOffers.css';

const CardOffers = () => {
    const promoCards = [
        {
            incluso: 'HOTEL+AÉREO',
            destino: 'Japão',
            preco: 4000,
            background: require('../../assets/cards/jap-promo-card-bcg.png')
        },
        {
            incluso: 'HOTEL+AÉREO',
            destino: 'San Andreas',
            preco: 3000,
            background: require('../../assets/cards/sandreas-promo-card-bcg.png')
        },
        {
            incluso: 'HOTEL+AÉREO',
            destino: 'Paraíba',
            preco: 1200,
            background: require('../../assets/cards/paraiba-promo-card-bcg.png')
        },
        {
            incluso: 'HOTEL+AÉREO',
            destino: 'Manaus',
            preco: 1600,
            background: require('../../assets/cards/manaus-promo-card-bcg.png')
        }
    ];

    return (
        <section className='container'>
            <h2 className='container__subtitle' >Ofertas da semana</h2>
            <hr className='container__underlined'></hr>
            <ul className='CardOffers__List'>
                {promoCards.map((card, index) => (
                    <Card card={card} key={index} />
                ))}
            </ul>
        </section>
    )
}

export default CardOffers;