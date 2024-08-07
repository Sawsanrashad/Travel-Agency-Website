
import { useRecoilState } from 'recoil';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import './NavSideMenu.scss';
import { PiUserCircleFill } from "react-icons/pi";
import { $login, $menuState } from '../../Store';
import { useEffect } from 'react';

export default function NavSideMenu() {
    function closeSideBar(e) {
        if (!e.target.closest(".barIcon") && !e.target.closest(".menu")) {
            setSideMenuIndex(false);
        }
    }

    useEffect(() => {
        document.addEventListener("click", closeSideBar);
    }, []);

    const [sideMenuIndex, setSideMenuIndex] = useRecoilState($menuState);
    const [loginState, setLoginState] = useRecoilState($login);
    if (sideMenuIndex == true) {
        return (
            <div id='navMenu' className='w-[65%] h-full bg-white fixed top-0  p-3 menu'>
                <div className='flex justify-between'>

                    <div className='flex gap-2 justify-center '>
                        <p>BON VOYAGE</p>
                        <div>
                            <FontAwesomeIcon icon={faPlaneDeparture} className='planeIcon' />

                        </div>
                    </div>
                    <button className='btn z-3 px-2 py-1' onClick={() => {
                        setSideMenuIndex(false);
                    }}>close</button>
                </div>

                <div className='flex flex-col justify-center align-items-start gap-3 z-3 p-3'>
                    <span className='logIcon' onClick={() => {
                        setLoginState(true);
                    }} ><PiUserCircleFill size={30} />
                    </span>

                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                    <NavLink to={"/tour"}>Tours</NavLink>
                    <NavLink to={"/blog"}>Blog</NavLink>
                    <NavLink to={"/contact"}>Contact</NavLink>

                </div>
            </div>
        )
    }

}
