import React from 'react';
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import { TbMoodSad } from "react-icons/tb";
import './RateStars.css'
export const RateStars = ({ rate }) => {
    let fullStars = Math.floor(rate);
    const halfStar = rate - fullStars;
    const starElements = [];
    fullStars = fullStars > 5 ? 5 : fullStars
    for (let i = 0; i < fullStars; i++) {
        starElements.push(<span className='starColor' key={`full-star-${i}`}><FaStar /></span>);
    }

    if (halfStar > 0) {
        starElements.push(
            <span className='starColor' key={`half-star`}>
                <FaStarHalf />
            </span>
        );
    }

    return (
        <div className='flex items-center'>
            {starElements.length > 0 ? starElements : <span><TbMoodSad /></span>}
        </div>
    );
};