import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { BlogsTableDashboard } from './BlogsTableDashboard/BlogsTableDashboard';
import './BlogsDashboard.scss';
import { FormattedMessage } from 'react-intl';
import { confirmAlert } from 'react-confirm-alert';
import { ToastContainer } from 'react-toastify';
import { Loading } from '../../../Components/Loading/Loading';

export const BlogsDashboard = () => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const blogsPerPage = 3; // Adjust this value based on your needs

    useEffect(() => {
        setIsLoading(true);
        axios.get(`http://localhost:3000/blogs`)
            .then((response) => {
                setBlogs(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const handleDelete = (id) => {
        confirmAlert({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this blog?',
            buttons: [{
                label: 'Yes',
                onClick: () => {
                    axios.delete(`http://localhost:3000/blogs/${id}`).
                        then((response) => {
                            setBlogs(blogs.filter(blog => blog.id !== id));
                            toast.success("Blog deleted successfully", {
                                position: "top-right",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                        })
                        .catch((error) => {
                            console.error("There was an error deleting the blog!", error);
                            toast.error("Error deleting blog", {
                                position: "top-right",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                        });
                }
            },
            {
                label: 'No',
                onClick: () => {
                    // Do nothing if 'No' is clicked
                }
            }
            ]
        })

    };

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const displayBlogs = blogs.slice(currentPage * blogsPerPage, (currentPage + 1) * blogsPerPage);

    let content;
    if (isLoading) {
        content = (
            <Loading />
        );
    } else if (blogs.length === 0) {
        content = <h3 className='text-center h-full dark:text-white py-60 font-medium'>{<FormattedMessage id='noBlogsToShow' />}</h3>;
    } else {
        content = (
            <div className='flex flex-col justify-center items-center w-full'>
                <button className='bg-cyan-800  p-2 rounded-md mb-3 text-white md:w-[20%] mr-7 self-end addFormButton'><FormattedMessage id='addNewBlog' /></button>
                <BlogsTableDashboard blogs={displayBlogs} deleteBlog={handleDelete} />
                <ReactPaginate
                    previousLabel={<FormattedMessage id='previous' />}
                    nextLabel={<FormattedMessage id='next' />}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={Math.ceil(blogs.length / blogsPerPage)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    previousClassName={'page-item'}
                    nextClassName={'page-item'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousLinkClassName={'page-link'}
                    nextLinkClassName={'page-link'}
                    breakLinkClassName={'page-link'}
                />
            </div>
        );
    }
    return (
        <div id='blogs'>
            {content}
        </div>
    );
}
