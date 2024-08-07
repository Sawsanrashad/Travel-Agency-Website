import './Count.scss';
import bgImg from '../../assets/images/bg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlane, faShip, faTicket } from '@fortawesome/free-solid-svg-icons';
import arrow from '../../assets/images/arrow1.png';
import Icon from './Icon/Icon';
import { FormattedMessage } from 'react-intl';
export default function Count() {
    return (
        <div id='count'>
            <div className='bgimg relative'>
                <div className='overlay w-full h-full'></div>
                <div className='custom_container flex justify-center items-center h-full flex-col lg:flex-row gap-3'>
                    <Icon icon={faPlane} number={600} title={<FormattedMessage id='flightBooking' />} value={8} />
                    <img src={arrow} alt="" className='arrow arrowFlip' />
                    <Icon icon={faHome} number={250} title={<FormattedMessage id='amazingTour' />} value={4} />
                    <img src={arrow} alt="" className='arrow' />
                    <Icon icon={faShip} number={100} title={<FormattedMessage id='cruisesBooking' />} value={1} />
                    <img src={arrow} alt="" className='arrow arrowFlip' />
                    <Icon icon={faTicket} number={100} title={<FormattedMessage id='hotelBooking' />} value={1} />
                </div>
            </div>
        </div>
    )
}
