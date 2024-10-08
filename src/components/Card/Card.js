import Button from '../Button/Button';
import '../Card/Card.css';

const Card = ({ card }) => {
    return (
        <li style={{ backgroundImage: `url(${card.background})`, backgroundSize: "cover" }} className='CardOffers__List--item'>
            <p className='CardOffers__List--paragraph'>{card.incluso}</p>
            <h3 className='CardOffers__List--subtittle'>{card.destino}</h3>
            <p className='CardOffers__List--price'>R$ {card.preco}</p>
            <Button type={'button'}>Ver detalhes</Button>
        </li>
    )
}

export default Card;