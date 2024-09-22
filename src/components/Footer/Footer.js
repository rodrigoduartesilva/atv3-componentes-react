import '../Footer/Footer.css';
import logoFooter from '../../assets/imgs/logo-branco-footer.png';
import whatsappIcon from '../../assets/socialIcons/whatsapp-icon.svg';
import instagramIcon from '../../assets/socialIcons/instragam-icon.svg';
import twitterIcon from '../../assets/socialIcons/twiter-icon.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <section className='footer__left'>
                <figure className='footer__left--figure'>
                    <img src={logoFooter} alt='Logo Jornada' />
                </figure>
                <p className='footer__left--paragraph'>Horário de atendimento: 08h - 20h (Segunda a Sábado)</p>
                <p className='footer__left--paragraph'>Desenvolvido por Rodrigo Duarte. Projeto fictício sem fins comerciais.</p>
            </section>
            <section className='footer__right'>
                <p className='footer__right--paragraph'>Acesse nossas redes:</p>
                <div className='footer__right__iconList'>
                    <figure><a href='https://web.whatsapp.com/'><img className='footer__right__iconList--icon' src={whatsappIcon} alt='Icone do Whatsapp' /></a></figure>
                    <figure><a href='https://instagram.com/'><img className='footer__right__iconList--icon' src={instagramIcon} alt='Icone do Instagram' /></a></figure>
                    <figure><a href='https://twitter.com'><img className='footer__right__iconList--icon' src={twitterIcon} alt='Icone do Twitter' /></a></figure>
                </div>
            </section>
        </footer>
    )
}

export default Footer;