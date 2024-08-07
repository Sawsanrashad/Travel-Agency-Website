import * as Yup from "yup";
export const AddFormValidationSchema = Yup.object().shape({
    title: Yup.string().required('Name is required'),
    image: Yup.mixed().required("image is required"),
    description: Yup.string().required('description is required'),
    duration: Yup.string().required('duration is required'),
    price: Yup.number().typeError('Enter Price').required('price is required'),

});