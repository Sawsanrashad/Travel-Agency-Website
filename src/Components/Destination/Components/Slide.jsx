import './Slide.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { $lang } from '../../../Store';
import { FormattedMessage } from 'react-intl';

export default function Slide({ tour, col }) {
    const [langState] = useRecoilState($lang);
    console.log(tour)
    return (
        <div id='slide' className={`${col ? col : "h-full"}`}>
            <div className='tab overflow-hidden relative h-full rounded-md'>
                <img src={tour[`${langState}`]?.imageUrl} alt="" className='w-full h-full rounded-md' />
                <div className='absolute box flex justify-center items-center'>
                    <h6>${tour[`${langState}`]?.price}</h6>
                </div>
                <div className='slideText absolute flex justify-center items-center gap-2 w-full'>
                    <span><CiLocationOn size={30} /></span>
                    <h4>{tour[`${langState}`]?.location}</h4>
                </div>
                <div className='overlay absolute top-0 w-full h-full rounded-md'></div>
                <div className='slideText2 absolute flex justify-between items-center w-full'>
                    <div>
                        <p className='m-0'>{tour[`${langState}`]?.duration}</p>
                    </div>
                    <div>
                        <Link to={`/tour/${tour?.id}`} className='flex justify-center items-center gap-2'>
                            {<FormattedMessage id='explore' />}
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
