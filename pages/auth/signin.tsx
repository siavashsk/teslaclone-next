import Image from "next/image";
import { BsGlobe2 } from "react-icons/bs";
import { BiInfoCircle } from "react-icons/bi";
import Link from "next/link";

const signin = () => {
  return (
    <div>
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

      <div className="flex justify-center items-center px-4">
        <div className="w-[300px]">
          <h1 className="sm:text-3xl font-medium text-[#222] mt-4 transition-all text-2xl">
            Sign In
          </h1>
          <form action="" className="pt-6">
            <div className="flex items-center gap-2 text-gray pb-2">
              <label
                htmlFor="email"
                className="text-[#7e8082] font-bold text-sm"
              >
                Email
              </label>
              <div>
                <BiInfoCircle />
              </div>
            </div>
            <input
              type="email"
              name="email"
              className="w-full bg-firstGray rounded-md p-2 outline-none text-sm font-semibold text-gray-dark focus:border-1 transition-all"
            />
            <div className="pt-6">
              <button className="w-full text-center bg-blue rounded-1 h-9 text-white font-semibold text-sm">
                Next
              </button>
            </div>
            <p className="underline text-gray text-sm text-center mt-4 cursor-pointer">
              Trouble Signing In?
            </p>
            <div className="mx-6 relative mt-10 mb-10">
              <hr />
              <span className="text-gray absolute left-[45%] top-[-14px] w-10 text-left pl-3 bg-white">
                Or
              </span>
            </div>
          </form>
          <button className="w-full text-center bg-firstGray rounded-1 h-9 text-gray-dark font-semibold text-sm">
            Create Account
          </button>

          <div className="absolute bottom-4">
            <ul className="text-center flex gap-3">
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
        </div>
      </div>
    </div>
  );
};

export default signin;
