import CardOffers from '../CardOffers/CardOffers';
import CategoriaBanner from '../CategoriaBanner/CategoriaBanner';
import ContactForm from '../ContactForm/ContactForm';
import FirstBunner from '../FirstBunner/FirstBunner';
import LastBunner from '../LastBunner/LastBunner';
import '../Main/Main.css';

const Main = () => {
    return (
        <main className='main__container'>
            <FirstBunner />
            <CardOffers />
            <CategoriaBanner />
            <ContactForm />
            <LastBunner />
        </main>
    )
}

export default Main;