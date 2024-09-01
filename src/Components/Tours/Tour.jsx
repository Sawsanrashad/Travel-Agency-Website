import Trip from './Component/Trip';
import './Tour.scss';
import egypt from '../../assets/images/egypt.jpg';
import abroad from '../../assets/images/abroad.jpg';
import hajj from '../../assets/images/hajj.jpg';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export default function Tour() {
    return (
        <div id='tour' className='dark:!bg-[#0e1b31]'>
            <div className='custom_container '>
                <p><FormattedMessage id='chooseYourPlace' /></p>
                <h2 className='dark:!text-white mb-4'><FormattedMessage id='tourCategories' />  </h2>
                <div className='md:grid md:grid-cols-3 gap-3'>
                    <Link to={`category/egypt`}>
                        <Trip image={egypt} title={<FormattedMessage id='egyptCategoryTour' />} />
                    </Link>
                    <Link to={`category/abroad`}>
                        <Trip image={abroad} title={<FormattedMessage id='abroadCategoryTour' />} />
                    </Link>
                    <Link to={`category/hajj`}>
                        <Trip image={hajj} title={<FormattedMessage id='hajjCategoryTour' />} />
                    </Link>
                </div>
            </div>
        </div>
    )
}
