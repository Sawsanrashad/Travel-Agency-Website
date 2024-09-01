import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { $addFormState } from '../../../../Store';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { AddFormValidationSchema } from './AddFormValidationSchema';
import { useIntl } from 'react-intl';
import './AddForm.scss';
import axios from 'axios';
import { Error } from '../../../../Components/Error/Error';
import { Modal } from '../../../../Components/Modal/Modal';

export const AddForm = () => {
    let intl = useIntl();
    let form = useRef();
    const [addForm, setAddForm] = useRecoilState($addFormState);
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    let handleAddNewTour = (values) => {
        const formData = {
            id: new Date().getTime().toString(),
            en: {
                title: values.en.title,
                description: values.en.description,
                price: values.en.price,
                duration: values.en.duration,
                imageUrl: values.en.image ? URL.createObjectURL(values.en.image) : '', // Create object URL if file exists
            },
            ar: {
                title: values.ar.title,
                description: values.ar.description,
                price: values.ar.price,
                duration: values.ar.duration,
                imageUrl: values.ar.image ? URL.createObjectURL(values.ar.image) : '', // Create object URL if file exists
            }
        };

        axios.post('http://localhost:3000/allTours', formData)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('newTour', JSON.stringify(response.data));
                form.current.resetForm();
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (
        <>
            <Modal show={addForm} setAddForm={setAddForm} size={'md'}>
                <div id='addForm' className='addForm my-8'>
                    <div>
                        <Formik
                            initialValues={{
                                en: {
                                    image: null,
                                    title: '',
                                    description: '',
                                    duration: '',
                                    price: ''
                                },
                                ar: {
                                    image: null,
                                    title: '',
                                    description: '',
                                    duration: '',
                                    price: ''
                                }
                            }}

                            validationSchema={AddFormValidationSchema}
                            innerRef={form}
                            onSubmit={(values) => handleAddNewTour(values)}
                        >

                            <Form className=' aForm flex flex-col'>
                                {step === 1 && (
                                    <>
                                        <p>English</p>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>Image Upload</label>
                                            <input
                                                name="en.image"
                                                type="file"
                                                onChange={(event) => {
                                                    setFieldValue("en.image", event.currentTarget.files[0]);
                                                }}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800"
                                            />
                                            <Error><ErrorMessage name="en.image" /></Error>
                                        </div>

                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>Tour Title</label>
                                            <Field name="en.title" type="text" placeholder={intl.formatMessage({ id: "title" })} className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
                                            <Error><ErrorMessage name="en.title" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>Description</label>
                                            <Field name="en.description" as="textarea" placeholder={intl.formatMessage({ id: "description" })} className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
                                            <Error><ErrorMessage name="en.description" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>Duration</label>
                                            <Field name="en.duration" type="text" placeholder={intl.formatMessage({ id: "duration" })} className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
                                            <Error><ErrorMessage name="en.duration" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>Price</label>
                                            <Field name="en.price" type="number" placeholder={intl.formatMessage({ id: "price" })} className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
                                            <Error><ErrorMessage name="en.price" /></Error>
                                        </div>
                                        <button type="button" onClick={() => setStep(2)} className='buttons py-3 w-[25%] self-end rounded-lg dark:!text-[#0c112b]'>Next</button>
                                    </>
                                )}


                                {step === 2 && (
                                    <>
                                        <p>Arabic</p>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>Image Upload</label>
                                            <input
                                                name="ar.image"
                                                type="file"
                                                onChange={(event) => {
                                                    setFieldValue("ar.image", event.currentTarget.files[0]);
                                                }}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800"
                                            />
                                            <Error><ErrorMessage name="ar.image" /></Error>
                                        </div>

                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>Tour Title</label>
                                            <Field name="ar.title" type="text" placeholder={intl.formatMessage({ id: "title" })} className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
                                            <Error><ErrorMessage name="ar.title" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>Description</label>
                                            <Field name="ar.description" as="textarea" placeholder={intl.formatMessage({ id: "description" })} className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
                                            <Error><ErrorMessage name="ar.description" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>Duration</label>
                                            <Field name="ar.duration" type="text" placeholder={intl.formatMessage({ id: "duration" })} className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
                                            <Error><ErrorMessage name="ar.duration" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>Price</label>
                                            <Field name="ar.price" type="number" placeholder={intl.formatMessage({ id: "price" })} className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
                                            <Error><ErrorMessage name="ar.price" /></Error>
                                        </div>
                                        <div className='flex justify-between'>
                                            <button type="button" onClick={() => setStep(1)} className='buttons py-3 w-[25%] rounded-lg dark:!text-[#0c112b]'>Back</button>
                                            <button type="submit" className='py-3 w-[25%] rounded-lg dark:!text-[#0c112b]'>Submit</button>
                                        </div>
                                    </>
                                )}


                            </Form>

                        </Formik>
                    </div>
                </div>
            </Modal>
        </>
    );

};