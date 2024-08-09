import React from 'react';
import './ToursTableDashboard.scss';
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { useRecoilState } from 'recoil';
import { $editFormState, $lang } from '../../../../Store';
import { FormattedMessage } from 'react-intl';

export const ToursTableDashboard = ({ tours, deleteTour }) => {
    const [langState] = useRecoilState($lang);
    const [editForm, setEditForm] = useRecoilState($editFormState);

    const handleEditButtonClick = (e) => {
        e.stopPropagation();
        console.log('Edit button clicked');
        setEditForm(true);
    };

    return (
        <div id='ToursTableDashboard' className='flex justify-center items-center'>
            <table className='table-fixed border-collapse border-slate-400 w-[95%]'>
                <thead>
                    <tr>
                        <th className='border border-slate-300 p-3 dark:!text-white'>-</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='image' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='tourTitle' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='description' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='duration' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='tourPrice' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='update' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='delete' /></th>
                    </tr>
                </thead>
                <tbody>
                    {tours.map((tour, index) => (
                        <tr key={index}>
                            <td className='tourImage border border-slate-300 p-3 dark:!text-white'>{index + 1}</td>
                            <td className='tourImage border border-slate-30 p-3'>
                                <img className='w-20 h-20 rounded-md' src={tour[`${langState}`]?.imageUrl} alt="" />
                            </td>
                            <td className='border border-slate-300 p-3 dark:!text-white'>{tour[`${langState}`]?.title}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white'>{tour[`${langState}`]?.description}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white'>{tour[`${langState}`]?.duration}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white'>${tour[`${langState}`]?.price}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white'>
                                <button className='bg-black p-2 rounded-md' onClick={handleEditButtonClick}>
                                    <span className='text-white'><CiEdit size={20} /></span>
                                </button>
                            </td>
                            <td className='border border-slate-300 p-3'>
                                <button className='bg-red-800 p-2 rounded-md' onClick={() => deleteTour(tour.id)}>
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
// import './ToursTableDashboard.scss';
// import { RiDeleteBin5Line } from "react-icons/ri";
// import { CiEdit } from "react-icons/ci";
// import { useRecoilState } from 'recoil';
// import { $editFormState, $lang } from '../../../../Store';
// import { FormattedMessage } from 'react-intl';
// export const ToursTableDashboard = ({ tours, deleteTour }) => {
//     const [langState] = useRecoilState($lang);
//     const [editForm, setEditForm] = useRecoilState($editFormState);
//     return (
//         <div id='ToursTableDashboard'>
//             <table className=' table-fixed border-collapse  border-slate-400 ...'>
//                 <thead>
//                     <tr>
//                         <th className='border border-slate-300 p-3 dark:!text-white'>-</th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='image' />}</th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='tourTitle' />}</th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='description' />}</th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='duration' />}</th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='tourPrice' />}</th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='update' />}</th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='delete' />}</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {tours.map((tour, index) => {
//                         console.log(tour)
//                         return (
//                             <tr key={index} >
//                                 <td className='tourImage border border-slate-300 p-3 dark:!text-white'>{index + 1}</td>
//                                 <td className='tourImage border border-slate-30 p-3 '>
//                                     <img className='w-20 h-20 rounded-md' src={tour[`${langState}`]?.imageUrl} alt="" />
//                                 </td>
//                                 <td className='border border-slate-300 p-3  dark:!text-white'>{tour[`${langState}`]?.title}</td>
//                                 <td className=' border border-slate-300 p-3 dark:!text-white'>{tour[`${langState}`]?.description}</td>
//                                 <td className=' border border-slate-300 p-3 dark:!text-white'>{tour[`${langState}`]?.duration}</td>
//                                 <td className=' border border-slate-300 p-3 dark:!text-white'>${tour[`${langState}`]?.price}</td>
//                                 <td className=' border border-slate-300 p-3 dark:!text-white' >
//                                     <button className=' bg-black p-2  rounded-md'
//                                         onClick={() => {
//                                             setEditForm(true);
//                                         }}
//                                     >
//                                         <span className='text-white'><CiEdit size={20} /></span>
//                                     </button>
//                                 </td>
//                                 <td className=' border border-slate-300 p-3'>
//                                     <button className='bg-red-800  p-2 rounded-md'
//                                         onClick={() => deleteTour(tour.id)}
//                                     >
//                                         <span className='text-white'><RiDeleteBin5Line size={20} /></span>
//                                     </button>
//                                 </td>
//                             </tr>
//                         )
//                     }
//                     )}

//                 </tbody>
//             </table>
//         </div >
//     )
// }
