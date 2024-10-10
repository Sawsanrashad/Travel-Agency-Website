import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { FormattedMessage, useIntl } from 'react-intl';
import { Field, Form, Formik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import { $editInfo, $userInfo } from '../../../Store';
import { Modal } from '../../Modal/Modal';
import './UserInfoEditForm.scss';
export const UserInfoEditForm = () => {
    const authUser = localStorage.getItem('AuthUser');
    const [editInfo, setEditInfo] = useRecoilState($editInfo);
    console.log(editInfo);
    const [userInfo, setUserInfo] = useRecoilState($userInfo);
    const [userData, setUserData] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    let intl = useIntl();
    let form = useRef();
    useEffect(() => {
        if (editInfo) {
            const parsedUser = JSON.parse(authUser);
            setUserData(parsedUser);
            console.log('Parsed user data:', parsedUser);
        }
    }, [editInfo, authUser]);



    if (!userData) return null;
    const handleSaveChanges = (values, { resetForm }) => {
        const parsedUser = JSON.parse(authUser);
        axios.put(`http://localhost:3000/users/${parsedUser.id}`, values)
            .then(response => {
                console.log('Data updated successfully', response);
                toast.success("Your Data successfully Updated!");
                axios.get(`http://localhost:3000/users/${parsedUser.id}`)
                    .then(res => {
                        const updatedUser = res.data;
                        setUserData(updatedUser);
                        let newInfo = [...userInfo];
                        newInfo.splice(
                            newInfo.findIndex((user) => user.id === updatedUser.id),
                            1,
                            updatedUser
                        );
                        setUserInfo(newInfo);
                        localStorage.setItem('AuthUser', JSON.stringify(updatedUser));
                    })
                    .catch(error => console.error('Failed to fetch updated data:', error));

                resetForm();
                setIsOpen(false);
                setEditInfo(false);
            })
            .catch(error => {
                console.error('Error updating data:', error);
                toast.error('Failed to update user information. Please try again.');
            });
    };


    return (
        <Modal show={editInfo} setEditInfo={setEditInfo} size={'md'}>
            <div id='editInfo' className='editInfo my-8'>
                <div>
                    {userData && (
                        <Formik
                            initialValues={userData}
                            enableReinitialize
                            onSubmit={handleSaveChanges}
                        >
                            <Form className='eForm flex flex-col gap-4'>
                                <div className='flex flex-col gap-3'>
                                    <label className='font-medium dark:text-white'>{<FormattedMessage id='name' />}</label>
                                    <Field
                                        name="name"
                                        type="text"
                                        placeholder={intl.formatMessage({ id: "name" })}
                                        className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white"
                                    />

                                </div>
                                <div className='flex flex-col gap-3'>
                                    <label className='font-medium dark:text-white'>{<FormattedMessage id='email' />}</label>
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder={intl.formatMessage({ id: "email" })}
                                        className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white"
                                    />

                                </div>
                                <div className='flex flex-col gap-3'>
                                    <label className='font-medium dark:text-white'>{<FormattedMessage id='phone' />}</label>
                                    <Field
                                        name="phone"
                                        type="number"
                                        placeholder={intl.formatMessage({ id: "number" })}
                                        className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800 dark:text-white"
                                    />

                                </div>
                                <button
                                    type="submit"
                                    className='py-3 w-[25%] rounded-lg dark:!text-[#0c112b]'>
                                    {<FormattedMessage id='submit' />}
                                </button>
                            </Form>
                        </Formik>
                    )}
                </div>
            </div>
        </Modal >
    )
}
