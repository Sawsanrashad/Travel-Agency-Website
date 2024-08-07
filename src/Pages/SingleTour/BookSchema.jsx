import * as Yup from "yup";
export const bookSchema = Yup.object().shape({
    name: Yup.string().typeError('name').required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    date: Yup.string().typeError('date').required("Date is required"),
    people: Yup.string().typeError('peolpe').required("People is required"),
    enquiry: Yup.string().typeError('enquiry').required("Enquiry is required"),
});