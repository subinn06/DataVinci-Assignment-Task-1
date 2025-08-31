import React from "react";
import "./index.css";

import SidebarImages from "../SidebarImages";
import ProductDetails from "../ProductDetails";
import PurchaseOptions from "../PurchaseOptions";
import AdditionalInfo from "../AdditionalInfo";

const MainSection = () => {
  return (
    <main className="main-section">
      <SidebarImages />
      <div className="right-column">
        <ProductDetails />
        <PurchaseOptions/>
        <AdditionalInfo/>
      </div>
    </main>
  );
};

export default MainSection;
