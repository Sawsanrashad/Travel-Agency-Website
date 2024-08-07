import React from 'react'
import './PaymentForm.scss';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { Error } from '../../../../../Components/Error/Error';
import { PaymentSchema } from './PaymentSchema';
export const PaymentForm = () => {
    return (
        <div id='paymentForm'>
            <Formik
                initialValues={{
                    cardNumber: "",
                    expDate: "",
                    cvv: "",
                }}
                validationSchema={PaymentSchema}
            >
                <Form className='w-full flex flex-col gap-3 py-3'>
                    <div className='flex flex-col'>
                        <label htmlFor="">
                            Card Number
                        </label>
                        <Field name='cardNumber' type='number' placeHolder='  1234  5678  9101  1112' className='p-4 col-12 border rounded-sm' />
                        <Error><ErrorMessage name='cardNumber' /></Error>
                    </div>
                    <div className='md:grid md:grid-cols-2 flex-wrap justify-between gap-3'>
                        <div className='flex flex-col'>
                            <label htmlFor="">
                                Expiration Date
                            </label>
                            <Field name='expDate' type='date' className='p-4 w-full border rounded-sm' />
                            <Error><ErrorMessage name='expDate' /></Error>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">
                                CVV
                            </label>
                            <Field name='cvv' type='number' placeHolder='123' className='p-4 w-full border rounded-sm' />
                            <Error><ErrorMessage name='cvv' /></Error>
                        </div>
                    </div>
                    <button className='w-full rounded-sm p-2' type='submit'>Pay</button>
                </Form>
            </Formik></div>
    )
}
