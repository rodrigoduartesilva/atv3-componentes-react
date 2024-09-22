import '../Header/Header.css';
import logo from '../../assets/imgs/logo-provisoria.png';
import NavList from '../NavList/NavList';

const Header = () => {
    return (
        <header className='header'>
            <figure className='header__container--logo'>
                <img src={logo} alt='Logo Jornada' />
            </figure>
            <nav className='header__nav'>
                <NavList />
            </nav>
        </header>
    )
}

export default Header;