import '../Header/Header.css';
import logo from '../../assets/imgs/logo-provisoria.png';

const Header = () => {
    return (
        <header className='header'>
            <figure className='header__container--logo'>
                <img src={logo} alt='Logo Jornada' />
            </figure>
            <nav className='header__nav'>
                <ul className='header__ul'>
                    <li className='header__ul--li'><a href='#'>Blog</a></li>
                    <li className='header__ul--li'><a href='#'>Pacotes de viagem</a></li>
                    <li className='header__ul--li'><a href='#'>Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;