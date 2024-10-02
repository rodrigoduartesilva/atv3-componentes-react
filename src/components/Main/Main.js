import CardOffers from '../CardOffers/CardOffers';
import CategoriaBanner from '../CategoriaBanner/CategoriaBanner';
import FirstBunner from '../FirstBunner/FirstBunner';
import LastBunner from '../LastBunner/LastBunner';
import '../Main/Main.css';
import PayConditions from '../PayConditions/PayConditions';
import PopPlaces from '../PopPlaces/PopPlaces';

const Main = () => {
    return (
        <main className='main__container'>
            <FirstBunner />
            <CardOffers />
            <CategoriaBanner />
            <PopPlaces />
            <PayConditions />
            <LastBunner />
        </main>
    )
}

export default Main;