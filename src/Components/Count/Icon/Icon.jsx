import Counter from '../../Counter/Counter';
import './Icon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Icon({ icon, number, title, value }) {
    return (
        <div id='icon'>
            <div className='flex flex-col justify-center items-center'>
                <div className='borderIcon'>
                    <div className='iconDiv flex justify-center items-center'>
                        <FontAwesomeIcon icon={icon} className='icon '></FontAwesomeIcon>
                    </div>
                </div>
                <h4 className=''><Counter initialCount={0} targetValue={number} incrementValue={value} updateInterval={30} duration={2000} /></h4>
                <h5 className=''>{title}</h5>
            </div>
        </div>
    )
}
