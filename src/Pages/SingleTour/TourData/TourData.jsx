import React from 'react'
import { CiClock2, CiLocationOn, CiFaceSmile } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { FormattedMessage } from 'react-intl';
export const TourData = ({ tour }) => {
    return (
        <>
            <p className=' dark:!text-white'> {<FormattedMessage id='travelAgency' />}</p>
            <h2 className=' dark:!text-white'>{tour.title}</h2>
            <h3 className=' dark:!text-white'>{<FormattedMessage id='information' />}</h3>
            <h6 className=' dark:!text-white'>{tour.description}</h6>
            <div className='iconsDiv md:grid grid-cols-2 justify-between items-center col-12 gap-3'>
                <div className='flex  gap-3'>
                    <span className=' dark:!text-white'><CiClock2 size={25} className='icon' /></span>
                    <p className=' dark:!text-white'>{tour.duration}</p>
                </div>
                <div className='flex gap-3'>
                    <span className=' dark:!text-white'><CiLocationOn size={25} className='icon' /></span>
                    <p className=' dark:!text-white'>{tour.location}</p>
                </div>
                <div className='flex gap-3 '>
                    <span className=' dark:!text-white'><LuUser size={25} className='icon' /></span>
                    <p className=' dark:!text-white'>{tour.groupSize}</p>
                </div>
                <div className='flex  gap-3'>
                    <span className=' dark:!text-white'><CiFaceSmile size={25} className='icon' /></span>
                    <p className=' dark:!text-white'>9.5 {<FormattedMessage id='superb' />}</p>
                </div>
            </div>
            <h6 className=' dark:!text-white'>{tour.historicalInfo}</h6>
        </>
    )
}
