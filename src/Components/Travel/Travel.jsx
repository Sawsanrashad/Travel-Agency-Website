import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Travel.scss';
import TravelSlide from './component/TravelSlide';
import { FormattedMessage } from 'react-intl';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { $lang } from '../../Store';

export default function Travel() {
    const [langState] = useRecoilState($lang);
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        axios.get(`http://localhost:3000/blogs`)
            .then((response) => {
                setBlogs(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            }).finally(() => {
                setIsLoading(false);
            });
    }, []);
    console.log(setBlogs)

    let content;
    if (isLoading) {
        content =
            <div className='flex items-center justify-center'>
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
    } else if (!blogs) {
        content = <h3 className='text-center'> {<FormattedMessage id='noToursToShow' />}</h3 >
    } else {
        content = <div className='custom_container'>
            <p>{<FormattedMessage id='travelBlog' />}</p>
            <h2>{<><FormattedMessage id='travelExperience' /> </>}</h2>
            <Swiper

                modules={[Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
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
                loop={true}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    blogs.map((blog, index) => {
                        return (
                            <SwiperSlide key={index} className='h-full'>
                                <Link to={`/blog/${blog?.id}`}>
                                    <TravelSlide blog={blog[`${langState}`]} />
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    }
    return (
        <div id='travel' className='dark:!bg-[#0c112b]  relative overflow-hidden'>
            <div className='size-[300px] hidden dark:block absolute -top-[90px] -left-[70px] animate'></div>
            <div className='size-[300px] hidden dark:block absolute -bottom-[10px] -right-[50px] animate'></div>
            {content}
        </div>
    )
}
