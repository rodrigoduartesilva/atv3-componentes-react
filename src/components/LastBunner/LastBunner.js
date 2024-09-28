import '../LastBunner/LastBunner.css';
import lastBunner from '../../assets/imgs/last-bunner.png';

const LastBunner = () => {
    return (
        <figure className='lastBunner'>
            <img className='lastBunner--img' src={lastBunner} alt='Paisagem costeira' />
        </figure>
    )
}

export default LastBunner;