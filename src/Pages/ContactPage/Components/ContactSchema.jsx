import * as Yup from "yup";
export const contactSchema = Yup.object().shape({
    name: Yup.string().typeError('name').required("Name is required"),
    email: Yup.string().email("enter a valid email").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
});