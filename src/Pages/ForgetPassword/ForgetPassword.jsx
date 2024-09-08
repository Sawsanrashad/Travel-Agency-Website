import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import bg from '../../assets/images/forgetPassword.png';
import { Error } from '../../Components/Error/Error';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import './ForgetPassword.scss';
import { ForgetPasswordSchema } from './ForgetPasswordSchema';
export const ForgetPassword = () => {
    let intl = useIntl();
    let handleResetPassword = (values) => {
        delete (values.confirmPassword)
    };
    return (
        <div>
            <div id='forgetPassword' className=' bg-white dark:!bg-[#0e1b31]'>
                <div className='custom_container md:grid md:grid-cols-2 h-full justify-between items-center flex-wrap gap-3 '>
                    <div className='flex flex-col justify-center items-center h-full gap-2 '>
                        <img src={bg} alt="" className='w-full object-cover h-full' />
                    </div>
                    <div className='w-full forgetPasswordForm flex justify-center items-center flex-col h-full py-2 px-3 gap-3 border'>
                        <h1 className='text-5xl'>{<FormattedMessage id='forgetPassword' />}</h1>
                        <Formik
                            initialValues={{
                                email: "",
                                password: "",
                                confirm: "",
                            }}
                            validationSchema={ForgetPasswordSchema}
                            onSubmit={(values) => handleResetPassword(values)}
                        >
                            <Form className=' w-full p-3 flex flex-col justify-center items-center gap-3'>
                                <div className='flex flex-col gap-2 w-full'>
                                    <Field name="email" placeHolder={intl.formatMessage({ id: "email" })} type="email" className="p-4  bg-slate-200 border-0 rounded-sm dark:bg-slate-700 dark:text-white dark:placeholder-white" />
                                    <Error><ErrorMessage name="email" /></Error>
                                </div>
                                <div className='flex flex-col gap-2 w-full'>
                                    <Field name="password" placeHolder={intl.formatMessage({ id: "password" })} type="password" className="p-4 bg-slate-200 border-0 rounded-sm dark:bg-slate-700 dark:text-white dark:placeholder-white" />
                                    <Error><ErrorMessage name="password" /></Error>
                                </div>
                                <div className='flex flex-col gap-2 w-full'>
                                    <Field name="confirm" placeHolder={intl.formatMessage({ id: "reTypePassword" })} type="password" className="p-4  bg-slate-200 border-0 rounded-sm dark:bg-slate-700 dark:text-white dark:placeholder-white " />
                                    <Error><ErrorMessage name="confirm" /></Error>
                                </div>
                                <button type='submit' className='button p-3 w-[45%] md:w-[25%] bg-cyan-700 hover:bg-sky-800 text-white rounded-md pointer-events-auto font-medium'><FormattedMessage id='resetPassword' /></button>
                            </Form>
                        </Formik>
                        <p className='m-0 dark:text-white '>{<FormattedMessage id='createNewAccount' />} <Link to={'/register'} className='text-decoration-none hover:text-teal-600 font-medium'> <FormattedMessage id='signUp' /></Link></p>
                    </div>
                </div>

            </div>
        </div>
    )
}
