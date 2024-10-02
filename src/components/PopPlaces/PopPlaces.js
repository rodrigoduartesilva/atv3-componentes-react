import Button from '../Button/Button';
import '../PopPlaces/PopPlaces.css';
import React from 'react';
import osaka from '../../assets/imgs/Osaka.jpg';

const PopPlaces = () => {
    return (
        <section className='popplaces__container'>
            <div>
                <h2 className='container__subtitle' >Busque por Destinos Populares</h2>
                <hr className='container__underlined'></hr>
            </div>
            <div className='popplaces__container__main--card'>
                <div className='popplaces__container__main__card--unit'>
                    <picture>
                        <img className='popplaces__container__img' src={osaka} alt='Osaka' />
                    </picture>
                    <h4>Tokyo</h4>
                    <p className='popplaces__container--paragraph'>
                        Tóquio é uma cidade vibrante e cosmopolita, com seus templos históricos, museus de arte moderna e arranha-céus icônicos. Não perca a chance de mergulhar em sua atmosfera fascinante.
                    </p>
                    <Button>Ver detalhes</Button>
                </div>
                <div className='popplaces__container__main__card--unit'>
                    <picture>
                        <img className='popplaces__container__img' src={osaka} alt='Osaka' />
                    </picture>
                    <h4>Osaka</h4>
                    <p className='popplaces__container--paragraph'>
                        Osaka é uma cidade agitada e moderna no Japãos. A cidade é famosa por sua gastronomia deliciosa e por ser um excelente ponto de partida para explorar outras cidades japonesas próximas.
                    </p>
                    <Button>Ver detalhes</Button>
                </div>
            </div>
        </section>
    )
}

export default PopPlaces;