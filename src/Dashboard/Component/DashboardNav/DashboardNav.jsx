import React from 'react'
import './DashboardNav.scss';
import { FaPlaneDeparture } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { FaBarsStaggered } from "react-icons/fa6";
import { FormattedMessage } from 'react-intl';
import { useRecoilState } from 'recoil';
import { $dashboardMenuState } from '../../../Store';
export const DashboardNav = () => {
    const [dashboardSideMenuIndex, setDashboardSideMenuIndex] = useRecoilState($dashboardMenuState);
    return (
        <div>
            <div>
                <span className='flex lg:hidden dashboardBarIcon fixed top-[20px] left-[20px] ' onClick={() => setDashboardSideMenuIndex(true)}>
                    <FaBarsStaggered size={25} />
                </span>
            </div>
            <div id='dashboardNav' className='lg:w-72 bg-cyan-700 rounded-r-md pt-5 hidden lg:flex lg:flex-col gap-5 dark:bg-sky-950 fixed top-0 left-0 h-screen'>
                <div className='flex gap-5 justify-center items-center'>
                    <p className='m-0 text-white'>BON VOYAGE</p>
                    <span className='planeIcon text-white'>
                        <FaPlaneDeparture size={25} />
                    </span>
                </div>
                <div className='flex flex-col gap-5 p-3'>
                    <NavLink to={'/dashboard/home'} className='text-white font-medium px-7 py-3'><FormattedMessage id='dashboard' /></NavLink>
                    <NavLink to={'/dashboard/tours'} className='text-white font-medium px-7 py-3'><FormattedMessage id='tours' /></NavLink>
                    <NavLink to={'/dashboard/bookedTours'} className='text-white font-medium px-7 py-3'><FormattedMessage id='bookedTours' /></NavLink>
                    <NavLink to={'/dashboard/blogs'} className='text-white font-medium px-7 py-3'><FormattedMessage id='blogs' /></NavLink>
                    <NavLink to={'/dashboard/users'} className='text-white font-medium px-7 py-3'><FormattedMessage id='users' /></NavLink>
                    <NavLink to={'/dashboard/reviews'} className='text-white font-medium px-7 py-3'><FormattedMessage id='reviews' /></NavLink>
                    <NavLink to={'/dashboard/contact'} className='text-white font-medium px-7 py-3'><FormattedMessage id='contactMessages' /></NavLink>
                </div>
            </div>
        </div>
    )
}
