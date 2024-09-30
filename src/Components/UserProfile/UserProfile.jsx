import React, { useEffect } from 'react'
import Header from '../Header/Header';
import { FormattedMessage } from 'react-intl';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import './UserProfile.scss';
import { LoggedIn } from '../LoggedIn/LoggedIn';
import { useRecoilState } from 'recoil';
import { $loggedIn } from '../../Store';

export const UserProfile = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const authUser = useRecoilState($loggedIn);
    useEffect(() => {
        if (location.pathname == "/profile") {
            navigate('/profile/info');
        }
    }, [location])

    return (
        <LoggedIn>
            <div id='profile' className='dark:bg-[#0e1b31]'>
                <Header title={<FormattedMessage id='myProfile' />} heading={<FormattedMessage id='welcome' />} span={authUser[0].name} bgImg={`url('/assets/images/bg.jpg')`} />
                <div className='custom_container'>
                    <div className='py-10 flex justify-start gap-4'>
                        <NavLink to={'/profile/info'} className='dark:text-white font-medium px-2 md:px-7 py-3 md:text-xl' >{<FormattedMessage id='myInformation' />}</NavLink>
                        <NavLink to={'/profile/transactions'} className='dark:text-white font-medium px-2 md:px-7 py-3 md:text-xl' >{<FormattedMessage id='myTransactions' />}</NavLink>
                    </div>
                </div>
                <div className=' mb-5 custom_container'><Outlet /></div>
            </div>
        </LoggedIn>
    )
}
