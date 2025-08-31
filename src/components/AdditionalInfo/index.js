import React from "react";
import "./index.css";

import secondLastImg from "./second-last.png";
import lastImg from "./last.png";

const AdditionalInfo = () => {
  return (
    <div className="additional-info">
      <img src={secondLastImg} alt="Bundle Info" className="info-img" />
      <img src={lastImg} alt="Details Info" className="info-img" />
    </div>
  );
};

export default AdditionalInfo;
