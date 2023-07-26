import React from "react";
import "./App.css";
import ShopList from "./Components/ShopList";
import { Provider } from "react-redux";
import store from "./State/Store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopSection from "./Components/FrontPage/TopSection";
import ProductView from "./Components/ProductView";
import Checkout from "./Components/Checkout";
import Profile from "./Components/Profile";
import Address from "./Components/Address";
import Wishlist from "./Components/Wishlist";
import OrderList from "./Components/OrderList";
import { AiOutlineOrderedList } from "react-icons/ai";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import ViewCart from "./Components/ViewCart";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          
            <Routes>
            <Route exact path="/" element={<TopSection/>} />
            <Route exact path="/shoplist" element={<ShopList/>} />
            <Route exact path="/productview" element={<ProductView />} />
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
      </Router>
    </Provider>
  );
}

export default App;
