import React, { useEffect } from 'react';
import './LoginModal.scss';
import { useRecoilState } from 'recoil';
import { $login } from '../../Store';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export const LoginModal = () => {
    const [loginState, setLoginState] = useRecoilState($login);

    if (loginState) {
        return (
            <>

                <div id='loginModal' className='col-4 col-lg-2 flex flex-col p-3 bg-white absolute gap-3 rounded-md UserIcon' >
                    <Link to="/login"><FormattedMessage id='login' /></Link>
                    <Link to="/register"><FormattedMessage id='signUp' /></Link>
                </div>

            </>
        )
    }
}


// import React, { useEffect } from 'react'
// import './LoginModal.scss';
// import { useRecoilState } from 'recoil';
// import { $login } from '../../Store';
// import { Link } from 'react-router-dom';
// import { FormattedMessage } from 'react-intl';
// export const LoginModal = () => {

//     function closeSideBar(e) {
//         if (!e.target.closest(".logIcon") && !e.target.closest(".UserIcon")) {
//             setLoginState(false);
//         }
//     }

//     useEffect(() => {
//         document.addEventListener("click", closeSideBar);
//     }, []);

//     const [loginState, setLoginState] = useRecoilState($login);

//     return (
//         <>
//             {loginState &&
//                 <div id='loginModal' className='col-4 col-lg-2 flex flex-col p-3 bg-white fixed gap-3 rounded-md UserIcon'>
//                     <Link to="/login">{<FormattedMessage id='login' />}</Link>
//                     <Link to="/register">{<FormattedMessage id='signUp' />}</Link>
//                 </div>
//             }

//         </>
//     )
// }
