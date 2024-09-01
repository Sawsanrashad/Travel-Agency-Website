import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { $loggedIn, $loggedInModal } from '../../Store';
import { IoLogOutOutline } from "react-icons/io5";
import './LoggedClientModal.scss';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

export const LoggedClientModal = () => {
    const [loggedInModalState, setLoggedInModalState] = useRecoilState($loggedInModal);
    const [loggedState, setLoggedState] = useRecoilState($loggedIn);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest(".loggedUser") && !e.target.closest(".loggedInUserIcon")) {
                setLoggedInModalState(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleClearStorage = () => {
        localStorage.clear();
        setLoggedInModalState(false);
        setLoggedState("")
    };

    if (loggedInModalState) {
        return (
            <div id='loggedModal' className='col-4 col-lg-2 flex flex-col p-3 bg-white absolute top-0 gap-3 rounded-md loggedInUserIcon border'>
                <h2 className='text-black'>{loggedState.name}</h2>
                <h2 className='text-black'>{loggedState.email}</h2>
                <Link to={'/profile'} className={`${loggedState.role == 'user' ? "block" : "hidden"}`}>
                    <h2 className='text-black'>My Profile</h2>
                </Link>
                <div className='separator w-full h-[1px] bg-slate-300'></div>
                <div className='flex gap-3  items-center cursor-pointer text-black' onClick={handleClearStorage}>
                    <p className='!text-black !text-base'>{<FormattedMessage id='logout' />}</p>
                    <span>
                        <IoLogOutOutline size={25} />
                    </span>
                </div>
            </div>
        );
    }
    return null;
};
