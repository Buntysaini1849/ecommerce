import React from 'react'
import Header from "./Header";
import BestOffers from "./BestOffers";
import ShopList from "./ShopList";
import { Routes,Route } from "react-router-dom";

const PageRoutes = () => {
  return (
    <div>
      
          <Routes>
          <Route exact path='/' element={<Header />}/> 
          <Route exact path='/shoplist' element={<ShopList />}/> 
          <Route exact path='/bestoffers' element={<BestOffers />}/> 
          </Routes>
    </div>
  )
}

export default PageRoutes
