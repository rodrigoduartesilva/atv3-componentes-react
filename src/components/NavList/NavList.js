import '../NavList/NavList.css';

const NavList = () => {
    return (
        <ul className='header__ul'>
            <li className='header__ul--li'><a href='#'>Blog</a></li>
            <li className='header__ul--li'><a href='#'>Pacotes de viagem</a></li>
            <li className='header__ul--li'><a href='#contact'>Contato</a></li>
        </ul>
    )
}

export default NavList;