import * as Yup from "yup";
export const LoginSchema = Yup.object().shape({
  email: Yup.string().typeError('email').required("Email is required"),
  password: Yup.string().required("Password is required"),
});