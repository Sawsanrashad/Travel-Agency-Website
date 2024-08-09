import './TourDetails.scss';
import Tour from './component/Tour';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { FormattedMessage } from 'react-intl';

export default function TourDetails() {
    const [tours, setTours] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const toursPerPage = 10;

    useEffect(() => {
        setIsLoading(true);
        axios.get(`http://localhost:3000/allTours`)
            .then((response) => {
                setTours(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const displayTours = tours.slice(currentPage * toursPerPage, (currentPage + 1) * toursPerPage);

    let content;
    if (isLoading) {
        content =
            <div className='flex items-center justify-center'>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>;
    } else if (tours.length === 0) {
        content = <h3 className='text-center h-full dark:text-white'> {<FormattedMessage id='noToursToShow' />}</h3>;
    } else {
        content =
            <div className='custom_container flex flex-col h-full'>
                <p>{<FormattedMessage id='chooseYourTour' />}</p>
                <h2 className='dark:!text-white'>{<FormattedMessage id='ourTours' />}</h2>
                <div className='md:grid md:grid-cols-12 items-stretch flex-wrap'>
                    {displayTours.map((tour, index) => (
                        <Tour key={`tour__item__${index}`} col={index === 0 || index === displayTours.length - 1 ? "md:col-span-8" : "md:col-span-4"} tour={tour} />
                    ))}
                </div>
                <div className='flex justify-center items-center'>
                    <ReactPaginate
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={Math.ceil(tours.length / toursPerPage)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    />
                </div>
            </div>;
    }
    return (
        <div id='tourDetails' className='dark:!bg-[#0c112b] '>
            {content}
        </div>
    );
}

