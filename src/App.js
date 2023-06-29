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


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          
            <Routes>
            <Route exact path="/" element={<TopSection/>} />
            <Route exact path="/shoplist" element={<ShopList/>} />
            <Route exact path="/productview" element={<ProductView />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/profile" element={<Profile />} />
            </Routes>
            
         
        </div>
      </Router>
    </Provider>
  );
}

export default App;
