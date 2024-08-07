import * as Yup from "yup";
export const ReviewSchema = Yup.object().shape({
    comment: Yup.string().required("Comment is required"),
});