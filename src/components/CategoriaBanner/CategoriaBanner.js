import '../CategoriaBanner/CategoriaBanner.css';
import '../CardOffers/CardOffers.css';
import natPackIcon from '../../assets/categoria/nat-pack-icon.png';
import intPackIcon from '../../assets/categoria/int-pack-icon.png';
import transfIcon from '../../assets/categoria/transf-icon.png';
import travelSecIcon from '../../assets/categoria/travel-sec-icon.png';

const CategoriaBanner = () => {
    return (
        <div className='category__container'>
            <h2 className='container__subtitle' >Busque por Categoria</h2>
            <hr className='container__underlined'></hr>
            <ul className='category__container--icons'>
                <li>
                    <figure>
                        <img src={natPackIcon} alt='Pacotes Nacionais' />
                    </figure>
                    <p>Pacotes Nacionais</p>
                </li>
                <li>
                    <figure>
                        <img src={intPackIcon} alt='Pacotes Internacionais' />
                    </figure>
                    <p>Pacotes Internacionais</p>
                </li>
                <li>
                    <figure>
                        <img src={transfIcon} alt='Transfer' />
                    </figure>
                    <p>Transfer</p>
                </li>
                <li>
                    <figure>
                        <img src={travelSecIcon} alt='Seguro Viagem' />
                    </figure>
                    <p>Seguro Viagem</p>
                </li>
            </ul>
        </div>
    )
}

export default CategoriaBanner;