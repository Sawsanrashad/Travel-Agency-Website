import React from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { FormattedMessage } from 'react-intl';

export const UsersTableDashboard = ({ users, onDelete }) => {
    return (
        <div className='flex justify-center '>
            <table className='table-fixed border-collapse border-spacing-9 border-slate-400 mt-6 w-[90%]'>
                <thead>
                    <tr>
                        <th className='border border-slate-300 p-3 dark:!text-white'>-</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='clientName' />}</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='clientEmail' />}</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='clientPhone' />}</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='delete' />}</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td className='tourImage border border-slate-300 p-3 dark:!text-white '>{index + 1}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white '>{user?.name}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white'>{user?.email}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white'>{user?.phone}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white'>
                                <button
                                    className='bg-red-800 p-2 rounded-md'
                                    onClick={() => onDelete(user.id)}>
                                    <span className='text-white'>
                                        <RiDeleteBin5Line size={20} />
                                    </span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


// import React from 'react'
// import { RiDeleteBin5Line } from "react-icons/ri";
// import { CiEdit } from "react-icons/ci";
// export const UsersTableDashboard = ({ users }) => {
//     return (
//         <div>
//             <table className=' table-fixed border-collapse border-spacing-9  border-slate-400 ...'>
//                 <thead>
//                     <tr>
//                         {/* <th className='border border-slate-300 p-3'>User Picture</th> */}

//                         <th className='border border-slate-300 p-3'>-</th>
//                         <th className='border border-slate-300 p-3'>User Name</th>
//                         <th className='border border-slate-300 p-3'>User Email</th>
//                         <th className='border border-slate-300 p-3'>User Phone</th>
//                         <th className='border border-slate-300 p-3'>Delete</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {users.map((user, index) => {
//                         return (
//                             <tr key={index} >
//                                 <td className='tourImage border border-slate-300 p-3 '>{index + 1}</td>
//                                 {/* <td className='reviewsImage border border-slate-300 p-3 '><img src={user?.img} alt="" width={'100px'} height={'100px'} /></td> */}
//                                 <td className='border border-slate-300 p-3 '>{user?.name}</td>
//                                 <td className=' border border-slate-300 p-3'>{user?.email}</td>
//                                 <td className=' border border-slate-300 p-3'>{user?.phone}</td>
//                                 <td className=' border border-slate-300 p-3'>
//                                     <button className='bg-red-800  p-2 rounded-md'>
//                                         <span className='text-white'><RiDeleteBin5Line size={20} /></span>
//                                     </button>
//                                 </td>
//                             </tr>
//                         )
//                     }
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     )
// }
