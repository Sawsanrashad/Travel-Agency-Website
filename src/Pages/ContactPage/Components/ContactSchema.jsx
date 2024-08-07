import * as Yup from "yup";
export const contactSchema = Yup.object().shape({
    name: Yup.string().typeError('name').required("Name is required"),
    email: Yup.string().typeError('email').required("Email is required"),
    subject: Yup.string().typeError('subject').required("Subject is required"),
    message: Yup.string().typeError('message').required("Message is required"),
});