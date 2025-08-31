import React, { useState } from "react";
import "./index.css";

import variantImg from "./variant-selects.png";
import purchaseImg from "./purchase-options.png";

const PurchaseOptions = () => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="purchase-options">
      <img src={variantImg} alt="Variant Selection" className="option-img" />
      <p className="quantity-label">PAYMENT OPTIONS (SELECT ONE)</p>
      <img src={purchaseImg} alt="Purchase Options" className="option-img" />
      <div className="purchase-actions">
        <div className="quantity-wrapper">
          <p className="quantity-label">SELECT QUANTITY</p>
          <div className="quantity-selector">
            <button onClick={decrease}>-</button>
            <span>{quantity}</span>
            <button onClick={increase}>+</button>
          </div>
        </div>
        <button className="add-to-cart">ADD TO CART</button>
      </div>
    </div>
  );
};

export default PurchaseOptions;
