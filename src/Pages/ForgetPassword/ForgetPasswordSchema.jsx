import * as Yup from "yup";
export const ForgetPasswordSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    resetCode: Yup.string().typeError('code').required("Reset Code is required"),
    password: Yup.string().typeError('password').required("Password is required"),
    confirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required("Confirm Password should match the password"),

});