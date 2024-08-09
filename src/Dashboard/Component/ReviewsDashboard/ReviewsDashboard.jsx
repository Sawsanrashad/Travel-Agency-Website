import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { ReviewsTableDashboard } from './ReviewsTableDashboard/ReviewsTableDashboard';
import './ReviewsDashboard.scss';
import { FormattedMessage } from 'react-intl';

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
        axios.delete(`http://localhost:3000/reviews/${id}`)
            .then((response) => {
                setReviews(reviews.filter(review => review.id !== id));
            })
            .catch((error) => {
                console.error("There was an error deleting the review!", error);
            });
    };

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    const offset = currentPage * reviewsPerPage;
    const currentReviews = reviews.slice(offset, offset + reviewsPerPage);

    let content;
    if (isLoading) {
        content = (
            <div className='flex items-center justify-center'>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    } else if (reviews.length === 0) {
        content = <h3 className='text-center h-full dark:!text-white py-60 font-medium'>{<FormattedMessage id='noReviewsToShow' />}</h3>;
    } else {
        content = (
            <div>
                <ReviewsTableDashboard reviews={currentReviews} deletReview={handleDelete} />
                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
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


// import React, { useEffect, useState } from 'react'
// // import { ReviewsTableDashboard } from './ReviewsTableDashboard/ReviewsTableDashboard';
// import axios from 'axios';
// import { ReviewsTableDashboard } from './ReviewsTableDashboard/ReviewsTableDashboard';

// export const ReviewsDashboard = () => {
//     const [reviews, setReviews] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//         setIsLoading(true);
//         axios.get(`http://localhost:3000/reviews`)
//             .then((response) => {
//                 setReviews(response.data);
//             })
//             .catch((error) => {
//                 console.error("There was an error fetching the data!", error);
//             })
//             .finally(() => {
//                 setIsLoading(false);
//             });
//     }, []);


//     let content;
//     if (isLoading) {
//         content =
//             <div className='flex items-center justify-center'>
//                 <div className="spinner-border text-primary" role="status">
//                     <span className="visually-hidden">Loading...</span>
//                 </div>
//             </div>;
//     } else if (reviews.length === 0) {
//         content = <h3 className='text-center h-full dark:text-white'> No Reviews To Show</h3>;
//     } else {
//         content =
//             <div className=''>
//                 <ReviewsTableDashboard reviews={reviews} />
//             </div>;
//         return (
//             <div>
//                 {content}
//             </div>
//         )
//     }
// }