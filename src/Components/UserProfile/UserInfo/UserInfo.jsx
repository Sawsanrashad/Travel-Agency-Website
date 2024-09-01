import React from 'react'
import './UserInfo.scss';
import { FormattedMessage } from 'react-intl';
export const UserInfo = () => {
    let name = '';
    let email = '';
    let phone = '';
    const authUser = localStorage.getItem('AuthUser');
    if (authUser) {
        name = JSON.parse(authUser)?.name;
        email = JSON.parse(authUser)?.email;
        phone = JSON.parse(authUser)?.phone;
    }
    return (
        <div id='userInfo' className='custom_container py-5'>
            <div className='flex flex-col gap-7'>
                <h2 className=' dark:!text-white font-medium md:text-xl'>{<FormattedMessage id='yourRegisteredInfo' />}</h2>
                <h3 className=' dark:!text-white font-medium md:text-lg'>{<FormattedMessage id='name' />}: <span className='text-lg'>{name} </span></h3>
                <h3 className=' dark:!text-white font-medium md:text-lg'>{<FormattedMessage id='email' />}: <span className='text-lg'>{email} </span></h3>
                <h3 className=' dark:!text-white font-medium md:text-lg'>{<FormattedMessage id='phone' />}: <span className='text-lg'> {phone} </span></h3>
            </div>
        </div>
    )
}
