import './Location.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
export default function Location({ address }) {
    return (
        <div id='location'>
            <div className='flex gap-2 justify-start items-center'>
                <FontAwesomeIcon icon={faLocationDot} className='locIcon' />
                <a className='dark:!text-white'>{address}</a>
            </div>
        </div>
    )
}
