import './CategoryTours.scss';
import Header from '../../Components/Header/Header';
import FlipCard from '../../Components/FlipCard/FlipCard';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { SearchForm } from '../../Components/SearchForm/SearchForm';
import { FormattedMessage } from 'react-intl';
import { useRecoilState } from 'recoil';
import { $lang } from '../../Store';

export default function CategoryTours() {
    const [langState] = useRecoilState($lang);
    let { category } = useParams()
    const [categoryTours, setCategoryTours] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const toursPerPage = 6;
    console.log(category)
    if (langState == 'ar') {
        if (category == 'hajj') {
            category = 'حج'
        }
    }
    console.log(category)
    useEffect(() => {
        setIsLoading(true);
        axios.get(`http://localhost:3000/allTours?category=${category}`)
            .then((response) => {
                console.log(response.data)
                let lang;
                let data = response.data.filter((item) => {
                    lang = langState == 'ar' ? item.ar.category == category : item.en.category == category
                    return lang;
                })
                setCategoryTours(data);
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

    const displayTours = categoryTours.slice(currentPage * toursPerPage, (currentPage + 1) * toursPerPage);

    let content;
    if (isLoading) {
        content =
            <div className='flex items-center justify-center'>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>;
    } else if (categoryTours.length === 0) {
        content = <h3 className='text-center dark:text-white h-full'>{<FormattedMessage id='noToursToShow' />}</h3>;
    } else {
        content = <div className='justify-center items-start  md:grid flex-col'>
            <div className='form '>
                <SearchForm />
            </div>
            <div className="md:grid md:grid-cols-3  gap-11 justify-center items-center mt-16">
                {
                    displayTours.map((tour, index) => {
                        return (
                            <FlipCard key={`tour__item__${index}`} tour={tour[`${langState}`]} id={tour.id} />
                        )
                    })
                }
            </div>

        </div>;
    }

    return (
        <div id='categoryTours' className='dark:!bg-[#0e1b31]'>
            <Header title={<FormattedMessage id='popularTours' />} heading={<span className='capitalize !text-white'>{category}</span>} span={<FormattedMessage id='tour' />} bgImg={`url('../assets/${category}Bg.jpg')`} />
            {content}
            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={Math.ceil(categoryTours.length / toursPerPage)}
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
    )
}
