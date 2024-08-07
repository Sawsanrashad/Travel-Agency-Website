import './FlipCard.scss';
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import ReactFlipCard from 'reactjs-flip-card';


export default function FlipCard({ col, tour, id }) {
    console.log(id)
    const styles = {
        card: { background: '#F4F5F8', height: "500px", borderRadius: "15px", }
    }
    return (
        <div id='flipCard' className={`h-full custom_container ${col ? col : ""}`}>
            <ReactFlipCard
                containerCss={"w-full"}
                frontStyle={styles.card}
                backStyle={styles.card}
                frontComponent={
                    <div className='h-full'>
                        <div className='tab relative h-full '>
                            <img src={tour.imageUrl} alt="travelImage" className='w-full h-full object-cover rounded-md' />
                            <div className=' absolute box text-center '>
                                <span>${tour.price}</span>
                            </div>
                            <div className='absolute py-1 tourInfo'>
                                <h3>{tour.title.length > 14 ? tour.title.slice(0, 18) + " ..." : tour.title}</h3>
                            </div>
                        </div>
                    </div>}
                backComponent={
                    <div className='flex flex-col gap-3 justify-center items-start h-full px-3 dark:!bg-slate-900'>
                        <h4 className='dark:!text-white'>{tour.title}</h4>
                        <h6 className='dark:!text-white'>${tour.price}</h6>
                        <p className='dark:!text-white'>{tour.description}</p>
                        <div className='justify-between items-center md:grid md:grid-cols-2 flex-wrap'>
                            <div className='flex  gap-3'>
                                <span><CiClock2 size={25} className='icon' /></span>
                                <p className='dark:!text-white'>{tour.duration}</p>
                            </div>
                            <div className='flex gap-3'>
                                <span><CiLocationOn size={25} className='icon' /></span>
                                <p className='dark:!text-white'>{tour.location}</p>
                            </div>
                            <div className='flex gap-3 '>
                                <span><LuUser size={25} className='icon' /></span>
                                <p className='dark:!text-white'>10</p>
                            </div>
                            <div className='flex  gap-3'>
                                <span><CiFaceSmile size={25} className='icon' /></span>
                                <p className='dark:!text-white'>9.5 {<FormattedMessage id='superb' />}</p>
                            </div>
                        </div>
                        <Link to={`/tour/${id}`} className='flex flex-col text-decoration-none'>
                            <p className='dark:!text-white'>{<FormattedMessage id='tourDetails' />}</p>
                            <div className='borderr'></div>
                        </Link>

                    </div>}
            />
        </div>
    )
}
