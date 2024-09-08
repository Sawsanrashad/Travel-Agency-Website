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


    return (
        <div id='ToursTableDashboard' className='w-[90%] overflow-x-auto'>
            <table className='min-w-full table-auto border-collapse'>
                <thead>
                    <tr>
                        <th className='border border-slate-300 p-3 dark:!text-white'>-</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='image' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='tourTitle' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white hidden md:table-cell'><FormattedMessage id='description' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='duration' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='tourPrice' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='update' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='delete' /></th>
                    </tr>
                </thead>
                <tbody>
                    {tours.map((tour, index) => (
                        <tr key={index}>
                            <td className='border border-slate-300 p-3 dark:!text-white'>{index + 1}</td>
                            <td className='border border-slate-30 p-3'>
                                <img className='w-16 h-16 rounded-md' src={tour[`${langState}`]?.imageUrl} alt="" />
                            </td>
                            <td className='border border-slate-300 p-3 dark:!text-white'>{tour[`${langState}`]?.title}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white hidden md:table-cell'>
                                {tour[`${langState}`]?.description.slice(0, 50)}{tour[`${langState}`]?.description.length > 50 && '...'}
                            </td>
                            <td className='border border-slate-300 p-3 dark:!text-white'>{tour[`${langState}`]?.duration}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white'>${tour[`${langState}`]?.price}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white'>
                                <button className='bg-black p-2 rounded-md block m-auto' onClick={() => setEditForm(tour)}>
                                    <CiEdit size={20} className='text-white' />
                                </button>
                            </td>
                            <td className='border border-slate-300 p-3'>
                                <button className='bg-red-800 p-2 rounded-md block m-auto' onClick={() => deleteTour(tour.id)}>
                                    <RiDeleteBin5Line size={20} className='text-white' />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};


// import React from 'react';
// import './ToursTableDashboard.scss';
// import { RiDeleteBin5Line } from "react-icons/ri";
// import { CiEdit } from "react-icons/ci";
// import { useRecoilState } from 'recoil';
// import { $editFormState, $lang } from '../../../../Store';
// import { FormattedMessage } from 'react-intl';

// export const ToursTableDashboard = ({ tours, deleteTour }) => {
//     const [langState] = useRecoilState($lang);
//     const [editForm, setEditForm] = useRecoilState($editFormState);

//     const handleEditButtonClick = (e) => {
//         e.stopPropagation();
//         console.log('Edit button clicked');
//         setEditForm(true);
//     };

//     return (
//         <div id='ToursTableDashboard' className='w-[80%] md:w-full'>
//             <table className=' border-slate-400 md:w-[95%]'>
//                 <thead>
//                     <tr>
//                         <th className='border border-slate-300 p-3 dark:!text-white'>-</th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='image' /></th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='tourTitle' /></th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='description' /></th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='duration' /></th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='tourPrice' /></th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='update' /></th>
//                         <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='delete' /></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {tours.map((tour, index) => (
//                         <tr key={index}>
//                             <td className='border border-slate-300 p-3 dark:!text-white table__small'>{index + 1}</td>
//                             <td className='tourImage border border-slate-30 p-3'>
//                                 <img className='w-20 h-20 rounded-md' src={tour[`${langState}`]?.imageUrl} alt="" />
//                             </td>
//                             <td className='border border-slate-300 p-3 dark:!text-white'>{tour[`${langState}`]?.title}</td>
//                             <td className='border border-slate-300 p-3 dark:!text-white'>
//                                 {tour[`${langState}`]?.description.slice(0, 50)}{tour[`${langState}`]?.description.length > 50 && '...'}
//                             </td>
//                             <td className='border border-slate-300 p-3 dark:!text-white'>{tour[`${langState}`]?.duration}</td>
//                             <td className='border border-slate-300 p-3 dark:!text-white'>${tour[`${langState}`]?.price}</td>
//                             <td className='border border-slate-300 p-3 dark:!text-white table__small'>
//                                 <button className='bg-black p-2 rounded-md block m-auto' onClick={handleEditButtonClick}>
//                                     <span className='text-white'><CiEdit size={20} /></span>
//                                 </button>
//                             </td>
//                             <td className='border border-slate-300 p-3'>
//                                 <button className='bg-red-800 p-2 rounded-md block m-auto' onClick={() => deleteTour(tour.id)}>
//                                     <span className='text-white'><RiDeleteBin5Line size={20} /></span>
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };