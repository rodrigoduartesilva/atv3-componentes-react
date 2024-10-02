import '../PayConditions/PayConditions.css';
import React from 'react';

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
                <div className='card card__2'></div>
                <div className='card card__3'></div>
                <div className='card card__4'></div>
                <div className='card card__5'></div>
                <div className='card card__6'></div>
            </div>
        </section>
    )
}

export default PayConditions;