
import { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';
import './HeaderSlider.scss';
import HeaderSwiperSlide from './Component/HeaderSwiperSlide';
export default function HeaderSlider() {
    return (
        <div id='HeaderSlider'>
            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
                loop={true}
                autoplay={{
                    delay: 5000,
                    pauseOnMouseEnter: true,
                }}
                spaceBetween={50}
                slidesPerView={1}
                className='en'
                effect={'fade'}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide className='slide1'>
                    <HeaderSwiperSlide />
                </SwiperSlide>
                <SwiperSlide className='slide2'>
                    <HeaderSwiperSlide />
                </SwiperSlide>
                <SwiperSlide className='slide3'>
                    <HeaderSwiperSlide />
                </SwiperSlide>
            </Swiper>


        </div >
    )
}
