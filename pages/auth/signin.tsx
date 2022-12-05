import { useState } from "react";
import { useFormik } from "formik";
import Link from "next/link";
import { BiInfoCircle } from "react-icons/bi";
import AuthLayout from "../../components/Layouts/AuthLayout";
import { loginSchema } from "../../utils/formikSchemas";

interface IValues {
  email: string;
  password: string;
}

const onSubmit = async (values: IValues) => {
  const user = { email: values.email, password: values.password };
  try {
  } catch (error) {
    console.log(error);
  }
};

const Signin = () => {
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    touched,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <AuthLayout>
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
              id="email"
              className="input"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <div className="flex items-center gap-2 text-gray py-2">
              <label
                htmlFor="password"
                className="text-[#7e8082] font-bold text-sm"
              >
                Password
              </label>
            </div>
            <input
              type="password"
              id="password"
              className="input"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <div className="pt-6">
              <button className="w-full text-center bg-blue rounded-1 h-9 text-white font-semibold text-sm hover:bg-dark-blue transition-all">
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
          <Link href="/auth/register">
            <button className="w-full text-center bg-firstGray rounded-1 h-9 text-gray-dark font-semibold text-sm hover:bg-hoverGray transition-all">
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Signin;
