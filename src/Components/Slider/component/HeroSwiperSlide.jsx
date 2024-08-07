import React, { useRef } from 'react'
import { GoArrowDown } from "react-icons/go";
import './HeroSwiperSlide.scss'
import { useEffect } from 'react';

export default function HeroSwiperSlide({ scrollToRef }) {

    const ScrollDown = () => {
        window.scrollTo({
            top: 386,
            behavior: 'smooth'
        });
    };

    return (
        <div id='HeroSwiperSlide' className='absolute bottom-0 cursor-pointer'>
            <div className='arrow flex justify-center items-center' onClick={ScrollDown}>
                <span style={{ color: "white" }}><GoArrowDown size={25} /></span>
            </div>
        </div>
    )
}
