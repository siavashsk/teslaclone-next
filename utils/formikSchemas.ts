import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const registerSchema = yup.object().shape({
  name: yup.string().min(3, "Name must be at least 3 characters long").required("Please enter your Name"),
  email: yup.string().email("Please enter a valid email").required("Please enter email"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters long")
    .matches(passwordRules, {
      message: "Password should contain 1 upper case letter, 1 lower case letter, 1 numeric digit.",
    })
    .required("Please enter password"),
});
export const loginSchema = yup.object().shape({
  email: yup.string().required("Please enter email"),
  password: yup.string().required("Please enter password"),
});

export const passwordSchema = yup.object().shape({
  oldPassword: yup.string().required("Please enter old password"),
  newPassword: yup
    .string()
    .min(5, "Password must be at least 5 characters long")
    .matches(passwordRules, {
      message: "Password should contain 1 upper case letter, 1 lower case letter, 1 numeric digit.",
    })
    .required("Please enter new password"),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your new password"),
});