import './TestominalSlide.scss';
import { MdOutlineStar } from "react-icons/md";

export default function TesominalSlide({ review }) {
    return (
        <div id='TesominalSlide' className='w-100 h-full'>
            <div className='revSlide'>
                <p className='my-5 dark:!text-white'>{review?.comment}
                </p>
                <div className='flex gap-3 justify-start items-center'>
                    <img src={review?.img} alt="client image" width={65} height={65} />
                    <div>
                        <div className='flex gap-2'>
                            <span><MdOutlineStar className='text-yellow-400' size={10} /></span>
                            <span><MdOutlineStar className='text-yellow-400' size={10} /></span>
                            <span><MdOutlineStar className='text-yellow-400' size={10} /></span>
                            <span><MdOutlineStar className='text-yellow-400' size={10} /></span>
                            <span><MdOutlineStar className='text-yellow-400' size={10} /></span>
                        </div>
                        <h5 className='dark:!text-white'>{review?.name}</h5>
                        <p className='dark:!text-white'>Guest Review</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
