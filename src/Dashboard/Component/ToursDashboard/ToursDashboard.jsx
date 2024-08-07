import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { ToursTableDashboard } from './ToursTableDashboard/ToursTableDashboard';
import './ToursDashboard.scss';
import { ClipLoader } from 'react-spinners';
import { EditForm } from './EditForm/EditForm';
import { useRecoilState } from 'recoil';
import { $addFormState } from '../../../Store';
import { AddForm } from './AddForm/AddForm';

export const ToursDashboard = () => {
    const [addForm, setAddForm] = useRecoilState($addFormState);
    const [tours, setTours] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [toursPerPage] = useState(5);

    const handleAddNewTour = (e) => {
        e.stopPropagation();
        console.log('Add New Tour button clicked');
        setAddForm(true);
    };

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
        axios.delete(`http://localhost:3000/allTours/${id}`)
            .then((response) => {
                setTours(tours.filter(tour => tour.id !== id));
            })
            .catch((error) => {
                console.error("There was an error deleting the tour!", error);
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
            <div className='flex items-center justify-center'>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden"><span className="spinner"><ClipLoader /></span></span>
                </div>
            </div>
        );
    } else if (tours.length === 0) {
        content = <h3 className='text-center h-full'> No Tours To Show</h3>;
    } else {
        content = (
            <div>
                <button className='bg-cyan-800 p-2 rounded-md mb-2 text-white addFormButton' onClick={handleAddNewTour}>Add New Tour</button>
                <ToursTableDashboard tours={currentTours} deleteTour={handleDelete} />
                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
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
        <div id='toursDashboard'>
            <AddForm />
            <EditForm />
            {content}
        </div>
    );
};
