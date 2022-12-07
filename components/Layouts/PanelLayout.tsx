import React, { PropsWithChildren } from "react";
import Header from "../Header";
import { PanelSidebar } from "../PanelSidebar/PanelSidebar";

const PanelLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      <div className="mx-auto md:fixed h-full sm:w-1/5 top-1/4 px-12">
        <PanelSidebar />
      </div>
      {children}
      <div className="w-full">
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
