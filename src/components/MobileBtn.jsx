import "../styles/Homepage/MobileBtn.css";

import { useState } from "react";

const MobileBtn = () => {
  return (
    <div className="mob">
      <div className=" mobile-btn-wrapper">
        <button className="secondary active">Featured</button>
        <button className="secondary">Latest</button>
      </div>
    </div>
  );
};

export default MobileBtn;
