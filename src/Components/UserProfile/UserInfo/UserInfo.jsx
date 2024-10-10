import React from 'react'
import './UserInfo.scss';
import { CiEdit } from "react-icons/ci";
import { FormattedMessage } from 'react-intl';
import { $editInfo, $loggedIn } from '../../../Store';
import { useRecoilState } from 'recoil';
import { UserInfoEditForm } from './UserInfoEditForm';
export const UserInfo = () => {
    const [editInfo, setEditInfo] = useRecoilState($editInfo);
    const authUser = useRecoilState($loggedIn);

    return (
        <>
            <div id='userInfo' className='custom_container py-5'>
                <div className='flex flex-col gap-7'>
                    <div className='flex gap-3'>
                        <h2 className=' dark:!text-white font-medium md:text-xl'>{<FormattedMessage id='yourRegisteredInfo' />}</h2>
                        <button className='' onClick={() => setEditInfo(true)}>
                            <span className='text-cyan-900 dark:text-white'><CiEdit size={30} /></span>
                        </button>
                    </div>
                    <h3 className=' dark:!text-white font-medium md:text-lg'>{<FormattedMessage id='name' />}: <span className='text-lg'>{authUser[0].name} </span></h3>
                    <h3 className=' dark:!text-white font-medium md:text-lg'>{<FormattedMessage id='email' />}: <span className='text-lg'>{authUser[0].email} </span></h3>
                    <h3 className=' dark:!text-white font-medium md:text-lg'>{<FormattedMessage id='phone' />}: <span className='text-lg'> {authUser[0].phone} </span></h3>
                </div>
            </div>
            <UserInfoEditForm />
        </>
    )
}
