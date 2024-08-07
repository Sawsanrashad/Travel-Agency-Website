
import './Testominals.scss';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FiPhoneCall } from "react-icons/fi";
import TesominalSlide from './component/TesominalSlide';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FormattedMessage } from 'react-intl';

export default function Testominals() {
    const [reviews, setReviews] = useState(null);
    console.log(reviews)
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        axios.get(`http://localhost:3000/reviews`)
            .then((response) => {
                setReviews(response.data);
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
            <div className='flex items-center justify-center'>
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
    } else if (!reviews) {
        content = <h3 className='text-center'> {<FormattedMessage id='noReviewsYet' />}</h3 >

    } else {
        content =
            <div className=' reviewDiv bg-white flex flex-col gap-5 !px-11 w-full mt-5 md:mt-0 dark:!bg-[#0c112b] '>
                <div>
                    <p>{<FormattedMessage id='testominals' />}</p>
                    <h3 className='dark:!text-white'>{<FormattedMessage id='travelerReview' />}</h3>
                </div>
                <div className='mb-2'>
                    <Swiper
                        modules={[Pagination, A11y]}
                        spaceBetween={30}
                        loop={true}
                        slidesPerView={1}
                        className='pb-8 md:py-[50px]'
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {
                            reviews.slice(0, 4).map((review, index) => {
                                return (
                                    <SwiperSlide>
                                        <TesominalSlide key={`review__item__${index}`} review={review} />
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                </div>
            </div>
    }
    return (
        <div id='Testominals' className=' relative'>
            <div className='overlay w-full h-full absolute top-0'></div>
            <div className='custom_container md:grid md:grid-cols-12 justify-between items-center h-full'>
                <div className=' flex-col md:grid md:col-span-7 justify-center items-start gap-3 z-10'>
                    <h4 className='md:max-w-[65%] dark:!text-[#121c2a]'>{<FormattedMessage id='websiteDescription' />}</h4>
                    <div className='flex gap-2 items-center'>
                        <span><FiPhoneCall className='text-white dark:!text-[#121c2a]' size={40} /></span>
                        <div>
                            <h6 className='dark:!text-[#121c2a]'>{<FormattedMessage id='callNow' />}</h6>
                            <a href='tel:+12031230606"' className='dark:!text-[#121c2a]'>855 333 4444</a>
                        </div>
                    </div>
                </div>
                <div className='z-10 md:col-span-5 px-8'>
                    {content}
                </div>
            </div>

        </div>
    )
}
