import React, { useState } from 'react';
import './SearchForm.scss';
import { Field, Form, Formik } from 'formik';
import { ErrorMessage } from 'formik';
import { Error } from '../../Components/Error/Error';
import { FormattedMessage, useIntl } from 'react-intl';

export const SearchForm = ({ onSearch }) => {
    const [value, setValue] = useState('')
    let intl = useIntl();
    const initialValues = {
        where: value,
    };

    return (
        <div id='searchForm'>
            <div className='flex justify-center items-center'>
                <Formik
                    initialValues={initialValues}
                    enableReinitialize
                    onSubmit={() => console.log("object")}
                >
                    <Form className='contentForm w-[80%] md:flex justify-center'>
                        <div className='flex flex-col gap-1 md:w-[75%]'>
                            <Field
                                name="where"
                                type="text"
                                placeholder={intl.formatMessage({ id: "whereTo" })}
                                onChange={(e) => {
                                    onSearch(e.target.value)
                                    setValue(e.target.value)
                                }
                                }
                                className="md:p-3 p-2 border-0 bg-slate-200 dark:!bg-slate-800 w-full"
                            />
                            {/* <Error><ErrorMessage name="where" /></Error> */}
                        </div>
                        <div className='md:w-[25%] h-full'>
                            <button type='submit' className='w-full h-full p-3'>
                                <FormattedMessage id='searchNow' />
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};



// import React, { useState } from 'react'
// import './SearchForm.scss';
// import { Field, Form, Formik, ErrorMessage } from 'formik';
// import { Error } from '../../Components/Error/Error';
// import { FormattedMessage, useIntl } from 'react-intl';
// export const SearchForm = () => {
//     let intl = useIntl();
//     const initialValues = {
//         where: "",
//     }
//     const [value, setValue] = useState('');
//     const onChange = (event) => {
//         setValue(event.target.value);
//     };
//     return (
//         <div id='searchForm'>
//             <div className=' flex justify-center items-center'>
//                 <Formik
//                     initialValues={initialValues}
//                     onSubmit={(values) => console.log(values)}
//                 >
//                     <Form className=' contentForm w-[80%] flex justify-center  '>
//                         <div className='flex flex-col gap-1 w-[75%]'>
//                             <Field name="where" type="text" placeHolder={intl.formatMessage({ id: "whereTo" })} className="p-3 border-0 rounded-sm bg-slate-200 dark:!bg-slate-800" value={value} onChange={onChange} />
//                             <Error><ErrorMessage name="where" /></Error>
//                         </div>
//                         <div className='w-[25%]'>
//                             <button type='submit' className='p-3'>{<FormattedMessage id='searchNow' />}</button>
//                         </div>
//                     </Form>
//                 </Formik>
//             </div>
//         </div >
//     )
// }
