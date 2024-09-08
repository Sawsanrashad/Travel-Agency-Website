import React from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { FormattedMessage } from 'react-intl';

export const ContactMessagesTableDashboard = ({ messages, deleteMessage }) => {
    return (
        <div className='w-[90%] overflow-x-auto'>
            <table className='min-w-full table-auto border-collapse'>
                <thead>
                    <tr>
                        <th className='border border-slate-300 p-3 dark:!text-white'>-</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='clientName' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='clientEmail' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white hidden md:table-cell'><FormattedMessage id='subject' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white hidden md:table-cell'><FormattedMessage id='message' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='delete' /></th>
                    </tr>
                </thead>

                <tbody>
                    {messages.map((message, index) => (
                        <tr key={index}>
                            <td className='tourImage border border-slate-300 p-3 dark:!text-white'>{index + 1}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white'>{message?.name}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white'>{message?.email}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white hidden md:table-cell'>{message?.subject}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white hidden md:table-cell'>{message?.message}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white'>
                                <button className='bg-red-800 p-2 rounded-md' onClick={() => deleteMessage(message.id)}>
                                    <span className='text-white'><RiDeleteBin5Line size={20} /></span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


// import React from 'react'
// import { RiDeleteBin5Line } from "react-icons/ri";
// import { CiEdit } from "react-icons/ci";
// import { FormattedMessage } from 'react-intl';
// export const ContactMessagesTableDashboard = ({ messages, deleteMessage }) => {
//     return (
//         <div className='w-[90%] overflow-x-auto'>
//             <table className='min-w-full table-auto border-collapse'>
//                 <thead>
//                     <tr>
//                         <th className='border border-slate-300 p-3 dark:!text-white'>-</th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='clientName' />}</th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='clientEmail' />}</th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='subject' />}</th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='message' />}</th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='delete' />}</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {messages.map((message, index) => {
//                         return (
//                             <tr key={index} >
//                                 <td className='tourImage border border-slate-300 p-3  dark:!text-white'>{index + 1}</td>
//                                 <td className='border border-slate-300 p-3  dark:!text-white'>{message?.name}</td>
//                                 <td className=' border border-slate-300 p-3 dark:!text-white'>{message?.email}</td>
//                                 <td className=' border border-slate-300 p-3 dark:!text-white'>{message?.subject}</td>
//                                 <td className=' border border-slate-300 p-3 dark:!text-white'>{message?.message}</td>
//                                 <td className=' border border-slate-300 p-3 dark:!text-white'>
//                                     <button className='bg-red-800  p-2 rounded-md' onClick={() => deleteMessage(message.id)}>
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
