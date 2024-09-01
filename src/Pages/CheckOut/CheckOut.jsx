import React from 'react'
import './CheckOut.scss';
import { Payment } from './Components/Payment/Payment';
import { LoggedIn } from '../../Components/LoggedIn/LoggedIn';
export const CheckOut = () => {
    return (
        <LoggedIn>
            <div>
                <Payment />
            </div>
        </LoggedIn>
    )
}
