import * as Yup from "yup";

export const EditFormValidationSchema = Yup.object().shape({
    en: Yup.object().shape({
        image: Yup.mixed().required("English Image is required"),
        title: Yup.string().required("English Title is required"),
        description: Yup.string().required("English Description is required"),
        duration: Yup.string().required("English Duration is required"),
        price: Yup.number().required("English Price is required"),
        category: Yup.string().required("English Category is required"),
        location: Yup.string().required("English Location is required"),
        historicalInfo: Yup.string().required("English Info is required"),
        itinerary: Yup.string().required("English Itinerary is required"),
        inclusions: Yup.string().required("English inclusions is required"),
        exclusions: Yup.string().required("English exclucions is required"),
        meetingPoint: Yup.string().required("English meeting point is required"),
        groupSize: Yup.string().required("English group size is required"),
        difficultyLevel: Yup.string().required("English dufficulity level is required"),
        languages: Yup.string().required("English kanguages is required"),
        specialRequirements: Yup.string().required("English special requirments is required"),
        cancellationPolicy: Yup.string().required("English cancellation Policy is required"),
    }),
    ar: Yup.object().shape({
        image: Yup.mixed().required("Arabic Image is required"),
        title: Yup.string().required("Arabic Title is required"),
        description: Yup.string().required("Arabic Description is required"),
        duration: Yup.string().required("Arabic Duration is required"),
        price: Yup.number().required("Arabic Price is required"),
        category: Yup.string().required("Arabic Category is required"),
        location: Yup.string().required("Arabic Location is required"),
        historicalInfo: Yup.string().required("Arabic Info is required"),
        itinerary: Yup.string().required("Arabic Itinerary is required"),
        inclusions: Yup.string().required("Arabic inclusions is required"),
        exclusions: Yup.string().required("Arabic exclucions is required"),
        meetingPoint: Yup.string().required("Arabic meeting point is required"),
        groupSize: Yup.string().required("Arabic group size is required"),
        difficultyLevel: Yup.string().required("Arabic dufficulity level is required"),
        languages: Yup.string().required("Arabic kanguages is required"),
        specialRequirements: Yup.string().required("Arabic special requirments is required"),
        cancellationPolicy: Yup.string().required("Arabic cancellation Policy is required"),
    }),
});
