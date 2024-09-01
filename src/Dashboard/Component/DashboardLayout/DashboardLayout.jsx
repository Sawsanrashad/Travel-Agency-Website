import React, { useEffect } from 'react';
import { DashboardNav } from '../DashboardNav/DashboardNav';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './DashboardLayout.scss';
import { AdminCheck } from '../../../Components/AdminCheck/AdminCheck';
import { DashboardNavSideMenu } from '../DashboardNavSideMenu/DashboardNavSideMenu';
export const DashboardLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (location.pathname == "/dashboard") {
            navigate('/dashboard/home');
        }
    }, [location])

    return (
        <AdminCheck>
            <div className='layout flex  flex-row-reverse dark:bg-[#0e1b31] min-h-screen w-full relative'>
                <DashboardNav />
                <DashboardNavSideMenu />
                <div className='outlet dark:bg-[#0e1b31] mb-5 mt-5 py-6'><Outlet /></div>
            </div>
        </AdminCheck>
    )
}
