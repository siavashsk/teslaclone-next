import React, { PropsWithChildren } from "react";
import Header from "../Header";

const PanelLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      {children}
      <div className="fixrd bottom-4 w-full">
        <ul className="flex gap-3 justify-center">
          <li className="footerText">Tesla © 2022</li>
          <li className="footerText">Privacy & Legal</li>
          <li className="footerText">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default PanelLayout;
