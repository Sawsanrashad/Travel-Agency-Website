import React, { useEffect } from 'react';
import './LoginModal.scss';
import { useRecoilState } from 'recoil';
import { $login } from '../../Store';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export const LoginModal = () => {
    const [loginState, setLoginState] = useRecoilState($login);
    function closeLoginModal(e) {
        if (!e.target.closest(".logIcon") && !e.target.closest(".UserIcon")) {
            setLoginState(false);
        }
    }

    useEffect(() => {
        document.addEventListener("click", closeLoginModal);
        return () => {
            document.removeEventListener("click", closeLoginModal);
        };
    }, []);
    if (loginState) {
        return (
            <>
                <div id='loginModal' className='flex flex-col p-3 bg-white absolute gap-3 rounded-md UserIcon min-w-[100px]' >
                    <Link to="/login"><FormattedMessage id='login' /></Link>
                    <Link to="/register"><FormattedMessage id='signUp' /></Link>
                </div>

            </>
        )
    }
}
