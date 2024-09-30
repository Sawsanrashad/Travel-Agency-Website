import React, { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil';
import { $blogs, $editBlog } from '../../../../Store';
import { FormattedMessage, useIntl } from 'react-intl';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import { Modal } from '../../../../Components/Modal/Modal';
import axios from 'axios';
import { Error } from '../../../../Components/Error/Error';
import './EditBlog.scss'
import { toast } from 'react-toastify';

export const EditBlog = () => {
    const [editBlog, setEditBlog] = useRecoilState($editBlog);
    const [blogs, setBlogs] = useRecoilState($blogs);
    let intl = useIntl();
    let form = useRef();
    const [step, setStep] = useState(1);
    const [blogData, setBlogData] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (editBlog) {
            axios.get(`http://localhost:3000/blogs/${editBlog.id}`)
                .then(response => setBlogData(response.data))
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [editBlog]);

    if (!blogData) return null;
    const handleSaveChanges = (values, { resetForm }) => {
        axios.put(`http://localhost:3000/blogs/${editBlog.id}`, values)
            .then(response => {
                console.log('Data updated successfully', response);
                toast.success("Blog successfully Updated!");
                let newBlogs = [...blogs];
                console.log(newBlogs)
                newBlogs.splice(
                    newBlogs.findIndex((blog) => blog.id == blogData.id),
                    1,
                    values
                );
                setBlogs(newTours);
                setBlogData(values)
                resetForm();
                setIsOpen(false);
                setStep(1)
                setEditBlog(false);
            })
            .catch(error => console.error('Error updating data:', error));
    };

    return (
        <>
            <Modal show={editBlog} setAddBlog={setEditBlog} size={'md'}>
                <div id='editBlog' className='editBlog my-8'>
                    <Formik
                        initialValues={blogData}
                        enableReinitialize
                        onSubmit={handleSaveChanges}
                    >
                        {({ setFieldValue, validateForm, values }) => (
                            <Form className='editBlog flex flex-col'>
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
                                                        <button className='py-3  rounded-lg dark:!text-[#0c112b]' type="button" onClick={() => push('')}>
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
                                                setStep(2);
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
                                                        <button className='py-3  rounded-lg dark:!text-[#0c112b]' type="button" onClick={() => push('')}>
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
