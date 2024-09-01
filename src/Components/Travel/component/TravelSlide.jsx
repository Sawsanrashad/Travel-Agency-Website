import './TravelSlide.scss';
import s1 from '../../../assets/images/s1.jpg';
import { FormattedMessage } from 'react-intl';
export default function TravelSlide({ blog }) {
    return (
        <div id='TravelSlide' className='h-full'>
            <div className='tab relative h-full'>
                <div className='overflow-hidden rounded-md'>
                    <img src={blog?.image} alt="travelImage" className='w-full' />
                </div>
                <div className=' px-2 absolute box text-center py-1 rounded-md'>
                    {/* <span>AUG</span> */}
                    <h6>{blog?.date}</h6>
                </div>
                <div className='overlay absolute w-full h-full top-0 rounded-md'></div>
                <div className='text absolute bg-white w-[75%] p-3 border rounded-md dark:!bg-[#0e1b31]'>
                    <p className='dark:text-cyan-400' >{<FormattedMessage id='bestTravelAgency' />}</p>
                    <h4 className='dark:!text-white'>{blog.title}</h4>
                </div>
            </div>

        </div>
    )
}
