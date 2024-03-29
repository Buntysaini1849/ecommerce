import React, { useState, useEffect } from 'react';
import "./App.css";
import ShopList from "./Components/ShopList";
import { Provider } from "react-redux";
import store from "./State/Store";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import TopSection from "./Components/FrontPage/TopSection";
import ProductDetailView from "./Components/Product/ProductDetailView";
import Checkout from "./Components/Checkout";
import Profile from "./Components/User/Profile";
import Address from "./Components/User/Address";
import Wishlist from "./Components/Wishlist";
import OrderList from "./Components/OrderList";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import ViewCart from "./Components/ViewCart";



function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);


  return (
    <Provider store={store}>
      <Router>
        <div className="App">
        {isOnline ? (
          <div>
            <Routes>
            <Route exact path="/" element={<TopSection/>} />
            <Route exact path="/shoplist" element={<ShopList/>} />
            <Route exact path="/productview" element={<ProductDetailView />} />
            <Route exact path="/viewcart" element={<ViewCart />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/address" element={<Address />} />
            <Route exact path="/wishlist" element={<Wishlist />} />
            <Route exact path="/orderlist" element={<OrderList />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/contactus" element={<ContactUs />} />
            

            </Routes>
            </div>
            ) : (
              <div className='mt-5 d-grid' style={{justifyContent:"center"}}>
                <p style={{color:"#111",fontSize:"30px",fontWeight:"600"}}>Please connect to the internet.</p>
                <p style={{color:"#111",fontSize:"18px",fontWeight:"500",display:"flex",justifyContent:"center"}}>Check your internet connection and try again.</p>
              </div>
            )}
         
        </div>
      </Router>
    </Provider>
  );
}

export default App;
