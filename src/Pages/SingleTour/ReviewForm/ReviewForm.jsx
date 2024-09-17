import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useRef } from 'react'
import { Error } from '../../../Components/Error/Error'
import { ReviewSchema } from '../ReviewSchema'
import axios from 'axios'
import { RateStarsClick } from '../../../Components/RateStarsClick/RateStarsClick'
import { FormattedMessage, useIntl } from 'react-intl'
import { useRecoilState } from 'recoil'
import { $loggedIn } from '../../../Store'
import { toast, ToastContainer } from 'react-toastify'

export const ReviewForm = ({ reviews, setReviews }) => {
    const [loggedState, setLoggedState] = useRecoilState($loggedIn);
    let intl = useIntl();
    let form = useRef()
    let handleReviewSubmit = (values) => {
        console.log(reviews)
        console.log([...reviews, values])
        axios.post('http://localhost:3000/reviews', values)
            .then((response) => {
                setReviews([...reviews, values])
                form.current.resetForm();
                toast.success("Review submitted successfully!");
            })
            .catch((err) => {
                console.log(err)
            }
            )
    }
    return (
        <div className={`${loggedState ? 'block' : 'hidden'}`}>
            <h3 className='dark:!text-white'>{<FormattedMessage id='addYourReview' />}</h3>
            <Formik
                initialValues={{
                    comment: "",
                    rating: '',
                }}
                innerRef={form}
                validationSchema={ReviewSchema}
                onSubmit={(values) => handleReviewSubmit(values)}
            >
                {({ setFieldValue }) => (
                    <Form className='reviewForm accordion-collapse border p-3 rounded-md dark:!border-slate-800'>
                        <div className='w-full'>
                            <RateStarsClick setFieldValue={setFieldValue} />
                            <Field as="textarea" name="comment" type="text" placeholder={intl.formatMessage({ id: "yourReview" })} className="w-full p-2 border-0 rounded-sm bg-slate-200 mb-2 dark:!bg-slate-800  dark:placeholder-white dark:text-white" />
                            <Error><ErrorMessage name='comment' /></Error>
                        </div>
                        <button type='submit' className='w-[25%] py-2 bg-slate-700 text-white rounded-md hover:bg-slate-500'>{<FormattedMessage id='post' />}</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
