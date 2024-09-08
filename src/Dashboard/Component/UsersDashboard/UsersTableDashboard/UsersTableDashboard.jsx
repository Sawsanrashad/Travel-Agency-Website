import React from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { FormattedMessage } from 'react-intl';

export const UsersTableDashboard = ({ users, onDelete }) => {
    return (
        <div className='w-[90%] overflow-x-auto'>
            <table className='min-w-full table-auto border-collapse'>
                <thead>
                    <tr>
                        <th className='border border-slate-300 p-3 dark:!text-white'>-</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'>
                            <FormattedMessage id='clientName' />
                        </th>
                        <th className='border border-slate-300 p-3 dark:!text-white hidden md:table-cell'>
                            <FormattedMessage id='clientEmail' />
                        </th>
                        <th className='border border-slate-300 p-3 dark:!text-white hidden md:table-cell'>
                            <FormattedMessage id='clientPhone' />
                        </th>
                        <th className='border border-slate-300 p-3 dark:!text-white'>
                            <FormattedMessage id='delete' />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td className='tourImage border border-slate-300 p-3 dark:!text-white'>{index + 1}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white'>{user?.name}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white hidden md:table-cell'>{user?.email}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white hidden md:table-cell'>{user?.phone}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white'>
                                <button
                                    className='bg-red-800 p-2 rounded-md'
                                    onClick={() => onDelete(user.id)}
                                >
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
};


// import React from 'react';
// import { RiDeleteBin5Line } from "react-icons/ri";
// import { FormattedMessage } from 'react-intl';

// export const UsersTableDashboard = ({ users, onDelete }) => {
//     return (
//         <div className='w-[90%] overflow-x-auto'>
//             <table className='min-w-full table-auto border-collapse'>
//                 <thead>
//                     <tr>
//                         <th className='border border-slate-300 p-3 dark:!text-white'>-</th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='clientName' />}</th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='clientEmail' />}</th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='clientPhone' />}</th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='delete' />}</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user, index) => (
//                         <tr key={index}>
//                             <td className='tourImage border border-slate-300 p-3 dark:!text-white '>{index + 1}</td>
//                             <td className='border border-slate-300 p-3 dark:!text-white '>{user?.name}</td>
//                             <td className='border border-slate-300 p-3 dark:!text-white'>{user?.email}</td>
//                             <td className='border border-slate-300 p-3 dark:!text-white'>{user?.phone}</td>
//                             <td className='border border-slate-300 p-3 dark:!text-white'>
//                                 <button
//                                     className='bg-red-800 p-2 rounded-md'
//                                     onClick={() => onDelete(user.id)}>
//                                     <span className='text-white'>
//                                         <RiDeleteBin5Line size={20} />
//                                     </span>
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }