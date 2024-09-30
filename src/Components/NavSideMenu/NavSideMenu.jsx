import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { NavLink } from 'react-router-dom';
import { FaPlaneDeparture } from "react-icons/fa6";
import { PiUserCircleFill } from "react-icons/pi";
import { $loggedIn, $loggedInModal, $login, $menuState, $theme } from '../../Store';
import { LoginModal } from '../LoginModal/LoginModal';
import { LoggedClientModal } from '../LoggedClientModal/LoggedClientModal';
import { GrLanguage } from "react-icons/gr";
import { MdLightMode } from "react-icons/md";
import { SlUserFollowing } from "react-icons/sl";
import { FormattedMessage } from 'react-intl';
import { IoMdCloseCircleOutline } from "react-icons/io";
import './NavSideMenu.scss';

export default function NavSideMenu() {
    const [sideMenuIndex, setSideMenuIndex] = useRecoilState($menuState);
    const [loginState, setLoginState] = useRecoilState($login);
    const [theme, settheme] = useRecoilState($theme);
    const [loggedState, setLoggedState] = useRecoilState($loggedIn);
    const [loggedInModalState, setLoggedInModalState] = useRecoilState($loggedInModal);

    useEffect(() => {
        document.addEventListener("click", closeSideBar);
        return () => document.removeEventListener("click", closeSideBar);
    }, []);

    function closeSideBar(e) {
        if (!e.target.closest(".barIcon") && !e.target.closest(".menu")) {
            setSideMenuIndex(false);
        }
    }

    const handleMode = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        settheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const handleLang = () => {
        const newLang = localStorage.getItem("lang") === "ltr" ? "rtl" : "ltr";
        localStorage.setItem("lang", newLang);
        window.location.reload();
    };
    if (sideMenuIndex == true) {
        return (
            <div
                id='navMenu'
                className={`w-full md:w-[75%] h-full bg-slate-200 dark:bg-[#0c112b] fixed top-0 p-3 menu transform transition-transform duration-700 ${sideMenuIndex ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className='flex justify-between'>
                    <div className='flex gap-2 justify-center '>
                        <p>BON VOYAGE</p>
                        <div className='planeIcon'>
                            <FaPlaneDeparture size={25} />
                        </div>
                    </div>
                    <button className='btn z-3 px-2 py-1' onClick={() => setSideMenuIndex(false)}>
                        <span className=' text-teal-700 dark:text-stone-300'>
                            <IoMdCloseCircleOutline size={25} />
                        </span>
                    </button>
                </div>

                <div className='flex flex-col justify-center align-items-start gap-14 z-3 p-3'>
                    <div className='flex gap-3 items-center justify-between'>
                        <span className={`Icon relative logIcon ${loggedState ? 'hidden' : 'block'}`} onClick={() => setLoginState(!loginState)} >
                            <PiUserCircleFill size={30} />
                            <LoginModal />
                        </span>
                        <span className={`Icon relative loggedUser ${loggedState ? 'block' : 'hidden'}`} onClick={() => setLoggedInModalState(!loggedInModalState)} >
                            <SlUserFollowing size={25} />
                            <LoggedClientModal />
                        </span>
                        <span onClick={handleLang} className='Icon'>
                            <GrLanguage size={20} />
                        </span>
                        <span onClick={handleMode} className='Icon'>
                            <MdLightMode size={25} />
                        </span>
                    </div>
                    <NavLink to={"/"} className='dark:text-white' onClick={() => setSideMenuIndex(false)}>
                        <FormattedMessage id='home' />
                    </NavLink>
                    <NavLink to={"/about"} className='dark:text-white' onClick={() => setSideMenuIndex(false)}>
                        <FormattedMessage id='about' />
                    </NavLink>
                    <NavLink to={"/tours"} className='dark:text-white' onClick={() => setSideMenuIndex(false)}>
                        <FormattedMessage id='tours' />
                    </NavLink>
                    <NavLink to={"/blog"} className='dark:text-white' onClick={() => setSideMenuIndex(false)}>
                        <FormattedMessage id='blog' />
                    </NavLink>
                    <NavLink to={"/contact"} className='dark:text-white' onClick={() => setSideMenuIndex(false)}>
                        <FormattedMessage id='contact' />
                    </NavLink>
                </div>
            </div>
        );
    }
}