import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BookedToursTableDashboard } from './BookedToursTableDashboard/BookedToursTableDashboard';
import { FormattedMessage } from 'react-intl';
import { confirmAlert } from 'react-confirm-alert';
import { ToastContainer } from 'react-toastify';
import { Loading } from '../../../Components/Loading/Loading';
import './BookedToursDashboard.scss';
export const BookedToursDashboard = () => {
    const [bookedTours, setBookedTours] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        axios.get(`http://localhost:3000/bookedTours`)
            .then((response) => {
                console.log(response.data);
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
        confirmAlert({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this booked tour',
            buttons: [{
                label: 'Yes',
                onClick: () => {
                    axios.delete(`http://localhost:3000/bookedTours/${id}`)
                        .then((response) => {
                            setBookedTours(bookedTours.filter(bookedTour => bookedTour.id !== id));
                            toast.success("Booked Tour deleted successfully", {
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
                            console.error("There was an error deleting the booked tour!", error);
                            toast.error("Error deleting the booked tour", {
                                position: "top-right",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                        })
                }
            },
            {
                label: 'No',
                onClick: () => {
                    // Do nothing if 'No' is clicked
                }
            }],
        })

    };
    let content;
    if (isLoading) {
        content = (
            <Loading />
        );
    } else if (bookedTours.length === 0) {
        content = <h3 className='text-center h-full dark:!text-white py-60 font-medium'> {<FormattedMessage id='noBookedTours' />}</h3>;
    } else {
        content = (
            <div className='flex flex-col w-full justify-center items-center'>
                <BookedToursTableDashboard bookedTours={bookedTours} deleteBookedTour={handleDelete} />
            </div>
        );
    }
    return (
        <div id='bookedToursDashboard'>
            {content}
        </div>
    )
}
