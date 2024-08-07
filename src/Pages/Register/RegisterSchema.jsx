import * as Yup from "yup";
export const RegisterSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().typeError('password').required("Password is required"),
    confirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required("Confirm Password should match the password"),
    phone: Yup.number().typeError('Please Type Phone Correctly').required('Phone is required'),

});