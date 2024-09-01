import './Video.scss';
import gif from '../../assets/images/travel-video.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';

export default function Video() {
    return (
        <div id='video'>
            <div className='relative'>
                <img src={gif} className='w-full backgroundVideo'></img>
                <div className='caption absolute'>
                    <h3>{<FormattedMessage id='costaVictoriaCochin'/> }</h3>
                    <div className='flex gap-2 justify-center'>
                        <FontAwesomeIcon icon={faLocationDot} className='icon' />
                        <p>{<FormattedMessage id='maldives' />}</p>
                        <FontAwesomeIcon icon={faClock} className='icon' />
                        <p>{<FormattedMessage id='days4nights' />}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
