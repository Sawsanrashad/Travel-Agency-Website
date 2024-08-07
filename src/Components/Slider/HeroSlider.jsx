
import { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'animate.css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';
import { GoArrowDown } from "react-icons/go";
import './HeroSlider.scss';
import HeroSwiperSlide from './component/HeroSwiperSlide';
import { useEffect } from 'react';

export default function HeroSlider({ bgImg, scrollToRef }) {
    return (
        <div id='heroSlider'>
            <div className='w-full h-full relative flex justify-center'>
                <img src={bgImg} alt="bg img" className='w-full h-full object-cover' />
                <HeroSwiperSlide scrollToRef={scrollToRef} />
            </div>
        </div>
    )
}
