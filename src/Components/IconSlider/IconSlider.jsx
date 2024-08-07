
import './IconSlider.scss';
import { A11y, Autoplay } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import s1 from '../../assets/images/1.png';
import s2 from '../../assets/images/2.png';
import s3 from '../../assets/images/3.png';
import s4 from '../../assets/images/4.png';
export default function IconSlider() {
    return (
        <div id='IconSlider' className='dark:!bg-[#0e1b31]'>
            <div className='w-full'>
                <div className='custom_container'>
                    <div className='md:w-[50%]'>
                        <Swiper
                            breakpoints={{
                                320: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[A11y, Autoplay]}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                pauseOnMouseEnter: true,
                            }}
                            slidesPerView={4}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide>
                                <img src={s1} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={s2} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={s3} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={s4} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={s1} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={s2} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={s3} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={s4} alt="" />
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>
            </div>
        </div>
    )
}
