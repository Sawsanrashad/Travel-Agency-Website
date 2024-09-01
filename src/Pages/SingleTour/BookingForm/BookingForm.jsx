import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { bookSchema } from '../BookSchema'
import { Error } from '../../../Components/Error/Error'
import { useNavigate } from 'react-router-dom'
import { FormattedMessage, useIntl } from 'react-intl'
import { useRecoilState } from 'recoil'
import { $bookedTourInfo, $loggedIn } from '../../../Store'

export const BookingForm = ({ id, tour }) => {
    // let authData = JSON.parse(localStorage.getItem('AuthUser'));
    const [authUser, setAuthUser] = useRecoilState($loggedIn);
    const [loggedState, setLoggedState] = useRecoilState($loggedIn);
    const [bookedTourInfo, setBookedTourInfo] = useRecoilState($bookedTourInfo);
    let intl = useIntl()
    const navigate = useNavigate()

    const initialValues = {
        name: authUser ? authUser.name : "",
        email: authUser ? authUser.email : "",
        date: "",
    }


    return (
        <div className='formPart flex flex-col  rounded-lg overflow-hidden'>
            <div className='titleDiv flex justify-center items-center  py-4 w-full '>
                <h5 className='dark:!text-[#0c112b] '>{<FormattedMessage id='book' />} {tour.title} ${tour.price} </h5>
            </div>
            <div className='flex justify-center items-center bg-slate-200 w-full dark:!bg-slate-900'>
                <Formik
                    validationSchema={bookSchema}
                    initialValues={initialValues}
                    onSubmit={(values) => {
                        console.log(authUser)
                        console.log("object")
                        if (!authUser) {
                            navigate(`/login?redirect=${id}`);
                        } else {
                            setBookedTourInfo({
                                tourImage: tour.imageUrl,
                                tourTitle: tour.title,
                                tourPrice: tour.price,
                                clientName: values.name,
                                clientEmail: values.email,
                                bookedDate: values.date
                            });
                            navigate(`/checkout?tourid=${id}`);
                        }
                    }}
                >
                    <Form className='w-full flex justify-between items-center flex-wrap p-3 gap-7'>
                        <div className='w-full'>
                            <Field name="name" type="text" placeHolder={intl.formatMessage({ id: "name" })} className=" w-full p-3 border-0 rounded-sm dark:!bg-slate-800" />
                            <Error><ErrorMessage name='name' /></Error>
                        </div>
                        <div className='w-full'>
                            <Field name="email" type="email" placeHolder={intl.formatMessage({ id: "email" })} className=" w-full p-3 border-0 rounded-sm dark:!bg-slate-800" />
                            <Error><ErrorMessage name='email' /></Error>
                        </div>

                        <div className='w-full'>
                            <Field name="date" type="date" placeHolder=" yyy-mm-dd" className=" w-full p-3 border-0 rounded-sm dark:!bg-slate-800" />
                            <Error><ErrorMessage name='date' /></Error>
                        </div>
                        <button type='submit' className='py-3 px-4 w-full dark:hover:!bg-[#0c112b]  dark:!text-[#0c112b]  dark:hover:!text-white'>{<FormattedMessage id='bookNow' />}</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
