import '../Header/Header.css';
import logo from '../../assets/imgs/logo-provisoria.png';
import NavList from '../NavList/NavList';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <figure className='header__container--logo'>
                <Link to={'/'}><img src={logo} alt='Logo Jornada' /></Link>
            </figure>
            <nav className='header__nav'>
                <NavList />
            </nav>
        </header>
    )
}

export default Header;