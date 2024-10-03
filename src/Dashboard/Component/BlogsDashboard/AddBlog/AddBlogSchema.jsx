import * as Yup from "yup";

export const AddBlogSchema = Yup.object().shape({
    en: Yup.object().shape({
        image: Yup.mixed().required("Image is required"),
        title: Yup.string().required(" Title is required"),
        description: Yup.mixed().required(" Description is required"),
        date: Yup.date().required(" Date is required"),
    }),
    ar: Yup.object().shape({
        image: Yup.mixed().required("اضف الصورة"),
        title: Yup.string().required("العنوان"),
        description: Yup.mixed().required("الوصف"),
        date: Yup.date().required("التاريخ"),

    }),
});

