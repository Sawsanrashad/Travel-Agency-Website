import * as Yup from "yup";
export const PaymentSchema = Yup.object().shape({
    cardNumber: Yup.number().typeError('Please Type Card Number Correctly').required('Card Number is required'),
    expDate: Yup.date().required('Expiration Date is required'),
    cvv: Yup.number().typeError('Please Type CVV Correctly').required('CVVF is required'),

});