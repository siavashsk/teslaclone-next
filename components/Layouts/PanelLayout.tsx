import React from "react";
import Header from "../Header";

const PanelLayout = () => {
  return (
    <div>
      <Header />
      PanelLayout
      <div className="absolute bottom-4">
        <ul className="flex gap-3">
          <li className="footerText">
            Tesla © 2022
          </li>
          <li className="footerText">
            Privacy & Legal
          </li>
          <li className="footerText">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PanelLayout;
