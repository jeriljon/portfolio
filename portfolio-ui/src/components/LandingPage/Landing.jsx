import React from 'react';
import HeaderSection from '../global/Header/HeaderSection';
import BannerSection from '../LandingPage/Banner/BannerSection';
import BodySection from '../global/Body/BodySection';
import FooterSection from '../global/Footer/FooterSection';

const landingPageContent = {
    title: "Welcome to my portfolio",
    body: "I am Jeril Jon. I am a full stack developer. Passionate engineer. Cloud architect. UI developer. Practicing minimalist. Working with my hands to mix artistry and engineering. View my Projects, Articles, Resume. If you want to Contact me, send me an email at info@jerimon.com"
};

const Landing = () => {
    return (
        <div>
            <HeaderSection />
            <BannerSection />
            <BodySection content={landingPageContent} />
            <FooterSection />
        </div>
    );
}

export default Landing;
