import React, { PropsWithChildren } from "react";
import Header from "../Header";
import { PanelSidebar } from "../PanelSidebar/PanelSidebar";

const PanelLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      <div className="mx-auto md:fixed h-full lg:w-1/4 top-1/4 px-12">
        <PanelSidebar />
      </div>
      {/* <main className="w-1/5 mx-5 my-3 h-5/6 bg-purple shadow-xl rounded-md">
        {children}
      </main> */}
      <div className="w-full absolute bottom-0 py-4">
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
