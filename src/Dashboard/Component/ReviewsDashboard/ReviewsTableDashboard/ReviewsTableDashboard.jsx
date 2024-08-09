import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { FormattedMessage } from 'react-intl';
export const ReviewsTableDashboard = ({ reviews, deletReview }) => {
    return (
        <div className='flex justify-center'>
            <table className=' table-fixed border-collapse border-spacing-9  border-slate-400 mt-6 w-[90%]'>
                <thead>
                    <tr>
                        <th className='border border-slate-300 p-3 dark:!text-white'>-</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='image' />}</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='clientName' />}</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='tourTitle' />}</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='comment' />}</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='delete' />}</th>
                    </tr>
                </thead>

                <tbody>
                    {reviews.map((review, index) => {
                        return (
                            <tr key={index} >
                                <td className='tourImage border border-slate-300 p-3 dark:!text-white '>{index + 1}</td>
                                <td className='reviewsImage border border-slate-300 p-3 '>
                                    <img className='w-20 h-20' src={review?.img} alt="" />
                                </td>
                                <td className='border border-slate-300 p-3 dark:!text-white '>{review?.name}</td>
                                <td className=' border border-slate-300 p-3 dark:!text-white'>{review?.tourid}</td>
                                <td className=' border border-slate-300 p-3 dark:!text-white'>{review?.comment}</td>
                                <td className=' border border-slate-300 p-3 dark:!text-white'>
                                    <button className='bg-red-800  p-2 rounded-md' onClick={() => deletReview(review.id)}>
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
