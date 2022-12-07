import { sidebarOptions } from "../../data";
import React, { Fragment } from "react";
import { AiOutlineHome } from "react-icons/ai";

export const PanelSidebar = () => {
  return (
    <ul className="flex flex-col gap-8 justify-center">
      {sidebarOptions.map(({ id, option, icon, route }) => (
        <Fragment key={id}>
          <div className="flex items-center gap-3 cursor-pointer">
            <div>{icon}</div>
            <li className="font-semibold text-gray capitalize hover:text-gray-dark">{option}</li>
          </div>
        </Fragment>
      ))}
    </ul>
  );
};
