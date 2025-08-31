import React from "react";
import "./index.css";

import img1 from "./img1.png";
import img2 from "./img2.png";

const SidebarImages = () => {
  return (
    <div className="sidebar">
        <img src={img1} alt="Product 1" />
        <img src={img2} alt="Product 2" />
    </div>
  );
};

export default SidebarImages;