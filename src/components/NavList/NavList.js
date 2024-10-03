import { Link } from 'react-router-dom';
import '../NavList/NavList.css';

const NavList = () => {
    return (
        <ul className='header__ul'>
            <li className='header__ul--li'><Link to={'blog'}>Blog</Link></li>
            <li className='header__ul--li'><Link to={'pacotesdeviagem'}>Pacotes de viagem</Link></li>
            <li className='header__ul--li'><Link to={'contato'}>Contato</Link></li>
            <li className='header__ul--li'><Link to={'cadastro'}>Cadastro de Ofertas</Link></li>
        </ul>
    )
}

export default NavList;