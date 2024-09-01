
import { useRecoilState } from 'recoil';
import { NavLink } from 'react-router-dom';
import { FaPlaneDeparture } from "react-icons/fa6";
import './NavSideMenu.scss';
import { PiUserCircleFill } from "react-icons/pi";
import { $loggedIn, $loggedInModal, $login, $menuState, $theme } from '../../Store';
import { useEffect, useState } from 'react';
import { LoginModal } from '../LoginModal/LoginModal';
import { LoggedClientModal } from '../LoggedClientModal/LoggedClientModal';
import { GrLanguage } from "react-icons/gr";
import { MdLightMode } from "react-icons/md";
import { SlUserFollowing } from "react-icons/sl";
import { FormattedMessage } from 'react-intl';

export default function NavSideMenu() {
    function closeSideBar(e) {
        if (!e.target.closest(".barIcon") && !e.target.closest(".menu")) {
            setSideMenuIndex(false);
        }
    }

    useEffect(() => {
        document.addEventListener("click", closeSideBar);
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

    const [sideMenuIndex, setSideMenuIndex] = useRecoilState($menuState);
    const [loginState, setLoginState] = useRecoilState($login);
    const [colorChange, setColorChange] = useState(false);
    const lang = localStorage.getItem("lang") || "ltr";
    const [theme, settheme] = useRecoilState($theme);
    const [loggedState, setLoggedState] = useRecoilState($loggedIn);
    const [loggedInModalState, setLoggedInModalState] = useRecoilState($loggedInModal)
    if (sideMenuIndex == true) {
        return (
            <div id='navMenu' className='w-[65%] h-full bg-white dark:bg-[#0c112b] fixed top-0  p-3 menu'>
                <div className='flex justify-between'>

                    <div className='flex gap-2 justify-center '>
                        <p>BON VOYAGE</p>
                        <div className='planeIcon'>
                            <FaPlaneDeparture size={25} />

                        </div>
                    </div>
                    <button className='btn z-3 px-2 py-1' onClick={() => {
                        setSideMenuIndex(false);
                    }}>  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                            <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                        </svg></button>
                </div>

                <div className='flex flex-col justify-center align-items-start gap-7 z-3 p-3'>
                    <div className='flex gap-3  items-center'>
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

                </div>
            </div>
        )
    }

}
