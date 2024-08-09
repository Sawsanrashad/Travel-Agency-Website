import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BookedToursTableDashboard } from './BookedToursTableDashboard/BookedToursTableDashboard';
import { FormattedMessage } from 'react-intl';

export const BookedToursDashboard = () => {
    const [bookedTours, setBookedTours] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        axios.get(`http://localhost:3000/bookedTours`)
            .then((response) => {
                setBookedTours(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/bookedTours/${id}`)
            .then((response) => {
                setBookedTours(bookedTours.filter(bookedTour => bookedTour.id !== id));
            })
            .catch((error) => {
                console.error("There was an error deleting the booked tour!", error);
            })
    };
    let content;
    if (isLoading) {
        content = (
            <div className='flex items-center justify-center'>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    } else if (bookedTours.length === 0) {
        content = <h3 className='text-center h-full dark:!text-white py-60 font-medium'> {<FormattedMessage id='noBookedTours' />}</h3>;
    } else {
        content = (
            <div>
                <BookedToursTableDashboard bookedTours={bookedTours} />
            </div>
        );
    }
    return (
        <div>
            {content}
        </div>
    )
}
