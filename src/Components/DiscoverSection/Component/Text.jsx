import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Text.scss';
import { faCheck, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';

export default function Text({ hint, title, description1, description2, description3, description4 }) {
    return (
        <div id='text1' >
            <div>
                <h6>{title}</h6>
                <h2 className='dark:!text-white'>{hint}</h2>
                <p className='dark:!text-white'>{description1}</p>
                <p className='dark:!text-white'>{description2}</p>
                <p className='dark:!text-white'>
                    {description3}
                </p>
                <p className='dark:!text-white'>{description4}</p>
                <div className='flex flex-col gap-3 mt-5'>
                    <div className='flex justify-start items-center gap-3'>
                        <div className='checkDiv flex justify-center items-center'>
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                        <p className='dark:!text-white'><FormattedMessage id='yearsOfExperinece' /></p>
                    </div>
                    <div className='flex justify-start items-center gap-3'>
                        <div className='checkDiv flex justify-center items-center'>
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                        <p className='dark:!text-white'><FormattedMessage id='tourDestinationNumber' /></p>
                    </div>
                    <div className='flex justify-start items-center gap-3'>
                        <FontAwesomeIcon icon={faPhoneVolume} className='phoneIcon' />
                        <div>
                            <p className='dark:!text-white'><FormattedMessage id='forInformation' /></p>
                            <a href='tel:+12031230606"'>855 333 4444</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
