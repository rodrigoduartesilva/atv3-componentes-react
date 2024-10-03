import '../../components/WhatsappContactPage/WhatsappContactPage.css';
import React from 'react';
import whatsapp from '../../assets/socialIcons/whatsapp-icon-bottom-page.png';

const WhatsappContactPage = () => {
    return (
        <picture className='whassapp__container'>
            <img src={whatsapp} alt='WhatssApp' />
        </picture>
    )
}

export default WhatsappContactPage;