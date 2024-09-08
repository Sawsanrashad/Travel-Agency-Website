import React, { useEffect, useState } from 'react';
import './CategoryTours.scss';
import Header from '../../Components/Header/Header';
import FlipCard from '../../Components/FlipCard/FlipCard';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { SearchForm } from '../../Components/SearchForm/SearchForm';
import { FormattedMessage } from 'react-intl';
import { useRecoilState } from 'recoil';
import { $lang } from '../../Store';
import { Loading } from '../../Components/Loading/Loading';

export default function CategoryTours() {
    const [langState] = useRecoilState($lang);
    let { category } = useParams();
    const [categoryTours, setCategoryTours] = useState([]);
    const [filteredTours, setFilteredTours] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const toursPerPage = 6;
    if (langState === 'ar') {
        if (category == 'hajj') {
            category = 'حج';
        } else if (category == 'egypt') {
            console.log("object")
            category = 'مصر';
        } else {
            category = 'خارجية';
        }
    }
    console.log(category)
    useEffect(() => {
        setIsLoading(true);
        axios.get(`http://localhost:3000/allTours`)
            .then((response) => {
                const data = response?.data?.filter((item) => {
                    return langState === 'ar' ? item.ar.category === category : item.en.category === category;
                });
                console.log(data);
                setCategoryTours(data);
                setFilteredTours(data);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [category, langState]);


    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };
    const onSearch = (value) => {
        console.log(value)
        if (value == "") {
            console.log("object")
            setFilteredTours(categoryTours);
        } else {
            const searchValue = value.toLowerCase();
            const filtered = categoryTours.filter((tour) =>
                langState === 'ar'
                    ? tour.ar.title.toLowerCase().includes(searchValue)
                    : tour.en.title.toLowerCase().includes(searchValue)
            );
            setFilteredTours(filtered);
        }
    };

    const displayTours = filteredTours.slice(currentPage * toursPerPage, (currentPage + 1) * toursPerPage);

    let content;
    if (isLoading) {
        content = (
            <Loading />
        );
    } else if (filteredTours.length === 0) {
        content = <h3 className='text-center dark:text-white h-full'>{<FormattedMessage id='noToursToShow' />}</h3>;
    } else {
        content = (
            <div className='justify-center items-start  md:grid flex-col'>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:px-5 gap-11 justify-center items-center mt-16">
                    {displayTours.map((tour, index) => (
                        <FlipCard key={`tour__item__${index}`} tour={tour[`${langState}`]} id={tour.id} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div id='categoryTours' className='dark:!bg-[#0e1b31] py-4 '>
            <Header title={<FormattedMessage id='popularTours' />} heading={<span className='capitalize !text-white'>{category}</span>} bgImg={`url('../assets/${category}Bg.jpg')`} />
            <div className='form'>
                <SearchForm onSearch={onSearch} />
            </div>
            {content}
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