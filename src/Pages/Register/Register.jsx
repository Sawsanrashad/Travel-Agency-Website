import { Form, Formik, Field, ErrorMessage } from 'formik';
import './Register.scss';
import { Link, useNavigate } from 'react-router-dom';
import bg from '../../assets/images/register.png';
import { RegisterSchema } from './RegisterSchema';
import { Error } from '../../Components/Error/Error';
import axios from 'axios';
import { useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { LoggedOut } from '../../Components/LoggedOut/LoggedOut';
import { toast, ToastContainer } from 'react-toastify';

export default function Register() {
    let registerForm = useRef();
    const navigate = useNavigate()
    let intl = useIntl()
    let handleSubmit = (values) => {
        delete (values.confirm)
        axios.post('http://localhost:3000/users', values)
            .then((response) => {
                localStorage.setItem('AuthUser', JSON.stringify(response.data[0]))
                navigate('/login')
                registerForm.current.resetForm();
                toast.success('Account successfully registered!')
            })
            .catch((error) => {
                console.log(error)
            });
    }
    return (
        <LoggedOut>
            <div id='regsiter' className='dark:!bg-[#0e1b31]'>
                <div className='custom_container md:grid md:grid-cols-2 justify-between items-center flex-wrap py-8'>
                    <div className=' registerbg flex flex-col justify-center items-center h-full gap-2'>
                        <img src={bg} alt="" className='w-full object-cover h-full' />
                    </div>
                    <div className='w-full registerForm flex justify-center items-center flex-col border p-3'>
                        <h1 className='text-5xl mb-3'>{<FormattedMessage id='signUp' />}</h1>
                        <Formik
                            initialValues={{
                                name: "",
                                email: "",
                                password: "",
                                confirm: "",
                                role: "user",
                                img: "/src/assets/images/user2.png",
                                phone: "",
                            }}
                            innerRef={registerForm}
                            validationSchema={RegisterSchema}
                            onSubmit={(values) => handleSubmit(values)}
                        >
                            <Form className='w-full  flex flex-col justify-center items-center '>
                                <div className='flex flex-col gap-2 w-full'>
                                    <Field name="name" placeholder={intl.formatMessage({ id: "name" })} type="text" className="p-4 bg-slate-200 border-0 rounded-sm dark:bg-slate-700 dark:placeholder-white dark:text-white " />
                                    <Error> <ErrorMessage name="name" /></Error>
                                </div>
                                <div className='flex flex-col gap-2 w-full'>
                                    <Field name="email" placeholder={intl.formatMessage({ id: "email" })} type="email" className="p-4 bg-slate-200 border-0 rounded-sm dark:bg-slate-700 dark:placeholder-white dark:text-white " />
                                    <Error> <ErrorMessage name="email" /></Error>
                                </div>
                                <div className='flex flex-col gap-2 w-full'>
                                    <Field name="password" placeholder={intl.formatMessage({ id: "password" })} type="password" className="p-4 bg-slate-200 border-0 rounded-sm dark:bg-slate-700 dark:placeholder-white dark:text-white " />
                                    <Error> <ErrorMessage name="password" /></Error>
                                </div>
                                <div className='flex flex-col gap-2 w-full'>
                                    <Field name="confirm" placeholder={intl.formatMessage({ id: "reTypePassword" })} type="password" className="p-4  bg-slate-200 border-0 rounded-sm dark:bg-slate-700 dark:placeholder-white dark:text-white " />
                                    <Error><ErrorMessage name="confirm" /></Error>
                                </div>
                                <div className='flex flex-col gap-2 w-full'>
                                    <Field name="phone" placeholder={intl.formatMessage({ id: "phone" })} type="number" className="p-4  bg-slate-200 border-0 rounded-sm dark:bg-slate-700 dark:placeholder-white dark:text-white " />
                                    <Error><ErrorMessage name="phone" /></Error>
                                </div>
                                <button type='submit' className='button w-[45%] md:w-[25%] bg-cyan-700 hover:bg-sky-800 text-white rounded-md pointer-events-auto font-medium'> {<FormattedMessage id='signUp' />}</button>
                            </Form>
                        </Formik>
                        <p className='dark:text-white'>{<FormattedMessage id='alreadyHaveAccount' />} <Link to={'/login'} className='text-decoration-none hover:text-teal-600 font-medium'><FormattedMessage id='login' /></Link></p>
                    </div>

                </div>
            </div>
        </LoggedOut>
    )
}
