import React, { useState } from "react";
import "./index.css";

import ratingImg from "./rating.png";
import popupImg from "./popup.png";

import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";

const ProductDetails = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="product-details">
      <h1>Manuka Honey</h1>
      <p className="umf">UMF <span>24+</span></p>
      <p className="mgo">MGO <span>1122+</span></p>

      <button className="info-btn" onClick={() => setShowPopup(true)}>
        <span className="info-icon">ⓘ</span> What is UMF and MGO?
      </button>

      <div className="optimiser-row">
        <p className="subtitle">The Optimiser</p>
        <img src={ratingImg} alt="Reviews" className="rating-img" />
      </div>

      <p className="description">
        For those times in life when quality comes first. This pure UMF™ 24+ Manuka 
        Honey is powerfully active, sourced from wild and rugged locations around 
        Aotearoa New Zealand and great for almost all uses. It has a full, delicious 
        flavour and your body will love you for it.
      </p>

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={popupImg} alt="UMF and MGO Info" className="popup-img" />
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="certifications">
        <div className="cert-grid">
          <img src={icon1} alt="icon 1" />
          <img src={icon2} alt="icon 2" />
          <img src={icon3} alt="icon 3" />
          <img src={icon4} alt="icon 4" />
          <img src={icon5} alt="icon 5" />
          <img src={icon6} alt="icon 6" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
