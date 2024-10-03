import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { ReviewsTableDashboard } from './ReviewsTableDashboard/ReviewsTableDashboard';
import './ReviewsDashboard.scss';
import { FormattedMessage } from 'react-intl';
import { confirmAlert } from 'react-confirm-alert';
import { ToastContainer } from 'react-toastify';
import { Loading } from '../../../Components/Loading/Loading';

export const ReviewsDashboard = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [reviewsPerPage] = useState(4);
    useEffect(() => {
        setIsLoading(true);
        axios.get(`http://localhost:3000/reviews`)
            .then((response) => {
                setReviews(response.data);
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
            message: 'Are you sure you want to delete this review?',
            buttons: [{
                label: 'Yes',
                onClick: () => {
                    axios.delete(`http://localhost:3000/reviews/${id}`)
                        .then((response) => {
                            setReviews(reviews.filter(review => review.id !== id));
                            toast.success("Review deleted successfully", {
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
                            console.error("There was an error deleting the review!", error);
                            toast.error("Error deleting review", {
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
            }
            ]
        })

    };

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    const offset = currentPage * reviewsPerPage;
    const currentReviews = reviews.slice(offset, offset + reviewsPerPage);

    let content;
    if (isLoading) {
        content = (
            <Loading />
        );
    } else if (reviews.length === 0) {
        content = <h3 className='text-center h-full dark:!text-white py-60 font-medium'>{<FormattedMessage id='noReviewsToShow' />}</h3>;
    } else {
        content = (
            <div className='flex flex-col w-full justify-center items-center'>
                <ReviewsTableDashboard reviews={currentReviews} deletReview={handleDelete} />
                <ReactPaginate
                    previousLabel={<FormattedMessage id='previous' />}
                    nextLabel={<FormattedMessage id='next' />}
                    breakLabel={"..."}
                    pageCount={Math.ceil(reviews.length / reviewsPerPage)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                />
            </div>
        );
    }

    return (
        <div id='reviewDashboard'>
            {content}
        </div>
    );
};