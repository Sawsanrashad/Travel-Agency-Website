import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { BlogsTableDashboard } from './BlogsTableDashboard/BlogsTableDashboard';
import './BlogsDashboard.scss';
import { FormattedMessage } from 'react-intl';

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
        axios.delete(`http://localhost:3000/blogs/${id}`).
            then((response) => {
                setBlogs(blogs.filter(blog => blog.id !== id));
            })
            .catch((error) => {
                console.error("There was an error deleting the blog!", error);
            });
    };

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const displayBlogs = blogs.slice(currentPage * blogsPerPage, (currentPage + 1) * blogsPerPage);

    let content;
    if (isLoading) {
        content = (
            <div className='flex items-center justify-center'>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    } else if (blogs.length === 0) {
        content = <h3 className='text-center h-full dark:text-white'>{<FormattedMessage id='noBlogsToShow' />}</h3>;
    } else {
        content = (
            <div>
                <button className='bg-cyan-800  p-2 rounded-md mb-2 text-white '>Add New Blog</button>
                <BlogsTableDashboard blogs={displayBlogs} deleteBlog={handleDelete} />
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
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
