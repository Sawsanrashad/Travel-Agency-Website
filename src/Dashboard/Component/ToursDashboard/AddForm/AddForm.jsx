import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { $addFormState } from '../../../../Store';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import { AddFormValidationSchema } from './AddFormValidationSchema';
import { FormattedMessage, useIntl } from 'react-intl';
import './AddForm.scss';
import axios from 'axios';
import { Error } from '../../../../Components/Error/Error';
import { Modal } from '../../../../Components/Modal/Modal';
import { toast } from 'react-toastify';

export const AddForm = () => {
    let intl = useIntl();
    const [addForm, setAddForm] = useRecoilState($addFormState);
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    let handleAddNewTour = (values, { resetForm }) => {
        const formData = {
            en: {
                title: values.en.title,
                description: values.en.description,
                price: values.en.price,
                duration: values.en.duration,
                imageUrl: values.en.image ? URL.createObjectURL(values.en.image) : '',
                category: values.en.category,
                location: values.en.location,
                historicalInfo: values.en.historicalInfo,
                itinerary: values.en.itinerary,
                inclusions: values.en.inclusions,
                exclusions: values.en.exclusions,
                meetingPoint: values.en.meetingPoint,
                groupSize: values.en.groupSize,
                difficultyLevel: values.en.difficultyLevel,
                highlights: values.en.highlights,
                languages: values.en.languages,
                specialRequirements: values.en.specialRequirements,
                cancellationPolicy: values.en.cancellationPolicy,
            },
            ar: {
                title: values.ar.title,
                description: values.ar.description,
                price: values.ar.price,
                duration: values.ar.duration,
                imageUrl: values.ar.image ? URL.createObjectURL(values.ar.image) : '',
                category: values.ar.category,
                location: values.ar.location,
                historicalInfo: values.ar.historicalInfo,
                itinerary: values.ar.itinerary,
                inclusions: values.ar.inclusions,
                exclusions: values.ar.exclusions,
                meetingPoint: values.ar.meetingPoint,
                groupSize: values.ar.groupSize,
                difficultyLevel: values.ar.difficultyLevel,
                highlights: values.ar.highlights,
                languages: values.ar.languages,
                specialRequirements: values.ar.specialRequirements,
                cancellationPolicy: values.ar.cancellationPolicy,
            }
        };

        axios.post('http://localhost:3000/allTours', formData)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('newTour', JSON.stringify(response.data));
                toast.success("Tour successfully Added!");
                resetForm();
                setIsOpen(false);
                setStep(1)
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Modal show={addForm} setAddForm={setAddForm} size={'md'}>
                {/* Modal that wraps the form */}
                <div id='addForm' className='addForm my-8'>
                    <Formik
                        initialValues={{
                            en: {
                                image: null,
                                title: '',
                                description: '',
                                price: '',
                                category: '',
                                location: '',
                                historicalInfo: '',
                                itinerary: '',
                                inclusions: '',
                                exclusions: '',
                                meetingPoint: '',
                                groupSize: '',
                                difficultyLevel: '',
                                highlights: '',
                                languages: '',
                                specialRequirements: '',
                                cancellationPolicy: '',
                            },
                            ar: {
                                image: null,
                                title: '',
                                description: '',
                                duration: '',
                                price: '',
                                category: '',
                                location: '',
                                historicalInfo: '',
                                itinerary: '',
                                inclusions: '',
                                exclusions: '',
                                meetingPoint: '',
                                groupSize: '',
                                difficultyLevel: '',
                                highlights: '',
                                languages: '',
                                specialRequirements: '',
                                cancellationPolicy: '',
                            }
                        }}
                        validationSchema={AddFormValidationSchema}
                        enableReinitialize
                        onSubmit={handleAddNewTour}
                    >
                        {({ setFieldValue, validateForm, values }) => (
                            <Form className='aForm flex flex-col'>
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
                                            <Field
                                                name="en.description"
                                                as="textarea"
                                                placeholder={intl.formatMessage({ id: "description" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                            />
                                            <Error><ErrorMessage name="en.description" /></Error>
                                        </div>


                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='duration' />}</label>
                                            <Field
                                                name="en.duration"
                                                type="text"
                                                placeholder={intl.formatMessage({ id: "duration" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                            />
                                            <Error><ErrorMessage name="en.duration" /></Error>
                                        </div>


                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='price' />}</label>
                                            <Field
                                                name="en.price"
                                                type="number"
                                                placeholder={intl.formatMessage({ id: "price" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                            />
                                            <Error><ErrorMessage name="en.price" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='category' />}</label>
                                            <Field
                                                name="en.category"
                                                type="text"
                                                placeholder={intl.formatMessage({ id: "category" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                            />
                                            <Error><ErrorMessage name="en.category" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='location' />}</label>
                                            <Field
                                                name="en.location"
                                                type="text"
                                                placeholder={intl.formatMessage({ id: "location" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                            />
                                            <Error><ErrorMessage name="en.location" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='historicalInfo' />}</label>
                                            <Field
                                                name="en.historicalInfo"
                                                type="text"
                                                placeholder={intl.formatMessage({ id: "historicalInfo" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                            />
                                            <Error><ErrorMessage name="en.historicalInfo" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='itinerary' />}</label>
                                            <Field
                                                name="en.itinerary"
                                                type="text"
                                                placeholder={intl.formatMessage({ id: "itinerary" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                            />
                                            <Error><ErrorMessage name="en.itinerary" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='inclusions' />}</label>
                                            <FieldArray
                                                name="en.inclusions"
                                                render={({ push }) => (
                                                    <>
                                                        {values.en.inclusions &&
                                                            values.en.inclusions.map((option, idx) => (
                                                                <div key={idx}>
                                                                    <Field
                                                                        type="text"
                                                                        name={`en.inclusions[${idx}]`}
                                                                        value={option}
                                                                        placeholder={intl.formatMessage({ id: "inclusions" })}
                                                                        className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                                                    />
                                                                </div>
                                                            ))
                                                        }
                                                        <button type="button" onClick={() => push('')}>
                                                            Add option
                                                        </button>
                                                    </>
                                                )}
                                            />

                                            <Error><ErrorMessage name="en.inclusions" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='exclusions' />}</label>
                                            <FieldArray
                                                name="en.exclusions"
                                                render={({ push }) => (
                                                    <>
                                                        {values.en.exclusions &&
                                                            values.en.exclusions.map((option, idx) => (
                                                                <div key={idx}>
                                                                    <Field
                                                                        type="text"
                                                                        name={`ar.exclusions[${idx}]`}
                                                                        value={option}
                                                                        placeholder={intl.formatMessage({ id: "exclusions" })}
                                                                        className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                                                    />
                                                                </div>
                                                            ))
                                                        }
                                                        <button type="button" onClick={() => push('')}>
                                                            Add option
                                                        </button>
                                                    </>
                                                )}
                                            />
                                            <Error><ErrorMessage name="en.exclusions" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='meetingPoint' />}</label>
                                            <Field
                                                name="en.meetingPoint"
                                                type="text"
                                                placeholder={intl.formatMessage({ id: "meetingPoint" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                            />
                                            <Error><ErrorMessage name="en.meetingPoint" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='groupSize' />}</label>
                                            <Field
                                                name="en.groupSize"
                                                type="text"
                                                placeholder={intl.formatMessage({ id: "groupSize" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                            />
                                            <Error><ErrorMessage name="en.groupSize" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='difficultyLevel' />}</label>
                                            <Field
                                                name="en.difficultyLevel"
                                                type="text"
                                                placeholder={intl.formatMessage({ id: "difficultyLevel" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                            />
                                            <div className='flex flex-col gap-3'>
                                                <label className='font-medium dark:text-white'>{<FormattedMessage id='highlights' />}</label>
                                                <FieldArray
                                                    name="en.highlights"
                                                    render={({ push }) => (
                                                        <>
                                                            {values.en.highlights &&
                                                                values.en.highlights.map((option, idx) => (
                                                                    <div key={idx}>
                                                                        <Field
                                                                            type="text"
                                                                            name={`en.highlights[${idx}]`}
                                                                            value={option}
                                                                            className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                                                        />
                                                                    </div>
                                                                ))
                                                            }
                                                            <button type="button" onClick={() => push('')}>
                                                                Add option
                                                            </button>
                                                        </>
                                                    )}
                                                />
                                            </div>
                                            <div className='flex flex-col gap-3'>
                                                <label className='font-medium dark:text-white'>{<FormattedMessage id='languages' />}</label>
                                                <FieldArray
                                                    name="en.languages"
                                                    render={({ push }) => (
                                                        <>
                                                            {values.en.languages &&
                                                                values.en.languages.map((option, idx) => (
                                                                    <div key={idx}>
                                                                        <Field
                                                                            type="text"
                                                                            name={`en.languages[${idx}]`}
                                                                            value={option}
                                                                            className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                                                        />
                                                                    </div>
                                                                ))
                                                            }
                                                            <button type="button" onClick={() => push('')}>
                                                                Add option
                                                            </button>
                                                        </>
                                                    )}
                                                />
                                            </div>
                                            <Error><ErrorMessage name="en.difficultyLevel" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='specialRequirements' />}</label>
                                            <Field
                                                name="en.specialRequirements"
                                                type="text"
                                                placeholder={intl.formatMessage({ id: "specialRequirements" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                            />
                                            <Error><ErrorMessage name="en.specialRequirements" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='cancellationPolicy' />}</label>
                                            <Field
                                                name="en.cancellationPolicy"
                                                type="text"
                                                placeholder={intl.formatMessage({ id: "cancellationPolicy" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                            />
                                            <Error><ErrorMessage name="en.cancellationPolicy" /></Error>
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
                                            <Field
                                                name="ar.description"
                                                as="textarea"
                                                placeholder={intl.formatMessage({ id: "description" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800"
                                            />
                                            <Error><ErrorMessage name="ar.description" /></Error>
                                        </div>


                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='duration' />}</label>
                                            <Field
                                                name="ar.duration"
                                                type="text"
                                                placeholder={intl.formatMessage({ id: "duration" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800"
                                            />
                                            <Error><ErrorMessage name="ar.duration" /></Error>
                                        </div>


                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='price' />}</label>
                                            <Field
                                                name="ar.price"
                                                type="number"
                                                placeholder={intl.formatMessage({ id: "price" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800"
                                            />
                                            <Error><ErrorMessage name="ar.price" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='category' />}</label>
                                            <Field
                                                name="ar.category"
                                                type="text"
                                                placeholder={intl.formatMessage({ id: "category" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                            />
                                            <Error><ErrorMessage name="ar.category" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='location' />}</label>
                                            <Field
                                                name="ar.location"
                                                type="text"
                                                placeholder={intl.formatMessage({ id: "location" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                            />
                                            <Error><ErrorMessage name="ar.location" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='historicalInfo' />}</label>
                                            <Field
                                                name="ar.historicalInfo"
                                                type="text"
                                                placeholder={intl.formatMessage({ id: "historicalInfo" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                            />
                                            <Error><ErrorMessage name="ar.historicalInfo" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='itinerary' />}</label>
                                            <Field
                                                name="ar.itinerary"
                                                type="text"
                                                placeholder={intl.formatMessage({ id: "itinerary" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                            />
                                            <Error><ErrorMessage name="ar.itinerary" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='inclusions' />}</label>
                                            <FieldArray
                                                name="ar.inclusions"
                                                render={({ push }) => (
                                                    <>
                                                        {values.ar.inclusions &&
                                                            values.ar.inclusions.map((option, idx) => (
                                                                <div key={idx}>
                                                                    <Field
                                                                        type="text"
                                                                        name={`ar.inclusions[${idx}]`}
                                                                        value={option}
                                                                        placeholder={intl.formatMessage({ id: "inclusions" })}
                                                                        className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                                                    />
                                                                </div>
                                                            ))
                                                        }
                                                        <button type="button" onClick={() => push('')}>
                                                            Add option
                                                        </button>
                                                    </>
                                                )}
                                            />
                                            <Error><ErrorMessage name="ar.inclusions" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='exclusions' />}</label>
                                            <FieldArray
                                                name="ar.exclusions"
                                                render={({ push }) => (
                                                    <>
                                                        {values.ar.exclusions &&
                                                            values.ar.exclusions.map((option, idx) => (
                                                                <div key={idx}>
                                                                    <Field
                                                                        type="text"
                                                                        name={`ar.exclusions[${idx}]`}
                                                                        value={option}
                                                                        placeholder={intl.formatMessage({ id: "exclusions" })}
                                                                        className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                                                    />
                                                                </div>
                                                            ))
                                                        }
                                                        <button type="button" onClick={() => push('')}>
                                                            Add option
                                                        </button>
                                                    </>
                                                )}
                                            />
                                            <Error><ErrorMessage name="ar.exclusions" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='meetingPoint' />}</label>
                                            <Field
                                                name="ar.meetingPoint"
                                                type="text"
                                                placeholder={intl.formatMessage({ id: "meetingPoint" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                            />
                                            <Error><ErrorMessage name="ar.meetingPoint" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='groupSize' />}</label>
                                            <Field
                                                name="ar.groupSize"
                                                type="text"
                                                placeholder={intl.formatMessage({ id: "groupSize" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                            />
                                            <Error><ErrorMessage name="ar.groupSize" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='difficultyLevel' />}</label>
                                            <Field
                                                name="ar.difficultyLevel"
                                                type="text"
                                                placeholder={intl.formatMessage({ id: "difficultyLevel" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                            />
                                            <Error><ErrorMessage name="ar.difficultyLevel" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='highlights' />}</label>
                                            <FieldArray
                                                name="ar.highlights"
                                                render={({ push }) => (
                                                    <>
                                                        {values.ar.highlights &&
                                                            values.ar.highlights.map((option, idx) => (
                                                                <div key={idx}>
                                                                    <Field
                                                                        type="text"
                                                                        name={`ar.highlights[${idx}]`}
                                                                        value={option}
                                                                        className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                                                    />
                                                                </div>
                                                            ))
                                                        }
                                                        <button type="button" onClick={() => push('')}>
                                                            Add option
                                                        </button>
                                                    </>
                                                )}
                                            />
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='languages' />}</label>
                                            <FieldArray
                                                name="ar.languages"
                                                render={({ push }) => (
                                                    <>
                                                        {values.ar.languages &&
                                                            values.ar.languages.map((option, idx) => (
                                                                <div key={idx}>
                                                                    <Field
                                                                        type="text"
                                                                        name={`ar.languages[${idx}]`}
                                                                        value={option}
                                                                        placeholder={intl.formatMessage({ id: "languages" })}
                                                                        className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                                                    />
                                                                </div>
                                                            ))
                                                        }
                                                        <button type="button" onClick={() => push('')}>
                                                            Add option
                                                        </button>
                                                    </>
                                                )}
                                            />
                                            <Error><ErrorMessage name="ar.languages" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='specialRequirements' />}</label>
                                            <Field
                                                name="ar.specialRequirements"
                                                type="text"
                                                placeholder={intl.formatMessage({ id: "specialRequirements" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                            />
                                            <Error><ErrorMessage name="ar.specialRequirements" /></Error>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <label className='font-medium dark:text-white'>{<FormattedMessage id='cancellationPolicy' />}</label>
                                            <Field
                                                name="ar.cancellationPolicy"
                                                type="text"
                                                placeholder={intl.formatMessage({ id: "cancellationPolicy" })}
                                                className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white dark:placeholder-white"
                                            />
                                            <Error><ErrorMessage name="ar.cancellationPolicy" /></Error>
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
    );
};

