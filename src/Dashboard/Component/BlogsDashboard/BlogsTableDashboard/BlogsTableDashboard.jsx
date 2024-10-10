import React from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { useRecoilState } from 'recoil';
import { $editBlog, $lang } from '../../../../Store';
import { FormattedMessage } from 'react-intl';

export const BlogsTableDashboard = ({ blogs, deleteBlog }) => {
    const [langState] = useRecoilState($lang);
    const [editBlog, setEditBlog] = useRecoilState($editBlog);
    return (
        <div className='w-[90%] overflow-x-auto'>
            <table className='min-w-full table-auto border-collapse'>
                <thead>
                    <tr>
                        <th className='border border-slate-300 p-3 dark:!text-white'>-</th>
                        <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='image' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='title' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white hidden md:table-cell'><FormattedMessage id='description' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white hidden md:table-cell'><FormattedMessage id='date' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='update' /></th>
                        <th className='border border-slate-300 p-3 dark:!text-white'><FormattedMessage id='delete' /></th>
                    </tr>
                </thead>

                <tbody>
                    {blogs.map((blog, index) => (
                        <tr key={index}>
                            <td className='tourImage border border-slate-300 p-3 dark:!text-white'>{index + 1}</td>
                            <td className='reviewsImage border border-slate-300 p-3'>
                                <img className='w-16 h-16 object-cover rounded-md' src={blog[`${langState}`]?.image} alt="" />
                            </td>
                            <td className='border border-slate-300 p-3 dark:!text-white'>{blog[`${langState}`]?.title}</td>
                            <td className='border border-slate-300 p-3 dark:!text-white hidden md:table-cell'>
                                {blog[`${langState}`].description[0]}
                            </td>
                            <td className='border border-slate-300 p-3 dark:!text-white hidden md:table-cell'>
                                {blog[`${langState}`]?.date}
                            </td>
                            <td className='border border-slate-300 p-3 dark:!text-white'>
                                <button className='bg-black p-2 rounded-md' onClick={() => setEditBlog(blog)}>
                                    <span className='text-white'><CiEdit size={20} /></span>
                                </button>
                            </td>
                            <td className='border border-slate-300 p-3'>
                                <button className='bg-red-800 p-2 rounded-md' onClick={() => deleteBlog(blog.id)}>
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

