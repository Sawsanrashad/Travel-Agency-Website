import './ContactForm.scss';
import { FiPhoneCall } from "react-icons/fi";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { contactSchema } from './ContactSchema';
import { Error } from '../../../Components/Error/Error';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import axios from 'axios';

export default function ContactForm() {
    let contactForm = useRef();
    let intl = useIntl();

    let handleSubmit = (values) => {
        axios.post('http://localhost:3000/contactMessages', values)
        emailjs.sendForm(
            'service_6ry94m7',
            'template_obnmsck',
            contactForm.current,
            '8U697MgrVDoEFMalX'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((error) => {
                console.log('FAILED...', error);
            });
    }

    return (
        <div id='contactForm' className='dark:!bg-[#0e1b31]'>
            <div className='custom_container md:grid md:grid-cols-2 justify-between items-center flex-wrap gap-8'>
                <div className='textPart flex flex-col gap-3'>
                    <h3 className='dark:!text-white'>{<FormattedMessage id='travelAgency' />}</h3>
                    <p className='dark:!text-white'>{<FormattedMessage id='travelAgencyDescription' />}</p>
                    <div className='flex justify-start items-center gap-3'>
                        <span><FiPhoneCall size={40} className='icon' /></span>
                        <div className='flex flex-col'>
                            <p className='dark:!text-white'>{<FormattedMessage id='phone' />}</p>
                            <h4>855 333 4444</h4>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-3'>
                        <span><FaEnvelopeOpenText size={40} className='icon' /></span>
                        <div className='flex flex-col'>
                            <p className='dark:!text-white'>{<FormattedMessage id='emailAddress' />}</p>
                            <h4>info@bonvoyage.com</h4>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-3'>
                        <span><GrMapLocation size={40} className='icon' /></span>
                        <div className='flex flex-col'>
                            <p className='dark:!text-white'>{<FormattedMessage id='location' />}</p>
                            <p className='dark:!text-white'>{<FormattedMessage id='locationDetails' />}</p>
                        </div>
                    </div>
                </div>
                <div className='formPart flex flex-col rounded-3 overflow-hidden'>
                    <div className='titleDiv flex justify-center items-center md:w-[75%] py-4 rounded-t-lg'>
                        <h5 className='dark:!text-[black]'><FormattedMessage id='getInTouch' /></h5>
                    </div>
                    <div className='flex justify-center items-center md:w-[75%] bg-slate-200 rounded-b-lg dark:bg-slate-900'>
                        <Formik
                            initialValues={{
                                name: "",
                                email: "",
                                subject: "",
                                message: ""
                            }}
                            validationSchema={contactSchema}
                            onSubmit={(values, { resetForm }) => {
                                console.log("object")
                                handleSubmit(values);
                                resetForm();
                            }}
                        >
                            {({ }) => (
                                <Form ref={contactForm} className='w-full flex justify-between items-center flex-col p-3 gap-1'>
                                    <div className='md:grid md:grid-cols-2 gap-2 flex-col w-full'>
                                        <div className='w-full'>
                                            <Field name="name" type="text" placeholder={intl.formatMessage({ id: "name" })} className="w-full px-3 py-4 border-0 rounded-lg dark:!bg-slate-800" />
                                            <Error><ErrorMessage name='name' /></Error>
                                        </div>
                                        <div className='w-full'>
                                            <Field name="email" type="email" placeholder={intl.formatMessage({ id: "email" })} className="w-full px-3 py-4 border-0 rounded-lg dark:!bg-slate-800" />
                                            <Error><ErrorMessage name='email' /></Error>
                                        </div>
                                    </div>
                                    <div className='w-full'>
                                        <Field name="subject" type="text" placeholder={intl.formatMessage({ id: "subject" })} className=" w-full px-3 py-4 border-0 rounded-lg dark:!bg-slate-800" />
                                        <Error><ErrorMessage name='subject' /></Error>
                                    </div>
                                    <div className='w-full'>
                                        <Field as="textarea" name="message" type="text" placeholder={intl.formatMessage({ id: "message" })} className="w-full px-3 border-0 rounded-lg dark:!bg-slate-800" />
                                        <Error><ErrorMessage name='message' /></Error>
                                    </div>
                                    <button type='submit' className='py-3 w-full rounded-lg dark:!text-[#0c112b]'>{<FormattedMessage id='sendMessageButton' />}</button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}


// import './ContactForm.scss';
// import { FiPhoneCall } from "react-icons/fi";
// import { FaEnvelopeOpenText } from "react-icons/fa6";
// import { GrMapLocation } from "react-icons/gr";
// import { Field, Form, Formik, ErrorMessage } from 'formik';
// import { contactSchema } from './ContactSchema';
// import { Error } from '../../../Components/Error/Error';
// import axios from 'axios';
// import { useRef } from 'react';
// import { FormattedMessage, useIntl } from 'react-intl';

// export default function ContactForm() {
//     let contactForm = useRef();
//     let intl = useIntl()
//     let handleSubmit = (values) => {
//         axios.post('http://localhost:3000/contactMessages', values)
//             .then((response) => {
//                 contactForm.current.resetForm();
//             })
//             .catch((error) => {
//                 console.log(error)
//             });
//     }
//     return (
//         <div id='contactForm' className='dark:!bg-[#0e1b31]'>
//             <div className='custom_container md:grid md:grid-cols-2  justify-between items-center flex-wrap gap-8'>
//                 <div className='textPart flex flex-col gap-3'>
//                     <h3 className='dark:!text-white'>{<FormattedMessage id='travelAgency' />}</h3>
//                     <p className='dark:!text-white'>{<FormattedMessage id='travelAgencyDescription' />}</p>
//                     <div className='flex justify-start items-center gap-3'>
//                         <span><FiPhoneCall size={40} className='icon' /></span>
//                         <div className='flex flex-col'>
//                             <p className='dark:!text-white'>{<FormattedMessage id='phone' />}</p>
//                             <h4>855 333 4444</h4>
//                         </div>
//                     </div>
//                     <div className='flex justify-start items-center gap-3'>
//                         <span><FaEnvelopeOpenText size={40} className='icon' /></span>
//                         <div className='flex flex-col'>
//                             <p className='dark:!text-white'>{<FormattedMessage id='emailAddress' />}</p>
//                             <h4>info@bonvoyage.com</h4>
//                         </div>
//                     </div>
//                     <div className='flex justify-start items-center gap-3'>
//                         <span><GrMapLocation size={40} className='icon' /></span>
//                         <div className='flex flex-col'>
//                             <p className='dark:!text-white'>{<FormattedMessage id='location' />}</p>
//                             <p className='dark:!text-white'>{<FormattedMessage id='locationDetails' />}</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='formPart flex flex-col  rounded-3 overflow-hidden'>
//                     <div className='titleDiv flex justify-center items-center md:w-[75%] py-4 rounded-t-lg '>
//                         <h5 className='dark:!text-[black]'><FormattedMessage id='getInTouch' /></h5>
//                     </div>
//                     <div className='flex justify-center items-center md:w-[75%] bg-slate-200 rounded-b-lg dark:bg-slate-900 '>
//                         <Formik
//                             initialValues={{
//                                 name: "",
//                                 email: "",
//                                 subject: "",
//                                 message: ""
//                             }}
//                             innerRef={contactForm}
//                             validationSchema={contactSchema}
//                             onSubmit={(values) => handleSubmit(values)}
//                         >
//                             <Form className='w-full flex justify-between items-center flex-col p-3 gap-1 '>
//                                 <div className='md:grid md:grid-cols-2 gap-2 flex-col w-full'>
//                                     <div className='w-full'>
//                                         <Field name="name" type="text" placeHolder={intl.formatMessage({ id: "name" })} className="w-full px-3 py-4 border-0 rounded-lg dark:!bg-slate-800" />
//                                         <Error><ErrorMessage name='name' /></Error>
//                                     </div>
//                                     <div className='w-full'>
//                                         <Field name="email" type="email" placeHolder={intl.formatMessage({ id: "email" })} className="w-full px-3 py-4 border-0 rounded-lg dark:!bg-slate-800" />
//                                         <Error><ErrorMessage name='email' /></Error>
//                                     </div>
//                                 </div>
//                                 <div className='w-full'>
//                                     <Field name="subject" type="text" placeHolder={intl.formatMessage({ id: "subject" })} className=" w-full px-3 py-4 border-0 rounded-lg dark:!bg-slate-800" />
//                                     <Error><ErrorMessage name='subject' /></Error>
//                                 </div>
//                                 <div className='w-full'>
//                                     <Field as="textarea" name="message" type="text" placeHolder={intl.formatMessage({ id: "message" })} className="w-full px-3 border-0 rounded-lg dark:!bg-slate-800 " />
//                                     <Error><ErrorMessage name='message' /></Error>
//                                 </div>
//                                 <button type='submit' className='py-3 w-full rounded-lg dark:!text-[#0c112b] '>{<FormattedMessage id='sendMessageButton' />}</button>
//                             </Form>
//                         </Formik>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
