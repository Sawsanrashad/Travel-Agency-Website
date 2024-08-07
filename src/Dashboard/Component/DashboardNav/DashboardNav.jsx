import React from 'react'
import './DashboardNav.scss';
import { FaPlaneDeparture } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
export const DashboardNav = () => {
    return (
        <div id='dashboardNav' className='w-72  bg-cyan-700 rounded-r-md pt-5'>
            <div className='flex gap-5 justify-center items-center'>
                <p className='m-0 text-white'>BON VOYAGE</p>
                <span className='planeIcon text-white'>
                    <FaPlaneDeparture size={25} />
                </span>
            </div>
            <div className='flex flex-col gap-10'>
                <NavLink to={'/dashboard/home'} className='text-white font-medium py-3'><FormattedMessage id='dashboard' /></NavLink>
                <NavLink to={'/dashboard/tours'} className='text-white font-medium py-3'><FormattedMessage id='tours' /></NavLink>
                <NavLink to={'/dashboard/bookedTours'} className='text-white font-medium py-3'><FormattedMessage id='bookedTours' /></NavLink>
                <NavLink to={'/dashboard/blogs'} className='text-white font-medium py-3'><FormattedMessage id='blogs' /></NavLink>
                <NavLink to={'/dashboard/users'} className='text-white font-medium py-3'><FormattedMessage id='users' /></NavLink>
                <NavLink to={'/dashboard/reviews'} className='text-white font-medium py-3'><FormattedMessage id='reviews' /></NavLink>
                <NavLink to={'/dashboard/contact'} className='text-white font-medium py-3'><FormattedMessage id='contactMessages' /></NavLink>
            </div>
        </div>
    )
}
