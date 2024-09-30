import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { $loggedIn, $loggedInModal, $login, $menuState, $theme } from '../../Store';
import { FaPlaneDeparture } from "react-icons/fa6";
import { PiUserCircleFill } from "react-icons/pi";
import { FaBarsStaggered } from "react-icons/fa6";
import { FormattedMessage } from 'react-intl';
import { GrLanguage } from "react-icons/gr";
import { MdLightMode } from "react-icons/md";
import { SlUserFollowing } from "react-icons/sl";
import { LoginModal } from '../LoginModal/LoginModal';
import { LoggedClientModal } from '../LoggedClientModal/LoggedClientModal';

export default function Navbar() {
    const [sideMenuIndex, setSideMenuIndex] = useRecoilState($menuState);
    const [loginState, setLoginState] = useRecoilState($login);
    const [colorChange, setColorChange] = useState(false);
    const lang = localStorage.getItem("lang") || "ltr";
    const [theme, settheme] = useRecoilState($theme);
    const [loggedState, setLoggedState] = useRecoilState($loggedIn);
    const [loggedInModalState, setLoggedInModalState] = useRecoilState($loggedInModal)

    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNavbarColor);
        return () => {
            window.removeEventListener('scroll', changeNavbarColor);
        };
    }, []);

    const handleMode = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        settheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const handleLang = () => {
        const newLang = lang === "ltr" ? "rtl" : "ltr";
        localStorage.setItem("lang", newLang);
        window.location.reload();
    };

    return (
        <div id='navbar' className={colorChange ? 'navbar-color-change  dark:!bg-[#0c112b]' : ''}>
            <div className='flex gap-2 justify-between items-center '>
                <div className='flex gap-2 justify-center items-center'>
                    <p className='m-0'>BON VOYAGE</p>
                    <span className='planeIcon'>
                        <FaPlaneDeparture size={25} />
                    </span>
                </div>
                <div>
                    <span className='flex lg:hidden barIcon' onClick={() => setSideMenuIndex(!sideMenuIndex)}>
                        <FaBarsStaggered size={25} />
                    </span>
                </div>
                <div className='hidden lg:flex gap-3 justify-center items-center'>
                    <NavLink to={"/"} className='dark:text-white'>
                        <FormattedMessage id='home' />
                    </NavLink>
                    <NavLink to={"/about"} className='dark:text-white'>
                        <FormattedMessage id='about' />
                    </NavLink>
                    <NavLink to={"/tours"} className='dark:text-white'>
                        <FormattedMessage id='tours' />
                    </NavLink>
                    <NavLink to={"/blog"} className='dark:text-white'>
                        <FormattedMessage id='blog' />
                    </NavLink>
                    <NavLink to={"/contact"} className='dark:text-white'>
                        <FormattedMessage id='contact'
                        /></NavLink>
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
            </div>
        </div>
    );
}
