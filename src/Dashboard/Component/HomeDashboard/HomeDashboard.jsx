import React from 'react'
import { FormattedMessage } from 'react-intl'
import './HomeDashboard.scss';
export const HomeDashboard = () => {
    let name = '';
    const authUser = localStorage.getItem('AuthUser');
    if (authUser) {
        name = JSON.parse(authUser)?.name;
    }
    return (
        <div id='homeDashboard' className='py-6 custom_container'>
            <h2 className='text-3xl font-medium dark:text-white'>{<FormattedMessage id='welcome' />} {name}!</h2>
        </div>
    )
}
