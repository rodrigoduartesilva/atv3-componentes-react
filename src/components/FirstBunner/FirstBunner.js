import '../FirstBunner/FirstBunner.css';
import firstBanner from '../../assets/imgs/maldivas.png';

const FirstBunner = () => {
    return (
        <div className='containner'>
            <figure className='firstBunner'>
                <img className='firstBunner--img' src={firstBanner} alt='Maldivas' />
            </figure>
            <p>Somos uma agência apaixonada por criar viagens inesquecíveis. Do destino à seleção das atividades, cuidamos de todos os detalhes para que você aproveite ao máximo cada momento da sua jornada!</p>
        </div>
    )
}

export default FirstBunner;