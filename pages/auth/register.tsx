import React from "react";
import { BiInfoCircle } from "react-icons/bi";
import AuthLayout from "../../components/Layouts/AuthLayout";

const Register = () => {
  return (
    <AuthLayout>
      <div className="flex justify-center items-center px-4">
        <div className="w-[300px]">
          <h1 className="sm:text-3xl font-medium text-[#222] mt-4 transition-all text-2xl">
            Create Account
          </h1>
          <form action="" className="pt-6">
            <div className="flex items-center gap-2 text-gray py-2">
              <label
                htmlFor="firstname"
                className="text-[#7e8082] font-bold text-sm"
              >
                First Name
              </label>
            </div>
            <input
              type="text"
              name="firstname"
              className="w-full bg-firstGray rounded-md p-2 outline-none text-sm font-semibold text-gray-dark focus:border-1 transition-all"
            />
            <div className="flex items-center gap-2 text-gray py-4">
              <label
                htmlFor="firstname"
                className="text-[#7e8082] font-bold text-sm"
              >
                Last Name
              </label>
            </div>
            <input
              type="text"
              name="firstname"
              className="w-full bg-firstGray rounded-md p-2 outline-none text-sm font-semibold text-gray-dark focus:border-1 transition-all"
            />

            <div className="flex items-center gap-2 text-gray py-4">
              <label
                htmlFor="firstname"
                className="text-[#7e8082] font-bold text-sm"
              >
                Enter the characters in the image
              </label>
            </div>
            <input
              type="text"
              name="firstname"
              className="w-full bg-firstGray rounded-md p-2 outline-none text-sm font-semibold text-gray-dark focus:border-1 transition-all"
            />
            <div className="">
              <p className="py-4 text-xs font-semibold text-gray">
                By continuing, I understand and agree to Teslas Privacy Notice
                and Terms Of Use for creating a Tesla Account
              </p>
              <button className="w-full text-center bg-blue rounded-1 h-9 text-white font-semibold text-sm hover:bg-dark-blue transition-all">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
