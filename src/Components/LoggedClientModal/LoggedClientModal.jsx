import React from 'react';
import { useRecoilState } from 'recoil';
import { $loggedInModal } from '../../Store';
import { IoLogOutOutline } from "react-icons/io5";
import './LoggedClientModal.scss';

export const LoggedClientModal = () => {
    const [loggedInModalState, setLoggedInModalState] = useRecoilState($loggedInModal);
    const handleClearStorage = () => {
        localStorage.clear();
        setLoggedInModalState(false);
    };
    let name = '';
    let email = '';
    const authUser = localStorage.getItem('AuthUser');
    if (authUser) {
        name = JSON.parse(authUser).name;
        email = JSON.parse(authUser).email;
    }

    if (loggedInModalState) {
        return (
            <div id='loggedModal' className='col-4 col-lg-2 flex flex-col p-3 bg-white absolute top-0 gap-3 rounded-md loggedUserIcon'>
                <h2>{name}</h2>
                <h2>{email}</h2>
                <div className='separator w-full h-[1px] bg-slate-300'></div>
                <div className='flex gap-3  items-center cursor-pointer' onClick={handleClearStorage}>
                    <p className=''>Logout</p>
                    <span>
                        <IoLogOutOutline size={25} />
                    </span>
                </div>
            </div>
        );
    }
    return null;
};



// import React from 'react'
// import { useRecoilState } from 'recoil'
// import { $loggedInModal } from '../../Store';
// import './LoggedClientModal.scss';

// export const LoggedClientModal = () => {
//     const [loggedInModalState, setLoggedInModalState] = useRecoilState($loggedInModal);
//     let name = localStorage.getItem('AuthUser', JSON.parse(response.data[0].name));
//     if (loggedInModalState) {
//         return (
//             <>
//                 <div id='loggedModal' className='col-4 col-lg-2 flex flex-col p-3 bg-white absolute top-0 gap-3 rounded-md loggedUserIcon' >
//                     <h2>{name}</h2>
//                 </div>

//             </>
//         )
//     }
// }
