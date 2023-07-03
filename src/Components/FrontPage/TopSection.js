import React from 'react';
import Banner from '../Banner';
import Header from '../Header';
import ItemSlide from '../ItemSlide';
import CartSidebar from '../CartSidebar';
import TopSavers from '../TopSavers';
import BestOffers from '../BestOffers';
import Offer from '../Offer';
import Footer from '../Footer';



const TopSection = () => {
  return (
    <div>
        <Header />
        <Banner />
        <ItemSlide />
        <TopSavers />
        <BestOffers />
        <CartSidebar />
        <Offer />
        <Footer />
      
    </div>
  )
}

export default TopSection
