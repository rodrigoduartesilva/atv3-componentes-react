import { promoCards } from '../../funcoes/promoCards';
import Card from '../Card/Card';
import '../CardOffers/CardOffers.css';



const CardOffers = () => {
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