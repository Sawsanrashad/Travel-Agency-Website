import { useParams } from 'react-router-dom';
import './SingleTour.scss';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Loading } from '../../Components/Loading/Loading';
import { TourContent } from './TourContent/TourContent';
import { FormattedMessage } from 'react-intl';
import { useRecoilState } from 'recoil';
import { $lang } from '../../Store';


export default function SingleTour() {
    const [langState] = useRecoilState($lang);
    let { id } = useParams();
    const [tour, setTour] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        axios.get(`http://localhost:3000/allTours/${id}`)
            .then((response) => {
                setTour(response.data);
                console.log(response.data)
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            }).finally(() => {
                setIsLoading(false);
            });
    }, [id]);

    let content;
    if (isLoading) {
        content = <Loading />
    } else if (!tour) {
        content =
            <div className=' flex justify-center items-center'>
                <h3 className='text-center py-48 font-medium dark:text-white'> {<FormattedMessage id='noToursToShow' />}</h3 >
            </div>
    } else {
        content =
            <TourContent tour={tour[`${langState}`]} />
    }

    return (
        <div id='singleTour' className='dark:!bg-[#0e1b31]'>
            {content}
        </div>
    )
}
