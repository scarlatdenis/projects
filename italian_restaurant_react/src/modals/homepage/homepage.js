import React from 'react';
import HeaderBackground from './headerBackground';
import KeepInTouch from './keepInTouch';
import MenuPage from './menuHomePage';
import CalloutWrap from './calloutWrap';
import './home.css';


function HomePage() {
    return (
        <div>
            
            <HeaderBackground />
            <MenuPage />
            <CalloutWrap />
            <KeepInTouch />
            
        </div>
    )
}

export default HomePage;