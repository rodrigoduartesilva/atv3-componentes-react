import CardRender from '../CardRender/CardRender';
import CategoriaBanner from '../CategoriaBanner/CategoriaBanner';
import Depoimentos from '../Depoimentos/Depoimentos';
import FirstBunner from '../FirstBunner/FirstBunner';
import LastBunner from '../LastBunner/LastBunner';
import '../Main/Main.css';
import PayConditions from '../PayConditions/PayConditions';
import PopPlaces from '../PopPlaces/PopPlaces';
import WhatsappContactPage from '../WhatsappContactPage/WhatsappContactPage';

const Main = () => {
    return (
        <main className='main__container'>
            <FirstBunner />
            <CardRender />
            <CategoriaBanner />
            <PopPlaces />
            <PayConditions />
            <Depoimentos />
            <LastBunner />
            <WhatsappContactPage />
        </main>
    )
}

export default Main;