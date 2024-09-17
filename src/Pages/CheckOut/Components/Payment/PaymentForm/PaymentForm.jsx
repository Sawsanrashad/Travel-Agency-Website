import React, { useRef } from 'react'
import './PaymentForm.scss';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { Error } from '../../../../../Components/Error/Error';
import { PaymentSchema } from './PaymentSchema';
import { FormattedMessage } from 'react-intl';
import { $bookedTourInfo } from '../../../../../Store';
import { useRecoilState } from 'recoil';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { date } from 'yup';
export const PaymentForm = () => {
    const navigate = useNavigate();
    let bookingForm = useRef();
    const [bookedTourInfo, setBookedTourInfo] = useRecoilState($bookedTourInfo);
    let handleSubmit = (values) => {
        const currentDate = new Date().toLocaleDateString();

        axios.post('http://localhost:3000/bookedTours', { ...bookedTourInfo, paymentDate: currentDate })
            .then((response) => {
                bookingForm.current.resetForm();
                navigate('/');
                toast.success('Successfull Transaction')

            })
            .catch((error) => {
                console.log(error);
                toast.error('Error while submitting');
            });
    }

    return (
        <div id='paymentForm'>
            <Formik
                initialValues={{
                    cardNumber: "",
                    expDate: "",
                    cvv: "",
                }}
                validationSchema={PaymentSchema}
                innerRef={bookingForm}
                onSubmit={(values) => handleSubmit(values)}
            >
                <Form className='w-full flex flex-col gap-3 py-3'>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='dark:!text-white'>
                            {<FormattedMessage id='cardNumber' />}
                        </label>
                        <Field name='cardNumber' type='number' placeholder='  1234  5678  9101  1112' className='p-4 col-12 border rounded-sm dark:bg-sky-950 dark:border-0 dark:placeholder-white dark:text-white' />
                        <Error><ErrorMessage name='cardNumber' /></Error>
                    </div>
                    <div className='md:grid md:grid-cols-2 flex-wrap justify-between gap-3'>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='dark:!text-white'>
                                {<FormattedMessage id='expirationDate' />}
                            </label>
                            <Field name='expDate' type='date' className='p-4 w-full border rounded-sm dark:bg-sky-950 dark:border-0 dark:placeholder-white dark:text-white' />
                            <Error><ErrorMessage name='expDate' /></Error>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='dark:!text-white'>
                                {<FormattedMessage id='cvv' />}
                            </label>
                            <Field name='cvv' type='number' placeholder='123' className='p-4 w-full border rounded-sm dark:bg-sky-950 dark:border-0 dark:placeholder-white dark:text-white' />
                            <Error><ErrorMessage name='cvv' /></Error>
                        </div>
                    </div>
                    <button className='w-full rounded-sm p-2 ' type='submit'>{<FormattedMessage id='payNow' />}</button>
                </Form>
            </Formik>
        </div>
    )
}
