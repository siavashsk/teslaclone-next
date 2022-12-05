import React from "react";
import { footerItem } from "../data";

const Footer = () => {
  return (
    <ul className="flex justify-center gap-3 pb-1">
      {footerItem.map(({ id, name }) => (
        <li key={id} className="text-xs text-gray font-semibold cursor-pointer">
          {name}
        </li>
      ))}
    </ul>
  );
};

export default Footer;
