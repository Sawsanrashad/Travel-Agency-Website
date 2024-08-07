import './Tour.scss';
import { CiClock2 } from "react-icons/ci";
import { SlUser } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { $lang } from '../../../Store';

export default function Tour({ col, tour }) {
    const [langState] = useRecoilState($lang);
    return (
        <div className={` ${col ? col : ""}`} id='tourDiv'>
            <div className='h-full'>
                <Link to={`/tour/${tour.id}`}>
                    <div className='overflow-hidden tab h-full relative rounded-md'>
                        <div className='absolute box flex justify-center items-center'>
                            <h6>${tour[`${langState}`].price}</h6>
                        </div>
                        <img src={tour[`${langState}`].imageUrl} alt="" className='w-full h-full object-cover rounded-md' />
                        <div className='overlay w-full h-full absolute top-0 rounded-md'></div>
                        <div className='text absolute'>
                            <h4>{tour[`${langState}`].title.length > 18 ? tour[`${langState}`].title.slice(0, 18) + " ..." : tour[`${langState}`].title}</h4>
                        </div>
                        <div className='hidden grid-cols-1 md:grid-cols-3 detail absolute gap-4 justify-start items-end'>
                            <div className='flex justify-center items-center gap-2'>
                                <span><CiClock2 size={25} /></span>
                                <span>{tour[`${langState}`].duration}</span>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <span> <SlUser size={25} /></span>
                                <span>12+</span>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <span> <CiLocationOn size={25} /></span>
                                <span>{tour[`${langState}`].title.slice(0, 15) + "..."}</span>
                            </div>

                        </div>
                    </div>
                </Link>
            </div>

        </div>
    )
}
