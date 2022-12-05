import React, { useState } from "react";
import Image from "next/image";
import { navItems, sideBarMenuItems } from "../data";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <header className="w-full fixed flex justify-between items-center p-4 text-sm font-medium text-gray-700 mb-7">
      {showSidebar && (
        <>
          <div
            className={`fixed top-0 right-0 w-[274px] bg-blue-600 bg-white hidescroll overflow-scroll p-5 pl-10 text-white h-full z-40 ease-in-out duration-300 ${
              showSidebar ? "w-[300px]" : "w-0"
            }`}
          >
            <div className="pt-12">
              {sideBarMenuItems.map(({ id, name }) => (
                <h3
                  key={id}
                  className="py-2 text-sm cursor-pointer font-semibold text-gray-dark"
                >
                  {name}
                </h3>
              ))}
            </div>
          </div>
          <button
            className="flex text-2xl text-gray-dark items-center cursor-pointer fixed right-5 top-6 z-50"
            onClick={() => setShowSidebar((prev) => !prev)}
          >
            <IoMdClose />
          </button>
        </>
      )}

      <Link href="/">
        <div className="sm:pl-6 pl-0 transition-all cursor-pointer">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </div>
      </Link>
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
        onClick={() => setShowSidebar((prev) => !prev)}
      />
      <ul className="hidden lg:flex gap-8">
        <li className="cursor-pointer">Shop</li>
        <Link href="/auth/signin">
          <li className="cursor-pointer">Account</li>
        </Link>
        <li
          className="cursor-pointer"
          onClick={() => setShowSidebar((prev) => !prev)}
        >
          Menu
        </li>
      </ul>
    </header>
  );
};

export default Header;
