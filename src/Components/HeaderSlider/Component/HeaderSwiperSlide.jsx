import React from 'react'
import './HeaderSwiperSlide.scss';
import { FormattedMessage, useIntl } from 'react-intl';
export default function HeaderSwiperSlide() {

    return (
        <div id='HeaderSwiperSlide'>
            <div className=' w-full h-full flex justify-center items-center flex-col gap-4'>
                <div className='overlay dark:!bg-[#0000007b] absolute top-0 w-full h-full'></div>
                <p className=''><FormattedMessage id='comeTravelWithUs' /></p>
                <h1 className='animate__animated animate__fadeInUp '><FormattedMessage id='exploreTheWorldWithBonVoyage' /></h1>

            </div>
        </div>
    )
}
