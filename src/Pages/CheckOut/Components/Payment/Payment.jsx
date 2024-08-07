import React from 'react'
import './Payment.scss';
import { PaymentForm } from './PaymentForm/PaymentForm';
import card from '../../../../assets/images/card.png';
import tourImg from '../../../../assets/images/venice.jpg';
import Header from '../../../../Components/Header/Header';

export const Payment = () => {

    return (
        <div id='payment' className='col-12 h-full'>
            <Header title={"THE BEST TRAVEL AGENCY"} heading={"CONFIRM"} span={"BOOKING"} bgImg={`url('./assets/bg.jpg')`} />
            <div className='custom_container w-full md:grid md:grid-cols-2 flex-wrap justify-between items-center py-3'>
                <div className='flex flex-col paymentDiv gap-3'>
                    <h3>Payment</h3>
                    <div className='separator w-full'></div>
                    <div className='flex justify-between items-center'>
                        <img src={tourImg} alt="Tour Img" className='bookedTourImage rounded-md object-cover' />
                        <h5>Title</h5>
                        <h5>price</h5>
                    </div>
                    <div className='separator w-full'></div>
                    <h5>Pay With Card</h5>

                    <PaymentForm />
                </div>
                <div className=''>
                    <img src={card} alt="card image" className='w-full h-full' />
                </div>
            </div>
        </div>
    )
}
