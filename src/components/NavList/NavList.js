import { Link } from 'react-router-dom';
import '../NavList/NavList.css';

const NavList = () => {
    return (
        <ul className='header__ul'>
            <li className='header__ul--li'><a href='#'>Blog</a></li>
            <li className='header__ul--li'><a href='#'>Pacotes de viagem</a></li>
            <li className='header__ul--li'><Link to={'contato'}>Contato</Link></li>
            <li className='header__ul--li'><Link to={'cadastro'}>Cadastro de Ofertas</Link></li>
        </ul>
    )
}

export default NavList;