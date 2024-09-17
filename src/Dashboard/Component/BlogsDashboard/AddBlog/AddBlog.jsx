import React, { useState } from 'react'
import { Modal } from '../../../../Components/Modal/Modal'
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik'
import { FormattedMessage, useIntl } from 'react-intl'
import { $addBlog } from '../../../../Store'
import { Error } from '../../../../Components/Error/Error';
import { useRecoilState } from 'recoil'
import axios from 'axios'
import { toast } from 'react-toastify';
import { AddBlogSchema } from './AddBlogSchema'
import './AddBlog.scss'
export const AddBlog = () => {
    let intl = useIntl();
    const [addBlog, setAddBlog] = useRecoilState($addBlog);
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    let handleAddNewBlog = (values, { resetForm }) => {
        values.en.image = `/src/assets/images/${values.en.image.name}`
        values.ar.image = `/src/assets/images/${values.ar.image.name}`
        const blogData = {
            en: {
                title: values.en.title,
                description: values.en.description,
                image: values.en.image,
                date: values.en.date
            },
            ar: {
                title: values.ar.title,
                description: values.ar.description,
                image: values.ar.image,
                date: values.ar.date
            }
        };
        axios.post('http://localhost:3000/blogs', blogData)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('newBlog', JSON.stringify(response.data));
                toast.success("Blog successfully Added!");
                resetForm();
                setIsOpen(false);
                setAddBlog(false);
                setStep(1)
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <Modal show={addBlog} setAddBlog={setAddBlog} size={'md'}>
                <div id='addBlog' className='addBlog my-8'>
                    <Formik
                        initialValues={{
                            en: {
                                image: null,
                                title: '',
                                description: '',
                                date: '',
                            },
                            ar: {
                                image: null,
                                title: '',
                                description: '',
                                date: '',
                            }
                        }}
                        onSubmit={handleAddNewBlog}
                        validationSchema={AddBlogSchema}
                    >
                        {({ setFieldValue, validateForm, values }) => (
                            <Form className='addBlog flex flex-col'>
                                {console.log(values)}
                                {step === 1 && (
                                    <>
                                        <p>{<FormattedMessage id='englishForm' />}</p>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='imageUpload' />}</label>
                                            <input
                                                name="en.image"
                                                type="file"
                                                onChange={(event) => {
                                                    setFieldValue("en.image", event.currentTarget.files[0]);
                                                }}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white"
                                            />
                                            <Error><ErrorMessage name="en.image" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='tourTitle' />}</label>
                                            <Field
                                                name="en.title"
                                                type="text"
                                                placeholder={intl.formatMessage({ id: "title" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white"
                                            />
                                            <Error><ErrorMessage name="en.title" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='description' />}</label>
                                            <FieldArray
                                                name="en.description"
                                                render={({ push }) => (
                                                    <>
                                                        {values.en.description &&
                                                            values.en.description.map((option, idx) => (
                                                                <div key={idx}>
                                                                    <Field
                                                                        type="text"
                                                                        name={`en.description[${idx}]`}
                                                                        value={option}
                                                                        className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                                                    />
                                                                </div>
                                                            ))
                                                        }
                                                        <button type="button" onClick={() => push('')}>
                                                            Add description
                                                        </button>
                                                    </>
                                                )}
                                            />
                                            <Error><ErrorMessage name="en.description" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='date' />}</label>
                                            <Field
                                                name="en.date"
                                                type="date"
                                                placeholder={intl.formatMessage({ id: "date" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white"
                                            />
                                            <Error><ErrorMessage name="en.date" /></Error>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                validateForm().then(errors => {
                                                    if (!errors.en) {
                                                        setStep(2);
                                                    }
                                                    else {
                                                        toast.error('Please fill in the required fields');
                                                    }
                                                });
                                            }}
                                            className='buttons py-3 w-[25%] self-end rounded-lg dark:!text-[#0c112b]'>
                                            {<FormattedMessage id='next' />}
                                        </button>
                                    </>
                                )}
                                {step === 2 && (
                                    <>
                                        <p>{<FormattedMessage id='arabicForm' />}</p>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='imageUpload' />}</label>
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
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='tourTitle' />}</label>
                                            <Field
                                                name="ar.title"
                                                type="text"
                                                placeholder={intl.formatMessage({ id: "title" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800"
                                            />
                                            <Error><ErrorMessage name="ar.title" /></Error>
                                        </div>

                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='description' />}</label>
                                            <FieldArray
                                                name="ar.description"
                                                render={({ push }) => (
                                                    <>
                                                        {values.ar.description &&
                                                            values.ar.description.map((option, idx) => (
                                                                <div key={idx}>
                                                                    <Field
                                                                        type="text"
                                                                        name={`ar.description[${idx}]`}
                                                                        value={option}
                                                                        className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                                                    />
                                                                </div>
                                                            ))
                                                        }
                                                        <button type="button" onClick={() => push('')}>
                                                            Add description
                                                        </button>
                                                    </>
                                                )}
                                            />
                                            <Error><ErrorMessage name="ar.description" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='date' />}</label>
                                            <Field
                                                name="ar.date"
                                                type="date"
                                                placeholder={intl.formatMessage({ id: "date" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white"
                                            />
                                            <Error><ErrorMessage name="ar.date" /></Error>
                                        </div>
                                        <div className='flex justify-between'>
                                            <button
                                                type="button"
                                                onClick={() => setStep(1)}
                                                className='buttons py-3 w-[25%] rounded-lg dark:!text-[#0c112b]'>
                                                {<FormattedMessage id='back' />}
                                            </button>
                                            <button
                                                type="submit"
                                                className='py-3 w-[25%] rounded-lg dark:!text-[#0c112b]'>
                                                {<FormattedMessage id='submit' />}
                                            </button>
                                        </div>
                                    </>
                                )}
                            </Form>
                        )}
                    </Formik>
                </div>
            </Modal>
        </>
    )

}
