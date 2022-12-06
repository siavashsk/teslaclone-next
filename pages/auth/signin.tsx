import { useState } from "react";
import { useFormik } from "formik";
import Link from "next/link";
import { BiInfoCircle } from "react-icons/bi";
import AuthLayout from "../../components/Layouts/AuthLayout";
import { loginSchema } from "../../utils/formikSchemas";
import Spinner from "../../components/UI/Spinner";
import Input from "../../components/UI/Input";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../redux/auth/authApi";
import { setCredentials } from "../../redux/auth/authSlice";

interface IValues {
  email: string;
  password: string;
}

const Signin = () => {
  const [submitMessage, setSubmitMessage] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const [login, { isError, isSuccess }] = useLoginMutation();

  const onSubmit = async (values: IValues) => {
    const user = { email: values.email, password: values.password };
    try {
      const res = await login(user).unwrap();
      console.log(res);
      dispatch(setCredentials({ token: res.data.token, user: res.data.user }));
      setSubmitMessage(res.message);
      router.replace("/");
    } catch (error: any) {
      console.log(error);
      setSubmitMessage(error.data.message);
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
          {isError && <p className="text-xs font-semibold">{submitMessage}</p>}
          <form className="pt-6" onSubmit={handleSubmit}>
            <Input
              title="Email"
              icon={<BiInfoCircle />}
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

            <div className="pt-6">
              <button
                className="w-full text-center bg-blue rounded-1 h-9 text-white font-semibold text-sm hover:bg-dark-blue transition-all"
                type="submit"
              >
                {isSubmitting ? <Spinner /> : "Login"}
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
