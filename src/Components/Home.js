import React,{useState} from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";


export default function Home() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  return (
    <div>
      <div className="right-section">
        <HashRouter>
          <Routes>
            {/* <Route exact path='/' element={<Login/>}/> */}
            <Route exact path="/" element={<Header cartItems={cartItems} addToCart={addToCart}/>} />
          </Routes>
        </HashRouter>
        
      </div>
    </div>
  );
}
