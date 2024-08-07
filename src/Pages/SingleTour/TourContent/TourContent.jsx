import React, { useEffect, useRef, useState } from 'react'
import { PlanTable } from '../PlanTable/PlanTable';
import { RateStars } from '../../../Components/RateStars/RateStars';
import { BookingForm } from '../BookingForm/BookingForm';
import axios from 'axios';
import { TourData } from '../TourData/TourData';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import HeroSlider from '../../../Components/Slider/HeroSlider';
import Accordion from '../../../Components/Accordion/Accordion';
import { FormattedMessage } from 'react-intl';
export const TourContent = ({ tour }) => {
    const [reviews, setReviews] = useState([]);
    const scrollToRef = useRef();

    useEffect(() => {
        if (tour) {
            axios.get(`http://localhost:3000/reviews?tourid=${tour.id}`)
                .then((response) => {
                    setReviews(response.data);
                })
                .catch((error) => {
                    console.error("There was an error fetching the data!", error);
                })
        }
    }, [tour]);

    const renderItinerary = () => {
        if (tour.itinerary.length > 1 && tour.itinerary[0].day) {
            return (
                <div className="accordion" id="accordionExample">
                    {tour.itinerary.map((item, index) => (
                        <Accordion key={index} className={'mb-3'} title={`Day ${item.day}`} body={item.description} />
                    ))}
                </div>
            );
        }
        else {
            return (
                <ul>
                    {tour.inclusions.map((itinerary, index) => (
                        <li key={index}>
                            {itinerary} <br />
                        </li>
                    ))}
                </ul>
            );
        }
    };
    return (
        <div ref={scrollToRef}>
            <HeroSlider bgImg={tour.imageUrl} />
            <div className='content custom_container md:grid md:grid-cols-12 justify-between flex-wrap p-3 gap-8 '>
                <div className='md:grid md:col-span-7  flex-col gap-3'>
                    <TourData tour={tour} />
                    <PlanTable tour={tour} />
                    <h3 className=' dark:!text-white'>{<FormattedMessage id='tourPlan' />}</h3>
                    <h5 className='dark:!text-white'>
                        {renderItinerary()}
                    </h5>
                    <ReviewForm reviews={reviews} setReviews={setReviews} />
                    <div>
                        <h3 className='text-3xl dark:!text-white'>{<FormattedMessage id='reviews' />}</h3>
                        {reviews.length ?
                            reviews.map((review, index) => {
                                return (
                                    <div key={index} className='flex items-center gap-4 border rounded-md p-3 my-3 dark:!border-slate-800'>
                                        <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" className='rounded-full h-[60px] w-[60px]' alt="userImg" />
                                        <div className="data">
                                            <h6 className=' dark:!text-white'>{review.name}</h6>
                                            <RateStars rate={review.rating} />
                                            <p className='px-1 mt-3  dark:!text-white'>{review.comment}</p>
                                        </div>
                                    </div>
                                )
                            }) : <h6 className=' dark:!text-white'>{<FormattedMessage id='noReviewsYet' />}</h6>}
                    </div>
                </div>
                <div className='md:grid md:col-span-5 mt-3'>
                    <BookingForm tour={tour} />
                </div>
            </div>
        </div>
    )
}
