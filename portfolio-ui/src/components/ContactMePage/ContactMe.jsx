import React from 'react';
import HeaderSection from '../global/Header/HeaderSection';
import BodySection from '../global/Body/BodySection'; 
import FooterSection from '../global/Footer/FooterSection';
import './ContactMe.css';

const contactmeContent = {
    title: "Contact Me",
    body: "Email: jeriljon@gmail.com"
};

const ContactMe = () => {
    return (
        <div className="contactme-page">
            <HeaderSection />
            <BodySection content={contactmeContent} />
            <FooterSection />
        </div>
    );
}

export default ContactMe;
