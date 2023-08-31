import React from 'react';
import Banner from '../HomePage/Banner';
import Header from '../Header';
import CategorySlide from '../HomePage/CategorySlider';
import CartSidebar from '../CartSidebar';
import HomeProducts from '../Product/HomeProductComponent';
import Offer from '../Offer';
import Footer from '../Footer';



const TopSection = () => {
  return (
    <div>
        <Header />
        <Banner />
        <CategorySlide />
        <HomeProducts />
        <CartSidebar />
        <Offer />
        <Footer />
      
    </div>
  )
}

export default TopSection
