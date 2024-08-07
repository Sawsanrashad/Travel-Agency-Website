import './Card.scss';
import img1 from '../../../assets/images/why1.jpg';
import img2 from '../../../assets/images/why2.jpg';
import img3 from '../../../assets/images/why3.jpg';
import img4 from '../../../assets/images/why4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
export default function Card() {
    return (
        <div id='card'>
            <div className='col-12 flex flex-col w-full imgCard gap-4'>
                <img src={img1} alt="" className='w-full' />
                <div className='iconDiv flex justify-center items-center '>
                    <FontAwesomeIcon icon={faUser} className='icon'></FontAwesomeIcon>
                </div>
                <h4 className='mb-3'>2000+ our world guide</h4>
            </div>
        </div>
    )
}
