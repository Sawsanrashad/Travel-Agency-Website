import React from 'react'
import { $lang } from '../../../../Store';
import { useRecoilState } from 'recoil';

export const BookedToursTableDashboard = (bookedTours, deleteBookedTour) => {
    const [langState] = useRecoilState($lang);
    return (
        <div>
            <table className=' table-fixed border-collapse  border-slate-400'>
                <thead>
                    <tr>
                        <th className='border border-slate-300 p-3 dark:!text-white'>-</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='image' />}</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='tourTitle' />}</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='clientName' />}</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='clientEmail' />}</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='tourPrice' />}</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='delete' />}</th>
                    </tr>
                </thead>

                <tbody>
                    {bookedTours.map((bookedTour, index) => {
                        console.log(tour)
                        return (
                            <tr key={index} >
                                <td className='tourImage border border-slate-300 p-3  dark:!text-white'>{index + 1}</td>
                                <td className='tourImage border border-slate-30 p-3  dark:!text-white'>
                                    <img className='w-20 h-20 rounded-md' src={bookedTour[`${langState}`]?.imageUrl} alt="" />
                                </td>
                                <td className='border border-slate-300 p-3  dark:!text-white'>{bookedTour[`${langState}`]?.title}</td>
                                <td className=' border border-slate-300 p-3 dark:!text-white'>{bookedTour[`${langState}`]?.name}</td>
                                <td className=' border border-slate-300 p-3 dark:!text-white'>{bookedTour[`${langState}`]?.email}</td>
                                <td className=' border border-slate-300 p-3 dark:!text-white'>${bookedTour[`${langState}`]?.price}</td>
                                <td className=' border border-slate-300 p-3 dark:!text-white'>
                                    <button className='bg-red-800  p-2 rounded-md' onClick={() => deleteBookedTour(bookedTour.id)}>
                                        <span className='text-white'><RiDeleteBin5Line size={20} /></span>
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                    )}

                </tbody>
            </table>
        </div>
    )
}
