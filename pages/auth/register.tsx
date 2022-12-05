import { useFormik } from "formik";
import React from "react";
import AuthLayout from "../../components/Layouts/AuthLayout";
import Spinner from "../../components/UI/Spinner/Spinner";
import { registerSchema } from "../../utils/formikSchemas";

interface IValues {
  name: string;
  email: string;
  password: string;
}

const Register = () => {
  const onSubmit = async (values: IValues) => {
    const user = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    try {
      console.log("success");
    } catch (error) {
      console.log(error);
    }
  };

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
      name: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  return (
    <AuthLayout>
      <div className="flex justify-center items-center px-4">
        <div className="w-[300px]">
          <h1 className="sm:text-3xl font-medium text-[#222] mt-4 transition-all text-2xl">
            Create Account
          </h1>
          <form onSubmit={handleSubmit} className="pt-6">
            <div className="flex items-center gap-2 text-gray py-2">
              <label
                htmlFor="name"
                className="text-[#7e8082] font-bold text-sm"
              >
                Name
              </label>
            </div>
            <input
              type="text"
              id="name"
              className="input"
              value={values.name}
              onChange={handleChange}
            />
            <div className="flex items-center gap-2 text-gray py-2">
              <label
                htmlFor="email"
                className="text-[#7e8082] font-bold text-sm"
              >
                Email
              </label>
            </div>
            <input
              type="email"
              id="email"
              className="input"
              value={values.email}
              onChange={handleChange}
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
            />
            <p className="py-4 text-xs font-semibold text-gray">
              By continuing, I understand and agree to Teslas Privacy Notice and
              Terms Of Use for creating a Tesla Account
            </p>
            <button
              className="w-full text-center bg-blue rounded-1 h-9 text-white font-semibold text-sm hover:bg-dark-blue transition-all"
              type="submit"
            >
              {isSubmitting ? <Spinner /> : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
