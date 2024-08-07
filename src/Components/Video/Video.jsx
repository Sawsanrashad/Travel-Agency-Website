import './Video.scss';
import vid from '../../assets/images/travel-video.mp4';
import gif from '../../assets/images/travel-video.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Video() {
    return (
        <div id='video'>
            <div className='relative'>
                <img src={gif} className='w-full backgroundVideo'></img>
                <div className='caption absolute'>
                    <h3>Costa Victoria Cochin</h3>
                    <div className='flex gap-2 justify-center'>
                        <FontAwesomeIcon icon={faLocationDot} className='icon' />
                        <p>Maldives</p>
                        <FontAwesomeIcon icon={faClock} className='icon' />
                        <p>4 Days + 3 Nights</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
