import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { useRecoilState } from 'recoil';
import { $lang } from '../../../../Store';
import { FormattedMessage } from 'react-intl';
export const BlogsTableDashboard = ({ blogs, deleteBlog }) => {
    const [langState] = useRecoilState($lang);
    return (
        <div className='flex justify-center'>
            <table className=' table-fixed border-collapse border-spacing-9  border-slate-400 w-[95%]'>
                <thead>
                    <tr>
                        <th className='border border-slate-300 p-3 dark:!text-white'>-</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='image' />}</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='title' />}</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='description' />}</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='date' />}</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='update' />}</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'>{<FormattedMessage id='delete' />}</th>
                    </tr>
                </thead>

                <tbody>
                    {blogs.map((blog, index) => {
                        return (
                            <tr key={index} >
                                <td className='tourImage border border-slate-300 p-3  dark:!text-white'>{index + 1}</td>
                                <td className='reviewsImage border border-slate-300 p-3 '><img src={blog[`${langState}`]?.image} alt="" width={'100px'} height={'100px'} /></td>
                                <td className='border border-slate-300 p-3 dark:!text-white '>{blog[`${langState}`]?.title}</td>
                                <td className=' border border-slate-300 p-3 dark:!text-white'>{blog[`${langState}`]?.description}</td>
                                <td className=' border border-slate-300 p-3 dark:!text-white'>{blog[`${langState}`]?.date}</td>
                                <td className=' border border-slate-300 p-3 dark:!text-white'>
                                    <button className=' bg-black p-2  rounded-md'>
                                        <span className='text-white'><CiEdit size={20} /></span>
                                    </button>
                                </td>
                                <td className=' border border-slate-300 p-3'>
                                    <button className='bg-red-800  p-2 rounded-md'
                                        onClick={() => deleteBlog(blog.id)}
                                    >
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
