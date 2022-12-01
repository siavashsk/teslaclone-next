import React from "react";
import Image from "next/image";
import { navItems } from "../data";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full fixed flex justify-between items-center p-4 text-sm font-medium text-gray-700 mb-7">
      <div className="sm:pl-6 pl-0 transition-all">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </div>
      <ul className="hidden lg:flex gap-7 ml-10">
        {navItems.map((item: any) => (
          <li key={item.id} className="cursor-pointer">
            {item.name}
          </li>
        ))}
      </ul>
      <Image
        className="cursor-pointer lg:hidden"
        src="/menu.png"
        width={20}
        height={20}
        alt="menu"
      />
      <ul className="hidden lg:flex gap-8">
        <li className="cursor-pointer">Shop</li>
        <Link href="/signin">
          <li className="cursor-pointer">Account</li>
        </Link>
        <li className="cursor-pointer">Menu</li>
      </ul>
    </header>
  );
};

export default Header;
