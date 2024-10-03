import * as Yup from "yup";

export const PaymentSchema = Yup.object().shape({
    cardNumber: Yup.string()
        .matches(/^\d+$/, "Please Type Card Number Correctly")
        .min(16, 'Card Number must be exactly 16 digits')
        .max(16, 'Card Number must be exactly 16 digits')
        .required('Card Number is required'),
    expDate: Yup.date()
        .required('Expiration Date is required'),
    cvv: Yup.string()
        .matches(/^\d+$/, "Please Type CVV Correctly")
        .min(3, 'CVV must be exactly 3 digits')
        .max(4, 'CVV must be 3 or 4 digits')
        .required('CVV is required'),
});
