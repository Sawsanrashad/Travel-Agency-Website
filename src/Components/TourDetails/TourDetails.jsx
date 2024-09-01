import './TourDetails.scss';
import Tour from './component/Tour';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { FormattedMessage } from 'react-intl';
import { SearchForm } from '../SearchForm/SearchForm';
import { useRecoilState } from 'recoil';
import { $lang } from '../../Store';
import { Loading } from '../Loading/Loading';

export default function TourDetails() {
    const [langState] = useRecoilState($lang);
    const [tours, setTours] = useState([]);
    const [filteredTours, setFilteredTours] = useState([]); // State for filtered tours
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const toursPerPage = 10;

    useEffect(() => {
        setIsLoading(true);
        axios.get(`http://localhost:3000/allTours`)
            .then((response) => {
                setTours(response.data);
                setFilteredTours(response.data); // Initialize filteredTours with full tour list
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


    const onSearch = (value) => {
        if (value.trim() === "") {
            setFilteredTours(tours); // Reset to full list if search is cleared
        } else {
            const searchValue = value.trim().toLowerCase();
            const filtered = tours.filter((tour) =>
                langState === 'ar'
                    ? tour.ar.title.toLowerCase().includes(searchValue)
                    : tour.en.title.toLowerCase().includes(searchValue)
            );
            setFilteredTours(filtered);
        }
        setCurrentPage(0);
    };

    const displayTours = filteredTours.slice(currentPage * toursPerPage, (currentPage + 1) * toursPerPage);

    let content;
    if (isLoading) {
        content =
            <Loading />
    } else if (filteredTours.length === 0) {
        content = <h3 className='text-center h-full dark:text-white py-48'> {<FormattedMessage id='noToursToShow' />}</h3>;
    } else {
        content =
            <div className='custom_container flex flex-col h-full gap-4'>
                <p>{<FormattedMessage id='chooseYourTour' />}</p>
                <h2 className='dark:!text-white'>{<FormattedMessage id='ourTours' />}</h2>
                <div className='md:grid md:grid-cols-12 items-stretch flex-wrap'>
                    {displayTours.map((tour, index) => (
                        <Tour key={`tour__item__${index}`} col={index === 0 || index === displayTours.length - 1 ? "md:col-span-8" : "md:col-span-4"} tour={tour} />
                    ))}
                </div>
                <div className='flex justify-center items-center'>
                    <ReactPaginate
                        previousLabel={<FormattedMessage id='previous' />}
                        nextLabel={<FormattedMessage id='next' />}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={Math.ceil(filteredTours.length / toursPerPage)}
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
        <div id='tourDetails' className='dark:!bg-[#0c112b] flex flex-col items-center justify-center '>
            <div className='form w-full'>
                <SearchForm onSearch={onSearch} />
            </div>
            {content}
        </div>
    );
}