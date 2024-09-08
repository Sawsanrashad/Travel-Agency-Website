import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { $bookedTourInfo, $loggedIn } from '../../../Store';
import './UserTransaction.scss'
import axios from 'axios';
import { Loading } from '../../Loading/Loading';
import { FormattedMessage } from 'react-intl';

export const UserTransactions = () => {
    const [loggedState, setLoggedState] = useRecoilState($loggedIn);
    const [bookedTours, setBookedTours] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`http://localhost:3000/bookedTours`)
            .then((response) => {
                setBookedTours(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    let email = loggedState ? loggedState.email : null;
    let userTours = bookedTours.filter((item) => item.clientEmail === email);

    if (isLoading) {
        return <Loading />;
    } else if (userTours.length > 0) {
        return (
            <div className='userTransaction'>
                <h2 className='dark:!text-white font-medium md:text-xl '>{<FormattedMessage id='myBookedTours' />}</h2>
                {userTours.map((item, idx) => {
                    return (
                        <div key={idx} className='flex flex-col gap-6 mb-5'>
                            <div className='flex gap-4 items-center '>
                                <h2 className='dark:!text-white font-medium md:text-xl '>{idx + 1}</h2>
                                <img width={100} height={100} className='rounded-md' src={item.tourImage} alt="tourImage" />
                            </div>
                            <div className='flex gap-7 items-center ' >
                                <h3 className='dark:!text-white font-medium md:text-lg '>{<FormattedMessage id='tourTitle' />}: </h3>
                                <span className='font-medium md:text-lg'>{item.tourTitle}</span>
                            </div>
                            <div className='flex gap-7 items-center ' >
                                <h3 className='dark:!text-white font-medium md:text-lg '>{<FormattedMessage id='tourPrice' />}: </h3>
                                <span className='md:text-lg  font-medium'>${item.tourPrice}</span>
                            </div>
                            <div className='flex gap-7 items-center ' >
                                <h3 className='dark:!text-white font-medium md:text-lg '> {<FormattedMessage id='bookedDate' />}: </h3>
                                <span className='md:text-lg  font-medium'>{item.bookedDate}</span>
                            </div>
                            <div className='flex gap-7 items-center' >
                                <h3 className='dark:!text-white font-medium md:text-lg '> {<FormattedMessage id='paymentDate' />}: </h3>
                                <span className='md:text-lg  font-medium'>{item.paymentDate}</span>
                            </div>
                            <div className='separator bg-slate-300'></div>
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return (
            <h2 className='userTransaction dark:text-white font-medium px-2 md:px-7 py-3 md:text-xl'>
                {<FormattedMessage id='noTransactionsYet' />}
            </h2>
        );
    }
}
