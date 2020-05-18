import React from 'react';
import HeaderBackground from './headerBackground';
import KeepInTouch from './keepInTouch';
import Footer from './footer';
import MenuPage from './menuPage';
import CalloutWrap from './calloutWrap';
import Header from './header';


function HomePage() {
    return (
        <div>
            <Header /> 
            <HeaderBackground />
            <MenuPage />
            <CalloutWrap />
            <KeepInTouch />
            <Footer />
        </div>
    )
}

export default HomePage;