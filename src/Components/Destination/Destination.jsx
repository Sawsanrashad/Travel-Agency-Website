import { Pagination, A11y } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './Destination.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from './Components/Slide';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FormattedMessage } from 'react-intl';
import { Loading } from '../Loading/Loading';
export default function Destination() {
    const [tours, setTours] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        axios.get(`http://localhost:3000/allTours`)
            .then((response) => {
                setTours(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            }).finally(() => {
                setIsLoading(false);
            });
    }, []);
    let content;
    if (isLoading) {
        content =
            <Loading />
    } else if (!tours) {
        content = <h3 className='text-center h-full dark:text-white'> {<FormattedMessage id='noToursToShow' />}</h3 >

    } else {
        content =
            <div className='custom_container'>
                <p><FormattedMessage id='topDestination' /></p>
                <h2 className='dark:!text-white'><FormattedMessage id='popularDestinationsInEgypt' /> </h2>
                <Swiper
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination, A11y]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    {
                        tours.slice(0, 6).map((tour, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Slide key={`tour__item__${index}`} tour={tour} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
    }
    return (
        <div id='destination' className='dark:!bg-[#0e1b31]'>
            {content}
        </div>
    )
}
