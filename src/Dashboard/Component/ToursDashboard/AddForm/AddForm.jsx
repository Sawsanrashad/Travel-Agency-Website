import React, { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { $addFormState } from '../../../../Store';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { AddFormValidationSchema } from './AddFormValidationSchema';
import { useIntl } from 'react-intl';
import './AddForm.scss';
import axios from 'axios';
import { Error } from '../../../../Components/Error/Error';

export const AddForm = () => {
    let intl = useIntl();
    let form = useRef();
    const [addForm, setAddForm] = useRecoilState($addFormState);
    let handleAddNewTour = (values) => {
        axios.post('http://localhost:3000/allTours', values)
            .then(() => {
                localStorage.setItem('newTour', JSON.stringify(response.data[0]))
                form.current.resetForm();
            })
            .catch((err) => {
                console.log(err)
            }
            )
    }

    function closeAddForm(e) {

        if (!e.target.closest(".addForm") && !e.target.closest(".addFormButton")) {

            setAddForm(false);
        }
    }

    useEffect(() => {
        document.addEventListener("click", closeAddForm);
        return () => {
            document.removeEventListener("click", closeAddForm);
        };
    }, []);

    if (addForm) {
        return (
            <div id='addForm' className='addForm'>
                <div className='bg-slate-100 border w-[50%]  fixed top-[0] right-[20%] z-10 rounded-md p-3'>
                    <Formik
                        initialValues={{
                            image: null,
                            title: '',
                            description: '',
                            duration: '',
                            price: ''
                        }}
                        validationSchema={<AddFormValidationSchema />}
                        innerRef={form}
                        onSubmit={(values) => handleAddNewTour(values)}
                    >

                        <Form className='flex flex-col'>
                            <div className='flex flex-col'>
                                <label>Image Upload</label>
                                <Field name="image" type="text" placeHolder={intl.formatMessage({ id: "image" })} className="w-full px-3 py-4 border-0 rounded-lg dark:!bg-slate-800" />
                                <Error><ErrorMessage name="image" /> </Error>
                            </div>

                            <div className='flex flex-col'>
                                <label>Tour Title</label>
                                <Field name="title" type="text" placeHolder={intl.formatMessage({ id: "title" })} className="w-full px-3 py-4 border-0 rounded-lg dark:!bg-slate-800" />
                                <Error><ErrorMessage name="title" /> </Error>
                            </div>
                            <div className='flex flex-col'>
                                <label>Description</label>
                                <Field name="description" as="textarea" placeHolder={intl.formatMessage({ id: "description" })} className="w-full px-3 py-4 border-0 rounded-lg dark:!bg-slate-800" />
                                <Error><ErrorMessage name="description" /> </Error>
                            </div>
                            <div className='flex flex-col '>
                                <label>Duration</label>
                                <Field name="duration" type="text" placeHolder={intl.formatMessage({ id: "duration" })} className="w-full px-3 py-4 border-0 rounded-lg dark:!bg-slate-800" />
                                <Error><ErrorMessage name="duration" /> </Error>
                            </div>
                            <div className='flex flex-col'>
                                <label>Price</label>
                                <Field name="price" type="number" placeHolder={intl.formatMessage({ id: "price" })} className="w-full px-3 py-4 border-0 rounded-lg dark:!bg-slate-800" />
                                <Error><ErrorMessage name="price" /> </Error>
                            </div>
                            <button type="submit" className='py-3 w-full rounded-lg dark:!text-[#0c112b] '>ADD</button>
                        </Form>

                    </Formik>
                </div>
            </div>
        );
    }
};