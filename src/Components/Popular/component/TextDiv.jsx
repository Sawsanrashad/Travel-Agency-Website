import './TextDiv.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Location from './Location';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
export default function TextDiv({ place }) {
    return (
        <div id='text' className='h-full'>
            <div className='flex flex-col gap-4'>
                <h3 className='dark:!text-white'>{place}</h3>
                <p className='dark:!text-white'>{<FormattedMessage id='europeTourDescription' />}
                </p>
                <div className='flex-wrap justify-between md:grid grid-cols-3'>
                    <div>
                        <Location address={<FormattedMessage id='roma' />} />
                    </div>
                    <div>
                        <Location address={<FormattedMessage id='italy' />} />
                    </div>
                    <div>
                        <Location address={<FormattedMessage id='venice' />} />
                    </div>
                    <div>
                        <Location address={<FormattedMessage id='milano' />} />
                    </div>
                    <div>
                        <Location address={<FormattedMessage id='perugia' />} />
                    </div>
                    <div>
                        <Location address={<FormattedMessage id='parma' />} />
                    </div>
                </div>
                <Link to={'/tours'}>
                    <button className='w-full md:w-auto'>{<FormattedMessage id='allToursButton' />} <FontAwesomeIcon icon={faArrowRight} /></button>
                </Link>
            </div>
        </div>
    )
}
