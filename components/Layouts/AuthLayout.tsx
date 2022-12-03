import Image from "next/image";
import Link from "next/link";
import { Fragment, PropsWithChildren } from "react";
import { BsGlobe2 } from "react-icons/bs";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      <div className="flex justify-between p-4">
        <Link href="/">
          <div className="sm:pl-6 pl-0 transition-all cursor-pointer">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
          </div>
        </Link>
        <button className="flex items-center justify-center gap-1">
          <BsGlobe2 />
          <p className="font-medium text-sm text-gray">en-US</p>
        </button>
      </div>
      {children}
      <div className="absolute bottom-4 w-full">
        <ul className="flex gap-3 justify-center">
          <li className="text-xs text-gray font-semibold cursor-pointer hover:underline">
            Tesla © 2022
          </li>
          <li className="text-xs text-gray font-semibold cursor-pointer hover:underline">
            Privacy & Legal
          </li>
          <li className="text-xs text-gray font-semibold cursor-pointer hover:underline">
            Contact
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default AuthLayout;
