
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Popular.scss';
import TextDiv from './component/TextDiv';
import Slide from '../Destination/Components/Slide';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FormattedMessage } from 'react-intl';
import { useRecoilState } from 'recoil';
import { $lang } from '../../Store';
import { Loading } from '../Loading/Loading';
export default function Popular() {
    const [abroadTours, setAbroadTours] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [langState] = useRecoilState($lang);
    useEffect(() => {
        setIsLoading(true)
        axios.get(`http://localhost:3000/allTours`)
            .then((response) => {
                setAbroadTours(response.data.filter((item) => item[`${langState}`]?.category == 'abroad'));
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
    } else if (!abroadTours) {
        content = <h3 className='text-center h-full dark:text-white'> {<FormattedMessage id='noToursToShow' />}</h3 >
    } else {
        content = <div className='custom_container flex flex-col gap-5 py-3'>
            <div>
                <p>{<FormattedMessage id='mostPopular' />}</p>
                <h2 className='dark:!text-white'>{<><FormattedMessage id='popularToursAbroad' /> </>}</h2>
            </div>
            <div className='justify-between items-stretch md:grid  md:grid-cols-12 md:gap-3'>
                <div className='md:col-span-5 py-5'>
                    <TextDiv place={<FormattedMessage id='europeTours' />} />
                </div>
                <div className='md:col-span-7'>
                    <Swiper
                        className='h-full'
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination, A11y]}
                        spaceBetween={30}
                        slidesPerView={2}
                        pagination={{ clickable: true }}
                    >

                        {
                            abroadTours.slice(0, 6).map((tour, index) => {
                                return (
                                    <SwiperSlide key={`tour__item__${index}`}>
                                        <Slide col={"h-[480px]"} tour={tour} />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>

        </div>
    }
    return (
        <div id='popular' className='dark:!bg-[#0e1b31]'>
            {content}
        </div >
    )
}
