import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import bg from '../../assets/images/forgetPassword.png';
import { Error } from '../../Components/Error/Error';
import { FormattedMessage, useIntl } from 'react-intl';
import emailjs from 'emailjs-com';
import './ForgetPassword.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const ForgetPassword = () => {
    const intl = useIntl();
    const [step, setStep] = useState(1);
    const [resetCode, setResetCode] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();

    const generateResetCode = () => {
        return Math.floor(100000 + Math.random() * 900000).toString();
    };


    const handleSendCode = (values) => {
        const code = generateResetCode();
        setResetCode(code);
        setUserEmail(values.email);

        const templateParams = {
            to_email: values.email,
            reset_code: code,
        };

        emailjs.send('service_6ry94m7', 'template_94vm1i7', templateParams, '8U697MgrVDoEFMalX')
            .then((response) => {
                toast.success('Reset code sent successfully!', response);
                setStep(2);
            })
            .catch((error) => {
                console.error('Failed to send reset code', error);
            });
    };

    const handleVerifyCode = (values) => {
        if (values.resetCode === resetCode) {
            setStep(3);
        } else {
            toast.error('Invalid reset code. Please try again.');
        }
    };


    const handleResetPassword = (values) => {
        if (values.password !== values.confirmPassword) {
            toast.error('Passwords do not match!');
            return;
        }

        console.log('User email:', userEmail);

        axios.get(`http://localhost:3000/users?email=${userEmail}`)
            .then((response) => {
                console.log('Response data:', response.data);
                const user = response.data[0];
                if (user) {
                    axios.patch(`http://localhost:3000/users/${user.id}`, { password: values.password })
                        .then(() => {
                            toast.success('Password updated successfully!');
                            navigate('/login');
                        })
                        .catch((error) => {
                            console.error('Failed to update password', error);
                            toast.error('Failed to update password. Please try again later.');
                        });
                } else {
                    toast.error('User not found!');
                }
            })
            .catch((error) => {
                console.error('Error finding user', error);
                toast.error('Error finding user.');
            });
    };


    return (
        <div id="forgetPassword" className="bg-white dark:!bg-[#0e1b31]">
            <div className="custom_container md:grid md:grid-cols-2 h-full justify-between items-center flex-wrap gap-3 ">
                <div className="flex flex-col justify-center items-center h-full gap-2 ">
                    <img src={bg} alt="" className="w-full object-cover h-full" />
                </div>
                <div className="w-full forgetPasswordForm flex justify-center items-center flex-col h-full py-2 px-3 gap-3 border">
                    <h1 className="text-5xl">{<FormattedMessage id="forgetPassword" />}</h1>

                    {step === 1 && (
                        <Formik
                            initialValues={{ email: '' }}
                            onSubmit={(values) => handleSendCode(values)}
                        >
                            <Form className="w-full p-3 flex flex-col justify-center items-center gap-3">
                                <div className="flex flex-col gap-2 w-full">
                                    <Field name="email" placeholder={intl.formatMessage({ id: 'email' })} type="email" className="p-4 bg-slate-200 border-0 rounded-sm dark:bg-slate-700 dark:text-white dark:placeholder-white" />
                                    <Error><ErrorMessage name="email" /></Error>
                                </div>
                                <button type="submit" className="button p-3 w-[45%] md:w-[25%] bg-cyan-700 hover:bg-sky-800 text-white rounded-md pointer-events-auto font-medium">
                                    <FormattedMessage id="sendResetCode" />
                                </button>
                            </Form>
                        </Formik>
                    )}

                    {step === 2 && (
                        <Formik
                            initialValues={{ resetCode: '' }}
                            onSubmit={(values) => handleVerifyCode(values)}
                        >
                            <Form className="w-full p-3 flex flex-col justify-center items-center gap-3">
                                <div className="flex flex-col gap-2 w-full">
                                    <Field name="resetCode" placeholder={intl.formatMessage({ id: 'enterResetCode' })} type="text" className="p-4 bg-slate-200 border-0 rounded-sm dark:bg-slate-700 dark:text-white dark:placeholder-white" />
                                    <Error><ErrorMessage name="resetCode" /></Error>
                                </div>
                                <button type="submit" className="button p-3 w-[45%] md:w-[25%] bg-cyan-700 hover:bg-sky-800 text-white rounded-md pointer-events-auto font-medium">
                                    <FormattedMessage id="verifyResetCode" />
                                </button>
                            </Form>
                        </Formik>
                    )}

                    {step === 3 && (
                        <Formik
                            initialValues={{ password: '', confirmPassword: '' }}
                            onSubmit={(values) => handleResetPassword(values)}
                        >
                            <Form className="w-full p-3 flex flex-col justify-center items-center gap-3">
                                <div className="flex flex-col gap-2 w-full">
                                    <Field name="password" placeholder={intl.formatMessage({ id: 'newPassword' })} type="password" className="p-4 bg-slate-200 border-0 rounded-sm dark:bg-slate-700 dark:text-white dark:placeholder-white" />
                                    <Error><ErrorMessage name="password" /></Error>
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <Field name="confirmPassword" placeholder={intl.formatMessage({ id: 'confirmNewPassword' })} type="password" className="p-4 bg-slate-200 border-0 rounded-sm dark:bg-slate-700 dark:text-white dark:placeholder-white" />
                                    <Error><ErrorMessage name="confirmPassword" /></Error>
                                </div>
                                <button type="submit" className="button p-3 w-[45%] md:w-[25%] bg-cyan-700 hover:bg-sky-800 text-white rounded-md pointer-events-auto font-medium">
                                    <FormattedMessage id="resetPassword" />
                                </button>
                            </Form>
                        </Formik>
                    )}
                </div>
            </div>
        </div>
    );
};