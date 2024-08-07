import React, { useEffect } from 'react';
import { DashboardNav } from '../DashboardNav/DashboardNav';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './DashboardLayout.scss';
import { Modal } from '../../../Components/Modal/Modal';
import LoginPage from '../../../Pages/LoginPage/LoginPage';

export const DashboardLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.pathname)
    useEffect(() => {
        if (location.pathname == "/dashboard") {
            console.log("object")
            navigate('/dashboard/home');
        }
    }, [location])

    return (
        <div className='h-screen flex gap-3 dark:bg-[#0e1b31]'>
            <DashboardNav />
            <div className='outlet'><Outlet /></div>
            <Modal>
                <LoginPage />
                <LoginPage />
            </Modal>
        </div>
    )
}
