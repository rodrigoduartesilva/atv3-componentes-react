import '../PayConditions/PayConditions.css';
import React from 'react';
import bag from '../../assets/paycondictions/travel_bag.png';
import passport from '../../assets/paycondictions/passport.png';
import travellers from '../../assets/paycondictions/travellers.png';

const PayConditions = () => {
    return (
        <section className='payConditions__container'>
            <div>
                <h2 className='container__subtitle' >Condições de Pagamento</h2>
                <hr className='container__underlined'></hr>
            </div>
            <div className='payConditions__container--cards'>
                <div className='card card__1'>
                    <h4>Parcelamento em até 12x!</h4>
                    <p>Viaje pagando em até 12 parcelas no cartão, à vista no crédito com 5% de desconto ou no Pix com 10% de desconto! </p>
                </div>
                <div className='payConditions__container__cards--imgs'>
                    <div className='payConditions__container__cards__superior'>
                        <div className='card card__2'>
                            <img src={bag} alt='Malas de viagem' />
                        </div>
                        <div className='card card__3'>
                            <img src={passport} alt='Passaportes' />
                        </div>
                    </div>
                    <div className='payConditions__container__cards__inferior'>
                        <div className='card card__4'>
                            <img src={travellers} alt='Viajantes' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PayConditions;