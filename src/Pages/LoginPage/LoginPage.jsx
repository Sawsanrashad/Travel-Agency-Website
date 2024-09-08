import { Field, Form, Formik, ErrorMessage } from 'formik';
import bg from '../../assets/images/login.png';
import './LoginPage.scss';
import { LoginSchema } from './LoginSchema';
import { Link, useNavigate } from 'react-router-dom';
import { Error } from '../../Components/Error/Error';
import { useRef } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { FormattedMessage, useIntl } from 'react-intl';
import { LoggedOut } from '../../Components/LoggedOut/LoggedOut';
import { $loggedIn } from '../../Store';
import { useRecoilState } from 'recoil';
export default function LoginPage() {
    let intl = useIntl()
    const [loggedState, setLoggedState] = useRecoilState($loggedIn);
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    let loginForm = useRef();
    const navigate = useNavigate()
    let handleSubmit = (values) => {
        console.log("Submitting form with values:", values);
        axios.get(`http://localhost:3000/users?email=${values.email}&password=${values.password}`)
            .then((response) => {
                console.log("Response received:", response);
                if (response.data.length) {
                    localStorage.setItem('AuthUser', JSON.stringify(response.data[0]));
                    setLoggedState(response.data[0]);
                    loginForm.current.resetForm();
                    redirect ? navigate(`/tour/${redirect}`) : navigate('/');
                    console.log("Showing toast notification");
                    toast.success(`Hello ${response.data[0].name} !`);
                    console.log(response.data[0].name);
                } else {
                    toast.error('Wrong email or password');
                }
            })
            .catch((error) => {
                console.log("Error during login:", error);
            });
    }

    return (
        <>

            <LoggedOut>
                <div id='login' className=' bg-white dark:!bg-[#0e1b31] h-screen'>
                    <div className='custom_container md:grid md:grid-cols-2 h-full justify-between items-center flex-wrap gap-3 '>
                        <div className='loginbg flex flex-col justify-center items-center h-full gap-2 '>
                            <img src={bg} alt="" className='w-full object-cover h-full' />
                        </div>
                        <div className='w-full loginForm flex justify-center items-center flex-col h-full py-5 px-3 gap-3 border'>
                            <h1 className='text-5xl'>{<FormattedMessage id='login' />}</h1>
                            <Formik
                                initialValues={{ email: "", password: "", }}
                                validationSchema={LoginSchema}
                                innerRef={loginForm}
                                onSubmit={(values) => handleSubmit(values)}
                            >
                                <Form className=' w-full p-3 flex flex-col justify-center items-center gap-3'>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <Field name="email" placeHolder={intl.formatMessage({ id: "email" })} type="email" className="p-4  bg-slate-200 border-0 rounded-sm dark:bg-slate-700 dark:placeholder-white dark:text-white" />
                                        <Error><ErrorMessage name="email" /></Error>
                                    </div>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <Field name="password" placeHolder={intl.formatMessage({ id: "password" })} type="password" className="p-4 bg-slate-200 border-0 rounded-sm dark:bg-slate-700 dark:placeholder-white dark:text-white" />
                                        <Error><ErrorMessage name="password" /></Error>
                                    </div>
                                    <button type='submit' className='button p-3 w-[45%] md:w-[25%] bg-cyan-700 hover:bg-sky-800 text-white rounded-md pointer-events-auto font-medium'><FormattedMessage id='login' /></button>
                                </Form>
                            </Formik>
                            <p className='m-0 dark:text-white '>{<FormattedMessage id='forgetPassword' />} <Link to={'/forgetPassword'} className='text-decoration-none hover:text-teal-600 font-medium'> <FormattedMessage id='resetPassword' /></Link></p>
                            <p className='m-0 dark:text-white '>{<FormattedMessage id='dontHaveAccount' />} <Link to={'/register'} className='text-decoration-none hover:text-teal-600 font-medium'> <FormattedMessage id='signUp' /></Link></p>
                        </div>
                    </div>

                </div>
            </LoggedOut>
        </>

    )
}
