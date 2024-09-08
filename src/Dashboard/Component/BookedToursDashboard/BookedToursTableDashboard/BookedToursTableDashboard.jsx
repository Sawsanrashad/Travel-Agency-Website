import React from 'react';
import { $lang } from '../../../../Store';
import { useRecoilState } from 'recoil';
import { FormattedMessage } from 'react-intl';
import { RiDeleteBin5Line } from 'react-icons/ri';

export const BookedToursTableDashboard = ({ bookedTours, deleteBookedTour }) => {
    const [langState] = useRecoilState($lang);
    return (
        <div className='w-[90%] overflow-x-auto'>
            <table className='min-w-full table-auto border-collapse'>
                <thead>
                    <tr>
                        <th className='border border-slate-300 p-3 dark:!text-white'>-</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='image' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='tourTitle' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white hidden md:table-cell'><FormattedMessage id='clientName' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white hidden md:table-cell'><FormattedMessage id='clientEmail' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='tourPrice' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white hidden md:table-cell'><FormattedMessage id='bookedDate' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white hidden md:table-cell'><FormattedMessage id='paymentDate' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='delete' /></th>
                    </tr>
                </thead>
                <tbody>
                    {bookedTours.map((bookedTour, index) => (
                        <tr key={index}>
                            <td className='tourImage border border-slate-300 p-3 dark:!text-white'>{index + 1}</td>
                            <td className='tourImage border border-slate-30 p-3 dark:!text-white'>
                                <img className='w-16 h-16 rounded-md object-cover' src={bookedTour?.tourImage} alt="" />
                            </td>
                            <td className='border border-slate-300 p-3 dark:!text-white'>{bookedTour?.tourTitle}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white hidden md:table-cell'>{bookedTour?.clientName}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white hidden md:table-cell'>{bookedTour?.clientEmail}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white'>${bookedTour?.tourPrice}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white hidden md:table-cell'>{bookedTour?.bookedDate}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white hidden md:table-cell'>{bookedTour?.paymentDate}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white'>
                                <button className='bg-red-800 p-2 rounded-md' onClick={() => deleteBookedTour(bookedTour.id)}>
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


// import React from 'react';
// import { $lang } from '../../../../Store';
// import { useRecoilState } from 'recoil';
// import { FormattedMessage } from 'react-intl';
// import { RiDeleteBin5Line } from 'react-icons/ri';

// export const BookedToursTableDashboard = ({ bookedTours, deleteBookedTour }) => {
//     const [langState] = useRecoilState($lang);
//     return (
//         <div className='w-[90%] overflow-x-auto'>
//             <table className='min-w-full table-auto border-collapse'>
//                 <thead>
//                     <tr>
//                         <th className='border border-slate-300 p-3 dark:!text-white'>-</th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='image' /></th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='tourTitle' /></th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='clientName' /></th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='clientEmail' /></th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='tourPrice' /></th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='bookedDate' /></th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='paymentDate' /></th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='delete' /></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {bookedTours.map((bookedTour, index) => (
//                         <tr key={index}>
//                             <td className='tourImage border border-slate-300 p-3 dark:!text-white'>{index + 1}</td>
//                             <td className='tourImage border border-slate-30 p-3 dark:!text-white'>
//                                 <img className='w-20 h-20 rounded-md' src={bookedTour?.tourImage} alt="" />
//                             </td>
//                             <td className='border border-slate-300 p-3 dark:!text-white'>{bookedTour?.tourTitle}</td>
//                             <td className='border border-slate-300 p-3 dark:!text-white'>{bookedTour?.clientName}</td>
//                             <td className='border border-slate-300 p-3 dark:!text-white'>{bookedTour?.clientEmail}</td>
//                             <td className='border border-slate-300 p-3 dark:!text-white'>${bookedTour?.tourPrice}</td>
//                             <td className='border border-slate-300 p-3 dark:!text-white'>{bookedTour?.bookedDate}</td>
//                             <td className='border border-slate-300 p-3 dark:!text-white'>{bookedTour?.paymentDate}</td>
//                             <td className='border border-slate-300 p-3 dark:!text-white'>
//                                 <button className='bg-red-800 p-2 rounded-md' onClick={() => deleteBookedTour(bookedTour.id)}>
//                                     <span className='text-white'><RiDeleteBin5Line size={20} /></span>
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}

//                 </tbody>
//             </table>
//         </div>
//     )
// }
