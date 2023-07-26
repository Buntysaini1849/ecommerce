// QuantityInput.js

import React, { useState } from "react";
import "../Css/QuantityInput.css";

const QuantityInput = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="container p-0">
    <div className="quantity-input p-0">
      <button onClick={handleDecrease} className="decin-btn dec-btn">-</button>
      <input type="number"  className="form-control inputqty" value={quantity} readOnly />
      <button onClick={handleIncrease} className="decin-btn">+</button>
    </div>
    </div>
  );
};

export default QuantityInput;
