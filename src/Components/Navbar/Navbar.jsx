import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { $login, $menuState, $theme } from '../../Store';
import { FaPlaneDeparture } from "react-icons/fa6";
import { PiUserCircleFill } from "react-icons/pi";
import { FaBarsStaggered } from "react-icons/fa6";
import { FormattedMessage } from 'react-intl';
import { GrLanguage } from "react-icons/gr";
import { MdLightMode } from "react-icons/md";

export default function Navbar() {
    const [sideMenuIndex, setSideMenuIndex] = useRecoilState($menuState);
    const [loginState, setLoginState] = useRecoilState($login);
    const [colorChange, setColorChange] = useState(false);
    const lang = localStorage.getItem("lang") || "ltr";
    const [theme, settheme] = useRecoilState($theme);

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
            <div className='flex gap-2 justify-between items-center'>
                <div className='flex gap-2 justify-center items-center'>
                    <p className='m-0'>BON VOYAGE</p>
                    <span className='planeIcon'>
                        <FaPlaneDeparture size={25} />
                    </span>
                </div>
                <div>
                    <span className='flex lg:hidden barIcon' onClick={() => setSideMenuIndex(true)}>
                        <FaBarsStaggered size={25} />
                    </span>
                </div>
                <div className='hidden lg:flex gap-3 justify-center items-center'>
                    <NavLink to={"/"}><FormattedMessage id='home' /></NavLink>
                    <NavLink to={"/about"}><FormattedMessage id='about' /></NavLink>
                    <NavLink to={"/tours"}><FormattedMessage id='tours' /></NavLink>
                    <NavLink to={"/blog"}><FormattedMessage id='blog' /></NavLink>
                    <NavLink to={"/contact"}><FormattedMessage id='contact' /></NavLink>
                    <span className='Icon' onClick={() => setLoginState(!loginState)}>
                        <PiUserCircleFill size={30} />
                    </span>
                    <span onClick={handleLang} className='Icon'>
                        <GrLanguage size={20} />
                    </span>
                    <span onClick={handleMode} className='Icon'>
                        <label for="theme" class="theme">
                            <span class="theme__toggle-wrap">
                                <input id="theme" class="theme__toggle" type="checkbox" role="switch" name="theme" value="dark" />
                                <span class="theme__fill"></span>
                                <span class="theme__icon">
                                    <span class="theme__icon-part"></span>
                                    <span class="theme__icon-part"></span>
                                    <span class="theme__icon-part"></span>
                                    <span class="theme__icon-part"></span>
                                    <span class="theme__icon-part"></span>
                                    <span class="theme__icon-part"></span>
                                    <span class="theme__icon-part"></span>
                                    <span class="theme__icon-part"></span>
                                    <span class="theme__icon-part"></span>
                                </span>
                            </span>
                        </label>
                    </span>
                </div>
            </div>
        </div>
    );
}
