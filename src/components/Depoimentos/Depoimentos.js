import '../Depoimentos/Depoimentos.css';
import React from 'react';
import avatar1 from '../../assets/avatares/talita-villas.png';
import avatar2 from '../../assets/avatares/amari-salin.png';
import avatar3 from '../../assets/avatares/lauro-matos.png';
import star from '../../assets/imgs/star.png';

const Depoimentos = () => {
    return (
        <section className='depoimentos__container'>
            <div>
                <h2 className='container__subtitle' >Depoimentos</h2>
                <hr className='container__underlined'></hr>
            </div>
            <div className='depoimentos__container--cards'>
                <div className='depoimentos__container--card'>
                    <p>A Jornada foi uma das melhores agências de viagens que eu já experimentei. O serviço ao cliente foi excepcional, e toda a equipe foi muito atenciosa e prestativa.</p>
                    <div className='depoimentos__container__card--profile'>
                        <img className='depoimentos__container__card--avatar' src={avatar1} alt='Talita Villas Boas' />
                        <div className='depoimentos__container__card__profile--status'>
                            <h5>Talita Villas Boas</h5>
                            <div className='depoimentos__container__card__profile__stars'>
                                <img src={star} alt='star' />
                                <img src={star} alt='star' />
                                <img src={star} alt='star' />
                                <img src={star} alt='star' />
                                <img src={star} alt='star' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='depoimentos__container--card'>
                    <p>Recomendo fortemente a agência de viagens Jornada. Eles oferecem um serviço personalizado e de alta qualidade que excedeu minhas expectativas em minha última viagem.</p>
                    <div className='depoimentos__container__card--profile'>
                        <img className='depoimentos__container__card--avatar' src={avatar2} alt='Amari Salin' />
                        <div className='depoimentos__container__card__profile--status'>
                            <h5>Amari Salin</h5>
                            <div className='depoimentos__container__card__profile__stars'>
                                <img src={star} alt='star' />
                                <img src={star} alt='star' />
                                <img src={star} alt='star' />
                                <img src={star} alt='star' />
                                <img src={star} alt='star' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='depoimentos__container--card'>
                    <p>Minha viagem com a Jornada foi incrível! Recomendo muito a agência para quem busca uma experiência emocionante e personalizada. Excelentes profissionais.</p>
                    <div className='depoimentos__container__card--profile'>
                        <img className='depoimentos__container__card--avatar' src={avatar3} alt='Lauro B. Matos' />
                        <div className='depoimentos__container__card__profile--status'>
                            <h5>Lauro B. Matos</h5>
                            <div className='depoimentos__container__card__profile__stars'>
                                <img src={star} alt='star' />
                                <img src={star} alt='star' />
                                <img src={star} alt='star' />
                                <img src={star} alt='star' />
                                <img src={star} alt='star' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Depoimentos;