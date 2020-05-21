import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './modals/homepage/navbar';
import Footer from './modals/homepage/footer';
import MenuPage from './modals/menuPage/MenuPage';
import HomePage from './modals/homepage/homepage';
import SpecialOfferingsPage from './modals/specialOfferingsPage/specialOfferings';
import PrivatePartiesPage from './modals/privatePartiesPage/privateParties';









function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Route p path='/home' component={HomePage} />
      <Route path='/menu' component={MenuPage} />
      <Route path='/spectialofferings' component={SpecialOfferingsPage} />
      <Route path='/privateparties' component={PrivatePartiesPage} />


      <Footer />


    </BrowserRouter>
  );
}

export default App;
