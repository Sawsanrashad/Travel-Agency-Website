import React from 'react'
import './Payment.scss';
import { PaymentForm } from './PaymentForm/PaymentForm';
import card from '../../../../assets/images/card.png';
import tourImg from '../../../../assets/images/venice.jpg';
import Header from '../../../../Components/Header/Header';
import { FormattedMessage } from 'react-intl';
import { useRecoilState } from 'recoil';
import { $bookedTourInfo } from '../../../../Store';

export const Payment = () => {
    const [bookedTourInfo, setBookedTourInfo] = useRecoilState($bookedTourInfo);
    return (
        <div id='payment' className='col-12 h-full'>
            <Header title={<FormattedMessage id='bestTravelAgency' />} span={<FormattedMessage id='confirmBooking' />} bgImg={`url('./assets/bg.jpg')`} />
            <div className='custom_container w-full md:grid md:grid-cols-2 flex-wrap justify-between items-center py-3'>
                <div className='flex flex-col paymentDiv gap-3'>
                    <h3 className='dark:!text-white'><FormattedMessage id='payment' /></h3>
                    <div className='separator w-full'></div>
                    <div className='flex justify-between items-center'>
                        <img src={bookedTourInfo.tourImage} alt="Tour Img" className='bookedTourImage rounded-md object-cover' />
                        <div className='flex flex-col gap-2'>
                            <h5 className='dark:!text-white'><FormattedMessage id='tourTitle' /></h5>
                            <h5 className='dark:!text-white'>{bookedTourInfo.tourTitle}</h5>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h5 className='dark:!text-white'><FormattedMessage id='tourPrice' /></h5>
                            <h5 className='dark:!text-white'>${bookedTourInfo.tourPrice}</h5>
                        </div>
                    </div>
                    <div className='separator w-full'></div>
                    <h5 className='dark:!text-white'>{<FormattedMessage id='payWithCard' />}</h5>

                    <PaymentForm />
                </div>
                <div className=''>
                    <img src={card} alt="card image" className='w-full h-full' />
                </div>
            </div>
        </div>
    )
}
