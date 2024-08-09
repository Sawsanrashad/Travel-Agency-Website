import './PopularDestination.scss';
import italy from '../../assets/images/italy1.jpg';
import greece from '../../assets/images/greece1.jpg';
import france from '../../assets/images/1.jpg';
import maldives from '../../assets/images/maldives1-1.jpg';
import canada from '../../assets/images/canada1-1.jpg';
import dubai from '../../assets/images/dubai1.jpg';
import Slide from '../Destination/Components/Slide';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PopularDestination() {
    const [tours, setTours] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        axios.get(`http://localhost:3000/allTours`)
            .then((response) => {
                setTours(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            }).finally(() => {
                setIsLoading(false);
            });
    }, []);
    let content;
    if (isLoading) {
        content =
            <div className='flex items-center justify-center'>
                <div class="spinner-border text-primary" role="status">
                    <span className="visually-hidden dark:text-white">Loading...</span>
                </div>
            </div>
    } else if (!tours) {
        content = <h3 className='text-center'> No Tours To Show</h3 >

    } else {
        content =
            <div className='custom_container flex justify-center items-stretch gap-5 flex-wrap'>
                {tours.map((tour, index) => {
                    return (
                        <div className='col-12 col-lg-3'>
                            <Slide col={'slideHight'} key={`tour__item__${index}`} tour={tour} />
                        </div>
                    )
                })}
            </div>
    }
    return (
        <div id='PopularDestination'>
            {content}
        </div>
    )
}
