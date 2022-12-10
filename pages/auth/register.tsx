import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AuthLayout from "../../components/Layouts/AuthLayout";
import Input from "../../components/UI/Input";
import Spinner from "../../components/UI/Spinner";
import { useRegisterMutation } from "../../redux/auth/authApi";
import { useGetUserMutation } from "redux/users/usersApi";
import { setCredentials } from "../../redux/auth/authSlice";
import { registerSchema } from "../../utils/formikSchemas";
import { GetServerSidePropsContext } from "next";
import cookie from "cookie";

interface IValues {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const [submitMessage, setSubmitMessage] = useState("");
  //const [isUsernameUnique, setIsUsernameUnique] = useState(false);
  const dispatch = useDispatch();
  const [register, { isSuccess, isError }] = useRegisterMutation();
  const [getUser, { isLoading }] = useGetUserMutation();
  const router = useRouter();

  /* const checkUniqueUsername = async () => {
    try {
      const res = await getUser(`username=${values.username}`).unwrap();
      if (res.success) {
        setIsUsernameUnique(false);
      } else {
        setIsUsernameUnique(true);
      }
    } catch (error) {
      console.log(error);
      setIsUsernameUnique(false);
    }
  }; */

  const onSubmit = async (values: IValues) => {
    const user = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    try {
      const res = await register(user).unwrap();
      console.log(res);
      dispatch(setCredentials({ token: res.token, user }));
      setSubmitMessage(res.message);
      router.replace("/teslaaccount");
    } catch (error: any) {
      console.log(error);
      setSubmitMessage(error.data.message);
    }
  };

  const { values, errors, handleChange, handleSubmit, isSubmitting, touched } =
    useFormik({
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
          {isError && <p className="text-xs font-semibold">{submitMessage}</p>}
          {isSuccess && (
            <p className="text-xs font-semibold">{submitMessage}</p>
          )}
          <form onSubmit={handleSubmit} className="pt-6">
            <Input
              title="Name"
              type="text"
              id="name"
              className="input"
              value={values.name}
              onChange={handleChange}
            />
            {errors?.name && touched?.name && (
              <p className="text-xs text-[#e13535] font-semibold">
                {errors?.name}
              </p>
            )}
            <Input
              title="Email"
              type="email"
              id="email"
              className="input"
              value={values.email}
              onChange={handleChange}
            />
            {errors?.email && touched?.email && (
              <p className="text-xs text-[#e13535] font-semibold">
                {errors?.email}
              </p>
            )}
            <Input
              title="Password"
              type="password"
              id="password"
              className="input"
              value={values.password}
              onChange={handleChange}
            />
            {errors?.password && touched?.password && (
              <p className="text-xs text-[#e13535] font-semibold">
                {errors?.password}
              </p>
            )}
            <p className="py-4 text-xs font-semibold text-gray">
              By continuing, I understand and agree to Teslas Privacy Notice and
              Terms Of Use for creating a Tesla Account
            </p>
            <button
              className="w-full text-center bg-blue rounded-1 h-9 text-white font-semibold text-sm hover:bg-dark-blue transition-all"
              type="submit"
            >
              {isSubmitting ? <Spinner /> : "Register"}
            </button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const { reftoken } = cookie.parse(req.headers.cookie || "");

  const data = await fetch("http://localhost:5000/auth/refresh", {
    method: "GET",
    headers: {
      Cookie: `reftoken=${reftoken}`,
    },
  }).then((res) => res.json());

  if (data.success) {
    console.log(data);
    return {
      redirect: {
        destination: "/teslaaccount",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
