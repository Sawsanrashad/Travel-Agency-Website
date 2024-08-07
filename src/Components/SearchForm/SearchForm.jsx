import React from 'react'
import './SearchForm.scss';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { Error } from '../../Components/Error/Error';
import { FormattedMessage, useIntl } from 'react-intl';
export const SearchForm = () => {
    let intl = useIntl();
    const initialValues = {
        where: "",
    }
    return (
        <div id='searchForm'>
            <div className=' flex justify-center items-center'>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => console.log(values)}
                >
                    <Form className=' contentForm w-[80%] flex justify-center  '>
                        <div className='flex flex-col gap-1 w-[75%]'>
                            <Field name="where" type="text" placeHolder={intl.formatMessage({ id: "whereTo" })} className="p-3 border-0 rounded-sm bg-slate-200 dark:!bg-slate-800" />
                            <Error><ErrorMessage name="where" /></Error>
                        </div>
                        <div className='w-[25%]'>
                            <button type='submit' className='p-3'>{<FormattedMessage id='searchNow' />}</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div >
    )
}
