import React from 'react'
import './HeaderSwiperSlide.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faS, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Field, Form, Formik } from 'formik';
import { FormattedMessage, useIntl } from 'react-intl';
export default function HeaderSwiperSlide() {
    let intl = useIntl()
    return (
        <div id='HeaderSwiperSlide'>
            <div className='custom_container w-full h-full flex justify-center items-center flex-col gap-4'>
                <div className='overlay'></div>
                <p className=''><FormattedMessage id='comeTravelWithUs' /></p>
                <h1 className='animate__animated animate__fadeInUp '><FormattedMessage id='exploreTheWorldWithBonVoyage' /></h1>
                <div className='px-3 formbg w-full'>
                    <Formik
                        initialValues={{
                            where: "",
                            duration: "",
                            destination: ""
                        }}
                    >
                        <Form action="" className='md:grid md:grid-cols-4 w-full' >
                            <Field type="text" className='p-3 text ' name='where' placeholder={intl.formatMessage({ id: "whereTo" })} />
                            <Field as="select" className="p-3 " name='destination'>
                                <option selected>{<FormattedMessage id='destination' />}</option>
                                <option value="1">France</option>
                                <option value="2">Cairo</option>
                                <option value="3">Aswan</option>
                            </Field>
                            <Field as='select' className="p-3 " name='duration'>
                                <option selected>{<FormattedMessage id='duration' />}</option>
                                <option value="1">1 Day Tour</option>
                                <option value="2">2-3 Day Tour</option>
                                <option value="3">5-7 Day Tour</option>
                            </Field>
                            <button className='p-3 relative dark:!bg-cyan-900 dark:hover:!bg-slate-900' type='submit'>
                                <FontAwesomeIcon icon={faSearch} className='absolute serachIcon'></FontAwesomeIcon>
                                {<FormattedMessage id='findNow' />}</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}
