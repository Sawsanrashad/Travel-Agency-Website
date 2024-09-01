import * as Yup from "yup";

export const AddFormValidationSchema = Yup.object().shape({
    en: Yup.object().shape({
        title: Yup.string().required('Title is required'),
        image: Yup.mixed().required("Image is required"),
        description: Yup.string().required('Description is required'),
        duration: Yup.string().required('Duration is required'),
        price: Yup.number().typeError('Enter Price').required('Price is required'),
    }),
    ar: Yup.object().shape({
        title: Yup.string().required('العنوان مطلوب'),
        image: Yup.mixed().required("الصورة مطلوبة"),
        description: Yup.string().required('الوصف مطلوب'),
        duration: Yup.string().required('المدة مطلوبة'),
        price: Yup.number().typeError('ادخل السعر').required('السعر مطلوب'),
    })
});



// import * as Yup from "yup";
// export const AddFormValidationSchema = Yup.object().shape({
//     title: Yup.string().required('Name is required'),
//     image: Yup.mixed().required("image is required"),
//     description: Yup.string().required('description is required'),
//     duration: Yup.string().required('duration is required'),
//     price: Yup.number().typeError('Enter Price').required('price is required'),

// });