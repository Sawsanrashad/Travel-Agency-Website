import * as Yup from "yup";

export const AddBlogSchema = Yup.object().shape({
    en: Yup.object().shape({
        image: Yup.mixed().required("English Image is required"),
        title: Yup.string().required("English Title is required"),
        description: Yup.mixed().required("English Description is required"),
        date: Yup.date().required("English Date is required"),
    }),
    ar: Yup.object().shape({
        image: Yup.mixed().required("Arabic Image is required"),
        title: Yup.string().required("Arabic Title is required"),
        description: Yup.mixed().required("Arabic Description is required"),
        date: Yup.date().required("Arabic Date is required"),

    }),
});

