import Button from '../Button/Button';
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
                    <li style={{ backgroundImage: `url(${card.background})`, backgroundSize: "cover" }} className='CardOffers__List--item'>
                        <p className='CardOffers__List--paragraph'>{card.incluso}</p>
                        <h3 className='CardOffers__List--subtittle'>{card.destino}</h3>
                        <p className='CardOffers__List--price'>R$ {card.preco.toFixed(2)}</p>
                        <Button>Ver detalhes</Button>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default CardOffers;