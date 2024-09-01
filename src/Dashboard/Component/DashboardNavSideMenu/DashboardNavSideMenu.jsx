import React, { useEffect } from 'react'
import { FaPlaneDeparture } from "react-icons/fa6";
import { useRecoilState } from 'recoil';
import { $dashboardMenuState } from '../../../Store';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import './DashboardNavSideMenu.scss';
export const DashboardNavSideMenu = () => {
    const [dashboardSideMenuIndex, setDashboardSideMenuIndex] = useRecoilState($dashboardMenuState);
    function closeDashboardSideBar(e) {
        if (!e.target.closest(".dashboardBarIcon") && !e.target.closest(".dashMenu")) {
            setDashboardSideMenuIndex(false);
        }
    }

    useEffect(() => {
        document.addEventListener("click", closeDashboardSideBar);
    }, []);

    if (dashboardSideMenuIndex) {
        return (
            <div id='dashboardNavSideMenu' className='w-[65%] h-full bg-cyan-700  dark:bg-[#0c112b] fixed top-0 left-0  p-3 dashMenu'>
                <div className='flex justify-between'>
                    <div className='flex gap-5 justify-center items-center'>
                        <p className='m-0 text-white'>BON VOYAGE</p>
                        <span className='planeIcon text-white'>
                            <FaPlaneDeparture size={25} />
                        </span>
                    </div>
                    <button className='btn z-3 px-2 py-1' onClick={() => {
                        setDashboardSideMenuIndex(false);
                    }}>  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                            <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                        </svg>
                    </button>
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
        )
    }
}
