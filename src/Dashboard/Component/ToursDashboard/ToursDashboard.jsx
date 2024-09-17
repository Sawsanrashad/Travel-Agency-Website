import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { ToursTableDashboard } from './ToursTableDashboard/ToursTableDashboard';
import './ToursDashboard.scss';
import { ClipLoader } from 'react-spinners';
import { EditForm } from './EditForm/EditForm';
import { useRecoilState } from 'recoil';
import { $addFormState, $tours } from '../../../Store';
import { AddForm } from './AddForm/AddForm';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { FormattedMessage } from 'react-intl';
import { Loading } from '../../../Components/Loading/Loading';

export const ToursDashboard = () => {
    const [addForm, setAddForm] = useRecoilState($addFormState);
    const [tours, setTours] = useRecoilState($tours);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [toursPerPage] = useState(4);


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

    const handleDelete = (id) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure you want to delete this tour?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        axios.delete(`http://localhost:3000/allTours/${id}`)
                            .then(() => {
                                setTours(tours.filter(tour => tour.id !== id));
                                toast.success("Tour deleted successfully", {
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
                                console.error("There was an error deleting the tour!", error);
                                toast.error("Error deleting tour", {
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
                }
            ]
        });
    };

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    const offset = currentPage * toursPerPage;
    const currentTours = tours.slice(offset, offset + toursPerPage);

    let content;
    if (isLoading) {
        content = (
            <Loading />
        );
    } else if (tours.length === 0) {
        content = <h3 className='text-center h-full py-60 font-medium dark:text-white'>{<FormattedMessage id='noToursToshow' />}</h3>;
    } else {
        content = (
            <div className='flex flex-col w-full justify-center items-center'>
                <button className='bg-cyan-800 p-2 rounded-md mb-3 text-white addFormButton self-end lg:w-[20%] md:mr-7 hover:bg-sky-950' onClick={() => setAddForm(true)}>{<FormattedMessage id='addNewTour' />}</button>
                <ToursTableDashboard tours={currentTours} deleteTour={handleDelete} />
                <ReactPaginate
                    previousLabel={<FormattedMessage id='previous' />}
                    nextLabel={<FormattedMessage id='next' />}
                    breakLabel={"..."}
                    pageCount={Math.ceil(tours.length / toursPerPage)}
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
        <div id='toursDashboard' className='w-full flex flex-col justify-center items-center'>
            <AddForm />
            <EditForm />
            {content}
        </div>
    );
};