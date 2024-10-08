import React, { useEffect } from 'react';
import { FaPlaneDeparture } from "react-icons/fa6";
import { useRecoilState } from 'recoil';
import { $dashboardMenuState, $theme } from '../../../Store';
import { Link, NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { IoMdCloseCircleOutline } from "react-icons/io";
import './DashboardNavSideMenu.scss';
import { GrLanguage } from "react-icons/gr";
import { MdLightMode } from "react-icons/md";
export const DashboardNavSideMenu = () => {

    const [dashboardSideMenuIndex, setDashboardSideMenuIndex] = useRecoilState($dashboardMenuState);
    const lang = localStorage.getItem("lang") === "ltr" ? "rtl" : "ltr";
    const handleMode = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        const [theme, settheme] = useRecoilState($theme);
        settheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const handleLang = () => {
        const newLang = lang === "ltr" ? "rtl" : "ltr";
        localStorage.setItem("lang", newLang);
        window.location.reload();
    };

    function closeDashboardSideBar(e) {
        if (!e.target.closest(".dashboardBarIcon") && !e.target.closest(".dashMenu")) {
            setDashboardSideMenuIndex(false);
        }
    }

    useEffect(() => {
        document.addEventListener("click", closeDashboardSideBar);
        return () => document.removeEventListener("click", closeDashboardSideBar);
    }, []);
    if (dashboardSideMenuIndex) {
        return (
            <div
                id='dashboardNavSideMenu'
                className={`md:w-[60%] h-full bg-cyan-700 dark:bg-[#0c112b] fixed top-0 left-0 p-3 dashMenu z-20 `}
            >
                <div className='flex justify-between'>
                    <div className='flex gap-5 justify-center items-center'>
                        <Link to={'/'} className='flex gap-3 cursor-pointer'>
                            <p className='m-0 text-white'>BON VOYAGE</p>
                            <span className='planeIcon text-white'>
                                <FaPlaneDeparture size={25} />
                            </span>
                        </Link>
                        <span onClick={handleLang} className='Icon'>
                            <GrLanguage size={20} />
                        </span>
                        <span onClick={handleMode} className='Icon'>
                            <MdLightMode size={25} />
                        </span>
                    </div>
                    <button className='btn z-3 px-2 py-1' onClick={() => setDashboardSideMenuIndex(false)}>
                        <span className=' text-stone-300'>
                            <IoMdCloseCircleOutline size={25} />
                        </span>
                    </button>
                </div>

                <div className='flex flex-col gap-7 p-3'>
                    <NavLink
                        to={'/dashboard/home'}
                        className='text-white font-medium px-7 py-3'
                        onClick={() => setDashboardSideMenuIndex(false)}
                    >
                        <FormattedMessage id='dashboard' />
                    </NavLink>
                    <NavLink
                        to={'/dashboard/tours'}
                        className='text-white font-medium px-7 py-3'
                        onClick={() => setDashboardSideMenuIndex(false)}
                    >
                        <FormattedMessage id='tours' />
                    </NavLink>
                    <NavLink
                        to={'/dashboard/bookedTours'}
                        className='text-white font-medium px-7 py-3'
                        onClick={() => setDashboardSideMenuIndex(false)}
                    >
                        <FormattedMessage id='bookedTours' />
                    </NavLink>
                    <NavLink
                        to={'/dashboard/blogs'}
                        className='text-white font-medium px-7 py-3'
                        onClick={() => setDashboardSideMenuIndex(false)}
                    >
                        <FormattedMessage id='blogs' />
                    </NavLink>
                    <NavLink
                        to={'/dashboard/users'}
                        className='text-white font-medium px-7 py-3'
                        onClick={() => setDashboardSideMenuIndex(false)}
                    >
                        <FormattedMessage id='users' />
                    </NavLink>
                    <NavLink
                        to={'/dashboard/reviews'}
                        className='text-white font-medium px-7 py-3'
                        onClick={() => setDashboardSideMenuIndex(false)}
                    >
                        <FormattedMessage id='reviews' />
                    </NavLink>
                    <NavLink
                        to={'/dashboard/contact'}
                        className='text-white font-medium px-7 py-3'
                        onClick={() => setDashboardSideMenuIndex(false)}
                    >
                        <FormattedMessage id='contactMessages' />
                    </NavLink>
                </div>
            </div>
        );
    }
};


// import React, { useEffect } from 'react'
// import { FaPlaneDeparture } from "react-icons/fa6";
// import { useRecoilState } from 'recoil';
// import { $dashboardMenuState } from '../../../Store';
// import { NavLink } from 'react-router-dom';
// import { FormattedMessage } from 'react-intl';
// import { IoMdCloseCircleOutline } from "react-icons/io";
// import './DashboardNavSideMenu.scss';
// export const DashboardNavSideMenu = () => {
//     const [dashboardSideMenuIndex, setDashboardSideMenuIndex] = useRecoilState($dashboardMenuState);
//     function closeDashboardSideBar(e) {
//         if (!e.target.closest(".dashboardBarIcon") && !e.target.closest(".dashMenu")) {
//             setDashboardSideMenuIndex(false);
//         }
//     }

//     useEffect(() => {
//         document.addEventListener("click", closeDashboardSideBar);
//     }, []);

//     if (dashboardSideMenuIndex) {
//         return (
//             <div id='dashboardNavSideMenu' className={`w-full h-full bg-cyan-700  dark:bg-[#0c112b] fixed top-0 left-0 p-3 dashMenu z-20 transform transition-transform duration-700 ease-in-out ${dashboardSideMenuIndex ? 'translate-x-0' : 'translate-x-full'}`}>
//                 <div className='flex justify-between'>
//                     <div className='flex gap-5 justify-center items-center'>
//                         <p className='m-0 text-white'>BON VOYAGE</p>
//                         <span className='planeIcon text-white'>
//                             <FaPlaneDeparture size={25} />
//                         </span>
//                     </div>
//                     <button className='btn z-3 px-2 py-1' onClick={() => {
//                         setDashboardSideMenuIndex(false);
//                     }}>
//                         <span className=' text-stone-300'> <IoMdCloseCircleOutline size={25} /> </span>
//                     </button>
//                 </div>

//                 <div className='flex flex-col gap-7 p-3'>
//                     <NavLink to={'/dashboard/home'} className='text-white font-medium px-7 py-3' onClick={() => {
//                         setDashboardSideMenuIndex(false);
//                     }}>
//                         <FormattedMessage id='dashboard' />
//                     </NavLink>
//                     <NavLink to={'/dashboard/tours'} className='text-white font-medium px-7 py-3' onClick={() => {
//                         setDashboardSideMenuIndex(false);
//                     }}>
//                         <FormattedMessage id='tours' />
//                     </NavLink>
//                     <NavLink to={'/dashboard/bookedTours'} className='text-white font-medium px-7 py-3' onClick={() => {
//                         setDashboardSideMenuIndex(false);
//                     }}>
//                         <FormattedMessage id='bookedTours' />
//                     </NavLink>
//                     <NavLink to={'/dashboard/blogs'} className='text-white font-medium px-7 py-3' onClick={() => {
//                         setDashboardSideMenuIndex(false);
//                     }}>
//                         <FormattedMessage id='blogs' />
//                     </NavLink>
//                     <NavLink to={'/dashboard/users'} className='text-white font-medium px-7 py-3' onClick={() => {
//                         setDashboardSideMenuIndex(false);
//                     }}>
//                         <FormattedMessage id='users' />
//                     </NavLink>
//                     <NavLink to={'/dashboard/reviews'} className='text-white font-medium px-7 py-3' onClick={() => {
//                         setDashboardSideMenuIndex(false);
//                     }}>
//                         <FormattedMessage id='reviews' />
//                     </NavLink>
//                     <NavLink to={'/dashboard/contact'} className='text-white font-medium px-7 py-3' onClick={() => {
//                         setDashboardSideMenuIndex(false);
//                     }}>
//                         <FormattedMessage id='contactMessages' />
//                     </NavLink>
//                 </div>
//             </div>
//         )
//     }
// }
